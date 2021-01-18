import request from "@/utils/request"

// ------------------  API接口地址  ------------------ 
/** api地址 */
const LoginApi = '/login'
const getUserInfoApi = '/getInfo'
const logoutApi = '/logout'

// ------------------  API调用接口  ------------------ 

//登录
export const login = params => {
    return request.Post(LoginApi,params)
}
//获取用户信息
export const getUserInfo = params => {
    return request.apiGet(getUserInfoApi,params)
}
//退出系统
export const logout = params => {
    return request.apiGet(logoutApi,params)
}
