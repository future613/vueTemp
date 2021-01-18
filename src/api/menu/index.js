import request from '@/utils/request'

// ------------------  API接口地址  ------------------ 
/** api地址 */

const getRoutersApi = "/getRouters"


//获取路由
export const getRouters = params => {
  return request.apiGet(getRoutersApi,params)
}