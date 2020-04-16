import axios from 'axios';

//请求超时
axios.defaults.timeout = 10000;
//请求的基础url
axios.defaults.baseURL = 'http://billiards.utools.club/api';
// 跨域请求，允许保存cookie
// axios.defaults.withCredentials = true;
axios.defaults.headers.get['content-type'] = 'application/json;charset=UTF-8';
export default axios
