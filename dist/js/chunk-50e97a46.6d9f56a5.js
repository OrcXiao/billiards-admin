(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-50e97a46"],{"0c99":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"register-wrap"},[r("el-row",[r("el-col",{attrs:{span:8}},[r("el-form",{ref:"register",attrs:{model:t.register,rules:t.registerRules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"登录账号 :",prop:"account"}},[r("el-input",{attrs:{maxlength:"20",placeholder:"请输入登录账号"},model:{value:t.register.account,callback:function(e){t.$set(t.register,"account",e)},expression:"register.account"}})],1),r("el-form-item",{attrs:{label:"登录密码 :",prop:"password"}},[r("el-input",{attrs:{type:"password",maxlength:"20",placeholder:"请输入登录密码"},model:{value:t.register.password,callback:function(e){t.$set(t.register,"password",e)},expression:"register.password"}})],1),r("el-form-item",{attrs:{label:"确认密码 :",prop:"agnPassword"}},[r("el-input",{attrs:{type:"password",maxlength:"20",placeholder:"请再次输入密码"},model:{value:t.register.agnPassword,callback:function(e){t.$set(t.register,"agnPassword",e)},expression:"register.agnPassword"}})],1),r("el-form-item",{attrs:{label:"手机号码 :",prop:"phone"}},[r("el-input",{attrs:{maxlength:"11",placeholder:"请输入手机号码"},model:{value:t.register.phone,callback:function(e){t.$set(t.register,"phone",e)},expression:"register.phone"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submitRegister("register")}}},[t._v("提交")])],1)],1)],1)],1)],1)},o=[],i=(r("96cf"),r("1da1")),a=/^[1][1,2,3,4,5,6,7,8,9,0][0-9]{9}$/,s={name:"register",data:function(){var t=this,e=function(e,r,n){""===r?n(new Error("确认密码不能为空")):t.register.password!==t.register.agnPassword?n(new Error("两次输入的密码不一致")):n()},r=function(t,e,r){""===e?r(new Error("手机号码不能为空")):a.test(e)?r():r(new Error("请输入正确的手机号码格式"))};return{register:{account:"",password:"",agnPassword:"",phone:""},registerRules:{account:[{required:!0,message:"登录账号不能为空",trigger:"blur"}],password:[{required:!0,message:"登录密码不能为空",trigger:"blur"}],agnPassword:[{required:!0,validator:e,trigger:"blur"}],phone:[{required:!0,validator:r,trigger:"blur"}]}}},computed:{},created:function(){},mounted:function(){},methods:{submitRegister:function(t){var e=this;this.$refs[t].validate(function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(r){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r&&(n={account:e.register.account,password:e.register.password,phone:e.register.phone},e.$api.login.register(n).then((function(t){t.data&&0===t.data.resultCode&&e.$message.success("注册成功")})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},props:{},watch:{},mixins:[],filters:{},components:{}},c=s,u=r("2877"),l=Object(u["a"])(c,n,o,!1,null,"780ebb84",null);e["default"]=l.exports},"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("d3b7"),r("e6cf");function n(t,e,r,n,o,i,a){try{var s=t[i](a),c=s.value}catch(u){return void r(u)}s.done?e(c):Promise.resolve(c).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function s(t){n(a,o,i,s,c,"next",t)}function c(t){n(a,o,i,s,c,"throw",t)}s(void 0)}))}}},"96cf":function(t,e){!function(e){"use strict";var r,n=Object.prototype,o=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag",u="object"===typeof t,l=e.regeneratorRuntime;if(l)u&&(t.exports=l);else{l=e.regeneratorRuntime=u?t.exports:{},l.wrap=b;var h="suspendedStart",f="suspendedYield",p="executing",d="completed",g={},v={};v[a]=function(){return this};var m=Object.getPrototypeOf,y=m&&m(m(R([])));y&&y!==n&&o.call(y,a)&&(v=y);var w=_.prototype=L.prototype=Object.create(v);E.prototype=w.constructor=_,_.constructor=E,_[c]=E.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===E||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,_):(t.__proto__=_,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(w),t},l.awrap=function(t){return{__await:t}},k(P.prototype),P.prototype[s]=function(){return this},l.AsyncIterator=P,l.async=function(t,e,r,n){var o=new P(b(t,e,r,n));return l.isGeneratorFunction(e)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},k(w),w[c]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},l.values=R,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(G),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return s.type="throw",s.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),u=o.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),G(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;G(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:R(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),g}}}function b(t,e,r,n){var o=e&&e.prototype instanceof L?e:L,i=Object.create(o.prototype),a=new N(n||[]);return i._invoke=j(t,r,a),i}function x(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}function L(){}function E(){}function _(){}function k(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function P(t){function e(r,n,i,a){var s=x(t[r],t,n);if("throw"!==s.type){var c=s.arg,u=c.value;return u&&"object"===typeof u&&o.call(u,"__await")?Promise.resolve(u.__await).then((function(t){e("next",t,i,a)}),(function(t){e("throw",t,i,a)})):Promise.resolve(u).then((function(t){c.value=t,i(c)}),a)}a(s.arg)}var r;function n(t,n){function o(){return new Promise((function(r,o){e(t,n,r,o)}))}return r=r?r.then(o,o):o()}this._invoke=n}function j(t,e,r){var n=h;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return F()}r.method=o,r.arg=i;while(1){var a=r.delegate;if(a){var s=O(a,r);if(s){if(s===g)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var c=x(t,e,r);if("normal"===c.type){if(n=r.done?d:f,c.arg===g)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=d,r.method="throw",r.arg=c.arg)}}}function O(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,O(t,e),"throw"===e.method))return g;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var o=x(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,g;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,g):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function $(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function G(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach($,this),this.reset(!0)}function R(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){while(++n<t.length)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}return{next:F}}function F(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())}}]);
//# sourceMappingURL=chunk-50e97a46.6d9f56a5.js.map