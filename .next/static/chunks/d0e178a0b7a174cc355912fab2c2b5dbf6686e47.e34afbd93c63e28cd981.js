(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[4],{"1Yj4":function(e,n,t){"use strict";function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var o,i=t("q1tI"),a=t.n(i),s=t("17x9"),c=t.n(s),u=t("TSYQ"),f=t.n(u);var l="object"===typeof window&&window.Element||function(){};c.a.oneOfType([c.a.string,c.a.func,function(e,n,t){if(!(e[n]instanceof l))return new Error("Invalid prop `"+n+"` supplied to `"+t+"`. Expected prop to be an instance of Element. Validation failed.")},c.a.shape({current:c.a.any})]);var p=c.a.oneOfType([c.a.func,c.a.string,c.a.shape({$$typeof:c.a.symbol,render:c.a.func}),c.a.arrayOf(c.a.oneOfType([c.a.func,c.a.string,c.a.shape({$$typeof:c.a.symbol,render:c.a.func})]))]);"undefined"===typeof window||!window.document||window.document.createElement;var d={tag:p,fluid:c.a.oneOfType([c.a.bool,c.a.string]),className:c.a.string,cssModule:c.a.object},h=function(e){var n=e.className,t=e.cssModule,i=e.fluid,s=e.tag,c=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["className","cssModule","fluid","tag"]),u="container";!0===i?u="container-fluid":i&&(u="container-"+i);var l=function(e,n){return void 0===e&&(e=""),void 0===n&&(n=o),n?e.split(" ").map((function(e){return n[e]||e})).join(" "):e}(f()(n,u),t);return a.a.createElement(s,r({},c,{className:l}))};h.propTypes=d,h.defaultProps={tag:"div"};n.a=h},"2SVd":function(e,n,t){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},"5oMp":function(e,n,t){"use strict";e.exports=function(e,n){return n?e.replace(/\/+$/,"")+"/"+n.replace(/^\/+/,""):e}},"9rSQ":function(e,n,t){"use strict";var r=t("xTJ+");function o(){this.handlers=[]}o.prototype.use=function(e,n){return this.handlers.push({fulfilled:e,rejected:n}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,(function(n){null!==n&&e(n)}))},e.exports=o},CgaS:function(e,n,t){"use strict";var r=t("xTJ+"),o=t("MLWZ"),i=t("9rSQ"),a=t("UnBK"),s=t("SntB");function c(e){this.defaults=e,this.interceptors={request:new i,response:new i}}c.prototype.request=function(e){"string"===typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=s(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var n=[a,void 0],t=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){n.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){n.push(e.fulfilled,e.rejected)}));n.length;)t=t.then(n.shift(),n.shift());return t},c.prototype.getUri=function(e){return e=s(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){c.prototype[e]=function(n,t){return this.request(s(t||{},{method:e,url:n,data:(t||{}).data}))}})),r.forEach(["post","put","patch"],(function(e){c.prototype[e]=function(n,t,r){return this.request(s(r||{},{method:e,url:n,data:t}))}})),e.exports=c},DfZB:function(e,n,t){"use strict";e.exports=function(e){return function(n){return e.apply(null,n)}}},HSsa:function(e,n,t){"use strict";e.exports=function(e,n){return function(){for(var t=new Array(arguments.length),r=0;r<t.length;r++)t[r]=arguments[r];return e.apply(n,t)}}},"HaE+":function(e,n,t){"use strict";function r(e,n,t,r,o,i,a){try{var s=e[i](a),c=s.value}catch(u){return void t(u)}s.done?n(c):Promise.resolve(c).then(r,o)}function o(e){return function(){var n=this,t=arguments;return new Promise((function(o,i){var a=e.apply(n,t);function s(e){r(a,o,i,s,c,"next",e)}function c(e){r(a,o,i,s,c,"throw",e)}s(void 0)}))}}t.d(n,"a",(function(){return o}))},JEQr:function(e,n,t){"use strict";(function(n){var r=t("xTJ+"),o=t("yK9s"),i={"Content-Type":"application/x-www-form-urlencoded"};function a(e,n){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=n)}var s={adapter:function(){var e;return("undefined"!==typeof XMLHttpRequest||"undefined"!==typeof n&&"[object process]"===Object.prototype.toString.call(n))&&(e=t("tQ2B")),e}(),transformRequest:[function(e,n){return o(n,"Accept"),o(n,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(a(n,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(a(n,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"===typeof e)try{e=JSON.parse(e)}catch(n){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(e){s.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){s.headers[e]=r.merge(i)})),e.exports=s}).call(this,t("8oxB"))},LYNF:function(e,n,t){"use strict";var r=t("OH9c");e.exports=function(e,n,t,o,i){var a=new Error(e);return r(a,n,t,o,i)}},Lmem:function(e,n,t){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},MLWZ:function(e,n,t){"use strict";var r=t("xTJ+");function o(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,n,t){if(!n)return e;var i;if(t)i=t(n);else if(r.isURLSearchParams(n))i=n.toString();else{var a=[];r.forEach(n,(function(e,n){null!==e&&"undefined"!==typeof e&&(r.isArray(e)?n+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),a.push(o(n)+"="+o(e))})))})),i=a.join("&")}if(i){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}},OH9c:function(e,n,t){"use strict";e.exports=function(e,n,t,r,o){return e.config=n,t&&(e.code=t),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},OTTw:function(e,n,t){"use strict";var r=t("xTJ+");e.exports=r.isStandardBrowserEnv()?function(){var e,n=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");function o(e){var r=e;return n&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return e=o(window.location.href),function(n){var t=r.isString(n)?o(n):n;return t.protocol===e.protocol&&t.host===e.host}}():function(){return!0}},"Rn+g":function(e,n,t){"use strict";var r=t("LYNF");e.exports=function(e,n,t){var o=t.config.validateStatus;t.status&&o&&!o(t.status)?n(r("Request failed with status code "+t.status,t.config,null,t.request,t)):e(t)}},SntB:function(e,n,t){"use strict";var r=t("xTJ+");e.exports=function(e,n){n=n||{};var t={},o=["url","method","data"],i=["headers","auth","proxy","params"],a=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],s=["validateStatus"];function c(e,n){return r.isPlainObject(e)&&r.isPlainObject(n)?r.merge(e,n):r.isPlainObject(n)?r.merge({},n):r.isArray(n)?n.slice():n}function u(o){r.isUndefined(n[o])?r.isUndefined(e[o])||(t[o]=c(void 0,e[o])):t[o]=c(e[o],n[o])}r.forEach(o,(function(e){r.isUndefined(n[e])||(t[e]=c(void 0,n[e]))})),r.forEach(i,u),r.forEach(a,(function(o){r.isUndefined(n[o])?r.isUndefined(e[o])||(t[o]=c(void 0,e[o])):t[o]=c(void 0,n[o])})),r.forEach(s,(function(r){r in n?t[r]=c(e[r],n[r]):r in e&&(t[r]=c(void 0,e[r]))}));var f=o.concat(i).concat(a).concat(s),l=Object.keys(e).concat(Object.keys(n)).filter((function(e){return-1===f.indexOf(e)}));return r.forEach(l,u),t}},TSYQ:function(e,n,t){var r;!function(){"use strict";var t={}.hasOwnProperty;function o(){for(var e=[],n=0;n<arguments.length;n++){var r=arguments[n];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var a=o.apply(null,r);a&&e.push(a)}else if("object"===i)for(var s in r)t.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(n,[]))||(e.exports=r)}()},UnBK:function(e,n,t){"use strict";var r=t("xTJ+"),o=t("xAGQ"),i=t("Lmem"),a=t("JEQr");function s(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return s(e),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(n){delete e.headers[n]})),(e.adapter||a.adapter)(e).then((function(n){return s(e),n.data=o(n.data,n.headers,e.transformResponse),n}),(function(n){return i(n)||(s(e),n&&n.response&&(n.response.data=o(n.response.data,n.response.headers,e.transformResponse))),Promise.reject(n)}))}},YFqc:function(e,n,t){e.exports=t("cTJO")},cTJO:function(e,n,t){"use strict";var r=t("zoAU"),o=t("7KCV");n.__esModule=!0,n.default=void 0;var i=o(t("q1tI")),a=t("elyg"),s=t("nOHt"),c=t("vNVm"),u={};function f(e,n,t,r){if(e&&(0,a.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[n+"%"+t+(o?"%"+o:"")]=!0}}var l=function(e){var n=!1!==e.prefetch,t=(0,s.useRouter)(),o=t&&t.pathname||"/",l=i.default.useMemo((function(){var n=(0,a.resolveHref)(o,e.href,!0),t=r(n,2),i=t[0],s=t[1];return{href:i,as:e.as?(0,a.resolveHref)(o,e.as):s||i}}),[o,e.href,e.as]),p=l.href,d=l.as,h=e.children,m=e.replace,v=e.shallow,g=e.scroll,y=e.locale;"string"===typeof h&&(h=i.default.createElement("a",null,h));var b=i.Children.only(h),x=b&&"object"===typeof b&&b.ref,w=(0,c.useIntersection)({rootMargin:"200px"}),k=r(w,2),O=k[0],E=k[1],j=i.default.useCallback((function(e){O(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,O]);(0,i.useEffect)((function(){var e=E&&n&&(0,a.isLocalURL)(p),r="undefined"!==typeof y?y:t&&t.locale,o=u[p+"%"+d+(r?"%"+r:"")];e&&!o&&f(t,p,d,{locale:r})}),[d,p,E,y,n,t]);var S={ref:j,onClick:function(e){b.props&&"function"===typeof b.props.onClick&&b.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,i,s,c){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(t))&&(e.preventDefault(),null==s&&(s=r.indexOf("#")<0),n[o?"replace":"push"](t,r,{shallow:i,locale:c,scroll:s}).then((function(e){e&&s&&document.body.focus()})))}(e,t,p,d,m,v,g,y)},onMouseEnter:function(e){(0,a.isLocalURL)(p)&&(b.props&&"function"===typeof b.props.onMouseEnter&&b.props.onMouseEnter(e),f(t,p,d,{priority:!0}))}};if(e.passHref||"a"===b.type&&!("href"in b.props)){var T="undefined"!==typeof y?y:t&&t.locale,L=(0,a.getDomainLocale)(d,T,t&&t.locales,t&&t.domainLocales);S.href=L||(0,a.addBasePath)((0,a.addLocale)(d,T,t&&t.defaultLocale))}return i.default.cloneElement(b,S)};n.default=l},endd:function(e,n,t){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},eqyj:function(e,n,t){"use strict";var r=t("xTJ+");e.exports=r.isStandardBrowserEnv()?{write:function(e,n,t,o,i,a){var s=[];s.push(e+"="+encodeURIComponent(n)),r.isNumber(t)&&s.push("expires="+new Date(t).toGMTString()),r.isString(o)&&s.push("path="+o),r.isString(i)&&s.push("domain="+i),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var n=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},g7np:function(e,n,t){"use strict";var r=t("2SVd"),o=t("5oMp");e.exports=function(e,n){return e&&!r(n)?o(e,n):n}},"jfS+":function(e,n,t){"use strict";var r=t("endd");function o(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");var n;this.promise=new Promise((function(e){n=e}));var t=this;e((function(e){t.reason||(t.reason=new r(e),n(t.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o((function(n){e=n})),cancel:e}},e.exports=o},o0o1:function(e,n,t){e.exports=t("ls82")},tQ2B:function(e,n,t){"use strict";var r=t("xTJ+"),o=t("Rn+g"),i=t("eqyj"),a=t("MLWZ"),s=t("g7np"),c=t("w0Vi"),u=t("OTTw"),f=t("LYNF");e.exports=function(e){return new Promise((function(n,t){var l=e.data,p=e.headers;r.isFormData(l)&&delete p["Content-Type"];var d=new XMLHttpRequest;if(e.auth){var h=e.auth.username||"",m=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";p.Authorization="Basic "+btoa(h+":"+m)}var v=s(e.baseURL,e.url);if(d.open(e.method.toUpperCase(),a(v,e.params,e.paramsSerializer),!0),d.timeout=e.timeout,d.onreadystatechange=function(){if(d&&4===d.readyState&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in d?c(d.getAllResponseHeaders()):null,i={data:e.responseType&&"text"!==e.responseType?d.response:d.responseText,status:d.status,statusText:d.statusText,headers:r,config:e,request:d};o(n,t,i),d=null}},d.onabort=function(){d&&(t(f("Request aborted",e,"ECONNABORTED",d)),d=null)},d.onerror=function(){t(f("Network Error",e,null,d)),d=null},d.ontimeout=function(){var n="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(n=e.timeoutErrorMessage),t(f(n,e,"ECONNABORTED",d)),d=null},r.isStandardBrowserEnv()){var g=(e.withCredentials||u(v))&&e.xsrfCookieName?i.read(e.xsrfCookieName):void 0;g&&(p[e.xsrfHeaderName]=g)}if("setRequestHeader"in d&&r.forEach(p,(function(e,n){"undefined"===typeof l&&"content-type"===n.toLowerCase()?delete p[n]:d.setRequestHeader(n,e)})),r.isUndefined(e.withCredentials)||(d.withCredentials=!!e.withCredentials),e.responseType)try{d.responseType=e.responseType}catch(y){if("json"!==e.responseType)throw y}"function"===typeof e.onDownloadProgress&&d.addEventListener("progress",e.onDownloadProgress),"function"===typeof e.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){d&&(d.abort(),t(e),d=null)})),l||(l=null),d.send(l)}))}},vDqi:function(e,n,t){e.exports=t("zuR4")},vNVm:function(e,n,t){"use strict";var r=t("zoAU"),o=t("AroE");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!s,o=(0,i.useRef)(),u=(0,i.useState)(!1),f=r(u,2),l=f[0],p=f[1],d=(0,i.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),t||l||e&&e.tagName&&(o.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=c.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return c.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,i=r.observer,a=r.elements;return a.set(e,n),i.observe(e),function(){a.delete(e),i.unobserve(e),0===a.size&&(i.disconnect(),c.delete(o))}}(e,(function(e){return e&&p(e)}),{rootMargin:n}))}),[t,n,l]);return(0,i.useEffect)((function(){s||l||(0,a.default)((function(){return p(!0)}))}),[l]),[d,l]};var i=t("q1tI"),a=o(t("0G5g")),s="undefined"!==typeof IntersectionObserver;var c=new Map},w0Vi:function(e,n,t){"use strict";var r=t("xTJ+"),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var n,t,i,a={};return e?(r.forEach(e.split("\n"),(function(e){if(i=e.indexOf(":"),n=r.trim(e.substr(0,i)).toLowerCase(),t=r.trim(e.substr(i+1)),n){if(a[n]&&o.indexOf(n)>=0)return;a[n]="set-cookie"===n?(a[n]?a[n]:[]).concat([t]):a[n]?a[n]+", "+t:t}})),a):a}},xAGQ:function(e,n,t){"use strict";var r=t("xTJ+");e.exports=function(e,n,t){return r.forEach(t,(function(t){e=t(e,n)})),e}},"xTJ+":function(e,n,t){"use strict";var r=t("HSsa"),o=Object.prototype.toString;function i(e){return"[object Array]"===o.call(e)}function a(e){return"undefined"===typeof e}function s(e){return null!==e&&"object"===typeof e}function c(e){if("[object Object]"!==o.call(e))return!1;var n=Object.getPrototypeOf(e);return null===n||n===Object.prototype}function u(e){return"[object Function]"===o.call(e)}function f(e,n){if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),i(e))for(var t=0,r=e.length;t<r;t++)n.call(null,e[t],t,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.call(null,e[o],o,e)}e.exports={isArray:i,isArrayBuffer:function(e){return"[object ArrayBuffer]"===o.call(e)},isBuffer:function(e){return null!==e&&!a(e)&&null!==e.constructor&&!a(e.constructor)&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!==typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"===typeof e},isNumber:function(e){return"number"===typeof e},isObject:s,isPlainObject:c,isUndefined:a,isDate:function(e){return"[object Date]"===o.call(e)},isFile:function(e){return"[object File]"===o.call(e)},isBlob:function(e){return"[object Blob]"===o.call(e)},isFunction:u,isStream:function(e){return s(e)&&u(e.pipe)},isURLSearchParams:function(e){return"undefined"!==typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)},forEach:f,merge:function e(){var n={};function t(t,r){c(n[r])&&c(t)?n[r]=e(n[r],t):c(t)?n[r]=e({},t):i(t)?n[r]=t.slice():n[r]=t}for(var r=0,o=arguments.length;r<o;r++)f(arguments[r],t);return n},extend:function(e,n,t){return f(n,(function(n,o){e[o]=t&&"function"===typeof n?r(n,t):n})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}}},yK9s:function(e,n,t){"use strict";var r=t("xTJ+");e.exports=function(e,n){r.forEach(e,(function(t,r){r!==n&&r.toUpperCase()===n.toUpperCase()&&(e[n]=t,delete e[r])}))}},yZXQ:function(e,n,t){"use strict";var r=t("h4VS"),o=t("o0o1"),i=t.n(o),a=t("HaE+"),s=t("q1tI"),c=t.n(s),u=t("vOnD"),f=t("YFqc"),l=t.n(f),p=t("1Yj4"),d=[{link:"https://medium.com/@forbitspace",url:"./images/icon-social-footer/1.svg"},{link:"https://www.reddit.com/r/forbitspace/",url:"./images/icon-social-footer/2.svg"},{link:"https://discord.com/invite/forbitspace",url:"./images/icon-social-footer/3.svg"},{link:"https://github.com/forbitspace",url:"./images/icon-social-footer/4.svg"},{link:"https://t.me/forbitspace",url:"./images/icon-social-footer/5.svg"},{link:"https://twitter.com/forbitspace",url:"./images/icon-social-footer/6.svg"}],h=[{link:"",nav:"Space Trade",contents:[{link:"/aggregation",content:"Aggregation Protocol"},{link:"/liquidity",content:"Liquidity Protocol"},{link:"/limit",content:"Limit Order Protocol"},{link:"/derivative",content:"Derivative Protocol"}]},{link:"",nav:"Governance",contents:[{link:"/dao",content:"Space Dao"}]},{link:"",nav:"Developers",contents:[{link:"",content:"Documentation"},{link:"../forbitspace-whitepaper.pdf",content:"Whitepaper",outLink:!0},{link:"https://github.com/forbitspace",content:"Github",outLink:!0},{link:"",content:"Bug bounty",disable:!0}]},{nav:"Self-custody",link:"/selfcustody",contents:[{link:"/bridge",content:"Bridge Space"},{link:"/mobile-wallet",content:"Mobile wallet"},{link:"/smart-contract",content:"Smart contract wallet"},{link:"/assets",content:"Asset management"}]},{nav:"Support",link:"",contents:[{link:"https://help.forbitspace.com/",content:"Help Center",outLink:!0},{link:"../documents/terms-of-service.pdf",content:"Term of Service",outLink:!0},{link:"../documents/privacy-policy.pdf",content:"Privacy Policy",outLink:!0}]}],m=t("vDqi"),v=t.n(m),g=c.a.createElement;function y(){var e=Object(r.a)(["\n  position: relative;\n  border-radius: 10px;\n  margin-right: 5px;\n"]);return y=function(){return e},e}function b(){var e=Object(r.a)(['\n  width: 100%;\n  height: 30px;\n  margin-right: 5px;\n  font-family: "Averta";\n  font-size: 14px;\n  padding: 10px 15px;\n  line-height: 20px;\n  outline: 0;\n  transition: all 0.3s ease-in-out;\n  background: transparent;\n  border-radius: 10px;\n  position: relative;\n  border: none;\n  background: #cff3f4;\n  border: 1px solid #0047b2;\n']);return b=function(){return e},e}function x(){var e=Object(r.a)(["\n  font-size: 14px;\n  font-weight: 300;\n"]);return x=function(){return e},e}function w(){var e=Object(r.a)(["\n  margin-bottom: 10px;\n  color: #ffffff;\n  font-family: sans-serif;\n  font-size: 13px;\n  font-weight: 100;\n"]);return w=function(){return e},e}function k(){var e=Object(r.a)(["\n  margin-bottom: 10px;\n  color: #ffffff;\n  font-family: sans-serif;\n  font-size: 16px;\n  font-weight: 600;\n  a {\n    text-decoration: none;\n  }\n"]);return k=function(){return e},e}function O(){var e=Object(r.a)(["\n  font-size: 12px;\n"]);return O=function(){return e},e}function E(){var e=Object(r.a)(["\n  display: flex;\n  width: 100%;\n  flex-wrap: wrap;\n  padding-top: 25px;\n\n  ul {\n    padding-left: 0;\n    width: calc(100% / 6);\n    // text-align:right;\n\n    .form-wrap {\n      display: flex;\n      align-items: center;\n      margin-bottom: 25px;\n\n      input {\n      }\n\n      button {\n        width: 60px;\n        height: 30px;\n        border: none;\n        outline: none;\n        background-image: linear-gradient(\n          17deg,\n          #00ff36 -68%,\n          #00ee57 -43%,\n          #00c5ad 14%,\n          #00a4f1 57%,\n          #0b18fc 154%,\n          #0d00ff 171%\n        );\n        border-radius: 8px;\n        transition: all 0.5s ease-in-out;\n        background-size: 200%;\n        background-position: 95%;\n\n        i {\n          color: #fff;\n          font-size: 12px;\n        }\n\n        &:hover {\n          background-size: 200%;\n          background-position: right;\n        }\n      }\n    }\n\n    li {\n      font-size: 12px;\n      font-weight: 300;\n      font-family: sans-serif;\n      margin-bottom: 4px;\n      a {\n        text-decoration: none;\n        color: #4e4f50;\n\n        &:hover {\n          text-decoration: underline;\n        }\n      }\n    }\n\n    @media (max-width: 1024px) {\n      width: calc(100% / 5);\n      margin-right: 0;\n      text-align: left;\n      form {\n        justify-content: center;\n      }\n      :last-child {\n        width: 100%;\n        text-align: center;\n      }\n    }\n    @media (max-width: 768px) {\n      /* width: calc(100% / 6); */\n      margin-right: 0;\n      text-align: left;\n      form {\n        justify-content: center;\n      }\n      :last-child {\n        width: 100%;\n        text-align: center;\n      }\n    }\n    @media (max-width: 576px) {\n      width: 32%;\n    }\n    @media (max-width: 320px) {\n      width: 50%;\n    }\n  }\n"]);return E=function(){return e},e}function j(){var e=Object(r.a)(["\n  position: relative;\n  padding: 30px 0 0;\n  overflow: hidden;\n\n  @media (max-width: 576px) {\n    padding: 40px 0;\n\n    &:after {\n      content: none;\n    }\n  }\n"]);return j=function(){return e},e}function S(){var e=Object(r.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n"]);return S=function(){return e},e}function T(){var e=Object(r.a)(["\n  max-width: 20px;\n  width: 100%;\n  transition: all ease-in-out 0.2s;\n  :hover {\n    transform: scale(1.2);\n  }\n"]);return T=function(){return e},e}function L(){var e=Object(r.a)(["\n  background-size: 100%;\n  background-position: bottom;\n  background-repeat: no-repeat;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0.1;\n  z-index: -1;\n"]);return L=function(){return e},e}var C=u.b.div(L()),N=u.b.img(T()),R=u.b.div(S()),A=u.b.section(j()),B=u.b.div(E()),P=u.b.div(O()),U=u.b.div(k()),q=u.b.div(w()),z=u.b.p(x()),D=u.b.input(b()),M=u.b.div(y());n.a=function(){var e=Object(s.useState)(""),n=e[0],t=e[1],r=function(){var e=Object(a.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v()({method:"GET",url:"http://192.168.31.132:1234/v1/mailer?email=".concat(n)});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return g("footer",{className:"footer"},g(A,null,g(p.a,null,g(B,null,h.map((function(e,n){return g("ul",{className:"text-visi"},g(U,null," ",e.link?g(l.a,{href:e.link},e.nav):e.nav," "),e.contents.map((function(e,n){return g("li",null,e.disable?g(P,{href:"/"},e.content):e.outLink?g("a",{href:e.link,target:"_blank"},e.content):g(l.a,{href:e.link},e.content))})))})),g("ul",{className:"text-visi"},g(q,null,"Subscribe to our newsletter for updates"),g("div",{className:"form-wrap",action:""},g(M,null,g(D,{type:"text",className:"text bg-input-dark",placeholder:"your@email.com",pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$",required:!0,onChange:function(e){return function(e){t(e.target.value)}(e)},onSubmit:function(e){r(),e.preventDefault()}})),g("button",{type:"button","aria-label":"send-email-address",onClick:function(){!function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(n)?alert("Your email is invalid. Please try again!"):(r(),alert("Success! Thank you for joining us!"))}},g("i",{className:"fa fa-arrow-right"}))),g(z,{className:"text-dark"},"\xa9 2021 forbitspace"),g(R,null,d.map((function(e,n){return g("a",{href:e.link,target:"_blank",key:n},g(N,{src:e.url,alt:"icon social media"}))}))))))),g(C,null))}},zuR4:function(e,n,t){"use strict";var r=t("xTJ+"),o=t("HSsa"),i=t("CgaS"),a=t("SntB");function s(e){var n=new i(e),t=o(i.prototype.request,n);return r.extend(t,i.prototype,n),r.extend(t,n),t}var c=s(t("JEQr"));c.Axios=i,c.create=function(e){return s(a(c.defaults,e))},c.Cancel=t("endd"),c.CancelToken=t("jfS+"),c.isCancel=t("Lmem"),c.all=function(e){return Promise.all(e)},c.spread=t("DfZB"),e.exports=c,e.exports.default=c}}]);