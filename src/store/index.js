import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import routers from './modules/router'
import app from './modules/app'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    user,
    routers
  },
  getters
})

export default store
