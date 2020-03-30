(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("ASScroll", [], factory);
	else if(typeof exports === 'object')
		exports["ASScroll"] = factory();
	else
		root["ASScroll"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./demo/index.scss":
/*!*************************!*\
  !*** ./demo/index.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/@unseenco/e/dist/e.min.js":
/*!************************************************!*\
  !*** ./node_modules/@unseenco/e/dist/e.min.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)}([function(e,t,n){e.exports=n(2)},function(e,t){if("function"!=typeof window.WeakSet){var n=Date.now()%1e9;window.WeakSet=window.WeakSet||function(e){this.name="__st"+(1e9*Math.random()>>>0)+n+++"__",e&&e.forEach&&e.forEach(this.add,this)};var r=window.WeakSet.prototype;r.add=function(e){var t=this.name;return e[t]||Object.defineProperty(e,t,{value:!0,writable:!0}),this},r.delete=function(e){return!!e[this.name]&&(e[this.name]=void 0,!0)},r.has=function(e){return!!e[this.name]}}e.exports=window.WeakSet},function(e,t,n){"use strict";n.r(t);n(1);function r(){if(!(this instanceof r))return new r;this.size=0,this.uid=0,this.selectors=[],this.indexes=Object.create(this.indexes),this.activeIndexes=[]}var i=window.document.documentElement,o=i.matches||i.webkitMatchesSelector||i.mozMatchesSelector||i.oMatchesSelector||i.msMatchesSelector;r.prototype.matchesSelector=function(e,t){return o.call(e,t)},r.prototype.querySelectorAll=function(e,t){return t.querySelectorAll(e)},r.prototype.indexes=[];var a=/^#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;r.prototype.indexes.push({name:"ID",selector:function(e){var t;if(t=e.match(a))return t[0].slice(1)},element:function(e){if(e.id)return[e.id]}});var s=/^\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;r.prototype.indexes.push({name:"CLASS",selector:function(e){var t;if(t=e.match(s))return t[0].slice(1)},element:function(e){var t=e.className;if(t){if("string"==typeof t)return t.split(/\s/);if("object"==typeof t&&"baseVal"in t)return t.baseVal.split(/\s/)}}});var u,c=/^((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;r.prototype.indexes.push({name:"TAG",selector:function(e){var t;if(t=e.match(c))return t[0].toUpperCase()},element:function(e){return[e.nodeName.toUpperCase()]}}),r.prototype.indexes.default={name:"UNIVERSAL",selector:function(){return!0},element:function(){return[!0]}},u="function"==typeof window.Map?window.Map:function(){function e(){this.map={}}return e.prototype.get=function(e){return this.map[e+" "]},e.prototype.set=function(e,t){this.map[e+" "]=t},e}();var f=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g;function l(e,t){var n,r,i,o,a,s,u=(e=e.slice(0).concat(e.default)).length,c=t,l=[];do{if(f.exec(""),(i=f.exec(c))&&(c=i[3],i[2]||!c))for(n=0;n<u;n++)if(a=(s=e[n]).selector(i[1])){for(r=l.length,o=!1;r--;)if(l[r].index===s&&l[r].key===a){o=!0;break}o||l.push({index:s,key:a});break}}while(i);return l}function d(e,t){var n,r,i;for(n=0,r=e.length;n<r;n++)if(i=e[n],t.isPrototypeOf(i))return i}function h(e,t){return e.id-t.id}function p(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){var n=t.get(e);if(!n)throw new TypeError("attempted to get private field on non-instance");return n.get?n.get.call(e):n.value}function m(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n}r.prototype.logDefaultIndexUsed=function(){},r.prototype.add=function(e,t){var n,r,i,o,a,s,c,f,h=this.activeIndexes,p=this.selectors;if("string"==typeof e){for(n={id:this.uid++,selector:e,data:t},c=l(this.indexes,e),r=0;r<c.length;r++)o=(f=c[r]).key,(a=d(h,i=f.index))||((a=Object.create(i)).map=new u,h.push(a)),i===this.indexes.default&&this.logDefaultIndexUsed(n),(s=a.map.get(o))||(s=[],a.map.set(o,s)),s.push(n);this.size++,p.push(e)}},r.prototype.remove=function(e,t){if("string"==typeof e){var n,r,i,o,a,s,u,c,f=this.activeIndexes,d={},h=1===arguments.length;for(n=l(this.indexes,e),i=0;i<n.length;i++)for(r=n[i],o=f.length;o--;)if(s=f[o],r.index.isPrototypeOf(s)){if(u=s.map.get(r.key))for(a=u.length;a--;)(c=u[a]).selector!==e||!h&&c.data!==t||(u.splice(a,1),d[c.id]=!0);break}this.size-=Object.keys(d).length}},r.prototype.queryAll=function(e){if(!this.selectors.length)return[];var t,n,r,i,o,a,s,u,c={},f=[],l=this.querySelectorAll(this.selectors.join(", "),e);for(t=0,r=l.length;t<r;t++)for(o=l[t],n=0,i=(a=this.matches(o)).length;n<i;n++)c[(u=a[n]).id]?s=c[u.id]:(s={id:u.id,selector:u.selector,data:u.data,elements:[]},c[u.id]=s,f.push(s)),s.elements.push(o);return f.sort(h)},r.prototype.matches=function(e){if(!e)return[];var t,n,r,i,o,a,s,u,c,f,l,d=this.activeIndexes,p={},v=[];for(t=0,i=d.length;t<i;t++)if(u=(s=d[t]).element(e))for(n=0,o=u.length;n<o;n++)if(c=s.map.get(u[n]))for(r=0,a=c.length;r<a;r++)!p[l=(f=c[r]).id]&&this.matchesSelector(e,f.selector)&&(p[l]=!0,v.push(f));return v.sort(h)},n.d(t,"default",(function(){return g}));var g=function(){function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),E.add(this),O.add(this),S.add(this),k.add(this),x.add(this),w.set(this,{writable:!0,value:{}}),b.set(this,{writable:!0,value:{}}),j.set(this,{writable:!0,value:function(e){var n=m(t,O,W).call(t,y(t,w)[e.type],e.target);if(n.length)for(var r=0;r<n.length;r++)for(var i=0;i<n[r].stack.length;i++)m(t,E,F).call(t,e,n[r].delegatedTarget),n[r].stack[i].data(e)}})}var t,n,i;return t=e,(n=[{key:"bindAll",value:function(e,t){void 0===t&&(t=Object.getOwnPropertyNames(Object.getPrototypeOf(e)));for(var n=0;n<t.length;n++)e[t[n]]=e[t[n]].bind(e)}},{key:"on",value:function(e,t,n){if("function"==typeof t&&void 0===n)return m(this,S,T).call(this,e),void y(this,b)[e].push(t);if(t.nodeType&&1===t.nodeType)t.addEventListener(e,n);else{t=m(this,k,M).call(this,t);for(var r=0;r<t.length;r++)t[r].addEventListener(e,n)}}},{key:"delegate",value:function(e,t,n){var i=y(this,w)[e];void 0===i&&(i=new r,y(this,w)[e]=i,document.addEventListener(e,y(this,j),!0)),i.add(t,n)}},{key:"off",value:function(e,t,n){var r=y(this,w)[e];if(void 0!==t)if("function"!=typeof t){if(void 0!==r&&(r.remove(t,n),0===r.size))return delete y(this,w)[e],void document.removeEventListener(e,y(this,j));if(void 0===t.removeEventListener){t=m(this,k,M).call(this,t);for(var i=0;i<t.length;i++)t[i].removeEventListener(e,n)}else t.removeEventListener(e,n)}else{m(this,S,T).call(this,e);for(var o=0;o<y(this,b)[e].length;o++)y(this,b)[e][o]===t&&y(this,b)[e].splice(o,1)}else y(this,b)[e]=[]}},{key:"emit",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];m(this,x,A).call(this,e,n)}}])&&v(t.prototype,n),i&&v(t,i),e}(),w=new WeakMap,b=new WeakMap,x=new WeakSet,k=new WeakSet,S=new WeakSet,j=new WeakMap,O=new WeakSet,E=new WeakSet,A=function(e,t){if(y(this,b)[e])for(var n=0;n<y(this,b)[e].length;n++){var r;(r=y(this,b)[e])[n].apply(r,p(t))}},M=function(e){return"string"==typeof e?document.querySelectorAll(e):e},T=function(e){void 0===y(this,b)[e]&&(y(this,b)[e]=[])},W=function(e,t){var n=[],r=t;do{if(1!==r.nodeType)break;var i=e.matches(r);i.length&&n.push({delegatedTarget:r,stack:i})}while(r=r.parentElement);return n},F=function(e,t){Object.defineProperty(e,"delegatedTarget",{configurable:!0,enumerable:!0,value:t})}}])}));

/***/ }),

/***/ "./node_modules/intersection-observer/intersection-observer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/intersection-observer/intersection-observer.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the W3C SOFTWARE AND DOCUMENT NOTICE AND LICENSE.
 *
 *  https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 */
