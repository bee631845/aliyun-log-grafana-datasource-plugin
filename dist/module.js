/*! For license information please see module.js.LICENSE.txt */
define(["react","@grafana/data","@grafana/ui","lodash","@grafana/runtime"],(function(e,t,r,n,o){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=5)}([function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t){e.exports=r},function(e,t){e.exports=n},function(e,t){e.exports=o},function(e,t,r){"use strict";r.r(t);var n=r(1),o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,t)};function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var s=function(){return(s=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};Object.create;function a(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function u(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,i=r.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)s.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return s}Object.create;var c=r(4),l=r(3),p=r.n(l),f=function(e,t){return(f=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};function h(e,t){function r(){this.constructor=e}f(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}function d(e){return"function"==typeof e}var y=!1,b={Promise:void 0,set useDeprecatedSynchronousErrorHandling(e){if(e);y=e},get useDeprecatedSynchronousErrorHandling(){return y}};function g(e){setTimeout((function(){throw e}),0)}var v={closed:!0,next:function(e){},error:function(e){if(b.useDeprecatedSynchronousErrorHandling)throw e;g(e)},complete:function(){}},m=function(){return Array.isArray||function(e){return e&&"number"==typeof e.length}}();var _=function(){function e(e){return Error.call(this),this.message=e?e.length+" errors occurred during unsubscription:\n"+e.map((function(e,t){return t+1+") "+e.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=e,this}return e.prototype=Object.create(Error.prototype),e}(),S=function(){function e(e){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,e&&(this._ctorUnsubscribe=!0,this._unsubscribe=e)}return e.prototype.unsubscribe=function(){var t;if(!this.closed){var r,n=this._parentOrParents,o=this._ctorUnsubscribe,i=this._unsubscribe,s=this._subscriptions;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,n instanceof e)n.remove(this);else if(null!==n)for(var a=0;a<n.length;++a){n[a].remove(this)}if(d(i)){o&&(this._unsubscribe=void 0);try{i.call(this)}catch(e){t=e instanceof _?O(e.errors):[e]}}if(m(s)){a=-1;for(var u=s.length;++a<u;){var c=s[a];if(null!==(r=c)&&"object"==typeof r)try{c.unsubscribe()}catch(e){t=t||[],e instanceof _?t=t.concat(O(e.errors)):t.push(e)}}}if(t)throw new _(t)}},e.prototype.add=function(t){var r=t;if(!t)return e.EMPTY;switch(typeof t){case"function":r=new e(t);case"object":if(r===this||r.closed||"function"!=typeof r.unsubscribe)return r;if(this.closed)return r.unsubscribe(),r;if(!(r instanceof e)){var n=r;(r=new e)._subscriptions=[n]}break;default:throw new Error("unrecognized teardown "+t+" added to Subscription.")}var o=r._parentOrParents;if(null===o)r._parentOrParents=this;else if(o instanceof e){if(o===this)return r;r._parentOrParents=[o,this]}else{if(-1!==o.indexOf(this))return r;o.push(this)}var i=this._subscriptions;return null===i?this._subscriptions=[r]:i.push(r),r},e.prototype.remove=function(e){var t=this._subscriptions;if(t){var r=t.indexOf(e);-1!==r&&t.splice(r,1)}},e.EMPTY=function(e){return e.closed=!0,e}(new e),e}();function O(e){return e.reduce((function(e,t){return e.concat(t instanceof _?t.errors:t)}),[])}var E=function(){return"function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random()}(),x=function(e){function t(r,n,o){var i=e.call(this)||this;switch(i.syncErrorValue=null,i.syncErrorThrown=!1,i.syncErrorThrowable=!1,i.isStopped=!1,arguments.length){case 0:i.destination=v;break;case 1:if(!r){i.destination=v;break}if("object"==typeof r){r instanceof t?(i.syncErrorThrowable=r.syncErrorThrowable,i.destination=r,r.add(i)):(i.syncErrorThrowable=!0,i.destination=new w(i,r));break}default:i.syncErrorThrowable=!0,i.destination=new w(i,r,n,o)}return i}return h(t,e),t.prototype[E]=function(){return this},t.create=function(e,r,n){var o=new t(e,r,n);return o.syncErrorThrowable=!1,o},t.prototype.next=function(e){this.isStopped||this._next(e)},t.prototype.error=function(e){this.isStopped||(this.isStopped=!0,this._error(e))},t.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,e.prototype.unsubscribe.call(this))},t.prototype._next=function(e){this.destination.next(e)},t.prototype._error=function(e){this.destination.error(e),this.unsubscribe()},t.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},t.prototype._unsubscribeAndRecycle=function(){var e=this._parentOrParents;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=e,this},t}(S),w=function(e){function t(t,r,n,o){var i,s=e.call(this)||this;s._parentSubscriber=t;var a=s;return d(r)?i=r:r&&(i=r.next,n=r.error,o=r.complete,r!==v&&(d((a=Object.create(r)).unsubscribe)&&s.add(a.unsubscribe.bind(a)),a.unsubscribe=s.unsubscribe.bind(s))),s._context=a,s._next=i,s._error=n,s._complete=o,s}return h(t,e),t.prototype.next=function(e){if(!this.isStopped&&this._next){var t=this._parentSubscriber;b.useDeprecatedSynchronousErrorHandling&&t.syncErrorThrowable?this.__tryOrSetError(t,this._next,e)&&this.unsubscribe():this.__tryOrUnsub(this._next,e)}},t.prototype.error=function(e){if(!this.isStopped){var t=this._parentSubscriber,r=b.useDeprecatedSynchronousErrorHandling;if(this._error)r&&t.syncErrorThrowable?(this.__tryOrSetError(t,this._error,e),this.unsubscribe()):(this.__tryOrUnsub(this._error,e),this.unsubscribe());else if(t.syncErrorThrowable)r?(t.syncErrorValue=e,t.syncErrorThrown=!0):g(e),this.unsubscribe();else{if(this.unsubscribe(),r)throw e;g(e)}}},t.prototype.complete=function(){var e=this;if(!this.isStopped){var t=this._parentSubscriber;if(this._complete){var r=function(){return e._complete.call(e._context)};b.useDeprecatedSynchronousErrorHandling&&t.syncErrorThrowable?(this.__tryOrSetError(t,r),this.unsubscribe()):(this.__tryOrUnsub(r),this.unsubscribe())}else this.unsubscribe()}},t.prototype.__tryOrUnsub=function(e,t){try{e.call(this._context,t)}catch(e){if(this.unsubscribe(),b.useDeprecatedSynchronousErrorHandling)throw e;g(e)}},t.prototype.__tryOrSetError=function(e,t,r){if(!b.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{t.call(this._context,r)}catch(t){return b.useDeprecatedSynchronousErrorHandling?(e.syncErrorValue=t,e.syncErrorThrown=!0,!0):(g(t),!0)}return!1},t.prototype._unsubscribe=function(){var e=this._parentSubscriber;this._context=null,this._parentSubscriber=null,e.unsubscribe()},t}(x);var j=function(){function e(e,t){this.project=e,this.thisArg=t}return e.prototype.call=function(e,t){return t.subscribe(new C(e,this.project,this.thisArg))},e}(),C=function(e){function t(t,r,n){var o=e.call(this,t)||this;return o.project=r,o.count=0,o.thisArg=n||o,o}return h(t,e),t.prototype._next=function(e){var t;try{t=this.project.call(this.thisArg,e,this.count++)}catch(e){return void this.destination.error(e)}this.destination.next(t)},t}(x);function T(e){return(T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var D=function(e){function t(t){return e.call(this,t)||this}return i(t,e),t.prototype.query=function(t){return t.targets.forEach((function(e){e.query=J(e,t)})),"trace"===t.targets[0].xcol?e.prototype.query.call(this,t).pipe((r=N,function(e){if("function"!=typeof r)throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");return e.lift(new j(r,n))})):e.prototype.query.call(this,t);var r,n},t.prototype.metricFindQuery=function(e,t){var r={from:t.range.from.valueOf().toString(),to:t.range.to.valueOf().toString(),queries:[{datasource:this.name,datasourceId:this.id,query:J(e,t)}]};return Object(c.getBackendSrv)().post("/api/ds/query",r).then((function(e){return e.results.A.frames[0].data.values[0]})).then(q)},t}(c.DataSourceWithBackend);function P(e,t){return{key:e,value:t}}function F(e,t){var r,n,o=JSON.parse(null===(r=e.get("resource"))||void 0===r?void 0:r.get(t)),i=Array.from(Object.entries(o),(function(e){var t=u(e,2);return P(t[0],t[1])}));return i.push(P("host",null===(n=e.get("host"))||void 0===n?void 0:n.get(t))),i}function I(e,t){var r,n,o,i=JSON.parse(null===(r=e.get("attribute"))||void 0===r?void 0:r.get(t)),s=Array.from(Object.entries(i),(function(e){var t=u(e,2);return P(t[0],t[1])}));return s.push(P("statusCode",null===(n=e.get("statusCode"))||void 0===n?void 0:n.get(t))),s.push(P("statusMessage",null===(o=e.get("statusMessage"))||void 0===o?void 0:o.get(t))),s}function A(e,t){var r,n,o,i=[],s=JSON.parse(null===(o=e.get("logs"))||void 0===o?void 0:o.get(t));try{for(var c=a(s),l=c.next();!l.done;l=c.next()){var p=l.value,f=new Map(Object.entries(p)),h=Array.from(Object.entries(p),(function(e){var t=u(e,2);return P(t[0],t[1])})),d=f.get("time");void 0!==d&&i.push({timestamp:Number(d)/1e6,fields:h})}}catch(e){r={error:e}}finally{try{l&&!l.done&&(n=c.return)&&n.call(c)}finally{if(r)throw r.error}}return i}function K(e){var t,r,o=function(e){for(var t,r,n,o,i,s,a,u,c=[],l=e.fields,p=new Map(l.map((function(e){return[e.name,e.values]}))),f=0;f<e.length;f++){var h={traceID:null===(t=p.get("traceID"))||void 0===t?void 0:t.get(f),spanID:null===(r=p.get("spanID"))||void 0===r?void 0:r.get(f),parentSpanID:null===(n=p.get("parentSpanID"))||void 0===n?void 0:n.get(f),operationName:null===(o=p.get("operationName"))||void 0===o?void 0:o.get(f),serviceName:null===(i=p.get("serviceName"))||void 0===i?void 0:i.get(f),serviceTags:F(p,f),startTime:null===(s=p.get("startTime"))||void 0===s?void 0:s.get(f),duration:null===(a=p.get("duration"))||void 0===a?void 0:a.get(f),tags:I(p,f),errorIconColor:"ERROR"===(null===(u=p.get("statusCode"))||void 0===u?void 0:u.get(f))?"#f00":"",logs:A(p,f)};c.push(h)}return c}(e),i=new n.MutableDataFrame({fields:[{name:"traceID",type:n.FieldType.string},{name:"spanID",type:n.FieldType.string},{name:"parentSpanID",type:n.FieldType.string},{name:"operationName",type:n.FieldType.string},{name:"serviceName",type:n.FieldType.string},{name:"serviceTags",type:n.FieldType.other},{name:"startTime",type:n.FieldType.number},{name:"duration",type:n.FieldType.number},{name:"logs",type:n.FieldType.other},{name:"tags",type:n.FieldType.other},{name:"errorIconColor",type:n.FieldType.string}],meta:{preferredVisualisationType:"trace"}});try{for(var s=a(o),u=s.next();!u.done;u=s.next()){var c=u.value;i.add(c)}}catch(e){t={error:e}}finally{try{u&&!u.done&&(r=s.return)&&r.call(s)}finally{if(t)throw t.error}}return i}function N(e){return{data:[K(e.data[0])]}}function q(e){return p.a.map(e,(function(e,t){return e&&e.text&&e.value?{text:e.text,value:e.value}:p.a.isObject(e)?{text:e,value:t}:{text:e,value:e}}))}function J(e,t){if(!e.hide){var r=Object(c.getTemplateSrv)().replace(e.query,t.scopedVars,(function(e,t){if("object"===T(e)&&(t.multi||t.includeAll)){var r=[];return e.forEach((function(e){t.name===t.label?r.push('"'+t.name+'":"'+e+'"'):r.push(e)})),r.join(" OR ")}return p.a.isArray(e)?e.join(" OR "):e})),n=r.match(/\$([0-9]+)([dmhs])/g);return p()(n).forEach((function(e){var t=e,n=1;-1!==(e=e.replace("$","")).indexOf("s")?n=1:-1!==e.indexOf("m")?n=60:-1!==e.indexOf("h")?n=3600:-1!==e.indexOf("d")&&(n=86400),e=e.replace(/[smhd]/g,"");var o=parseInt(e,10);o*=n,r=r.replace(t,String(o))})),-1!==r.indexOf("#time_end")&&(r=r.replace("#time_end",String(t.range.to.unix()/1e3))),-1!==r.indexOf("#time_begin")&&(r=r.replace("#time_begin",String(t.range.from.unix()/1e3))),r}}var W=r(0),R=r.n(W),M=r(2),k=M.LegacyForms.SecretFormField,Q=M.LegacyForms.FormField,H=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.onEndpointChange=function(e){var r=t.props,n=r.onOptionsChange,o=r.options;o.url=e.target.value,n(s({},o))},t.onProjectChange=function(e){var r=t.props,n=r.onOptionsChange,o=r.options,i=s(s({},o.jsonData),{project:e.target.value});n(s(s({},o),{jsonData:i}))},t.onLogStoreChange=function(e){var r=t.props,n=r.onOptionsChange,o=r.options,i=s(s({},o.jsonData),{logstore:e.target.value});n(s(s({},o),{jsonData:i}))},t.onAKIDChange=function(e){var r=t.props,n=r.onOptionsChange,o=r.options,i="";void 0!==o.secureJsonData&&o.secureJsonData.hasOwnProperty("accessKeySecret")&&(i=o.secureJsonData.accessKeySecret),n(s(s({},o),{secureJsonData:{accessKeyId:e.target.value,accessKeySecret:i}}))},t.onAKSecretChange=function(e){var r=t.props,n=r.onOptionsChange,o=r.options,i="";void 0!==o.secureJsonData&&o.secureJsonData.hasOwnProperty("accessKeyId")&&(i=o.secureJsonData.accessKeyId),n(s(s({},o),{secureJsonData:{accessKeyId:i,accessKeySecret:e.target.value}}))},t.onResetAKID=function(){var e=t.props,r=e.onOptionsChange,n=e.options;r(s(s({},n),{secureJsonFields:s(s({},n.secureJsonFields),{accessKeyId:!1}),secureJsonData:s(s({},n.secureJsonData),{accessKeyId:""})}))},t.onResetAKSecret=function(){var e=t.props,r=e.onOptionsChange,n=e.options;r(s(s({},n),{secureJsonFields:s(s({},n.secureJsonFields),{accessKeySecret:!1}),secureJsonData:s(s({},n.secureJsonData),{accessKeySecret:""})}))},t}return i(t,e),t.prototype.render=function(){var e=this.props.options,t=e.jsonData,r=e.secureJsonFields,n=e.url,o=e.secureJsonData||{};return R.a.createElement("div",{className:"gf-form-group"},R.a.createElement("div",{className:"gf-form"},R.a.createElement(Q,{label:"Endpoint",labelWidth:8,inputWidth:25,onChange:this.onEndpointChange,value:n||"",placeholder:"json field returned to frontend"})),R.a.createElement("div",{className:"gf-form-inline"},R.a.createElement(Q,{label:"Project",labelWidth:8,inputWidth:25,onChange:this.onProjectChange,value:t.project||"",placeholder:"json field returned to frontend"})),R.a.createElement("div",{className:"gf-form-inline"},R.a.createElement(Q,{label:"Logstore",labelWidth:8,inputWidth:25,onChange:this.onLogStoreChange,value:t.logstore||"",placeholder:"json field returned to frontend"})),R.a.createElement("div",{className:"gf-form-inline"},R.a.createElement("div",{className:"gf-form"},R.a.createElement(k,{isConfigured:r&&r.accessKeyId,value:o.accessKeyId||"",label:"AccessKeyId",placeholder:"secure json field (backend only)",labelWidth:8,inputWidth:25,onReset:this.onResetAKID,onChange:this.onAKIDChange}))),R.a.createElement("div",{className:"gf-form-inline"},R.a.createElement("div",{className:"gf-form"},R.a.createElement(k,{isConfigured:r&&r.accessKeySecret,value:o.accessKeySecret||"",label:"AccessKeySecret",placeholder:"secure json field (backend only)",labelWidth:8,inputWidth:25,onReset:this.onResetAKSecret,onChange:this.onAKSecretChange}))))},t}(W.PureComponent),L={query:"* | select count(*) as c, __time__-__time__%60 as t group by t",xcol:"t",ycol:"c",logsPerPage:100,currentPage:1},U=M.LegacyForms.FormField,V=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.onQueryTextChange=function(e){var r=t.props,n=r.onChange,o=r.query;n(s(s({},o),{query:e.target.value}))},t.onXChange=function(e){var r=t.props,n=r.onChange,o=r.query,i=r.onRunQuery;n(s(s({},o),{xcol:e.target.value})),i()},t.onYChange=function(e){var r=t.props,n=r.onChange,o=r.query,i=r.onRunQuery;n(s(s({},o),{ycol:e.target.value})),i()},t}return i(t,e),t.prototype.render=function(){var e=Object(l.defaults)(this.props.query,L),t=e.query,r=e.xcol,n=e.ycol;return R.a.createElement(R.a.Fragment,null,R.a.createElement("div",{className:"gf-form-inline"},R.a.createElement(M.InlineFormLabel,{width:6,className:"query-keyword"},"Query"),R.a.createElement("input",{className:"gf-form-input",value:t,onChange:this.onQueryTextChange,onBlur:this.onQueryTextChange})),R.a.createElement("div",{className:"gf-form-inline"},R.a.createElement(U,{labelWidth:6,inputWidth:30,value:n,onChange:this.onYChange,label:"ycol"}),R.a.createElement(U,{labelWidth:6,inputWidth:20,value:r,onChange:this.onXChange,label:"xcol(time)"})))},t}(W.PureComponent),Y=M.LegacyForms.FormField,B=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.onQueryTextChange=function(e){var r=t.props,n=r.onChange,o=r.query;n(s(s({},o),{query:e.target.value}))},t}return i(t,e),t.prototype.render=function(){var e=this.props.query.query;return R.a.createElement(R.a.Fragment,null,R.a.createElement("div",{className:"gf-form-inline"},R.a.createElement(Y,{labelWidth:6,inputWidth:30,value:e,onChange:this.onQueryTextChange,label:"query"})))},t}(W.PureComponent);r.d(t,"plugin",(function(){return X}));var X=new n.DataSourcePlugin(D).setConfigEditor(H).setQueryEditor(V).setVariableQueryEditor(B)}])}));
//# sourceMappingURL=module.js.map