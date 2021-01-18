/**
 * 存储用户信息
 * 
 */
import { login, logout, getUserInfo } from '@/api/login'
import { setToken, removeToken } from '@/utils/auth'
const user = {
  state: {
    name: '',//名字
    userId:'',
    avatar: '',//头像
    roles: [],//角色
    permissions: [],//权限
    deptId:0,
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_USERID: (state, userId) => {
      state.userId = userId
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_PERMISSIONS: (state, permissions) => {
      state.permissions = permissions
    },
    SET_DEPT: (state, deptId) => {
      state.deptId = deptId
    },
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      const username = userInfo.username.trim()
      const password = userInfo.password
      const code = userInfo.code
      const uuid = userInfo.uuid
      return new Promise((resolve, reject) => {
        login(username, password, code, uuid).then(res => {
          setToken(res.token)
          commit('SET_TOKEN', res.token)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },



      // 获取用户信息
      GetInfo({ commit }) {
        return new Promise((resolve, reject) => {
          getUserInfo().then(res => {
            console.log(res)
            const user = res.result.user
            const avatar = user.avatar == "" ? require("../../assets/image/profile.jpg") : '';
            if (res.result.roles && res.result.roles.length > 0) { // 验证返回的roles是否是一个非空数组
              commit('SET_ROLES', res.result.roles)
              commit('SET_PERMISSIONS', res.result.permissions)
            } else {
              commit('SET_ROLES', ['ROLE_DEFAULT'])
            }
            commit('SET_NAME', user.userName)
            commit('SET_USERID', user.userId)
            commit('SET_AVATAR', avatar)
            commit('SET_DEPT', user.deptId)
            resolve(res)
          }).catch(error => {
            reject(error)
          })
        })
      },
    

    
    // 退出系统
    LogOut({ commit }) {
      return new Promise((resolve, reject) => {
        logout().then(() => {
          commit('SET_TOKEN', '')
          commit('SET_ROLES', [])
          commit('SET_PERMISSIONS', [])
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },



    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    }
  }
}

export default user
