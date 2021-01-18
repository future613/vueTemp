/**
 *  用于配置所有请求地址
 */

 
// ------------------ 后端服务请求地址 ----------------------

const prodServerURL = "http://115.236.87.26:9800/" //生产环境
const devServerURL = "http://115.236.87.26:9800"  // 测试环境
const serverURL = process.env.NODE_ENV == "development" ? devServerURL : prodServerURL

export { serverURL }