(function() {
'use strict';

// Exit early if we're not running in a browser.
if (typeof window !== 'object') {
  return;
}

// Exit early if all IntersectionObserver and IntersectionObserverEntry
// features are natively supported.
if ('IntersectionObserver' in window &&
    'IntersectionObserverEntry' in window &&
    'intersectionRatio' in window.IntersectionObserverEntry.prototype) {

  // Minimal polyfill for Edge 15's lack of `isIntersecting`
  // See: https://github.com/w3c/IntersectionObserver/issues/211
  if (!('isIntersecting' in window.IntersectionObserverEntry.prototype)) {
    Object.defineProperty(window.IntersectionObserverEntry.prototype,
      'isIntersecting', {
      get: function () {
        return this.intersectionRatio > 0;
      }
    });
  }
  return;
}


/**
 * A local reference to the document.
 */
var document = window.document;


/**
 * An IntersectionObserver registry. This registry exists to hold a strong
 * reference to IntersectionObserver instances currently observing a target
 * element. Without this registry, instances without another reference may be
 * garbage collected.
 */
var registry = [];


/**
 * Creates the global IntersectionObserverEntry constructor.
 * https://w3c.github.io/IntersectionObserver/#intersection-observer-entry
 * @param {Object} entry A dictionary of instance properties.
 * @constructor
 */
function IntersectionObserverEntry(entry) {
  this.time = entry.time;
  this.target = entry.target;
  this.rootBounds = entry.rootBounds;
  this.boundingClientRect = entry.boundingClientRect;
  this.intersectionRect = entry.intersectionRect || getEmptyRect();
  this.isIntersecting = !!entry.intersectionRect;

  // Calculates the intersection ratio.
  var targetRect = this.boundingClientRect;
  var targetArea = targetRect.width * targetRect.height;
  var intersectionRect = this.intersectionRect;
  var intersectionArea = intersectionRect.width * intersectionRect.height;

  // Sets intersection ratio.
  if (targetArea) {
    // Round the intersection ratio to avoid floating point math issues:
    // https://github.com/w3c/IntersectionObserver/issues/324
    this.intersectionRatio = Number((intersectionArea / targetArea).toFixed(4));
  } else {
    // If area is zero and is intersecting, sets to 1, otherwise to 0
    this.intersectionRatio = this.isIntersecting ? 1 : 0;
  }
}


/**
 * Creates the global IntersectionObserver constructor.
 * https://w3c.github.io/IntersectionObserver/#intersection-observer-interface
 * @param {Function} callback The function to be invoked after intersection
 *     changes have queued. The function is not invoked if the queue has
 *     been emptied by calling the `takeRecords` method.
 * @param {Object=} opt_options Optional configuration options.
 * @constructor
 */
function IntersectionObserver(callback, opt_options) {

  var options = opt_options || {};

  if (typeof callback != 'function') {
    throw new Error('callback must be a function');
  }

  if (options.root && options.root.nodeType != 1) {
    throw new Error('root must be an Element');
  }

  // Binds and throttles `this._checkForIntersections`.
  this._checkForIntersections = throttle(
      this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT);

  // Private properties.
  this._callback = callback;
  this._observationTargets = [];
  this._queuedEntries = [];
  this._rootMarginValues = this._parseRootMargin(options.rootMargin);

  // Public properties.
  this.thresholds = this._initThresholds(options.threshold);
  this.root = options.root || null;
  this.rootMargin = this._rootMarginValues.map(function(margin) {
    return margin.value + margin.unit;
  }).join(' ');
}


/**
 * The minimum interval within which the document will be checked for
 * intersection changes.
 */
IntersectionObserver.prototype.THROTTLE_TIMEOUT = 100;


/**
 * The frequency in which the polyfill polls for intersection changes.
 * this can be updated on a per instance basis and must be set prior to
 * calling `observe` on the first target.
 */
IntersectionObserver.prototype.POLL_INTERVAL = null;

/**
 * Use a mutation observer on the root element
 * to detect intersection changes.
 */
IntersectionObserver.prototype.USE_MUTATION_OBSERVER = true;


/**
 * Starts observing a target element for intersection changes based on
 * the thresholds values.
 * @param {Element} target The DOM element to observe.
 */
IntersectionObserver.prototype.observe = function(target) {
  var isTargetAlreadyObserved = this._observationTargets.some(function(item) {
    return item.element == target;
  });

  if (isTargetAlreadyObserved) {
    return;
  }

  if (!(target && target.nodeType == 1)) {
    throw new Error('target must be an Element');
  }

  this._registerInstance();
  this._observationTargets.push({element: target, entry: null});
  this._monitorIntersections();
  this._checkForIntersections();
};


/**
 * Stops observing a target element for intersection changes.
 * @param {Element} target The DOM element to observe.
 */
IntersectionObserver.prototype.unobserve = function(target) {
  this._observationTargets =
      this._observationTargets.filter(function(item) {

    return item.element != target;
  });
  if (!this._observationTargets.length) {
    this._unmonitorIntersections();
    this._unregisterInstance();
  }
};


/**
 * Stops observing all target elements for intersection changes.
 */
IntersectionObserver.prototype.disconnect = function() {
  this._observationTargets = [];
  this._unmonitorIntersections();
  this._unregisterInstance();
};


/**
 * Returns any queue entries that have not yet been reported to the
 * callback and clears the queue. This can be used in conjunction with the
 * callback to obtain the absolute most up-to-date intersection information.
 * @return {Array} The currently queued entries.
 */
IntersectionObserver.prototype.takeRecords = function() {
  var records = this._queuedEntries.slice();
  this._queuedEntries = [];
  return records;
};


/**
 * Accepts the threshold value from the user configuration object and
 * returns a sorted array of unique threshold values. If a value is not
 * between 0 and 1 and error is thrown.
 * @private
 * @param {Array|number=} opt_threshold An optional threshold value or
 *     a list of threshold values, defaulting to [0].
 * @return {Array} A sorted list of unique and valid threshold values.
 */
IntersectionObserver.prototype._initThresholds = function(opt_threshold) {
  var threshold = opt_threshold || [0];
  if (!Array.isArray(threshold)) threshold = [threshold];

  return threshold.sort().filter(function(t, i, a) {
    if (typeof t != 'number' || isNaN(t) || t < 0 || t > 1) {
      throw new Error('threshold must be a number between 0 and 1 inclusively');
    }
    return t !== a[i - 1];
  });
};


/**
 * Accepts the rootMargin value from the user configuration object
 * and returns an array of the four margin values as an object containing
 * the value and unit properties. If any of the values are not properly
 * formatted or use a unit other than px or %, and error is thrown.
 * @private
 * @param {string=} opt_rootMargin An optional rootMargin value,
 *     defaulting to '0px'.
 * @return {Array<Object>} An array of margin objects with the keys
 *     value and unit.
 */
IntersectionObserver.prototype._parseRootMargin = function(opt_rootMargin) {
  var marginString = opt_rootMargin || '0px';
  var margins = marginString.split(/\s+/).map(function(margin) {
    var parts = /^(-?\d*\.?\d+)(px|%)$/.exec(margin);
    if (!parts) {
      throw new Error('rootMargin must be specified in pixels or percent');
    }
    return {value: parseFloat(parts[1]), unit: parts[2]};
  });

  // Handles shorthand.
  margins[1] = margins[1] || margins[0];
  margins[2] = margins[2] || margins[0];
  margins[3] = margins[3] || margins[1];

  return margins;
};


/**
 * Starts polling for intersection changes if the polling is not already
 * happening, and if the page's visibility state is visible.
 * @private
 */
IntersectionObserver.prototype._monitorIntersections = function() {
  if (!this._monitoringIntersections) {
    this._monitoringIntersections = true;

    // If a poll interval is set, use polling instead of listening to
    // resize and scroll events or DOM mutations.
    if (this.POLL_INTERVAL) {
      this._monitoringInterval = setInterval(
          this._checkForIntersections, this.POLL_INTERVAL);
    }
    else {
      addEvent(window, 'resize', this._checkForIntersections, true);
      addEvent(document, 'scroll', this._checkForIntersections, true);

      if (this.USE_MUTATION_OBSERVER && 'MutationObserver' in window) {
        this._domObserver = new MutationObserver(this._checkForIntersections);
        this._domObserver.observe(document, {
          attributes: true,
          childList: true,
          characterData: true,
          subtree: true
        });
      }
    }
  }
};


/**
 * Stops polling for intersection changes.
 * @private
 */
IntersectionObserver.prototype._unmonitorIntersections = function() {
  if (this._monitoringIntersections) {
    this._monitoringIntersections = false;

    clearInterval(this._monitoringInterval);
    this._monitoringInterval = null;

    removeEvent(window, 'resize', this._checkForIntersections, true);
    removeEvent(document, 'scroll', this._checkForIntersections, true);

    if (this._domObserver) {
      this._domObserver.disconnect();
      this._domObserver = null;
    }
  }
};


/**
 * Scans each observation target for intersection changes and adds them
 * to the internal entries queue. If new entries are found, it
 * schedules the callback to be invoked.
 * @private
 */
IntersectionObserver.prototype._checkForIntersections = function() {
  var rootIsInDom = this._rootIsInDom();
  var rootRect = rootIsInDom ? this._getRootRect() : getEmptyRect();

  this._observationTargets.forEach(function(item) {
    var target = item.element;
    var targetRect = getBoundingClientRect(target);
    var rootContainsTarget = this._rootContainsTarget(target);
    var oldEntry = item.entry;
    var intersectionRect = rootIsInDom && rootContainsTarget &&
        this._computeTargetAndRootIntersection(target, rootRect);

    var newEntry = item.entry = new IntersectionObserverEntry({
      time: now(),
      target: target,
      boundingClientRect: targetRect,
      rootBounds: rootRect,
      intersectionRect: intersectionRect
    });

    if (!oldEntry) {
      this._queuedEntries.push(newEntry);
    } else if (rootIsInDom && rootContainsTarget) {
      // If the new entry intersection ratio has crossed any of the
      // thresholds, add a new entry.
      if (this._hasCrossedThreshold(oldEntry, newEntry)) {
        this._queuedEntries.push(newEntry);
      }
    } else {
      // If the root is not in the DOM or target is not contained within
      // root but the previous entry for this target had an intersection,
      // add a new record indicating removal.
      if (oldEntry && oldEntry.isIntersecting) {
        this._queuedEntries.push(newEntry);
      }
    }
  }, this);

  if (this._queuedEntries.length) {
    this._callback(this.takeRecords(), this);
  }
};


/**
 * Accepts a target and root rect computes the intersection between then
 * following the algorithm in the spec.
 * TODO(philipwalton): at this time clip-path is not considered.
 * https://w3c.github.io/IntersectionObserver/#calculate-intersection-rect-algo
 * @param {Element} target The target DOM element
 * @param {Object} rootRect The bounding rect of the root after being
 *     expanded by the rootMargin value.
 * @return {?Object} The final intersection rect object or undefined if no
 *     intersection is found.
 * @private
 */
IntersectionObserver.prototype._computeTargetAndRootIntersection =
    function(target, rootRect) {

  // If the element isn't displayed, an intersection can't happen.
  if (window.getComputedStyle(target).display == 'none') return;

  var targetRect = getBoundingClientRect(target);
  var intersectionRect = targetRect;
  var parent = getParentNode(target);
  var atRoot = false;

  while (!atRoot) {
    var parentRect = null;
    var parentComputedStyle = parent.nodeType == 1 ?
        window.getComputedStyle(parent) : {};

    // If the parent isn't displayed, an intersection can't happen.
    if (parentComputedStyle.display == 'none') return;

    if (parent == this.root || parent == document) {
      atRoot = true;
      parentRect = rootRect;
    } else {
      // If the element has a non-visible overflow, and it's not the <body>
      // or <html> element, update the intersection rect.
      // Note: <body> and <html> cannot be clipped to a rect that's not also
      // the document rect, so no need to compute a new intersection.
      if (parent != document.body &&
          parent != document.documentElement &&
          parentComputedStyle.overflow != 'visible') {
        parentRect = getBoundingClientRect(parent);
      }
    }

    // If either of the above conditionals set a new parentRect,
    // calculate new intersection data.
    if (parentRect) {
      intersectionRect = computeRectIntersection(parentRect, intersectionRect);

      if (!intersectionRect) break;
    }
    parent = getParentNode(parent);
  }
  return intersectionRect;
};


/**
 * Returns the root rect after being expanded by the rootMargin value.
 * @return {Object} The expanded root rect.
 * @private
 */
IntersectionObserver.prototype._getRootRect = function() {
  var rootRect;
  if (this.root) {
    rootRect = getBoundingClientRect(this.root);
  } else {
    // Use <html>/<body> instead of window since scroll bars affect size.
    var html = document.documentElement;
    var body = document.body;
    rootRect = {
      top: 0,
      left: 0,
      right: html.clientWidth || body.clientWidth,
      width: html.clientWidth || body.clientWidth,
      bottom: html.clientHeight || body.clientHeight,
      height: html.clientHeight || body.clientHeight
    };
  }
  return this._expandRectByRootMargin(rootRect);
};


/**
 * Accepts a rect and expands it by the rootMargin value.
 * @param {Object} rect The rect object to expand.
 * @return {Object} The expanded rect.
 * @private
 */
IntersectionObserver.prototype._expandRectByRootMargin = function(rect) {
  var margins = this._rootMarginValues.map(function(margin, i) {
    return margin.unit == 'px' ? margin.value :
        margin.value * (i % 2 ? rect.width : rect.height) / 100;
  });
  var newRect = {
    top: rect.top - margins[0],
    right: rect.right + margins[1],
    bottom: rect.bottom + margins[2],
    left: rect.left - margins[3]
  };
  newRect.width = newRect.right - newRect.left;
  newRect.height = newRect.bottom - newRect.top;

  return newRect;
};


/**
 * Accepts an old and new entry and returns true if at least one of the
 * threshold values has been crossed.
 * @param {?IntersectionObserverEntry} oldEntry The previous entry for a
 *    particular target element or null if no previous entry exists.
 * @param {IntersectionObserverEntry} newEntry The current entry for a
 *    particular target element.
 * @return {boolean} Returns true if a any threshold has been crossed.
 * @private
 */
IntersectionObserver.prototype._hasCrossedThreshold =
    function(oldEntry, newEntry) {

  // To make comparing easier, an entry that has a ratio of 0
  // but does not actually intersect is given a value of -1
  var oldRatio = oldEntry && oldEntry.isIntersecting ?
      oldEntry.intersectionRatio || 0 : -1;
  var newRatio = newEntry.isIntersecting ?
      newEntry.intersectionRatio || 0 : -1;

  // Ignore unchanged ratios
  if (oldRatio === newRatio) return;

  for (var i = 0; i < this.thresholds.length; i++) {
    var threshold = this.thresholds[i];

    // Return true if an entry matches a threshold or if the new ratio
    // and the old ratio are on the opposite sides of a threshold.
    if (threshold == oldRatio || threshold == newRatio ||
        threshold < oldRatio !== threshold < newRatio) {
      return true;
    }
  }
};


/**
 * Returns whether or not the root element is an element and is in the DOM.
 * @return {boolean} True if the root element is an element and is in the DOM.
 * @private
 */
IntersectionObserver.prototype._rootIsInDom = function() {
  return !this.root || containsDeep(document, this.root);
};


/**
 * Returns whether or not the target element is a child of root.
 * @param {Element} target The target element to check.
 * @return {boolean} True if the target element is a child of root.
 * @private
 */
IntersectionObserver.prototype._rootContainsTarget = function(target) {
  return containsDeep(this.root || document, target);
};


/**
 * Adds the instance to the global IntersectionObserver registry if it isn't
 * already present.
 * @private
 */
IntersectionObserver.prototype._registerInstance = function() {
  if (registry.indexOf(this) < 0) {
    registry.push(this);
  }
};


/**
 * Removes the instance from the global IntersectionObserver registry.
 * @private
 */
IntersectionObserver.prototype._unregisterInstance = function() {
  var index = registry.indexOf(this);
  if (index != -1) registry.splice(index, 1);
};


/**
 * Returns the result of the performance.now() method or null in browsers
 * that don't support the API.
 * @return {number} The elapsed time since the page was requested.
 */
function now() {
  return window.performance && performance.now && performance.now();
}


/**
 * Throttles a function and delays its execution, so it's only called at most
 * once within a given time period.
 * @param {Function} fn The function to throttle.
 * @param {number} timeout The amount of time that must pass before the
 *     function can be called again.
 * @return {Function} The throttled function.
 */
function throttle(fn, timeout) {
  var timer = null;
  return function () {
    if (!timer) {
      timer = setTimeout(function() {
        fn();
        timer = null;
      }, timeout);
    }
  };
}


/**
 * Adds an event handler to a DOM node ensuring cross-browser compatibility.
 * @param {Node} node The DOM node to add the event handler to.
 * @param {string} event The event name.
 * @param {Function} fn The event handler to add.
 * @param {boolean} opt_useCapture Optionally adds the even to the capture
 *     phase. Note: this only works in modern browsers.
 */
function addEvent(node, event, fn, opt_useCapture) {
  if (typeof node.addEventListener == 'function') {
    node.addEventListener(event, fn, opt_useCapture || false);
  }
  else if (typeof node.attachEvent == 'function') {
    node.attachEvent('on' + event, fn);
  }
}


/**
 * Removes a previously added event handler from a DOM node.
 * @param {Node} node The DOM node to remove the event handler from.
 * @param {string} event The event name.
 * @param {Function} fn The event handler to remove.
 * @param {boolean} opt_useCapture If the event handler was added with this
 *     flag set to true, it should be set to true here in order to remove it.
 */
function removeEvent(node, event, fn, opt_useCapture) {
  if (typeof node.removeEventListener == 'function') {
    node.removeEventListener(event, fn, opt_useCapture || false);
  }
  else if (typeof node.detatchEvent == 'function') {
    node.detatchEvent('on' + event, fn);
  }
}


/**
 * Returns the intersection between two rect objects.
 * @param {Object} rect1 The first rect.
 * @param {Object} rect2 The second rect.
 * @return {?Object} The intersection rect or undefined if no intersection
 *     is found.
 */
function computeRectIntersection(rect1, rect2) {
  var top = Math.max(rect1.top, rect2.top);
  var bottom = Math.min(rect1.bottom, rect2.bottom);
  var left = Math.max(rect1.left, rect2.left);
  var right = Math.min(rect1.right, rect2.right);
  var width = right - left;
  var height = bottom - top;

  return (width >= 0 && height >= 0) && {
    top: top,
    bottom: bottom,
    left: left,
    right: right,
    width: width,
    height: height
  };
}


/**
 * Shims the native getBoundingClientRect for compatibility with older IE.
 * @param {Element} el The element whose bounding rect to get.
 * @return {Object} The (possibly shimmed) rect of the element.
 */
function getBoundingClientRect(el) {
  var rect;

  try {
    rect = el.getBoundingClientRect();
  } catch (err) {
    // Ignore Windows 7 IE11 "Unspecified error"
    // https://github.com/w3c/IntersectionObserver/pull/205
  }

  if (!rect) return getEmptyRect();

  // Older IE
  if (!(rect.width && rect.height)) {
    rect = {
      top: rect.top,
      right: rect.right,
      bottom: rect.bottom,
      left: rect.left,
      width: rect.right - rect.left,
      height: rect.bottom - rect.top
    };
  }
  return rect;
}


/**
 * Returns an empty rect object. An empty rect is returned when an element
 * is not in the DOM.
 * @return {Object} The empty rect.
 */
function getEmptyRect() {
  return {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: 0,
    height: 0
  };
}

/**
 * Checks to see if a parent element contains a child element (including inside
 * shadow DOM).
 * @param {Node} parent The parent element.
 * @param {Node} child The child element.
 * @return {boolean} True if the parent node contains the child node.
 */
function containsDeep(parent, child) {
  var node = child;
  while (node) {
    if (node == parent) return true;

    node = getParentNode(node);
  }
  return false;
}


/**
 * Gets the parent node of an element or its host element if the parent node
 * is a shadow root.
 * @param {Node} node The node whose parent to get.
 * @return {Node|null} The parent node or null if no parent exists.
 */
function getParentNode(node) {
  var parent = node.parentNode;

  if (parent && parent.nodeType == 11 && parent.host) {
    // If the parent is a shadow root, return the host element.
    return parent.host;
  }

  if (parent && parent.assignedSlot) {
    // If the parent is distributed in a <slot>, return the parent of a slot.
    return parent.assignedSlot.parentNode;
  }

  return parent;
}


// Exposes the constructors globally.
window.IntersectionObserver = IntersectionObserver;
window.IntersectionObserverEntry = IntersectionObserverEntry;

}());


