_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"/0+H":function(e,t,r){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var n,o=(n=r("q1tI"))&&n.__esModule?n:{default:n},a=r("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,o=void 0!==n&&n,a=e.hasQuery,i=void 0!==a&&a;return r||o&&i}},"/GRZ":function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},0:function(e,t,r){r("J5xr"),e.exports=r("nOHt")},"2qu3":function(e,t,r){"use strict";var n=r("oI91"),o=r("/GRZ"),a=r("i2R6");function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){var r;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"===typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return p(e,t)}(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,u=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return i=e.done,e},e:function(e){u=!0,a=e},f:function(){try{i||null==r.return||r.return()}finally{if(u)throw a}}}}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}t.__esModule=!0,t.default=void 0;var c,s=(c=r("q1tI"))&&c.__esModule?c:{default:c},f=r("8L3h"),d=r("jwwS");var h=[],m=[],y=!1;function g(e){var t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then((function(e){return r.loading=!1,r.loaded=e,e})).catch((function(e){throw r.loading=!1,r.error=e,e})),r}function v(e){var t={loading:!1,loaded:{},error:null},r=[];try{Object.keys(e).forEach((function(n){var o=g(e[n]);o.loading?t.loading=!0:(t.loaded[n]=o.loaded,t.error=o.error),r.push(o.promise),o.promise.then((function(e){t.loaded[n]=e})).catch((function(e){t.error=e}))}))}catch(n){t.error=n}return t.promise=Promise.all(r).then((function(e){return t.loading=!1,e})).catch((function(e){throw t.loading=!1,e})),t}function b(e,t){return s.default.createElement(function(e){return e&&e.__esModule?e.default:e}(e),t)}function _(e,t){var r=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:b,webpack:null,modules:null},t),n=null;function o(){if(!n){var t=new w(e,r);n={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return n.promise()}if(!y&&"function"===typeof r.webpack){var a=r.webpack();m.push((function(e){var t,r=l(a);try{for(r.s();!(t=r.n()).done;){var n=t.value;if(-1!==e.indexOf(n))return o()}}catch(i){r.e(i)}finally{r.f()}}))}var i=function(e,t){o();var a=s.default.useContext(d.LoadableContext),i=(0,f.useSubscription)(n);return s.default.useImperativeHandle(t,(function(){return{retry:n.retry}}),[]),a&&Array.isArray(r.modules)&&r.modules.forEach((function(e){a(e)})),s.default.useMemo((function(){return i.loading||i.error?s.default.createElement(r.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:n.retry}):i.loaded?r.render(i.loaded,e):null}),[e,i])};return i.preload=function(){return o()},i.displayName="LoadableComponent",s.default.forwardRef(i)}var w=function(){function e(t,r){o(this,e),this._loadFn=t,this._opts=r,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return a(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,r=this._opts;t.loading&&("number"===typeof r.delay&&(0===r.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),r.delay)),"number"===typeof r.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),r.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=u(u({},this._state),{},{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function k(e){return _(g,e)}function G(e,t){for(var r=[];e.length;){var n=e.pop();r.push(n(t))}return Promise.all(r).then((function(){if(e.length)return G(e,t)}))}k.Map=function(e){if("function"!==typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return _(v,e)},k.preloadAll=function(){return new Promise((function(e,t){G(h).then(e,t)}))},k.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var r=function(){return y=!0,t()};G(m,e).then(r,r)}))},window.__NEXT_PRELOADREADY=k.preloadReady;var O=k;t.default=O},"48fX":function(e,t,r){var n=r("qhzo");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},"5fIB":function(e,t,r){var n=r("7eYB");e.exports=function(e){if(Array.isArray(e))return n(e)}},"8Bbg":function(e,t,r){e.exports=r("B5Ud")},"8Kt/":function(e,t,r){"use strict";r("oI91");t.__esModule=!0,t.defaultHead=c,t.default=void 0;var n,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=p();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r("q1tI")),a=(n=r("Xuae"))&&n.__esModule?n:{default:n},i=r("lwAK"),u=r("FYa8"),l=r("/0+H");function p(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return p=function(){return e},e}function c(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function s(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var r=o.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(s,[]).reverse().concat(c(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var u=0,l=f.length;u<l;u++){var p=f[u];if(o.props.hasOwnProperty(p))if("charSet"===p)r.has(p)?a=!1:r.add(p);else{var c=o.props[p],s=n[p]||new Set;s.has(c)?a=!1:(s.add(c),n[p]=s)}}}return a}}()).reverse().map((function(e,t){var r=e.key||t;return o.default.cloneElement(e,{key:r})}))}function h(e){var t=e.children,r=(0,o.useContext)(i.AmpStateContext),n=(0,o.useContext)(u.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:d,headManager:n,inAmpMode:(0,l.isInAmpMode)(r)},t)}h.rewind=function(){};var m=h;t.default=m},B5Ud:function(e,t,r){"use strict";var n=r("vJKn"),o=r("/GRZ"),a=r("i2R6"),i=r("48fX"),u=r("tCBg"),l=r("T0f4"),p=r("qVT1");function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=l(e);if(t){var o=l(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return u(this,r)}}var s=r("AroE");t.__esModule=!0,t.Container=function(e){0;return e.children},t.createUrl=g,t.default=void 0;var f=s(r("q1tI")),d=r("g/15");function h(e){return m.apply(this,arguments)}function m(){return(m=p(n.mark((function e(t){var r,o,a;return n.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.Component,o=t.ctx,e.next=3,(0,d.loadGetInitialProps)(r,o);case 3:return a=e.sent,e.abrupt("return",{pageProps:a});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.AppInitialProps=d.AppInitialProps,t.NextWebVitalsMetric=d.NextWebVitalsMetric;var y=function(e){i(r,e);var t=c(r);function r(){return o(this,r),t.apply(this,arguments)}return a(r,[{key:"componentDidCatch",value:function(e,t){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,r=e.Component,n=e.pageProps,o=e.__N_SSG,a=e.__N_SSP;return f.default.createElement(r,Object.assign({},n,o||a?{}:{url:g(t)}))}}]),r}(f.default.Component);function g(e){var t=e.pathname,r=e.asPath,n=e.query;return{get query(){return n},get pathname(){return t},get asPath(){return r},back:function(){e.back()},push:function(t,r){return e.push(t,r)},pushTo:function(t,r){var n=r?t:"",o=r||t;return e.push(n,o)},replace:function(t,r){return e.replace(t,r)},replaceTo:function(t,r){var n=r?t:"",o=r||t;return e.replace(n,o)}}}t.default=y,y.origGetInitialProps=h,y.getInitialProps=h},FYa8:function(e,t,r){"use strict";var n;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((n=r("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});t.HeadManagerContext=o},"HaE+":function(e,t,r){"use strict";function n(e,t,r,n,o,a,i){try{var u=e[a](i),l=u.value}catch(p){return void r(p)}u.done?t(l):Promise.resolve(l).then(n,o)}function o(e){return function(){var t=this,r=arguments;return new Promise((function(o,a){var i=e.apply(t,r);function u(e){n(i,o,a,u,l,"next",e)}function l(e){n(i,o,a,u,l,"throw",e)}u(void 0)}))}}r.d(t,"a",(function(){return o}))},J5xr:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r("YNMu")}])},Qetd:function(e,t,r){"use strict";var n=Object.assign.bind(Object);e.exports=n,e.exports.default=e.exports},T0f4:function(e,t){function r(t){return e.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(t)}e.exports=r},Xuae:function(e,t,r){"use strict";var n=r("mPvQ"),o=r("/GRZ"),a=r("i2R6"),i=(r("qXWd"),r("48fX")),u=r("tCBg"),l=r("T0f4");function p(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=l(e);if(t){var o=l(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return u(this,r)}}t.__esModule=!0,t.default=void 0;var c=r("q1tI"),s=function(e){i(r,e);var t=p(r);function r(e){var a;return o(this,r),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(n(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(c.Component);t.default=s},YNMu:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return M}));var n=r("o0o1"),o=r.n(n),a=r("HaE+");function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var l=r("s4An");var p=r("cDf5"),c=r.n(p);function s(e,t){if(t&&("object"===c()(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var d=r("q1tI"),h=r.n(d),m=r("8Bbg"),y=r.n(m),g=r("8Kt/"),v=r.n(g);function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function _(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var w={templateTitle:"",noindex:!1,nofollow:!1,defaultOpenGraphImageWidth:0,defaultOpenGraphImageHeight:0,defaultOpenGraphVideoWidth:0,defaultOpenGraphVideoHeight:0,disableGooglebot:!1},k=function(e,t,r){void 0===t&&(t=[]);var n=void 0===r?{}:r,o=n.defaultWidth,a=n.defaultHeight;return t.reduce((function(t,r,n){return t.push(h.a.createElement("meta",{key:"og:"+e+":0"+n,property:"og:"+e,content:r.url})),r.alt&&t.push(h.a.createElement("meta",{key:"og:"+e+":alt0"+n,property:"og:"+e+":alt",content:r.alt})),r.secureUrl&&t.push(h.a.createElement("meta",{key:"og:"+e+":secure_url0"+n,property:"og:"+e+":secure_url",content:r.secureUrl.toString()})),r.type&&t.push(h.a.createElement("meta",{key:"og:"+e+":type0"+n,property:"og:"+e+":type",content:r.type.toString()})),r.width?t.push(h.a.createElement("meta",{key:"og:"+e+":width0"+n,property:"og:"+e+":width",content:r.width.toString()})):o&&t.push(h.a.createElement("meta",{key:"og:"+e+":width0"+n,property:"og:"+e+":width",content:o.toString()})),r.height?t.push(h.a.createElement("meta",{key:"og:"+e+":height"+n,property:"og:"+e+":height",content:r.height.toString()})):a&&t.push(h.a.createElement("meta",{key:"og:"+e+":height"+n,property:"og:"+e+":height",content:a.toString()})),t}),[])},G=function(e){var t,r,n,o=[];e.titleTemplate&&(w.templateTitle=e.titleTemplate);var a="";e.title?(a=e.title,w.templateTitle&&(a=w.templateTitle.replace(/%s/g,(function(){return a})))):e.defaultTitle&&(a=e.defaultTitle),a&&o.push(h.a.createElement("title",{key:"title"},a));var i,u,l=e.noindex||w.noindex||e.dangerouslySetAllPagesToNoIndex,p=e.nofollow||w.nofollow||e.dangerouslySetAllPagesToNoFollow,c=e.disableGooglebot||w.disableGooglebot||e.dangerouslyDisableGooglebot,s="";if(e.robotsProps){var f=e.robotsProps,d=f.nosnippet,m=f.maxSnippet,y=f.maxImagePreview,g=f.maxVideoPreview,v=f.noarchive,_=f.noimageindex,G=f.notranslate,O=f.unavailableAfter;s=(d?",nosnippet":"")+(m?",max-snippet:"+m:"")+(y?",max-image-preview:"+y:"")+(v?",noarchive":"")+(O?",unavailable_after:"+O:"")+(_?",noimageindex":"")+(g?",max-video-preview:"+g:"")+(G?",notranslate":"")}(e.dangerouslyDisableGooglebot&&(w.disableGooglebot=!0),l||p?(e.dangerouslySetAllPagesToNoIndex&&(w.noindex=!0),e.dangerouslySetAllPagesToNoFollow&&(w.nofollow=!0),o.push(h.a.createElement("meta",{key:"robots",name:"robots",content:(l?"noindex":"index")+","+(p?"nofollow":"follow")+s})),c||o.push(h.a.createElement("meta",{key:"googlebot",name:"googlebot",content:(l?"noindex":"index")+","+(p?"nofollow":"follow")+s}))):(o.push(h.a.createElement("meta",{key:"robots",name:"robots",content:"index,follow"+s})),c||o.push(h.a.createElement("meta",{key:"googlebot",name:"googlebot",content:"index,follow"+s}))),e.description&&o.push(h.a.createElement("meta",{key:"description",name:"description",content:e.description})),e.mobileAlternate&&o.push(h.a.createElement("link",{rel:"alternate",key:"mobileAlternate",media:e.mobileAlternate.media,href:e.mobileAlternate.href})),e.languageAlternates&&e.languageAlternates.length>0&&e.languageAlternates.forEach((function(e){o.push(h.a.createElement("link",{rel:"alternate",key:"languageAlternate-"+e.hrefLang,hrefLang:e.hrefLang,href:e.href}))})),e.twitter&&(e.twitter.cardType&&o.push(h.a.createElement("meta",{key:"twitter:card",name:"twitter:card",content:e.twitter.cardType})),e.twitter.site&&o.push(h.a.createElement("meta",{key:"twitter:site",name:"twitter:site",content:e.twitter.site})),e.twitter.handle&&o.push(h.a.createElement("meta",{key:"twitter:creator",name:"twitter:creator",content:e.twitter.handle}))),e.facebook&&e.facebook.appId&&o.push(h.a.createElement("meta",{key:"fb:app_id",property:"fb:app_id",content:e.facebook.appId})),null!=(t=e.openGraph)&&t.title||e.title)&&o.push(h.a.createElement("meta",{key:"og:title",property:"og:title",content:(null==(i=e.openGraph)?void 0:i.title)||a}));(null!=(r=e.openGraph)&&r.description||e.description)&&o.push(h.a.createElement("meta",{key:"og:description",property:"og:description",content:(null==(u=e.openGraph)?void 0:u.description)||e.description}));if(e.openGraph){if((e.openGraph.url||e.canonical)&&o.push(h.a.createElement("meta",{key:"og:url",property:"og:url",content:e.openGraph.url||e.canonical})),e.openGraph.type){var E=e.openGraph.type.toLowerCase();o.push(h.a.createElement("meta",{key:"og:type",property:"og:type",content:E})),"profile"===E&&e.openGraph.profile?(e.openGraph.profile.firstName&&o.push(h.a.createElement("meta",{key:"profile:first_name",property:"profile:first_name",content:e.openGraph.profile.firstName})),e.openGraph.profile.lastName&&o.push(h.a.createElement("meta",{key:"profile:last_name",property:"profile:last_name",content:e.openGraph.profile.lastName})),e.openGraph.profile.username&&o.push(h.a.createElement("meta",{key:"profile:username",property:"profile:username",content:e.openGraph.profile.username})),e.openGraph.profile.gender&&o.push(h.a.createElement("meta",{key:"profile:gender",property:"profile:gender",content:e.openGraph.profile.gender}))):"book"===E&&e.openGraph.book?(e.openGraph.book.authors&&e.openGraph.book.authors.length&&e.openGraph.book.authors.forEach((function(e,t){o.push(h.a.createElement("meta",{key:"book:author:0"+t,property:"book:author",content:e}))})),e.openGraph.book.isbn&&o.push(h.a.createElement("meta",{key:"book:isbn",property:"book:isbn",content:e.openGraph.book.isbn})),e.openGraph.book.releaseDate&&o.push(h.a.createElement("meta",{key:"book:release_date",property:"book:release_date",content:e.openGraph.book.releaseDate})),e.openGraph.book.tags&&e.openGraph.book.tags.length&&e.openGraph.book.tags.forEach((function(e,t){o.push(h.a.createElement("meta",{key:"book:tag:0"+t,property:"book:tag",content:e}))}))):"article"===E&&e.openGraph.article?(e.openGraph.article.publishedTime&&o.push(h.a.createElement("meta",{key:"article:published_time",property:"article:published_time",content:e.openGraph.article.publishedTime})),e.openGraph.article.modifiedTime&&o.push(h.a.createElement("meta",{key:"article:modified_time",property:"article:modified_time",content:e.openGraph.article.modifiedTime})),e.openGraph.article.expirationTime&&o.push(h.a.createElement("meta",{key:"article:expiration_time",property:"article:expiration_time",content:e.openGraph.article.expirationTime})),e.openGraph.article.authors&&e.openGraph.article.authors.length&&e.openGraph.article.authors.forEach((function(e,t){o.push(h.a.createElement("meta",{key:"article:author:0"+t,property:"article:author",content:e}))})),e.openGraph.article.section&&o.push(h.a.createElement("meta",{key:"article:section",property:"article:section",content:e.openGraph.article.section})),e.openGraph.article.tags&&e.openGraph.article.tags.length&&e.openGraph.article.tags.forEach((function(e,t){o.push(h.a.createElement("meta",{key:"article:tag:0"+t,property:"article:tag",content:e}))}))):"video.movie"!==E&&"video.episode"!==E&&"video.tv_show"!==E&&"video.other"!==E||!e.openGraph.video||(e.openGraph.video.actors&&e.openGraph.video.actors.length&&e.openGraph.video.actors.forEach((function(e,t){e.profile&&o.push(h.a.createElement("meta",{key:"video:actor:0"+t,property:"video:actor",content:e.profile})),e.role&&o.push(h.a.createElement("meta",{key:"video:actor:role:0"+t,property:"video:actor:role",content:e.role}))})),e.openGraph.video.directors&&e.openGraph.video.directors.length&&e.openGraph.video.directors.forEach((function(e,t){o.push(h.a.createElement("meta",{key:"video:director:0"+t,property:"video:director",content:e}))})),e.openGraph.video.writers&&e.openGraph.video.writers.length&&e.openGraph.video.writers.forEach((function(e,t){o.push(h.a.createElement("meta",{key:"video:writer:0"+t,property:"video:writer",content:e}))})),e.openGraph.video.duration&&o.push(h.a.createElement("meta",{key:"video:duration",property:"video:duration",content:e.openGraph.video.duration.toString()})),e.openGraph.video.releaseDate&&o.push(h.a.createElement("meta",{key:"video:release_date",property:"video:release_date",content:e.openGraph.video.releaseDate})),e.openGraph.video.tags&&e.openGraph.video.tags.length&&e.openGraph.video.tags.forEach((function(e,t){o.push(h.a.createElement("meta",{key:"video:tag:0"+t,property:"video:tag",content:e}))})),e.openGraph.video.series&&o.push(h.a.createElement("meta",{key:"video:series",property:"video:series",content:e.openGraph.video.series})))}e.defaultOpenGraphImageWidth&&(w.defaultOpenGraphImageWidth=e.defaultOpenGraphImageWidth),e.defaultOpenGraphImageHeight&&(w.defaultOpenGraphImageHeight=e.defaultOpenGraphImageHeight),e.openGraph.images&&e.openGraph.images.length&&o.push.apply(o,k("image",e.openGraph.images,{defaultWidth:w.defaultOpenGraphImageWidth,defaultHeight:w.defaultOpenGraphImageHeight})),e.defaultOpenGraphVideoWidth&&(w.defaultOpenGraphVideoWidth=e.defaultOpenGraphVideoWidth),e.defaultOpenGraphVideoHeight&&(w.defaultOpenGraphVideoHeight=e.defaultOpenGraphVideoHeight),e.openGraph.videos&&e.openGraph.videos.length&&o.push.apply(o,k("video",e.openGraph.videos,{defaultWidth:w.defaultOpenGraphVideoWidth,defaultHeight:w.defaultOpenGraphVideoHeight})),e.openGraph.locale&&o.push(h.a.createElement("meta",{key:"og:locale",property:"og:locale",content:e.openGraph.locale})),e.openGraph.site_name&&o.push(h.a.createElement("meta",{key:"og:site_name",property:"og:site_name",content:e.openGraph.site_name}))}return e.canonical&&o.push(h.a.createElement("link",{rel:"canonical",href:e.canonical,key:"canonical"})),e.additionalMetaTags&&e.additionalMetaTags.length>0&&e.additionalMetaTags.forEach((function(e){var t,r,n;o.push(h.a.createElement("meta",b({key:"meta:"+(null!=(t=null!=(r=null!=(n=e.keyOverride)?n:e.name)?r:e.property)?t:e.httpEquiv)},e)))})),null!=(n=e.additionalLinkTags)&&n.length&&e.additionalLinkTags.forEach((function(e){var t;o.push(h.a.createElement("link",b({key:"link"+(null!=(t=e.keyOverride)?t:e.href)+e.rel},e)))})),o},O=(d.Component,function(e){function t(){return e.apply(this,arguments)||this}return _(t,e),t.prototype.render=function(){var e=this.props,t=e.title,r=e.noindex,n=void 0!==r&&r,o=e.nofollow,a=e.robotsProps,i=e.description,u=e.canonical,l=e.openGraph,p=e.facebook,c=e.twitter,s=e.additionalMetaTags,f=e.titleTemplate,d=e.mobileAlternate,m=e.languageAlternates,y=e.additionalLinkTags,g=e.disableGooglebot;return h.a.createElement(v.a,null,G({title:t,noindex:n,nofollow:o,robotsProps:a,description:i,canonical:u,facebook:p,openGraph:l,additionalMetaTags:s,twitter:c,titleTemplate:f,mobileAlternate:d,languageAlternates:m,additionalLinkTags:y,disableGooglebot:g}))},t}(d.Component)),E=r("a6RD"),x=r.n(E),P=h.a.createElement;function j(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=f(e);if(t){var o=f(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return s(this,r)}}var S=x()((function(){return Promise.all([r.e(2),r.e(4),r.e(54)]).then(r.bind(null,"dFpG"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["dFpG"]},modules:["../client/components/Header"]}}),M=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Object(l.a)(e,t)}(c,e);var t,r,n,p=j(c);function c(){return i(this,c),p.apply(this,arguments)}return t=c,r=[{key:"render",value:function(){var e=this.props,t=e.Component,r=e.pageProps;return P(h.a.Fragment,null,P(O,{title:"forbitspace",description:"forbitspace is an interoperability aggregator protocol that unites decentralized applications across disparate blockchains. Allows crypto traders to tap deep liquidity and receive better pricing one single interface."}),P(S,null),P("div",{className:"main"},P(t,r)))}}],n=[{key:"getInitialProps",value:function(){var e=Object(a.a)(o.a.mark((function e(t){var r,n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.Component,n=t.ctx,a={},!r.getInitialProps){e.next=6;break}return e.next=5,r.getInitialProps(n);case 5:a=e.sent;case 6:return e.abrupt("return",{pageProps:a});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}],r&&u(t.prototype,r),n&&u(t,n),c}(y.a)},a6RD:function(e,t,r){"use strict";var n=r("oI91");function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.__esModule=!0,t.noSSR=l,t.default=function(e,t){var r=i.default,n={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};e instanceof Promise?n.loader=function(){return e}:"function"===typeof e?n.loader=e:"object"===typeof e&&(n=a(a({},n),e));if(n=a(a({},n),t),"object"===typeof e&&!(e instanceof Promise)&&(e.render&&(n.render=function(t,r){return e.render(r,t)}),e.modules)){r=i.default.Map;var o={},u=e.modules();Object.keys(u).forEach((function(e){var t=u[e];"function"!==typeof t.then?o[e]=t:o[e]=function(){return t.then((function(e){return e.default||e}))}})),n.loader=o}n.loadableGenerated&&delete(n=a(a({},n),n.loadableGenerated)).loadableGenerated;if("boolean"===typeof n.ssr){if(!n.ssr)return delete n.ssr,l(r,n);delete n.ssr}return r(n)};u(r("q1tI"));var i=u(r("2qu3"));function u(e){return e&&e.__esModule?e:{default:e}}function l(e,t){return delete t.webpack,delete t.modules,e(t)}},cDf5:function(e,t){function r(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?(e.exports=r=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=r=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),r(t)}e.exports=r,e.exports.default=e.exports,e.exports.__esModule=!0},i2R6:function(e,t){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}},jwwS:function(e,t,r){"use strict";var n;t.__esModule=!0,t.LoadableContext=void 0;var o=((n=r("q1tI"))&&n.__esModule?n:{default:n}).default.createContext(null);t.LoadableContext=o},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(e,t,r){"use strict";var n;t.__esModule=!0,t.AmpStateContext=void 0;var o=((n=r("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=o},mPvQ:function(e,t,r){var n=r("5fIB"),o=r("rlHP"),a=r("KckH"),i=r("kG2m");e.exports=function(e){return n(e)||o(e)||a(e)||i()}},o0o1:function(e,t,r){e.exports=r("ls82")},oI91:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},qXWd:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},s4An:function(e,t,r){"use strict";function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}r.d(t,"a",(function(){return n}))},tCBg:function(e,t,r){var n=r("C+bE"),o=r("qXWd");e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!==typeof t?o(e):t}}},[[0,1,0,3]]]);