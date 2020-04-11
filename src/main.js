import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/common.css'
//引入全局的mixin..
import globalMixins from "./mixin/global_mixin.js"
//引入全局校验js..
import verify from './verify/index';
//引入api..
import api from './axios/api';

Vue.use(ElementUI);
Vue.mixin(globalMixins);
Vue.prototype.$verifys = verify;
Vue.prototype.$api = api;


import Router from 'vue-router'

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
};

Vue.config.productionTip = false;
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
