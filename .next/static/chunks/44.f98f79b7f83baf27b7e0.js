(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[44],{"1Yj4":function(n,t,e){"use strict";function r(){return(r=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}var i,o=e("q1tI"),a=e.n(o),s=e("17x9"),u=e.n(s),c=e("TSYQ"),f=e.n(c);var l="object"===typeof window&&window.Element||function(){};u.a.oneOfType([u.a.string,u.a.func,function(n,t,e){if(!(n[t]instanceof l))return new Error("Invalid prop `"+t+"` supplied to `"+e+"`. Expected prop to be an instance of Element. Validation failed.")},u.a.shape({current:u.a.any})]);var p=u.a.oneOfType([u.a.func,u.a.string,u.a.shape({$$typeof:u.a.symbol,render:u.a.func}),u.a.arrayOf(u.a.oneOfType([u.a.func,u.a.string,u.a.shape({$$typeof:u.a.symbol,render:u.a.func})]))]);"undefined"===typeof window||!window.document||window.document.createElement;var d={tag:p,fluid:u.a.oneOfType([u.a.bool,u.a.string]),className:u.a.string,cssModule:u.a.object},h=function(n){var t=n.className,e=n.cssModule,o=n.fluid,s=n.tag,u=function(n,t){if(null==n)return{};var e,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||(i[e]=n[e]);return i}(n,["className","cssModule","fluid","tag"]),c="container";!0===o?c="container-fluid":o&&(c="container-"+o);var l=function(n,t){return void 0===n&&(n=""),void 0===t&&(t=i),t?n.split(" ").map((function(n){return t[n]||n})).join(" "):n}(f()(t,c),e);return a.a.createElement(s,r({},u,{className:l}))};h.propTypes=d,h.defaultProps={tag:"div"};t.a=h},"2SVd":function(n,t,e){"use strict";n.exports=function(n){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(n)}},"5oMp":function(n,t,e){"use strict";n.exports=function(n,t){return t?n.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):n}},"9rSQ":function(n,t,e){"use strict";var r=e("xTJ+");function i(){this.handlers=[]}i.prototype.use=function(n,t,e){return this.handlers.push({fulfilled:n,rejected:t,synchronous:!!e&&e.synchronous,runWhen:e?e.runWhen:null}),this.handlers.length-1},i.prototype.eject=function(n){this.handlers[n]&&(this.handlers[n]=null)},i.prototype.forEach=function(n){r.forEach(this.handlers,(function(t){null!==t&&n(t)}))},n.exports=i},CgaS:function(n,t,e){"use strict";var r=e("xTJ+"),i=e("MLWZ"),o=e("9rSQ"),a=e("UnBK"),s=e("SntB"),u=e("hIuj"),c=u.validators;function f(n){this.defaults=n,this.interceptors={request:new o,response:new o}}f.prototype.request=function(n){"string"===typeof n?(n=arguments[1]||{}).url=arguments[0]:n=n||{},(n=s(this.defaults,n)).method?n.method=n.method.toLowerCase():this.defaults.method?n.method=this.defaults.method.toLowerCase():n.method="get";var t=n.transitional;void 0!==t&&u.assertOptions(t,{silentJSONParsing:c.transitional(c.boolean,"1.0.0"),forcedJSONParsing:c.transitional(c.boolean,"1.0.0"),clarifyTimeoutError:c.transitional(c.boolean,"1.0.0")},!1);var e=[],r=!0;this.interceptors.request.forEach((function(t){"function"===typeof t.runWhen&&!1===t.runWhen(n)||(r=r&&t.synchronous,e.unshift(t.fulfilled,t.rejected))}));var i,o=[];if(this.interceptors.response.forEach((function(n){o.push(n.fulfilled,n.rejected)})),!r){var f=[a,void 0];for(Array.prototype.unshift.apply(f,e),f=f.concat(o),i=Promise.resolve(n);f.length;)i=i.then(f.shift(),f.shift());return i}for(var l=n;e.length;){var p=e.shift(),d=e.shift();try{l=p(l)}catch(h){d(h);break}}try{i=a(l)}catch(h){return Promise.reject(h)}for(;o.length;)i=i.then(o.shift(),o.shift());return i},f.prototype.getUri=function(n){return n=s(this.defaults,n),i(n.url,n.params,n.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(n){f.prototype[n]=function(t,e){return this.request(s(e||{},{method:n,url:t,data:(e||{}).data}))}})),r.forEach(["post","put","patch"],(function(n){f.prototype[n]=function(t,e,r){return this.request(s(r||{},{method:n,url:t,data:e}))}})),n.exports=f},DfZB:function(n,t,e){"use strict";n.exports=function(n){return function(t){return n.apply(null,t)}}},HSsa:function(n,t,e){"use strict";n.exports=function(n,t){return function(){for(var e=new Array(arguments.length),r=0;r<e.length;r++)e[r]=arguments[r];return n.apply(t,e)}}},"HaE+":function(n,t,e){"use strict";function r(n,t,e,r,i,o,a){try{var s=n[o](a),u=s.value}catch(c){return void e(c)}s.done?t(u):Promise.resolve(u).then(r,i)}function i(n){return function(){var t=this,e=arguments;return new Promise((function(i,o){var a=n.apply(t,e);function s(n){r(a,i,o,s,u,"next",n)}function u(n){r(a,i,o,s,u,"throw",n)}s(void 0)}))}}e.d(t,"a",(function(){return i}))},IhfZ:function(n,t,e){"use strict";e.r(t);var r=e("h4VS"),i=e("q1tI"),o=e.n(i),a=e("vOnD"),s=e("1Yj4"),u=o.a.createElement;function c(){var n=Object(r.a)(["\n  font-size: 22px;\n  font-weight: 300;\n  /* max-width: 600px; */\n  font-family: sans-serif;\n  span {\n    font-weight: 900;\n    font-style: italic;\n  }\n  @media (max-width: 768px) {\n    text-align: justify;\n    font-size: 16px;\n  }\n  @media (max-width: 576px) {\n    text-align: center;\n    font-size: 16px;\n  }\n"]);return c=function(){return n},n}function f(){var n=Object(r.a)([""]);return f=function(){return n},n}function l(){var n=Object(r.a)(["\n  font-size: 2rem;\n  font-weight: 500;\n  line-height: 40px;\n  letter-spacing: 1px;\n  @media (max-width: 768px) {\n    font-size: 26px;\n    letter-spacing: 1px;\n    font-weight: 500;\n    line-height: 25px;\n  }\n"]);return l=function(){return n},n}function p(){var n=Object(r.a)(["\n  /* margin-left: 80px; */\n  width: 50%;\n  text-align: left;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  @media (max-width: 768px) {\n    width: 100%;\n    margin-left: 0;\n    margin-top: 20px;\n    text-align: center;\n    align-items: center;\n  }\n"]);return p=function(){return n},n}function d(){var n=Object(r.a)(["\n  width: 100%;\n  text-align: right;\n  margin: 2rem 0;\n  img {\n    width: 100%;\n    height: auto;\n  }\n"]);return d=function(){return n},n}function h(){var n=Object(r.a)(["\n  width: 50%;\n\n  @media (max-width: 768px) {\n    width: 60%;\n  }\n"]);return h=function(){return n},n}function m(){var n=Object(r.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n  @media (max-width: 768px) {\n    flex-direction: column;\n  }\n"]);return m=function(){return n},n}function g(){var n=Object(r.a)(["\n  position: relative;\n  /* min-height: 88vh; */\n  padding: 12vh 0 0;\n  @media (max-width: 770px) {\n    padding-top: 60px;\n    /* min-height: 80vh; */\n  }\n"]);return g=function(){return n},n}var v=a.b.section(g()),x=Object(a.b)(s.a)(m()),b=a.b.div(h()),y=a.b.div(d()),w=a.b.div(p()),k=a.b.p(l()),j=a.b.div(f()),O=a.b.p(c()),S=function(){return u(v,null,u(x,null,u(w,{className:"title-banner text-dark text-visi"},u(k,null,"Derivative Protocol"),u(j,null,u(O,null,"Crypto derivatives trading is on the rise today. The futures and options allow the traders to hedge their positions and mitigate their risks during highly volatile trading days. Synthetic assets on decentralized trading platforms are fetching good trade volume."),u(O,null,u("span",null,"forbitspace")," derivatives protocol is used to create custom assets by using forward-looking features of locking the price in and the ability to either buy or sell an asset.",u("br",null),u("br",null),u("span",null,"forbitspace")," use a contract that represents an asset bought or sold at a future date for a future price, synthetics are the very underlying asset representative of other assets."))),u(b,null,u(y,null,u("img",{src:"../images/home-page/derivative.png",alt:""})))),u(x,null,u(O,null,"Derivatives in the Defi world are important because what is being built here is not a trading and speculation market; it\u2019s a use-case market. The principle of hedging goes far beyond Defi or cryptocurrencies. It\u2019s applicable to the traditional financial world as well.")))},E=e("yZXQ"),T=o.a.createElement;function N(){var n=Object(r.a)(["\n  min-height: calc(100vh - 330px);\n"]);return N=function(){return n},n}function A(){var n=Object(r.a)(["\n  position: relative;\n  overflow-x: hidden;\n  background-size: auto;\n"]);return A=function(){return n},n}var C=a.b.section(A()),L=a.b.div(N());t.default=function(){return T(C,null,T(L,null,T(S,null)),T(E.a,null))}},JEQr:function(n,t,e){"use strict";(function(t){var r=e("xTJ+"),i=e("yK9s"),o=e("OH9c"),a={"Content-Type":"application/x-www-form-urlencoded"};function s(n,t){!r.isUndefined(n)&&r.isUndefined(n["Content-Type"])&&(n["Content-Type"]=t)}var u={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:function(){var n;return("undefined"!==typeof XMLHttpRequest||"undefined"!==typeof t&&"[object process]"===Object.prototype.toString.call(t))&&(n=e("tQ2B")),n}(),transformRequest:[function(n,t){return i(t,"Accept"),i(t,"Content-Type"),r.isFormData(n)||r.isArrayBuffer(n)||r.isBuffer(n)||r.isStream(n)||r.isFile(n)||r.isBlob(n)?n:r.isArrayBufferView(n)?n.buffer:r.isURLSearchParams(n)?(s(t,"application/x-www-form-urlencoded;charset=utf-8"),n.toString()):r.isObject(n)||t&&"application/json"===t["Content-Type"]?(s(t,"application/json"),function(n,t,e){if(r.isString(n))try{return(t||JSON.parse)(n),r.trim(n)}catch(i){if("SyntaxError"!==i.name)throw i}return(e||JSON.stringify)(n)}(n)):n}],transformResponse:[function(n){var t=this.transitional,e=t&&t.silentJSONParsing,i=t&&t.forcedJSONParsing,a=!e&&"json"===this.responseType;if(a||i&&r.isString(n)&&n.length)try{return JSON.parse(n)}catch(s){if(a){if("SyntaxError"===s.name)throw o(s,this,"E_JSON_PARSE");throw s}}return n}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(n){return n>=200&&n<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(n){u.headers[n]={}})),r.forEach(["post","put","patch"],(function(n){u.headers[n]=r.merge(a)})),n.exports=u}).call(this,e("8oxB"))},LYNF:function(n,t,e){"use strict";var r=e("OH9c");n.exports=function(n,t,e,i,o){var a=new Error(n);return r(a,t,e,i,o)}},Lmem:function(n,t,e){"use strict";n.exports=function(n){return!(!n||!n.__CANCEL__)}},MLWZ:function(n,t,e){"use strict";var r=e("xTJ+");function i(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}n.exports=function(n,t,e){if(!t)return n;var o;if(e)o=e(t);else if(r.isURLSearchParams(t))o=t.toString();else{var a=[];r.forEach(t,(function(n,t){null!==n&&"undefined"!==typeof n&&(r.isArray(n)?t+="[]":n=[n],r.forEach(n,(function(n){r.isDate(n)?n=n.toISOString():r.isObject(n)&&(n=JSON.stringify(n)),a.push(i(t)+"="+i(n))})))})),o=a.join("&")}if(o){var s=n.indexOf("#");-1!==s&&(n=n.slice(0,s)),n+=(-1===n.indexOf("?")?"?":"&")+o}return n}},OH9c:function(n,t,e){"use strict";n.exports=function(n,t,e,r,i){return n.config=t,e&&(n.code=e),n.request=r,n.response=i,n.isAxiosError=!0,n.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},n}},OTTw:function(n,t,e){"use strict";var r=e("xTJ+");n.exports=r.isStandardBrowserEnv()?function(){var n,t=/(msie|trident)/i.test(navigator.userAgent),e=document.createElement("a");function i(n){var r=n;return t&&(e.setAttribute("href",r),r=e.href),e.setAttribute("href",r),{href:e.href,protocol:e.protocol?e.protocol.replace(/:$/,""):"",host:e.host,search:e.search?e.search.replace(/^\?/,""):"",hash:e.hash?e.hash.replace(/^#/,""):"",hostname:e.hostname,port:e.port,pathname:"/"===e.pathname.charAt(0)?e.pathname:"/"+e.pathname}}return n=i(window.location.href),function(t){var e=r.isString(t)?i(t):t;return e.protocol===n.protocol&&e.host===n.host}}():function(){return!0}},"Rn+g":function(n,t,e){"use strict";var r=e("LYNF");n.exports=function(n,t,e){var i=e.config.validateStatus;e.status&&i&&!i(e.status)?t(r("Request failed with status code "+e.status,e.config,null,e.request,e)):n(e)}},SgzI:function(n){n.exports=JSON.parse('{"name":"axios","version":"0.21.4","description":"Promise based HTTP client for the browser and node.js","main":"index.js","scripts":{"test":"grunt test","start":"node ./sandbox/server.js","build":"NODE_ENV=production grunt build","preversion":"npm test","version":"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json","postversion":"git push && git push --tags","examples":"node ./examples/server.js","coveralls":"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js","fix":"eslint --fix lib/**/*.js"},"repository":{"type":"git","url":"https://github.com/axios/axios.git"},"keywords":["xhr","http","ajax","promise","node"],"author":"Matt Zabriskie","license":"MIT","bugs":{"url":"https://github.com/axios/axios/issues"},"homepage":"https://axios-http.com","devDependencies":{"coveralls":"^3.0.0","es6-promise":"^4.2.4","grunt":"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1","karma":"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2","minimist":"^1.2.0","mocha":"^8.2.1","sinon":"^4.5.0","terser-webpack-plugin":"^4.2.3","typescript":"^4.0.5","url-search-params":"^0.10.0","webpack":"^4.44.2","webpack-dev-server":"^3.11.0"},"browser":{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},"jsdelivr":"dist/axios.min.js","unpkg":"dist/axios.min.js","typings":"./index.d.ts","dependencies":{"follow-redirects":"^1.14.0"},"bundlesize":[{"path":"./dist/axios.min.js","threshold":"5kB"}]}')},SntB:function(n,t,e){"use strict";var r=e("xTJ+");n.exports=function(n,t){t=t||{};var e={},i=["url","method","data"],o=["headers","auth","proxy","params"],a=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],s=["validateStatus"];function u(n,t){return r.isPlainObject(n)&&r.isPlainObject(t)?r.merge(n,t):r.isPlainObject(t)?r.merge({},t):r.isArray(t)?t.slice():t}function c(i){r.isUndefined(t[i])?r.isUndefined(n[i])||(e[i]=u(void 0,n[i])):e[i]=u(n[i],t[i])}r.forEach(i,(function(n){r.isUndefined(t[n])||(e[n]=u(void 0,t[n]))})),r.forEach(o,c),r.forEach(a,(function(i){r.isUndefined(t[i])?r.isUndefined(n[i])||(e[i]=u(void 0,n[i])):e[i]=u(void 0,t[i])})),r.forEach(s,(function(r){r in t?e[r]=u(n[r],t[r]):r in n&&(e[r]=u(void 0,n[r]))}));var f=i.concat(o).concat(a).concat(s),l=Object.keys(n).concat(Object.keys(t)).filter((function(n){return-1===f.indexOf(n)}));return r.forEach(l,c),e}},TSYQ:function(n,t,e){var r;!function(){"use strict";var e={}.hasOwnProperty;function i(){for(var n=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)n.push(r);else if(Array.isArray(r)){if(r.length){var a=i.apply(null,r);a&&n.push(a)}}else if("object"===o)if(r.toString===Object.prototype.toString)for(var s in r)e.call(r,s)&&r[s]&&n.push(s);else n.push(r.toString())}}return n.join(" ")}n.exports?(i.default=i,n.exports=i):void 0===(r=function(){return i}.apply(t,[]))||(n.exports=r)}()},UnBK:function(n,t,e){"use strict";var r=e("xTJ+"),i=e("xAGQ"),o=e("Lmem"),a=e("JEQr");function s(n){n.cancelToken&&n.cancelToken.throwIfRequested()}n.exports=function(n){return s(n),n.headers=n.headers||{},n.data=i.call(n,n.data,n.headers,n.transformRequest),n.headers=r.merge(n.headers.common||{},n.headers[n.method]||{},n.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete n.headers[t]})),(n.adapter||a.adapter)(n).then((function(t){return s(n),t.data=i.call(n,t.data,t.headers,n.transformResponse),t}),(function(t){return o(t)||(s(n),t&&t.response&&(t.response.data=i.call(n,t.response.data,t.response.headers,n.transformResponse))),Promise.reject(t)}))}},XwJu:function(n,t,e){"use strict";n.exports=function(n){return"object"===typeof n&&!0===n.isAxiosError}},endd:function(n,t,e){"use strict";function r(n){this.message=n}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,n.exports=r},eqyj:function(n,t,e){"use strict";var r=e("xTJ+");n.exports=r.isStandardBrowserEnv()?{write:function(n,t,e,i,o,a){var s=[];s.push(n+"="+encodeURIComponent(t)),r.isNumber(e)&&s.push("expires="+new Date(e).toGMTString()),r.isString(i)&&s.push("path="+i),r.isString(o)&&s.push("domain="+o),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(n){var t=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},g7np:function(n,t,e){"use strict";var r=e("2SVd"),i=e("5oMp");n.exports=function(n,t){return n&&!r(t)?i(n,t):t}},hIuj:function(n,t,e){"use strict";var r=e("SgzI"),i={};["object","boolean","number","function","string","symbol"].forEach((function(n,t){i[n]=function(e){return typeof e===n||"a"+(t<1?"n ":" ")+n}}));var o={},a=r.version.split(".");function s(n,t){for(var e=t?t.split("."):a,r=n.split("."),i=0;i<3;i++){if(e[i]>r[i])return!0;if(e[i]<r[i])return!1}return!1}i.transitional=function(n,t,e){var i=t&&s(t);function a(n,t){return"[Axios v"+r.version+"] Transitional option '"+n+"'"+t+(e?". "+e:"")}return function(e,r,s){if(!1===n)throw new Error(a(r," has been removed in "+t));return i&&!o[r]&&(o[r]=!0,console.warn(a(r," has been deprecated since v"+t+" and will be removed in the near future"))),!n||n(e,r,s)}},n.exports={isOlderVersion:s,assertOptions:function(n,t,e){if("object"!==typeof n)throw new TypeError("options must be an object");for(var r=Object.keys(n),i=r.length;i-- >0;){var o=r[i],a=t[o];if(a){var s=n[o],u=void 0===s||a(s,o,n);if(!0!==u)throw new TypeError("option "+o+" must be "+u)}else if(!0!==e)throw Error("Unknown option "+o)}},validators:i}},"jfS+":function(n,t,e){"use strict";var r=e("endd");function i(n){if("function"!==typeof n)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(n){t=n}));var e=this;n((function(n){e.reason||(e.reason=new r(n),t(e.reason))}))}i.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},i.source=function(){var n;return{token:new i((function(t){n=t})),cancel:n}},n.exports=i},o0o1:function(n,t,e){n.exports=e("ls82")},tQ2B:function(n,t,e){"use strict";var r=e("xTJ+"),i=e("Rn+g"),o=e("eqyj"),a=e("MLWZ"),s=e("g7np"),u=e("w0Vi"),c=e("OTTw"),f=e("LYNF");n.exports=function(n){return new Promise((function(t,e){var l=n.data,p=n.headers,d=n.responseType;r.isFormData(l)&&delete p["Content-Type"];var h=new XMLHttpRequest;if(n.auth){var m=n.auth.username||"",g=n.auth.password?unescape(encodeURIComponent(n.auth.password)):"";p.Authorization="Basic "+btoa(m+":"+g)}var v=s(n.baseURL,n.url);function x(){if(h){var r="getAllResponseHeaders"in h?u(h.getAllResponseHeaders()):null,o={data:d&&"text"!==d&&"json"!==d?h.response:h.responseText,status:h.status,statusText:h.statusText,headers:r,config:n,request:h};i(t,e,o),h=null}}if(h.open(n.method.toUpperCase(),a(v,n.params,n.paramsSerializer),!0),h.timeout=n.timeout,"onloadend"in h?h.onloadend=x:h.onreadystatechange=function(){h&&4===h.readyState&&(0!==h.status||h.responseURL&&0===h.responseURL.indexOf("file:"))&&setTimeout(x)},h.onabort=function(){h&&(e(f("Request aborted",n,"ECONNABORTED",h)),h=null)},h.onerror=function(){e(f("Network Error",n,null,h)),h=null},h.ontimeout=function(){var t="timeout of "+n.timeout+"ms exceeded";n.timeoutErrorMessage&&(t=n.timeoutErrorMessage),e(f(t,n,n.transitional&&n.transitional.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",h)),h=null},r.isStandardBrowserEnv()){var b=(n.withCredentials||c(v))&&n.xsrfCookieName?o.read(n.xsrfCookieName):void 0;b&&(p[n.xsrfHeaderName]=b)}"setRequestHeader"in h&&r.forEach(p,(function(n,t){"undefined"===typeof l&&"content-type"===t.toLowerCase()?delete p[t]:h.setRequestHeader(t,n)})),r.isUndefined(n.withCredentials)||(h.withCredentials=!!n.withCredentials),d&&"json"!==d&&(h.responseType=n.responseType),"function"===typeof n.onDownloadProgress&&h.addEventListener("progress",n.onDownloadProgress),"function"===typeof n.onUploadProgress&&h.upload&&h.upload.addEventListener("progress",n.onUploadProgress),n.cancelToken&&n.cancelToken.promise.then((function(n){h&&(h.abort(),e(n),h=null)})),l||(l=null),h.send(l)}))}},vDqi:function(n,t,e){n.exports=e("zuR4")},w0Vi:function(n,t,e){"use strict";var r=e("xTJ+"),i=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];n.exports=function(n){var t,e,o,a={};return n?(r.forEach(n.split("\n"),(function(n){if(o=n.indexOf(":"),t=r.trim(n.substr(0,o)).toLowerCase(),e=r.trim(n.substr(o+1)),t){if(a[t]&&i.indexOf(t)>=0)return;a[t]="set-cookie"===t?(a[t]?a[t]:[]).concat([e]):a[t]?a[t]+", "+e:e}})),a):a}},xAGQ:function(n,t,e){"use strict";var r=e("xTJ+"),i=e("JEQr");n.exports=function(n,t,e){var o=this||i;return r.forEach(e,(function(e){n=e.call(o,n,t)})),n}},"xTJ+":function(n,t,e){"use strict";var r=e("HSsa"),i=Object.prototype.toString;function o(n){return"[object Array]"===i.call(n)}function a(n){return"undefined"===typeof n}function s(n){return null!==n&&"object"===typeof n}function u(n){if("[object Object]"!==i.call(n))return!1;var t=Object.getPrototypeOf(n);return null===t||t===Object.prototype}function c(n){return"[object Function]"===i.call(n)}function f(n,t){if(null!==n&&"undefined"!==typeof n)if("object"!==typeof n&&(n=[n]),o(n))for(var e=0,r=n.length;e<r;e++)t.call(null,n[e],e,n);else for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&t.call(null,n[i],i,n)}n.exports={isArray:o,isArrayBuffer:function(n){return"[object ArrayBuffer]"===i.call(n)},isBuffer:function(n){return null!==n&&!a(n)&&null!==n.constructor&&!a(n.constructor)&&"function"===typeof n.constructor.isBuffer&&n.constructor.isBuffer(n)},isFormData:function(n){return"undefined"!==typeof FormData&&n instanceof FormData},isArrayBufferView:function(n){return"undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(n):n&&n.buffer&&n.buffer instanceof ArrayBuffer},isString:function(n){return"string"===typeof n},isNumber:function(n){return"number"===typeof n},isObject:s,isPlainObject:u,isUndefined:a,isDate:function(n){return"[object Date]"===i.call(n)},isFile:function(n){return"[object File]"===i.call(n)},isBlob:function(n){return"[object Blob]"===i.call(n)},isFunction:c,isStream:function(n){return s(n)&&c(n.pipe)},isURLSearchParams:function(n){return"undefined"!==typeof URLSearchParams&&n instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)},forEach:f,merge:function n(){var t={};function e(e,r){u(t[r])&&u(e)?t[r]=n(t[r],e):u(e)?t[r]=n({},e):o(e)?t[r]=e.slice():t[r]=e}for(var r=0,i=arguments.length;r<i;r++)f(arguments[r],e);return t},extend:function(n,t,e){return f(t,(function(t,i){n[i]=e&&"function"===typeof t?r(t,e):t})),n},trim:function(n){return n.trim?n.trim():n.replace(/^\s+|\s+$/g,"")},stripBOM:function(n){return 65279===n.charCodeAt(0)&&(n=n.slice(1)),n}}},yK9s:function(n,t,e){"use strict";var r=e("xTJ+");n.exports=function(n,t){r.forEach(n,(function(e,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(n[t]=e,delete n[r])}))}},yZXQ:function(n,t,e){"use strict";var r=e("h4VS"),i=e("o0o1"),o=e.n(i),a=e("HaE+"),s=e("q1tI"),u=e.n(s),c=e("vOnD"),f=e("E249"),l=e("1Yj4"),p=[{link:"https://twitter.com/forbitspace",url:"../images/icon-social-footer/6.svg"},{link:"https://t.me/forbitspace",url:"../images/icon-social-footer/5.svg"},{link:"https://github.com/forbitspace",url:"../images/icon-social-footer/4.svg"},{link:"https://medium.com/@forbitspace",url:"../images/icon-social-footer/1.svg"},{link:"https://discord.com/invite/forbitspace",url:"../images/icon-social-footer/3.svg"},{link:"https://www.reddit.com/r/forbitspace/",url:"../images/icon-social-footer/2.svg"}],d=[{link:"",nav:"Space Trade",contents:[{link:"/aggregation",content:"Aggregation Protocol"},{link:"/liquidity",content:"Liquidity Protocol"},{link:"/limit",content:"Limit Order Protocol"},{link:"/derivative",content:"Derivative Protocol"}]},{link:"",nav:"Governance",contents:[{link:"/dao",content:"Space Dao"}]},{link:"",nav:"Developers",contents:[{link:"",content:"Documentation"},{link:"../forbitspace-whitepaper.pdf",content:"Whitepaper",outLink:!0},{link:"https://github.com/forbitspace",content:"Github",outLink:!0},{link:"",content:"Bug bounty",disable:!0}]},{nav:"Self-custody",link:"/selfcustody",contents:[{link:"/bridge",content:"Bridge Space"},{link:"/mobile-wallet",content:"Mobile wallet"},{link:"/smart-contract",content:"Smart contract wallet"},{link:"/assets",content:"Asset management"}]},{nav:"Support",link:"",contents:[{link:"https://help.forbitspace.com/",content:"Help Center",outLink:!0},{link:"../documents/terms-of-service.pdf",content:"Term of Service",outLink:!0},{link:"../documents/privacy-policy.pdf",content:"Privacy Policy",outLink:!0}]}],h=e("vDqi"),m=e.n(h),g=u.a.createElement;function v(){var n=Object(r.a)(["\n  position: relative;\n  border-radius: 10px;\n  margin-right: 5px;\n"]);return v=function(){return n},n}function x(){var n=Object(r.a)(['\n  width: 100%;\n  height: 30px;\n  margin-right: 5px;\n  font-style: italic;\n  /* font-family: "Averta"; */\n  font-size: 14px;\n  padding: 10px 15px;\n  line-height: 20px;\n  outline: 0;\n  transition: all 0.3s ease-in-out;\n  background: transparent;\n  border-radius: 10px;\n  position: relative;\n  border: none;\n  background: #cff3f4;\n  border: 1px solid #0047b2;\n  ::placeholder {\n    font-weight: 100;\n  }\n']);return x=function(){return n},n}function b(){var n=Object(r.a)(["\n  font-size: 14px;\n  font-weight: 300;\n  font-style: italic;\n  &.foundation {\n    padding-left: 1.5rem;\n    margin-bottom: 3px;\n  }\n  @media (max-width: 1024px) {\n    &.foundation {\n      padding-left: unset;\n    }\n  }\n"]);return b=function(){return n},n}function y(){var n=Object(r.a)(["\n  margin-bottom: 10px;\n  color: #ffffff;\n  font-family: sans-serif;\n  font-size: 13px;\n  font-weight: 100;\n  font-style: italic;\n"]);return y=function(){return n},n}function w(){var n=Object(r.a)(["\n  margin-bottom: 10px;\n  color: #ffffff;\n  font-family: sans-serif;\n  font-size: 16px;\n  font-weight: 600;\n  a {\n    text-decoration: none;\n  }\n"]);return w=function(){return n},n}function k(){var n=Object(r.a)(["\n  font-size: 12px;\n"]);return k=function(){return n},n}function j(){var n=Object(r.a)(["\n  display: flex;\n  width: 100%;\n  flex-wrap: wrap;\n  padding-top: 25px;\n  .input-field {\n    width: 23%;\n  }\n  ul {\n    padding-left: 0;\n    width: 15%;\n    // text-align:right;\n\n    .form-wrap {\n      display: flex;\n      align-items: center;\n      margin-bottom: 25px;\n\n      input {\n      }\n\n      button {\n        width: 60px;\n        height: 30px;\n        border: none;\n        outline: none;\n        background-image: linear-gradient(\n          17deg,\n          #00ff36 -68%,\n          #00ee57 -43%,\n          #00c5ad 14%,\n          #00a4f1 57%,\n          #0b18fc 154%,\n          #0d00ff 171%\n        );\n        border-radius: 8px;\n        transition: all 0.5s ease-in-out;\n        background-size: 200%;\n        background-position: 95%;\n\n        i {\n          color: #fff;\n          font-size: 12px;\n        }\n\n        &:hover {\n          background-size: 200%;\n          background-position: right;\n        }\n      }\n    }\n\n    li {\n      font-size: 12px;\n      font-weight: 300;\n      font-family: sans-serif;\n      margin-bottom: 4px;\n      a {\n        text-decoration: none;\n        color: #4e4f50;\n\n        &:hover {\n          text-decoration: underline;\n        }\n      }\n    }\n\n    @media (max-width: 1024px) {\n      width: calc(100% / 5);\n      margin-right: 0;\n      text-align: left;\n      form {\n        justify-content: center;\n      }\n      .form-wrap {\n        justify-content: center;\n      }\n      :last-child {\n        width: 100%;\n        text-align: center;\n      }\n    }\n    @media (max-width: 768px) {\n      /* width: calc(100% / 6); */\n      margin-right: 0;\n      text-align: left;\n      form {\n        justify-content: center;\n      }\n      :last-child {\n        width: 100%;\n        text-align: center;\n      }\n    }\n    @media (max-width: 576px) {\n      width: 32%;\n    }\n    @media (max-width: 320px) {\n      width: 50%;\n    }\n  }\n"]);return j=function(){return n},n}function O(){var n=Object(r.a)(["\n  position: relative;\n  padding: 30px 0 0;\n  overflow: hidden;\n\n  @media (max-width: 576px) {\n    padding: 40px 0;\n\n    &:after {\n      content: none;\n    }\n  }\n"]);return O=function(){return n},n}function S(){var n=Object(r.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  @media (min-width: 1025px) {\n    justify-content: flex-start;\n  }\n"]);return S=function(){return n},n}function E(){var n=Object(r.a)(["\n  max-width: 20px;\n  width: 100%;\n  transition: all ease-in-out 0.2s;\n  :hover {\n    transform: scale(1.2);\n  }\n"]);return E=function(){return n},n}function T(){var n=Object(r.a)(["\n  background-size: 100%;\n  background-position: bottom;\n  background-repeat: no-repeat;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0.1;\n  z-index: -1;\n"]);return T=function(){return n},n}var N=c.b.div(T()),A=c.b.img(E()),C=c.b.div(S()),L=c.b.section(O()),P=c.b.div(j()),R=c.b.div(k()),B=c.b.li(w()),z=c.b.div(y()),J=c.b.p(b()),D=c.b.input(x()),U=c.b.div(v());t.a=function(){var n=Object(s.useState)(""),t=n[0],e=n[1],r=function(){var n=Object(a.a)(o.a.mark((function n(){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,m()({method:"GET",url:"http://192.168.31.132:1234/v1/mailer?email=".concat(t)});case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return g("footer",{className:"footer"},g(L,null,g(l.a,null,g(P,null,d.map((function(n,t){return g("ul",{className:"text-visi",key:t},g(B,null," ",n.link?g(f.Link,{href:n.link},n.nav):n.nav," "),n.contents.map((function(n,t){return g("li",{key:t},n.disable?g(R,{href:"/"},n.content):n.outLink?g("a",{href:n.link,target:"_blank",rel:"noreferrer"},n.content):g(f.Link,{href:n.link},n.content))})))})),g("ul",{className:"text-visi input-field"},g(z,null,"Subscribe to our newsletter for updates"),g("div",{className:"form-wrap",action:""},g(U,null,g(D,{type:"text",className:"text bg-input-dark",placeholder:"your@email.com",pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$",required:!0,onChange:function(n){return function(n){e(n.target.value)}(n)},onSubmit:function(n){r(),n.preventDefault()}})),g("button",{type:"button","aria-label":"send-email-address",onClick:function(){!function(n){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(n).toLowerCase())}(t)?alert("Your email is invalid. Please try again!"):(r(),alert("Success! Thank you for joining us!"))}},g("i",{className:"fa fa-arrow-right"}))),g(J,{className:"text-dark foundation"},"forbitspace foundation LLC"),g(J,{className:"text-dark"},"\xa9 2021 @forbitspace, All Rights Reserved"),g(C,null,p.map((function(n,t){return g("a",{href:n.link,target:"_blank",rel:"noreferrer",key:t},g(A,{src:n.url,alt:"icon social media"}))}))))))),g(N,null))}},zuR4:function(n,t,e){"use strict";var r=e("xTJ+"),i=e("HSsa"),o=e("CgaS"),a=e("SntB");function s(n){var t=new o(n),e=i(o.prototype.request,t);return r.extend(e,o.prototype,t),r.extend(e,t),e}var u=s(e("JEQr"));u.Axios=o,u.create=function(n){return s(a(u.defaults,n))},u.Cancel=e("endd"),u.CancelToken=e("jfS+"),u.isCancel=e("Lmem"),u.all=function(n){return Promise.all(n)},u.spread=e("DfZB"),u.isAxiosError=e("XwJu"),n.exports=u,n.exports.default=u}}]);