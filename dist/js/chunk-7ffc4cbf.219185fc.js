(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7ffc4cbf"],{"053b":function(t,e,n){var r=n("1e2c"),i=n("d910").f,o=Function.prototype,a=o.toString,c=/^\s*function ([^ (]*)/,l="name";r&&!(l in o)&&i(o,l,{configurable:!0,get:function(){try{return a.call(this).match(c)[1]}catch(t){return""}}})},"064b":function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},"08ba":function(t,e,n){var r=n("d890"),i=n("064b"),o=n("3c10"),a=n("0fc1");for(var c in i){var l=r[c],s=l&&l.prototype;if(s&&s.forEach!==o)try{a(s,"forEach",o)}catch(u){s.forEach=o}}},"3c10":function(t,e,n){"use strict";var r=n("5dfd").forEach,i=n("d7e1"),o=n("ff9c"),a=i("forEach"),c=o("forEach");t.exports=a&&c?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"6a61":function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(O){l=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var i=e&&e.prototype instanceof g?e:g,o=Object.create(i.prototype),a=new C(r||[]);return o._invoke=_(t,n,a),o}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(O){return{type:"throw",arg:O}}}t.wrap=s;var f="suspendedStart",h="suspendedYield",d="executing",p="completed",m={};function g(){}function v(){}function y(){}var b={};b[o]=function(){return this};var w=Object.getPrototypeOf,L=w&&w(w(T([])));L&&L!==n&&r.call(L,o)&&(b=L);var x=y.prototype=g.prototype=Object.create(b);function k(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function n(i,o,a,c){var l=u(t[i],t,o);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"===typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return n("throw",t,a,c)}))}c(l.arg)}var i;function o(t,r){function o(){return new e((function(e,i){n(t,r,e,i)}))}return i=i?i.then(o,o):o()}this._invoke=o}function _(t,e,n){var r=f;return function(i,o){if(r===d)throw new Error("Generator is already running");if(r===p){if("throw"===i)throw o;return M()}n.method=i,n.arg=o;while(1){var a=n.delegate;if(a){var c=E(a,n);if(c){if(c===m)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var l=u(t,e,n);if("normal"===l.type){if(r=n.done?p:h,l.arg===m)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r=p,n.method="throw",n.arg=l.arg)}}}function E(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator["return"]&&(n.method="return",n.arg=e,E(t,n),"throw"===n.method))return m;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var i=u(r,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,m;var o=i.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,m):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function D(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function G(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(D,this),this.reset(!0)}function T(t){if(t){var n=t[o];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,a=function n(){while(++i<t.length)if(r.call(t,i))return n.value=t[i],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:M}}function M(){return{value:e,done:!0}}return v.prototype=x.constructor=y,y.constructor=v,v.displayName=l(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,l(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},k(S.prototype),S.prototype[a]=function(){return this},t.AsyncIterator=S,t.async=function(e,n,r,i,o){void 0===o&&(o=Promise);var a=new S(s(e,n,r,i),o);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(x),l(x,c,"Generator"),x[o]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=T,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(G),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function i(r,i){return c.type="throw",c.arg=t,n.next=r,i&&(n.method="next",n.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var l=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(l&&s){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),G(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;G(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:T(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=r}catch(i){Function("r","regeneratorRuntime = r")(r)}},8719:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"information-wrap"},[n("div",[n("el-form",{attrs:{inline:!0}},[n("el-form-item",{attrs:{label:"名字:"}},[n("el-input",{attrs:{clearable:"",placeholder:"请输入名字"},model:{value:t.condition.name,callback:function(e){t.$set(t.condition,"name","string"===typeof e?e.trim():e)},expression:"condition.name"}})],1),n("el-form-item",{staticClass:"mg-l10",attrs:{label:"创建日期:"}},[n("el-date-picker",{staticClass:"w300",attrs:{type:"daterange","value-format":"timestamp","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.condition.timeRang,callback:function(e){t.$set(t.condition,"timeRang","string"===typeof e?e.trim():e)},expression:"condition.timeRang"}})],1),n("el-form-item",{staticClass:"mg-l20"},[n("el-button",{on:{click:function(e){return t.Mixin_handleCurrentChange(1)}}},[t._v("查询")])],1)],1)],1),n("div",[n("el-table",{staticStyle:{width:"100%"},attrs:{border:"",data:t.tableData}},[n("el-table-column",{attrs:{type:"index",label:"序号",width:"50"}}),n("el-table-column",{attrs:{prop:"userName",label:"名字"}}),n("el-table-column",{attrs:{prop:"phone",label:"手机号"}}),n("el-table-column",{attrs:{prop:"money",label:"奖金"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.money||"-")+" ")]}}])}),n("el-table-column",{attrs:{prop:"ranking",width:"260",label:"名次"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.ranking||"-")+" ")]}}])}),n("el-table-column",{attrs:{width:"180",label:"创建时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t._f("Filter_FormatDate")(e.row.createDate))+" ")]}}])}),n("el-table-column",{attrs:{prop:"address",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"primary"},on:{click:function(n){return t.clickEditBtn(e.row)}}},[t._v("编辑")])]}}])})],1),n("el-row",{staticClass:"mg-t20"},[n("el-col",{attrs:{offset:8,span:8}},[n("el-pagination",{attrs:{"page-size":t.Mixin_pageSize,layout:"prev, pager, next, jumper",total:t.Mixin_total},on:{"current-change":t.Mixin_handleCurrentChange}})],1)],1)],1),n("el-dialog",{attrs:{"close-on-click-modal":!1,title:"编辑",visible:t.isShowGameDialog,width:"400px"},on:{"update:visible":function(e){t.isShowGameDialog=e},close:function(e){return t.Mixin_dialogClose("info","isShowGameDialog")}}},[n("el-form",{ref:"info",attrs:{model:t.info,rules:t.infoRules,"label-width":"120px"}},[n("el-form-item",{attrs:{label:"奖金 :"}},[n("el-input",{attrs:{maxlength:"20",placeholder:"请输入奖金"},model:{value:t.info.bonus,callback:function(e){t.$set(t.info,"bonus","string"===typeof e?e.trim():e)},expression:"info.bonus"}})],1),n("el-form-item",{attrs:{label:"名次 :"}},[n("el-input",{attrs:{maxlength:"20",placeholder:"请输入名次"},model:{value:t.info.ranking,callback:function(e){t.$set(t.info,"ranking","string"===typeof e?e.trim():e)},expression:"info.ranking"}})],1)],1),n("div",{staticClass:"mt10 dis-fl ju-ct"},[n("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submitInfoBtn("info")}}},[t._v("确定")]),n("el-button",{on:{click:function(e){t.isShowGameDialog=!1}}},[t._v("取消")])],1)],1)],1)},i=[],o=(n("fe59"),n("053b"),n("08ba"),n("6a61"),n("cf7f")),a={name:"gameManage",data:function(){return{condition:{name:"",createTime:""},tableData:[],isShowGameDialog:!1,info:{bonus:"",ranking:""},infoRules:{bonus:[{required:!0,validator:this.$verifys.nullStr({item:"奖金"}),trigger:"blur"}],ranking:[{required:!0,validator:this.$verifys.nullStr({item:"名次"}),trigger:"blur"}]},currentHandle:"",contestId:""}},computed:{},created:function(){},mounted:function(){var t=this;this.$nextTick((function(){t.contestId=t.$route.query.id||"",t.initData()}))},methods:{initData:function(){var t=this,e={contextId:this.contestId,name:this.condition.name,currentPage:this.Mixin_currentPage,pageSize:this.Mixin_pageSize};this.condition.timeRang&&(e.startDate=this.condition.timeRang[0],e.stopDate=this.condition.timeRang[1]),this.$api.game.contestDetail(e).then((function(e){e.data&&0===e.data.resultCode&&(e.data.data.records.forEach((function(t,e){t.buttonLoading=!1})),t.tableData=e.data.data.records,t.Mixin_total=e.data.data.total)}))},clickEditBtn:function(t){this.currentHandle="edit",this.info.id=t.id,this.isShowGameDialog=!0,this.info.bonus=t.money,this.info.ranking=t.ranking},submitInfoBtn:function(t){var e=this;this.$refs[t].validate(function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(n){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n&&(r={id:e.info.id,money:e.info.bonus,ranking:e.info.ranking},e.$api.game.setRanking(r).then((function(t){t.data&&0===t.data.resultCode&&(e.initData(),e.$message.success("设置奖金和名次成功"),e.isShowGameDialog=!1)})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},props:{},watch:{},mixins:[],filters:{},components:{}},c=a,l=n("9ca4"),s=Object(l["a"])(c,r,i,!1,null,"5aa5c8b6",null);e["default"]=s.exports},cf7f:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("e18c");function r(t,e,n,r,i,o,a){try{var c=t[o](a),l=c.value}catch(s){return void n(s)}c.done?e(l):Promise.resolve(l).then(r,i)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(i,o){var a=t.apply(e,n);function c(t){r(a,i,o,c,l,"next",t)}function l(t){r(a,i,o,c,l,"throw",t)}c(void 0)}))}}},d7e1:function(t,e,n){"use strict";var r=n("efe2");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},fe59:function(t,e,n){"use strict";var r=n("1c8b"),i=n("3c10");r({target:"Array",proto:!0,forced:[].forEach!=i},{forEach:i})}}]);
//# sourceMappingURL=chunk-7ffc4cbf.219185fc.js.map