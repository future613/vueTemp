

/**
 * 框架结构组件相互传参
 * 
 */
const sildebar = {
  state:{
    sidebar:false, 
  },
 
 mutations:{
  TOGGLE_SIDEBAR: (state) => {
    state.sidebar = !state.sidebar
  },

},
 actions:{
  toggleSideBar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  }
}
}
export default sildebar
