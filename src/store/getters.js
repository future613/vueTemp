const getters = {
    sidebar: state => state.app.sidebar,
    avatar: state => state.user.avatar,
    name: state => state.user.name,
    userId: state => state.user.userId,
    deptId:state =>state.user.deptId,
    roles: state => state.user.roles,
    permissions: state => state.user.permissions,
  
  }
  export default getters
  