/***/ }),

/***/ "./node_modules/lodash.debounce/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash.debounce/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = debounce;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/E.js":
/*!******************!*\
  !*** ./src/E.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _unseenco_e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @unseenco/e */ "./node_modules/@unseenco/e/dist/e.min.js");
/* harmony import */ var _unseenco_e__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_unseenco_e__WEBPACK_IMPORTED_MODULE_0__);

var E = new _unseenco_e__WEBPACK_IMPORTED_MODULE_0___default.a();
/* harmony default export */ __webpack_exports__["default"] = (E);

/***/ }),

/***/ "./src/Events.js":
/*!***********************!*\
  !*** ./src/Events.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Events; });
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.debounce */ "./node_modules/lodash.debounce/index.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Store */ "./src/Store.js");
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Store__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _E__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./E */ "./src/E.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Events =
/*#__PURE__*/
function () {
  function Events() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Events);

    this.options = options;
    _E__WEBPACK_IMPORTED_MODULE_2__["default"].bindAll(this, ['onRaf']);
    _Store__WEBPACK_IMPORTED_MODULE_1___default.a.events = {
      RAF: 'RAF',
      EXTERNALRAF: 'ExternalRAF',
      SCROLL: 'Scroll',
      WHEEL: 'Wheel',
      COMBOSCROLL: 'ComboScroll',
      RESIZE: 'Resize',
      TOUCHMOUSE: 'TouchMouse'
    };
    this.addEvents();
  }

  _createClass(Events, [{
    key: "addEvents",
    value: function addEvents() {
      if (!this.options.disableRaf) {
        requestAnimationFrame(this.onRaf);
      }

      if (!this.options.disableResize) {
        window.addEventListener('resize', lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(this.onResize, 150));
      }

      this.onScroll();

      if ('ontouchstart' in document.documentElement) {
        _Store__WEBPACK_IMPORTED_MODULE_1___default.a.isTouch = true; // touch has been detected in the browser, but let's check for a mouse input

        this.detectMouse();
      }
    }
  }, {
    key: "onRaf",
    value: function onRaf() {
      _E__WEBPACK_IMPORTED_MODULE_2__["default"].emit(_Store__WEBPACK_IMPORTED_MODULE_1___default.a.events.RAF);
      if (this.options.disableRaf) return;
      requestAnimationFrame(this.onRaf);
    }
  }, {
    key: "onScroll",
    value: function onScroll() {
      window.addEventListener('wheel', function (e) {
        _E__WEBPACK_IMPORTED_MODULE_2__["default"].emit(_Store__WEBPACK_IMPORTED_MODULE_1___default.a.events.WHEEL, {
          event: e
        });
      }, {
        passive: false
      });
      window.addEventListener('scroll', function (e) {
        _E__WEBPACK_IMPORTED_MODULE_2__["default"].emit(_Store__WEBPACK_IMPORTED_MODULE_1___default.a.events.SCROLL, {
          event: e
        });
      }, {
        passive: true
      });
    }
  }, {
    key: "onResize",
    value: function onResize(windowWidth, windowHeight) {
      _Store__WEBPACK_IMPORTED_MODULE_1___default.a.windowSize.w = windowWidth || window.innerWidth;
      _Store__WEBPACK_IMPORTED_MODULE_1___default.a.windowSize.h = windowHeight || window.innerHeight;
      _E__WEBPACK_IMPORTED_MODULE_2__["default"].emit(_Store__WEBPACK_IMPORTED_MODULE_1___default.a.events.RESIZE);
    }
  }, {
    key: "detectMouse",
    value: function detectMouse() {
      window.addEventListener('mousemove', function detectMouse(e) {
        if (Math.abs(e.movementX) > 0 || Math.abs(e.movementY) > 0) {
          // mouse has moved on touch screen, not just a tap firing mousemove
          _Store__WEBPACK_IMPORTED_MODULE_1___default.a.isTouch = false;
          _E__WEBPACK_IMPORTED_MODULE_2__["default"].emit(_Store__WEBPACK_IMPORTED_MODULE_1___default.a.events.TOUCHMOUSE);
          window.removeEventListener('mousemove', detectMouse);
        }
      });
    }
  }]);

  return Events;
}();



