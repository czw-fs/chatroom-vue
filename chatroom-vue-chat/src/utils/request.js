import axios from 'axios';
import {Message} from "element-ui";
import router from '../router'


//设置默认传输类型为json
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'

// 创建axios实例
const service = axios.create({
    // axios中请求配置有baseURL选项，表示请求URL公共部分
    baseURL: 'http://127.0.0.1:8888',
    // 没有超时限制
    timeout: 0
})

//请求拦截器
service.interceptors.request.use(config => {

    if (config.method === 'post' || config.method === 'put') {
        config.data = typeof config.data === 'object' ? JSON.stringify(config.data) : config.data;
    }

    return config;
},error => {
    Message.error({message: error})
})

//响应拦截器
service.interceptors.response.use(config => {
    return config.data;
},
error => {
    Message.error({message: error})
});


export default service