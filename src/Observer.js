import 'intersection-observer'

export default class Observer extends IntersectionObserver {

    constructor( options = {} ) {

        const handler = (...args) => this.handler(...args)

        super( handler, options )

        this.els = []
        this.visibleEls = []

    }

    handler = ( entries, observer ) => {

        for( let i = 0; i < entries.length; i++ ) {

            for( let x = 0; x < this.els.length; x++ ) {

                if( this.els[x].el === entries[i].target ) {

                    if( entries[i].isIntersecting ) {
                        this.visibleEls[x] = this.els[x]
                    } else {
                        this.visibleEls[x] = false
                    }
                }
            }
        }

    }

    reset = () => {
        this.disconnect()
        this.els = []
        this.visibleEls = []
    }

}