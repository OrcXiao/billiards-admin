import axios from 'axios';

//请求超时
axios.defaults.timeout = 10000;
//请求的基础url
axios.defaults.baseURL = 'https://billiards.utools.club';

export default axios