/***/ }),

/***/ "./src/Observer.js":
/*!*************************!*\
  !*** ./src/Observer.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Observer; });
/* harmony import */ var intersection_observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! intersection-observer */ "./node_modules/intersection-observer/intersection-observer.js");
/* harmony import */ var intersection_observer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(intersection_observer__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Observer =
/*#__PURE__*/
function (_IntersectionObserver) {
  _inherits(Observer, _IntersectionObserver);

  function Observer() {
    var _this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Observer);

    var handler = function handler() {
      var _this2;

      return (_this2 = _this).handler.apply(_this2, arguments);
    };

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Observer).call(this, handler, options));

    _defineProperty(_assertThisInitialized(_this), "handler", function (entries, observer) {
      for (var i = 0; i < entries.length; i++) {
        for (var x = 0; x < _this.els.length; x++) {
          if (_this.els[x].el === entries[i].target) {
            if (entries[i].isIntersecting) {
              _this.visibleEls[x] = _this.els[x];
            } else {
              _this.visibleEls[x] = false;
            }
          }
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "reset", function () {
      _this.disconnect();

      _this.els = [];
      _this.visibleEls = [];
    });

    _this.els = [];
    _this.visibleEls = [];
    return _this;
  }

  return Observer;
}(_wrapNativeSuper(IntersectionObserver));



/***/ }),

/***/ "./src/Scroll.js":
/*!***********************!*\
  !*** ./src/Scroll.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Scroll; });
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Store */ "./src/Store.js");
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _E__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./E */ "./src/E.js");
/* harmony import */ var _Scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Scrollbar */ "./src/Scrollbar.js");
/* harmony import */ var _Observer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Observer */ "./src/Observer.js");
/* harmony import */ var _normalizeWheel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./normalizeWheel */ "./src/normalizeWheel.js");
/* harmony import */ var _normalizeWheel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_normalizeWheel__WEBPACK_IMPORTED_MODULE_4__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







