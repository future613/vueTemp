// * axios封装
import axios from "axios";
import { Message } from "element-ui";
import { serverURL } from "../config/url";
import { getToken,setToken,setPin,getPin } from './auth'


//是否是登录请求正则判断
const loginReqReg = /\/*\/login$/

// 创建axios实例
var instance = axios.create({
    timeout: 1000*60*60 //过期时间
});

// 设置后端接口请求
instance.defaults.baseURL = serverURL
// 设置post请求头
instance.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded"

// 请求拦截器
instance.interceptors.request.use(
    config => {
        //如果是登录请求，请求头中增加pin,用于处理账号同时登录问题
        if(loginReqReg.test(config.url)){
            setPin()
            config.headers.pin = getPin()
        }else{
            getToken() && (config.headers.token = getToken());
            getPin() && (config.headers.pin = getPin());
            
        }
        config.headers['Accept'] = 'application/json';
        return config;
    },
    error => Promise.error(error)
);

// 自定义的 axios 响应拦截器
instance.interceptors.response.use((response) => {
    // 判断一下响应中是否有 token，如果有就直接使用此 token 替换掉本地的 token。你可以根据你的业务需求自己编写更新 token 的逻辑
    if(loginReqReg.test(response.config.url)){
        setToken(response.headers.token)   
    }
    
    return response
}, (error) => {
    if (error.response) {
        switch (error.response.status) {
            // case 401:
            //     // 这里写清除token的代码
            //     // router.replace({
            //     //     path: 'login',
            //     //     query: {redirect: router.currentRoute.fullPath}//登录成功后跳入浏览的当前页面
            //     // })
               
                case 400:
            Message.error("错误请求");
         break;
        case 401:
            Message.error("未授权，请重新登录");
            break;
        case 403:
            Message.error("拒绝访问");
            break;
        case 404:
            Message.error("请求错误,未找到该资源");
            break;
        case 405:
            Message.error("请求方法未允许");
            break;
        case 408:
            Message.error("请求超时");
            break;
        case 500:
            Message.error("服务器端出错");
            break;
        case 501:
            Message.error("网络未实现");
            break;
        case 502:
            Message.error("网络错误");
            break;
        case 503:
            Message.error("服务不可用");
            break;
        case 504:
            Message.error("网络超时");
            break;
        case 505:
            Message.error("http版本不支持该请求");
            break;
        default:
            Message.error('连接错误');
        }
    }
    return Promise.reject(error)
});


/** get请求 */
export function apiGet(url, param) {
    return new Promise((reslove, reject) => {
        instance.get(url, { params: param }).then(res => {
            reslove(res.data)
            return res.data
        }).catch(err => {
            reject(err)
            return err
        })
    })
}

export function Get(url, param) {
    return new Promise((reslove, reject) => {
        instance.get(url,  param ).then(res => {
            reslove(res.data)
            return res.data
        }).catch(err => {
            reject(err)
            return err
        })
    })
}




/** post请求 */
export function apiPost(url, param) {
    return new Promise((reslove, reject) => {
        instance.post(url, { params: param }).then(res => {
            reslove(res.data)
            return res.data
        }).catch(err => {
            reject(err)
            return err
        })
    })
}
export function Post(url,param){
    return new Promise((reslove,reject)=>{
      instance.post(url,param).then(res=>{
        reslove(res.data)
        return res.data
      }).catch(err=>{
        reject(err)
        return err
      })
    })
  }

/** 文件上传 */
export function uploadFiles(url, files) {
    const formData = new FormData()
    formData.append('file', files)
    return new Promise((reslove, reject) => {
        instance.post(url, files).then(res => {
            reslove(res.data)
            return res.data
        }).catch(err => {
            reject(err)
            return err
        })
    })
}
// export default instance;
export default { apiGet, Get,apiPost,Post, uploadFiles };
