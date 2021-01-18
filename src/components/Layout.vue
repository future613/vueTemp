<template>
  <el-container>
    <el-header style="height:80px">
      <app-header  ref="header"></app-header>
    </el-header>
    <el-container>
      <el-aside  width="250"><app-aside class="aside"></app-aside></el-aside>
      <el-container>
        <el-main>
          <app-navbar></app-navbar>
          <app-main></app-main>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>
<script>
// 会导入 ./AppHeader 下面的 index.vue组件
import AppHeader from './AppHeader'
import AppNavbar from './AppNavbar'
import AppAside from './AppAside'
import AppMain from './AppMain'

export default {
  components: { AppHeader, AppNavbar,AppAside, AppMain },
  mounted(){
  
  },
  data(){
  return{
    
  }
  },
  
}
</script>
<style scoped>
/* 头部区域 */
.el-header {
  padding: 0;
 
}
::v-deep .el-aside {
  background-color:#2b2b2b;
  height: calc(100vh - 80px);
}
::v-deep .el-main {
  padding: 0;
  position: relative;
  overflow: hidden;
}
</style>