var Scroll =
/*#__PURE__*/
function () {
  function Scroll() {
    var _this = this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Scroll);

    this.options = options;
    this.scrollbarCheck = this.options.customScrollbar;
    _E__WEBPACK_IMPORTED_MODULE_1__["default"].bindAll(this, ['onScroll', 'onRAF', 'onResize']);
    this.observer = new _Observer__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.scrollContainer = document.querySelector(this.options.element);
    this.scrollTargets = this.scrollContainer.querySelectorAll('[data-assection]') || [this.scrollContainer.firstElementChild];
    this.scrollPos = this.smoothScrollPos = this.prevScrollPos = this.maxScroll = 0;
    this.scrolling = false;
    this.syncScroll = false;
    this.deltaY = 0;
    this.wheeling = false;

    if (!_Store__WEBPACK_IMPORTED_MODULE_0___default.a.isTouch) {
      this.buildMap();
      this.updateMap();
      this.smoothSetup();
    } else {
      this.options.customScrollbar = false;
    } // enable smooth scroll if mouse is detected


    _E__WEBPACK_IMPORTED_MODULE_1__["default"].on(_Store__WEBPACK_IMPORTED_MODULE_0___default.a.events.TOUCHMOUSE, function () {
      _this.options.customScrollbar = _this.scrollbarCheck;

      _this.smoothSetup();

      _this.onResize();
    });
  }

  _createClass(Scroll, [{
    key: "smoothSetup",
    value: function smoothSetup() {
      Object.assign(this.scrollContainer.style, {
        position: 'fixed',
        top: '0px',
        left: '0px',
        width: '100%',
        height: '100%',
        contain: 'content'
      });

      for (var i = 0; i < this.scrollTargets.length; i++) {
        this.scrollTargets[i].style.willChange = 'transform';
      }

      if (this.options.customScrollbar) {
        this.scrollbar = new _Scrollbar__WEBPACK_IMPORTED_MODULE_2__["default"](this);
      }

      _E__WEBPACK_IMPORTED_MODULE_1__["default"].on(_Store__WEBPACK_IMPORTED_MODULE_0___default.a.events.RAF, this.onRAF);
      _E__WEBPACK_IMPORTED_MODULE_1__["default"].on(_Store__WEBPACK_IMPORTED_MODULE_0___default.a.events.RESIZE, this.onResize);
    }
  }, {
    key: "onScroll",
    value: function onScroll(_ref) {
      var event = _ref.event;

      if (!this.scrolling) {
        this.options.customScrollbar && this.scrollbar.show();
        this.scrolling = true;
      }

      if (!_Store__WEBPACK_IMPORTED_MODULE_0___default.a.isTouch && event.type === 'wheel') {
        event.preventDefault();
        this.deltaY = _normalizeWheel__WEBPACK_IMPORTED_MODULE_4___default()(event).pixelY;
        this.wheeling = true;
        this.syncScroll = true;
        return;
      } else {
        this.scrollPos = -window.scrollY;

        if (_Store__WEBPACK_IMPORTED_MODULE_0___default.a.isTouch) {
          this.smoothScrollPos = this.scrollPos;
        }

        _E__WEBPACK_IMPORTED_MODULE_1__["default"].emit(_Store__WEBPACK_IMPORTED_MODULE_0___default.a.events.COMBOSCROLL, this.scrollPos);
      }
    }
  }, {
    key: "onRAF",
    value: function onRAF() {
      if (!this.enabled) return;

      if (this.wheeling) {
        this.scrollPos += this.deltaY * -1;
        this.clamp();
        this.wheeling = false;
        _E__WEBPACK_IMPORTED_MODULE_1__["default"].emit(_Store__WEBPACK_IMPORTED_MODULE_0___default.a.events.COMBOSCROLL, this.scrollPos);
      }

      if (Math.abs(this.scrollPos - this.smoothScrollPos) < 0.5) {
        this.smoothScrollPos = this.scrollPos;

        if (this.syncScroll) {
          window.scrollTo(0, -this.scrollPos);
          this.syncScroll = false;
        }

        if (this.scrolling) {
          this.options.customScrollbar && this.scrollbar.hide();
          this.scrolling = false;
        }
      } else {
        this.smoothScrollPos += (this.scrollPos - this.smoothScrollPos) * this.options.ease;
      }

      this.map.style.transform = "translate3d(0px, ".concat(this.smoothScrollPos, "px, 0px)");

      for (var i = 0; i < this.observer.visibleEls.length; i++) {
        if (!this.observer.visibleEls[i]) continue;
        this.observer.visibleEls[i].linkedEl.style.transform = "translate3d(0px, ".concat(this.smoothScrollPos, "px, 0px)");
      }

      this.options.customScrollbar && this.scrollbar.transform();
      _E__WEBPACK_IMPORTED_MODULE_1__["default"].emit(_Store__WEBPACK_IMPORTED_MODULE_0___default.a.events.EXTERNALRAF, {
        scrollPos: this.scrollPos,
        smoothScrollPos: this.smoothScrollPos
      });
    }
  }, {
    key: "enable",
    value: function enable() {
      var restore = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var reset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var newTargets = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      if (this.enabled) return;
      this.enabled = true;

      if (newTargets) {
        this.scrollTargets = newTargets;
        this.updateMap();
      }

      if (_Store__WEBPACK_IMPORTED_MODULE_0___default.a.isTouch) {
        _Store__WEBPACK_IMPORTED_MODULE_0___default.a.body.style.removeProperty('height');

        if (reset) {
          window.scrollTo(0, 0);
        }
      } else {
        if (reset) {
          this.scrollPos = this.smoothScrollPos = 0;

          for (var i = 0; i < this.scrollTargets.length; i++) {
            this.scrollTargets[i].style.transform = "translate3d(0px, 0px, 0px)";
          }
        }

        this.onResize();
      }

      if (restore) {
        this.scrollPos = this.prevScrollPos;
        window.scrollTo(0, -this.prevScrollPos);
      }

      _E__WEBPACK_IMPORTED_MODULE_1__["default"].on(_Store__WEBPACK_IMPORTED_MODULE_0___default.a.events.WHEEL, this.onScroll);
      _E__WEBPACK_IMPORTED_MODULE_1__["default"].on(_Store__WEBPACK_IMPORTED_MODULE_0___default.a.events.SCROLL, this.onScroll);
    }
  }, {
    key: "disable",
    value: function disable() {
      if (!this.enabled) return;
      this.enabled = false;
      _E__WEBPACK_IMPORTED_MODULE_1__["default"].off(_Store__WEBPACK_IMPORTED_MODULE_0___default.a.events.WHEEL, this.onScroll);
      _E__WEBPACK_IMPORTED_MODULE_1__["default"].off(_Store__WEBPACK_IMPORTED_MODULE_0___default.a.events.SCROLL, this.onScroll);
      this.prevScrollPos = this.scrollPos;
      _Store__WEBPACK_IMPORTED_MODULE_0___default.a.body.style.height = '0px';
    }
  }, {
    key: "clamp",
    value: function clamp() {
      this.scrollPos = Math.max(Math.min(this.scrollPos, 0), this.maxScroll);
    }
  }, {
    key: "scrollTo",
    value: function scrollTo(y) {
      this.scrollPos = y;
      this.clamp();
      this.syncScroll = true;
      _E__WEBPACK_IMPORTED_MODULE_1__["default"].emit(_Store__WEBPACK_IMPORTED_MODULE_0___default.a.events.COMBOSCROLL, this.scrollPos);
    }
  }, {
    key: "onResize",
    value: function onResize() {
      this.pageHeight = this.scrollContainer.scrollHeight;
      this.maxScroll = this.pageHeight > _Store__WEBPACK_IMPORTED_MODULE_0___default.a.windowSize.h ? -(this.pageHeight - _Store__WEBPACK_IMPORTED_MODULE_0___default.a.windowSize.h) : 0;
      _Store__WEBPACK_IMPORTED_MODULE_0___default.a.body.style.height = this.pageHeight + 'px';
      this.options.customScrollbar && this.scrollbar.onResize();
      this.resizeMap();
    }
  }, {
    key: "buildMap",
    value: function buildMap() {
      this.map = document.createElement('div');
      Object.assign(this.map.style, {
        position: 'fixed',
        top: '0px',
        left: '0px',
        width: '100%',
        height: '100%',
        zIndex: '-1',
        pointerEvents: 'none',
        visibility: 'hidden'
      });
      document.body.appendChild(this.map);
    }
  }, {
    key: "updateMap",
    value: function updateMap() {
      this.observer.reset();
      this.map.textContent = '';
      var fragment = document.createDocumentFragment();

      for (var i = 0; i < this.scrollTargets.length; i++) {
        var el = document.createElement('div');
        fragment.appendChild(el);
        this.observer.els.push({
          el: el,
          linkedEl: this.scrollTargets[i]
        });
        this.observer.observe(el);
      }

      this.map.appendChild(fragment);
    }
  }, {
    key: "resizeMap",
    value: function resizeMap() {
      for (var i = 0; i < this.scrollTargets.length; i++) {
        this.scrollTargets[i].style.transform = 'translate3d(0px, 0px, 0px)';

        var _this$scrollTargets$i = this.scrollTargets[i].getBoundingClientRect(),
            width = _this$scrollTargets$i.width,
            height = _this$scrollTargets$i.height,
            top = _this$scrollTargets$i.top,
            left = _this$scrollTargets$i.left;

        Object.assign(this.observer.els[i].el.style, {
          position: 'absolute',
          top: top + 'px',
          left: left + 'px',
          width: width + 'px',
          height: height + 'px'
        });
        this.scrollTargets[i].style.transform = "translate3d(0px, ".concat(this.smoothScrollPos, "px, 0px)");
      }
    }
  }]);

  return Scroll;
}();



