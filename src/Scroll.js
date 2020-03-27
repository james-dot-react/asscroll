import Store from './Store'
import E from './E'
import Scrollbar from './Scrollbar'
import Observer from './Observer'
import normalizeWheel from './normalizeWheel'

export default class Scroll {

    constructor( options = {} ) {

        this.options = options
        this.scrollbarCheck = this.options.customScrollbar

        E.bindAll(this, ['onScroll', 'onRAF', 'onResize'])

        this.observer = new Observer()
        this.scrollContainer = document.querySelector( this.options.element )
        this.scrollTargets = this.scrollContainer.querySelectorAll('[data-assection]') || [this.scrollContainer.firstElementChild]
        this.scrollPos = this.smoothScrollPos = this.prevScrollPos = this.maxScroll = 0
        this.scrolling = false
        this.syncScroll = false
        this.deltaY = 0
        this.wheeling = false

        if( !Store.isTouch ) {
            this.buildMap()
            this.updateMap()
            this.smoothSetup()
        } else {
            this.options.customScrollbar = false
        }

        // enable smooth scroll if mouse is detected
        E.on(Store.events.TOUCHMOUSE, () => {
            this.options.customScrollbar = this.scrollbarCheck
            this.smoothSetup()
            this.onResize()
        })

    }

    smoothSetup() {

        Object.assign(this.scrollContainer.style, {
            position: 'fixed',
            top: '0px',
            left: '0px',
            width: '100%',
            height: '100%',
            contain: 'content'
        })

        for (let i = 0; i < this.scrollTargets.length; i++) {
            this.scrollTargets[i].style.willChange = 'transform'
        }

        if( this.options.customScrollbar ) {
            this.scrollbar = new Scrollbar(this)
        }

        E.on(Store.events.RAF, this.onRAF)
        E.on(Store.events.RESIZE, this.onResize)

    }

    onScroll({ event }) {

        if( !this.scrolling ) {
            this.options.customScrollbar && this.scrollbar.show()
            this.scrolling = true
        }

        if( !Store.isTouch && event.type === 'wheel' ) {

            event.preventDefault()

            this.deltaY = normalizeWheel(event).pixelY
            this.wheeling = true
            this.syncScroll = true
            
            return

        } else {
            this.scrollPos = -window.scrollY
            if( Store.isTouch ) {
                this.smoothScrollPos = this.scrollPos
            }
            E.emit(Store.events.COMBOSCROLL, this.scrollPos)
        }

    }

    onRAF() {

        if( !this.enabled ) return

        if( this.wheeling ) {
            this.scrollPos += this.deltaY * -1
            this.clamp()
            this.wheeling = false
            E.emit(Store.events.COMBOSCROLL, this.scrollPos)
        }

        if( Math.abs( this.scrollPos - this.smoothScrollPos ) < 0.5 ) {
            this.smoothScrollPos = this.scrollPos
            if( this.syncScroll ) {
                window.scrollTo(0, -this.scrollPos)
                this.syncScroll = false
            }
            if( this.scrolling ) {
                this.options.customScrollbar && this.scrollbar.hide()
                this.scrolling = false
            }
        } else {
            this.smoothScrollPos += ( this.scrollPos - this.smoothScrollPos ) * this.options.ease
        }

        this.map.style.transform = `translate3d(0px, ${ this.smoothScrollPos }px, 0px)`

        for (let i = 0; i < this.observer.visibleEls.length; i++) {
            if( !this.observer.visibleEls[i] ) continue
            this.observer.visibleEls[i].linkedEl.style.transform = `translate3d(0px, ${ this.smoothScrollPos }px, 0px)`
        }

        this.options.customScrollbar && this.scrollbar.transform()

        E.emit(Store.events.EXTERNALRAF, { scrollPos: this.scrollPos, smoothScrollPos: this.smoothScrollPos })

    }

    enable( restore = false, reset = false, newTargets = false ) {

        if( this.enabled ) return
        this.enabled = true

        if( newTargets ) {
            this.scrollTargets = newTargets
            this.updateMap()
        }

        if( Store.isTouch ) {
            Store.body.style.removeProperty('height')
            if( reset ) {
                window.scrollTo(0, 0)
            }
        } else {
            if( reset ) {
                this.scrollPos = this.smoothScrollPos = 0
                for (let i = 0; i < this.scrollTargets.length; i++) {
                    this.scrollTargets[i].style.transform = `translate3d(0px, 0px, 0px)`
                }
            }
            this.onResize()
        }

        if( restore ) {
            this.scrollPos = this.prevScrollPos
            window.scrollTo( 0, -this.prevScrollPos )
        }
        
        E.on(Store.events.WHEEL, this.onScroll)
        E.on(Store.events.SCROLL, this.onScroll)

    }

    disable() {

        if( !this.enabled ) return
        this.enabled = false

        E.off(Store.events.WHEEL, this.onScroll)
        E.off(Store.events.SCROLL, this.onScroll)

        this.prevScrollPos = this.scrollPos
        Store.body.style.height = '0px'

    }

    clamp() {
        this.scrollPos = Math.max(Math.min(this.scrollPos, 0), this.maxScroll)
    }

    scrollTo( y ) {
        this.scrollPos = y
        this.clamp()
        this.syncScroll = true
        E.emit(Store.events.COMBOSCROLL, this.scrollPos)
    }

    onResize() {

        this.pageHeight = this.scrollContainer.scrollHeight
        this.maxScroll = this.pageHeight > Store.windowSize.h ? -(this.pageHeight - Store.windowSize.h) : 0
        Store.body.style.height = this.pageHeight + 'px'
        this.options.customScrollbar && this.scrollbar.onResize()

        this.resizeMap()

    }

    buildMap() {

        this.map = document.createElement('div')

        Object.assign(this.map.style, {
            position: 'fixed',
            top: '0px',
            left: '0px',
            width: '100%',
            height: '100%',
            zIndex: '-1',
            pointerEvents: 'none',
            visibility: 'hidden'
        })

        document.body.appendChild(this.map)

    }

    updateMap() {

        this.observer.reset()

        this.map.textContent = ''

        const fragment = document.createDocumentFragment()

        for (let i = 0; i < this.scrollTargets.length; i++) {
            const el = document.createElement('div')
            fragment.appendChild(el)
            this.observer.els.push({ el: el, linkedEl: this.scrollTargets[i] })
            this.observer.observe(el)
        }

        this.map.appendChild(fragment)

    }

    resizeMap() {

        for (let i = 0; i < this.scrollTargets.length; i++) {
            this.scrollTargets[i].style.transform = 'translate3d(0px, 0px, 0px)'
            const { width, height, top, left } = this.scrollTargets[i].getBoundingClientRect()
            Object.assign(this.observer.els[i].el.style, {
                position: 'absolute',
                top: top + 'px',
                left: left + 'px',
                width: width + 'px',
                height: height + 'px'
            })
            this.scrollTargets[i].style.transform = `translate3d(0px, ${this.smoothScrollPos}px, 0px)`
        }

    }

}