import axios from './index';

const api = {
    //资讯管理-information
    information: {
        getInfoList(params) {
            return axios.get(params)
        },
        addInfo(params) {
            return axios.post(params)
        },

    }
};

export default api;