/***/ }),

/***/ "./src/Scrollbar.js":
/*!**************************!*\
  !*** ./src/Scrollbar.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Scrollbar; });
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Store */ "./src/Store.js");
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _E__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./E */ "./src/E.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Scrollbar =
/*#__PURE__*/
function () {
  function Scrollbar(smoothScroll) {
    _classCallCheck(this, Scrollbar);

    _E__WEBPACK_IMPORTED_MODULE_1__["default"].bindAll(this, ['onMouseMove', 'onMouseDown', 'onMouseUp']);
    this.smoothScroll = smoothScroll;
    this.el = document.querySelector(this.smoothScroll.options.scrollbarEl);
    this.handle = document.querySelector(this.smoothScroll.options.scrollbarHandleEl);
    this.addStyles();
    this.addEvents();
  }

  _createClass(Scrollbar, [{
    key: "addEvents",
    value: function addEvents() {
      _E__WEBPACK_IMPORTED_MODULE_1__["default"].on('mousedown', this.handle, this.onMouseDown);
      window.addEventListener('mousemove', this.onMouseMove);
      window.addEventListener('mouseup', this.onMouseUp);
    }
  }, {
    key: "onResize",
    value: function onResize() {
      this.scale = (-this.smoothScroll.maxScroll + _Store__WEBPACK_IMPORTED_MODULE_0___default.a.windowSize.h) / _Store__WEBPACK_IMPORTED_MODULE_0___default.a.windowSize.h;

      if (this.scale <= 1) {
        this.handle.style.height = 0;
        return;
      }

      this.handleHeight = _Store__WEBPACK_IMPORTED_MODULE_0___default.a.windowSize.h / this.scale;
      this.handleHalfHeight = this.handleHeight / 2;
      this.handle.style.height = "".concat(this.handleHeight, "px");
    }
  }, {
    key: "transform",
    value: function transform() {
      this.handle.style.transform = "translate3d(0, ".concat(-this.smoothScroll.scrollPos / this.scale, "px, 0)");
    }
  }, {
    key: "show",
    value: function show() {
      this.el.classList.add('show');
    }
  }, {
    key: "hide",
    value: function hide() {
      this.el.classList.remove('show');
    }
  }, {
    key: "onMouseMove",
    value: function onMouseMove(e) {
      if (!this.mouseDown) return;
      this.smoothScroll.scrollPos = (-e.clientY + this.handleHalfHeight) * this.scale;
      this.smoothScroll.clamp();
      this.smoothScroll.syncScroll = true;
      _E__WEBPACK_IMPORTED_MODULE_1__["default"].emit(_Store__WEBPACK_IMPORTED_MODULE_0___default.a.events.COMBOSCROLL, this.smoothScroll.scrollPos);
    }
  }, {
    key: "onMouseDown",
    value: function onMouseDown() {
      this.mouseDown = true;
      _Store__WEBPACK_IMPORTED_MODULE_0___default.a.body.style.userSelect = 'none';
      _Store__WEBPACK_IMPORTED_MODULE_0___default.a.body.style['-ms-user-select'] = 'none';
      this.el.classList.add('active');
    }
  }, {
    key: "onMouseUp",
    value: function onMouseUp() {
      this.mouseDown = false;
      _Store__WEBPACK_IMPORTED_MODULE_0___default.a.body.style.removeProperty('user-select');
      _Store__WEBPACK_IMPORTED_MODULE_0___default.a.body.style.removeProperty('-ms-user-select');
      this.el.classList.remove('active');
    }
  }, {
    key: "addStyles",
    value: function addStyles() {
      if (!this.smoothScroll.options.disableNativeScrollbar && !this.smoothScroll.options.scrollbarStyles) return;
      var styles = '';

      if (this.smoothScroll.options.disableNativeScrollbar) {
        styles += "html{scrollbar-width:none;}body{-ms-overflow-style:none;}body::-webkit-scrollbar{width:0;height:0;}";
      }

      if (this.smoothScroll.options.scrollbarStyles) {
        styles += "".concat(this.smoothScroll.options.scrollbarEl, " {position: fixed;top: 0;right: 0;width: 20px;height: 100%;z-index: 900;}.is-touch ").concat(this.smoothScroll.options.scrollbarEl, " {display: none;}").concat(this.smoothScroll.options.scrollbarEl, " > div {padding: 6px 0;width: 10px;height: 0;margin: 0 auto;visibility: hidden;}").concat(this.smoothScroll.options.scrollbarEl, " > div > div {width: 100%;height: 100%;border-radius: 10px;opacity: 0.3;background-color: #000000;}").concat(this.smoothScroll.options.scrollbarEl, " > div > div:hover {opacity: 0.9;}").concat(this.smoothScroll.options.scrollbarEl, ":hover > div, ").concat(this.smoothScroll.options.scrollbarEl, ".show > div, ").concat(this.smoothScroll.options.scrollbarEl, ".active > div {visibility: visible;}").concat(this.smoothScroll.options.scrollbarEl, ".active > div > div {opacity: 0.9;}");
      }

      var css = document.createElement('style');
      css.type = 'text/css';
      if (css.styleSheet) css.styleSheet.cssText = styles;else css.appendChild(document.createTextNode(styles));
      document.getElementsByTagName("head")[0].appendChild(css);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      _E__WEBPACK_IMPORTED_MODULE_1__["default"].off('mousedown', this.handle, this.onMouseDown);
      window.removeEventListener('mousemove', this.onMouseMove);
      window.removeEventListener('mouseup', this.onMouseUp);
    }
  }]);

  return Scrollbar;
}();



/***/ }),

/***/ "./src/Store.js":
/*!**********************!*\
  !*** ./src/Store.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

var Store = {
  html: document.documentElement,
  body: document.body,
  windowSize: {
    w: window.innerWidth,
    h: window.innerHeight
  }
};
module.exports = Store;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ASScroll; });
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Store */ "./src/Store.js");
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Events */ "./src/Events.js");
/* harmony import */ var _Scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Scroll */ "./src/Scroll.js");
/* harmony import */ var _E__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./E */ "./src/E.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var ASScroll =
/*#__PURE__*/
function () {
  function ASScroll() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$element = _ref.element,
        element = _ref$element === void 0 ? '.asscroll-container' : _ref$element,
        _ref$ease = _ref.ease,
        ease = _ref$ease === void 0 ? 0.075 : _ref$ease,
        _ref$customScrollbar = _ref.customScrollbar,
        customScrollbar = _ref$customScrollbar === void 0 ? false : _ref$customScrollbar,
        _ref$scrollbarEl = _ref.scrollbarEl,
        scrollbarEl = _ref$scrollbarEl === void 0 ? '.asscrollbar' : _ref$scrollbarEl,
        _ref$scrollbarHandleE = _ref.scrollbarHandleEl,
        scrollbarHandleEl = _ref$scrollbarHandleE === void 0 ? '.asscrollbar__handle' : _ref$scrollbarHandleE,
        _ref$scrollbarStyles = _ref.scrollbarStyles,
        scrollbarStyles = _ref$scrollbarStyles === void 0 ? true : _ref$scrollbarStyles,
        _ref$disableNativeScr = _ref.disableNativeScrollbar,
        disableNativeScrollbar = _ref$disableNativeScr === void 0 ? true : _ref$disableNativeScr,
        _ref$disableRaf = _ref.disableRaf,
        disableRaf = _ref$disableRaf === void 0 ? false : _ref$disableRaf,
        _ref$disableResize = _ref.disableResize,
        disableResize = _ref$disableResize === void 0 ? false : _ref$disableResize;

    _classCallCheck(this, ASScroll);

    _E__WEBPACK_IMPORTED_MODULE_3__["default"].bindAll(this, ['enable', 'disable', 'on', 'scrollTo', 'onRaf', 'onResize']);
    this.Events = new _Events__WEBPACK_IMPORTED_MODULE_1__["default"]({
      disableRaf: disableRaf,
      disableResize: disableResize
    });
    this.Scroll = new _Scroll__WEBPACK_IMPORTED_MODULE_2__["default"]({
      element: element,
      ease: ease,
      customScrollbar: customScrollbar,
      scrollbarEl: scrollbarEl,
      scrollbarHandleEl: scrollbarHandleEl,
      scrollbarStyles: scrollbarStyles,
      disableNativeScrollbar: disableNativeScrollbar
    });
  }

  _createClass(ASScroll, [{
    key: "enable",
    value: function enable() {
      var _this$Scroll;

      (_this$Scroll = this.Scroll).enable.apply(_this$Scroll, arguments);
    }
  }, {
    key: "disable",
    value: function disable() {
      this.Scroll.disable();
    }
  }, {
    key: "onRaf",
    value: function onRaf() {
      this.Events.onRaf();
    }
  }, {
    key: "onResize",
    value: function onResize() {
      var _this$Events;

      (_this$Events = this.Events).onResize.apply(_this$Events, arguments);
    }
  }, {
    key: "on",
    value: function on(eventName, cb) {
      if (eventName === 'scroll') {
        _E__WEBPACK_IMPORTED_MODULE_3__["default"].on(_Store__WEBPACK_IMPORTED_MODULE_0___default.a.events.COMBOSCROLL, cb);
      }

      if (eventName === 'raf') {
        _E__WEBPACK_IMPORTED_MODULE_3__["default"].on(_Store__WEBPACK_IMPORTED_MODULE_0___default.a.events.EXTERNALRAF, cb);
      }
    }
  }, {
    key: "off",
    value: function off(eventName, cb) {
      if (eventName === 'scroll') {
        _E__WEBPACK_IMPORTED_MODULE_3__["default"].off(_Store__WEBPACK_IMPORTED_MODULE_0___default.a.events.COMBOSCROLL, cb);
      }

      if (eventName === 'raf') {
        _E__WEBPACK_IMPORTED_MODULE_3__["default"].off(_Store__WEBPACK_IMPORTED_MODULE_0___default.a.events.EXTERNALRAF, cb);
      }
    }
  }, {
    key: "scrollTo",
    value: function scrollTo(y) {
      this.Scroll.scrollTo(-y);
    }
  }, {
    key: "scrollPos",
    get: function get() {
      return this.Scroll.scrollPos;
    }
  }, {
    key: "smoothScrollPos",
    get: function get() {
      return this.Scroll.smoothScrollPos;
    }
  }]);

  return ASScroll;
}();



