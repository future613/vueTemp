/**
 * 存储路由信息
 * 
 */

// import  constantRoutes  from '@/router'
import { getRouters } from '@/api/menu'
// import Layout from '@/layout/index'
import Layout from '@/components/Layout.vue'

const routers = {
//储存路由数据 
  state: {
    routes: [],//总体路由
      // addRoutes: [] //添加的后台路由
  },
//获取数据方法
  mutations: {
      //建立路由数据
    SET_ROUTES: (state, routes) => {
      // state.addRoutes = routes
      // state.routes = constantRoutes.concat(routes)   
      state.routes = routes
    }
  },
  actions: {
    // 生成路由
    GenerateRoutes({ commit }) {
      return new Promise(resolve => {
        // 向后端请求路由数据
        getRouters().then(res => {
          const accessedRoutes = filterAsyncRouter(res.result)
          accessedRoutes.push({ path: '*', redirect: '/404', hidden: true })
          commit('SET_ROUTES', accessedRoutes)
          resolve(accessedRoutes)
        })
      })
    }
  }
}

//遍历后台传来的路由字符串，转换为组件对象
function filterAsyncRouter(asyncRouterMap) {
  return asyncRouterMap.filter(route => {
    if (route.component) {
      // Layout组件特殊处理
      if (route.component === 'Layout') {
        route.component = Layout
      } else {
      //路由懒加载
        route.component = loadView(route.component)
      }
    }
    //如果有子路由遍历子路由
    if (route.children != null && route.children && route.children.length) {
      route.children = filterAsyncRouter(route.children)
    }
    return true
  })
}

export const loadView = () => { // 路由懒加载
  return (resolve) =>  require([], resolve)
  // `../../view/${view}`
}

export default routers
