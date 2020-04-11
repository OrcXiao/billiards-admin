import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        //页面loading状态
        pageLoading: false,
    },
    mutations: {
        //设置loading状态
        SET_LOADING_STATE(state, val) {
            state.pageLoading = val
        }
    }


});

export default store