/***/ }),

/***/ "./src/normalizeWheel.js":
/*!*******************************!*\
  !*** ./src/normalizeWheel.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* eslint-disable */

/* eslint-env node, browser */

/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule UserAgent_DEPRECATED
 */

/**
 *  Provides entirely client-side User Agent and OS detection. You should prefer
 *  the non-deprecated UserAgent module when possible, which exposes our
 *  authoritative server-side PHP-based detection to the client.
 *
 *  Usage is straightforward:
 *
 *    if (UserAgent_DEPRECATED.ie()) {
 *      //  IE
 *    }
 *
 *  You can also do version checks:
 *
 *    if (UserAgent_DEPRECATED.ie() >= 7) {
 *      //  IE7 or better
 *    }
 *
 *  The browser functions will return NaN if the browser does not match, so
 *  you can also do version compares the other way:
 *
 *    if (UserAgent_DEPRECATED.ie() < 7) {
 *      //  IE6 or worse
 *    }
 *
 *  Note that the version is a float and may include a minor version number,
 *  so you should always use range operators to perform comparisons, not
 *  strict equality.
 *
 *  **Note:** You should **strongly** prefer capability detection to browser
 *  version detection where it's reasonable:
 *
 *    http://www.quirksmode.org/js/support.html
 *
 *  Further, we have a large number of mature wrapper functions and classes
 *  which abstract away many browser irregularities. Check the documentation,
 *  grep for things, or ask on javascript@lists.facebook.com before writing yet
 *  another copy of "event || window.event".
 *
 */

var _populated = false; // Browsers

var _ie, _firefox, _opera, _webkit, _chrome; // Actual IE browser for compatibility mode


var _ie_real_version; // Platforms


var _osx, _windows, _linux, _android; // Architectures


var _win64; // Devices


var _iphone, _ipad, _native;

var _mobile;

function _populate() {
  if (_populated) {
    return;
  }

  _populated = true; // To work around buggy JS libraries that can't handle multi-digit
  // version numbers, Opera 10's user agent string claims it's Opera
  // 9, then later includes a Version/X.Y field:
  //
  // Opera/9.80 (foo) Presto/2.2.15 Version/10.10

  var uas = navigator.userAgent;
  var agent = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(uas);
  var os = /(Mac OS X)|(Windows)|(Linux)/.exec(uas);
  _iphone = /\b(iPhone|iP[ao]d)/.exec(uas);
  _ipad = /\b(iP[ao]d)/.exec(uas);
  _android = /Android/i.exec(uas);
  _native = /FBAN\/\w+;/i.exec(uas);
  _mobile = /Mobile/i.exec(uas); // Note that the IE team blog would have you believe you should be checking
  // for 'Win64; x64'.  But MSDN then reveals that you can actually be coming
  // from either x64 or ia64;  so ultimately, you should just check for Win64
  // as in indicator of whether you're in 64-bit IE.  32-bit IE on 64-bit
  // Windows will send 'WOW64' instead.

  _win64 = !!/Win64/.exec(uas);

  if (agent) {
    _ie = agent[1] ? parseFloat(agent[1]) : agent[5] ? parseFloat(agent[5]) : NaN; // IE compatibility mode

    if (_ie && document && document.documentMode) {
      _ie = document.documentMode;
    } // grab the "true" ie version from the trident token if available


    var trident = /(?:Trident\/(\d+.\d+))/.exec(uas);
    _ie_real_version = trident ? parseFloat(trident[1]) + 4 : _ie;
    _firefox = agent[2] ? parseFloat(agent[2]) : NaN;
    _opera = agent[3] ? parseFloat(agent[3]) : NaN;
    _webkit = agent[4] ? parseFloat(agent[4]) : NaN;

    if (_webkit) {
      // We do not add the regexp to the above test, because it will always
      // match 'safari' only since 'AppleWebKit' appears before 'Chrome' in
      // the userAgent string.
      agent = /(?:Chrome\/(\d+\.\d+))/.exec(uas);
      _chrome = agent && agent[1] ? parseFloat(agent[1]) : NaN;
    } else {
      _chrome = NaN;
    }
  } else {
    _ie = _firefox = _opera = _chrome = _webkit = NaN;
  }

  if (os) {
    if (os[1]) {
      // Detect OS X version.  If no version number matches, set _osx to true.
      // Version examples:  10, 10_6_1, 10.7
      // Parses version number as a float, taking only first two sets of
      // digits.  If only one set of digits is found, returns just the major
      // version number.
      var ver = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(uas);
      _osx = ver ? parseFloat(ver[1].replace('_', '.')) : true;
    } else {
      _osx = false;
    }

    _windows = !!os[2];
    _linux = !!os[3];
  } else {
    _osx = _windows = _linux = false;
  }
}

var UserAgent_DEPRECATED = {
  /**
   *  Check if the UA is Internet Explorer.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  ie: function ie() {
    return _populate() || _ie;
  },

  /**
   * Check if we're in Internet Explorer compatibility mode.
   *
   * @return bool true if in compatibility mode, false if
   * not compatibility mode or not ie
   */
  ieCompatibilityMode: function ieCompatibilityMode() {
    return _populate() || _ie_real_version > _ie;
  },

  /**
   * Whether the browser is 64-bit IE.  Really, this is kind of weak sauce;  we
   * only need this because Skype can't handle 64-bit IE yet.  We need to remove
   * this when we don't need it -- tracked by #601957.
   */
  ie64: function ie64() {
    return UserAgent_DEPRECATED.ie() && _win64;
  },

  /**
   *  Check if the UA is Firefox.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  firefox: function firefox() {
    return _populate() || _firefox;
  },

  /**
   *  Check if the UA is Opera.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  opera: function opera() {
    return _populate() || _opera;
  },

  /**
   *  Check if the UA is WebKit.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  webkit: function webkit() {
    return _populate() || _webkit;
  },

  /**
   *  For Push
   *  WILL BE REMOVED VERY SOON. Use UserAgent_DEPRECATED.webkit
   */
  safari: function safari() {
    return UserAgent_DEPRECATED.webkit();
  },

  /**
   *  Check if the UA is a Chrome browser.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  chrome: function chrome() {
    return _populate() || _chrome;
  },

  /**
   *  Check if the user is running Windows.
   *
   *  @return bool `true' if the user's OS is Windows.
   */
  windows: function windows() {
    return _populate() || _windows;
  },

  /**
   *  Check if the user is running Mac OS X.
   *
   *  @return float|bool   Returns a float if a version number is detected,
   *                       otherwise true/false.
   */
  osx: function osx() {
    return _populate() || _osx;
  },

  /**
   * Check if the user is running Linux.
   *
   * @return bool `true' if the user's OS is some flavor of Linux.
   */
  linux: function linux() {
    return _populate() || _linux;
  },

  /**
   * Check if the user is running on an iPhone or iPod platform.
   *
   * @return bool `true' if the user is running some flavor of the
   *    iPhone OS.
   */
  iphone: function iphone() {
    return _populate() || _iphone;
  },
  mobile: function mobile() {
    return _populate() || _iphone || _ipad || _android || _mobile;
  },
  nativeApp: function nativeApp() {
    // webviews inside of the native apps
    return _populate() || _native;
  },
  android: function android() {
    return _populate() || _android;
  },
  ipad: function ipad() {
    return _populate() || _ipad;
  }
};
/**
 * Copyright (c) 2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ExecutionEnvironment
 */

/*jslint evil: true */

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
/**
 * Simple, lightweight module assisting with the detection and context of
 * Worker. Helps avoid circular dependencies and allows code to reason about
 * whether or not they are in a Worker, even if they never include the main
 * `ReactWorker` dependency.
 */

