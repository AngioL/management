import axios from 'axios'

const service = axios.create({
    baseURL: 'http://47.109.25.112:10089/api/'
})

// 请求拦截
service.interceptors.request.use(config => config)

// 响应拦截

service.interceptors.response.use(res => {
    // 错误码处理
    return res;
}, err => {
    return Promise.reject(err)
})

export default service