var ExecutionEnvironment = {
  canUseDOM: canUseDOM,
  canUseWorkers: typeof Worker !== 'undefined',
  canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),
  canUseViewport: canUseDOM && !!window.screen,
  isInWorker: !canUseDOM // For now, this is true - might change in the future.

};
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule isEventSupported
 */
// var ExecutionEnvironment = require('ExecutionEnvironment');

var useHasFeature;

if (ExecutionEnvironment.canUseDOM) {
  useHasFeature = document.implementation && document.implementation.hasFeature && // always returns true in newer browsers as per the standard.
  // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
  document.implementation.hasFeature('', '') !== true;
}
/**
 * Checks if an event is supported in the current execution environment.
 *
 * NOTE: This will not work correctly for non-generic events such as `change`,
 * `reset`, `load`, `error`, and `select`.
 *
 * Borrows from Modernizr.
 *
 * @param {string} eventNameSuffix Event name, e.g. "click".
 * @param {?boolean} capture Check if the capture phase is supported.
 * @return {boolean} True if the event is supported.
 * @internal
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */


function isEventSupported(eventNameSuffix, capture) {
  if (!ExecutionEnvironment.canUseDOM || capture && !('addEventListener' in document)) {
    return false;
  }

  var eventName = 'on' + eventNameSuffix;
  var isSupported = eventName in document;

  if (!isSupported) {
    var element = document.createElement('div');
    element.setAttribute(eventName, 'return;');
    isSupported = typeof element[eventName] === 'function';
  }

  if (!isSupported && useHasFeature && eventNameSuffix === 'wheel') {
    // This is the only way to test support for the `wheel` event in IE9+.
    isSupported = document.implementation.hasFeature('Events.wheel', '3.0');
  }

  return isSupported;
}
/**
 * Copyright (c) 2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule normalizeWheel
 * @typechecks
 */
// var UserAgent_DEPRECATED = require('UserAgent_DEPRECATED');
// var isEventSupported = require('isEventSupported');
// Reasonable defaults


var PIXEL_STEP = 10;
var LINE_HEIGHT = 40;
var PAGE_HEIGHT = 800;
/**
 * Mouse wheel (and 2-finger trackpad) support on the web sucks.  It is
 * complicated, thus this doc is long and (hopefully) detailed enough to answer
 * your questions.
 *
 * If you need to react to the mouse wheel in a predictable way, this code is
 * like your bestest friend. * hugs *
 *
 * As of today, there are 4 DOM event types you can listen to:
 *
 *   'wheel'                -- Chrome(31+), FF(17+), IE(9+)
 *   'mousewheel'           -- Chrome, IE(6+), Opera, Safari
 *   'MozMousePixelScroll'  -- FF(3.5 only!) (2010-2013) -- don't bother!
 *   'DOMMouseScroll'       -- FF(0.9.7+) since 2003
 *
 * So what to do?  The is the best:
 *
 *   normalizeWheel.getEventType();
 *
 * In your event callback, use this code to get sane interpretation of the
 * deltas.  This code will return an object with properties:
 *
 *   spinX   -- normalized spin speed (use for zoom) - x plane
 *   spinY   -- " - y plane
 *   pixelX  -- normalized distance (to pixels) - x plane
 *   pixelY  -- " - y plane
 *
 * Wheel values are provided by the browser assuming you are using the wheel to
 * scroll a web page by a number of lines or pixels (or pages).  Values can vary
 * significantly on different platforms and browsers, forgetting that you can
 * scroll at different speeds.  Some devices (like trackpads) emit more events
 * at smaller increments with fine granularity, and some emit massive jumps with
 * linear speed or acceleration.
 *
 * This code does its best to normalize the deltas for you:
 *
 *   - spin is trying to normalize how far the wheel was spun (or trackpad
 *     dragged).  This is super useful for zoom support where you want to
 *     throw away the chunky scroll steps on the PC and make those equal to
 *     the slow and smooth tiny steps on the Mac. Key data: This code tries to
 *     resolve a single slow step on a wheel to 1.
 *
 *   - pixel is normalizing the desired scroll delta in pixel units.  You'll
 *     get the crazy differences between browsers, but at least it'll be in
 *     pixels!
 *
 *   - positive value indicates scrolling DOWN/RIGHT, negative UP/LEFT.  This
 *     should translate to positive value zooming IN, negative zooming OUT.
 *     This matches the newer 'wheel' event.
 *
 * Why are there spinX, spinY (or pixels)?
 *
 *   - spinX is a 2-finger side drag on the trackpad, and a shift + wheel turn
 *     with a mouse.  It results in side-scrolling in the browser by default.
 *
 *   - spinY is what you expect -- it's the classic axis of a mouse wheel.
 *
 *   - I dropped spinZ/pixelZ.  It is supported by the DOM 3 'wheel' event and
 *     probably is by browsers in conjunction with fancy 3D controllers .. but
 *     you know.
 *
 * Implementation info:
 *
 * Examples of 'wheel' event if you scroll slowly (down) by one step with an
 * average mouse:
 *
 *   OS X + Chrome  (mouse)     -    4   pixel delta  (wheelDelta -120)
 *   OS X + Safari  (mouse)     -  N/A   pixel delta  (wheelDelta  -12)
 *   OS X + Firefox (mouse)     -    0.1 line  delta  (wheelDelta  N/A)
 *   Win8 + Chrome  (mouse)     -  100   pixel delta  (wheelDelta -120)
 *   Win8 + Firefox (mouse)     -    3   line  delta  (wheelDelta -120)
 *
 * On the trackpad:
 *
 *   OS X + Chrome  (trackpad)  -    2   pixel delta  (wheelDelta   -6)
 *   OS X + Firefox (trackpad)  -    1   pixel delta  (wheelDelta  N/A)
 *
 * On other/older browsers.. it's more complicated as there can be multiple and
 * also missing delta values.
 *
 * The 'wheel' event is more standard:
 *
 * http://www.w3.org/TR/DOM-Level-3-Events/#events-wheelevents
 *
 * The basics is that it includes a unit, deltaMode (pixels, lines, pages), and
 * deltaX, deltaY and deltaZ.  Some browsers provide other values to maintain
 * backward compatibility with older events.  Those other values help us
 * better normalize spin speed.  Example of what the browsers provide:
 *
 *                          | event.wheelDelta | event.detail
 *        ------------------+------------------+--------------
 *          Safari v5/OS X  |       -120       |       0
 *          Safari v5/Win7  |       -120       |       0
 *         Chrome v17/OS X  |       -120       |       0
 *         Chrome v17/Win7  |       -120       |       0
 *                IE9/Win7  |       -120       |   undefined
 *         Firefox v4/OS X  |     undefined    |       1
 *         Firefox v4/Win7  |     undefined    |       3
 *
 */

function normalizeWheel(
/*object*/
event)
/*object*/
{
  var sX = 0,
      sY = 0,
      // spinX, spinY
  pX = 0,
      pY = 0; // pixelX, pixelY
  // Legacy

  if ('detail' in event) {
    sY = event.detail;
  }

  if ('wheelDelta' in event) {
    sY = -event.wheelDelta / 120;
  }

  if ('wheelDeltaY' in event) {
    sY = -event.wheelDeltaY / 120;
  }

  if ('wheelDeltaX' in event) {
    sX = -event.wheelDeltaX / 120;
  } // side scrolling on FF with DOMMouseScroll


  if ('axis' in event && event.axis === event.HORIZONTAL_AXIS) {
    sX = sY;
    sY = 0;
  }

  pX = sX * PIXEL_STEP;
  pY = sY * PIXEL_STEP;

  if ('deltaY' in event) {
    pY = event.deltaY;
  }

  if ('deltaX' in event) {
    pX = event.deltaX;
  }

  if ((pX || pY) && event.deltaMode) {
    if (event.deltaMode == 1) {
      // delta in LINE units
      pX *= LINE_HEIGHT;
      pY *= LINE_HEIGHT;
    } else {
      // delta in PAGE units
      pX *= PAGE_HEIGHT;
      pY *= PAGE_HEIGHT;
    }
  } // Fall-back if spin cannot be determined


  if (pX && !sX) {
    sX = pX < 1 ? -1 : 1;
  }

  if (pY && !sY) {
    sY = pY < 1 ? -1 : 1;
  }

  return {
    spinX: sX,
    spinY: sY,
    pixelX: pX,
    pixelY: pY
  };
}
/**
 * The best combination if you prefer spinX + spinY normalization.  It favors
 * the older DOMMouseScroll for Firefox, as FF does not include wheelDelta with
 * 'wheel' event, making spin speed determination impossible.
 */


normalizeWheel.getEventType = function ()
/*string*/
{
  return UserAgent_DEPRECATED.firefox() ? 'DOMMouseScroll' : isEventSupported('wheel') ? 'wheel' : 'mousewheel';
};

module.exports = normalizeWheel;

/***/ }),

/***/ 0:
/*!**********************************************!*\
  !*** multi ./src/index.js ./demo/index.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\laragon\www\asscroll\src\index.js */"./src/index.js");
module.exports = __webpack_require__(/*! C:\laragon\www\asscroll\demo\index.scss */"./demo/index.scss");


/***/ })

/******/ });
});
//# sourceMappingURL=asscroll.js.map