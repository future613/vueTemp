<template>
  <el-menu
    class="el-menu-vertical-demo"
    :background-color="variables.menuBg"
    :text-color="variables.menuText"
    :collapse="sidebar"
   >
    <el-menu-item index="1">
      <i class="iconfont icon-07_tongjifenxi"></i>
      <span slot="title">导航一</span>
    </el-menu-item>
    <el-menu-item index="2">
      <i class="iconfont icon-tongji"></i>
      <span slot="title">导航二</span>
    </el-menu-item>

    <el-submenu index="3">
      <template slot="title">
        <i class="iconfont icon-shujuzhongxin"></i>
        <span slot="title">导航三</span>
      </template>
      <el-menu-item index="3-1">选项一</el-menu-item>
      <el-submenu index="3-2">
        <template slot="title">选项二</template>
        <el-menu-item index="3-2-1">选项子菜单一</el-menu-item>
        <el-menu-item index="3-2-2">选项子菜单二</el-menu-item>
      </el-submenu>
    </el-submenu>

    <el-menu-item index="4">
      <i class="iconfont icon-jianyi"></i>
      <span slot="title">导航四</span>
    </el-menu-item>
  </el-menu>
  
</template>

<script>
import { mapGetters } from "vuex";
import variables from "@/assets/style/variables.scss"
export default {
  data() {
    return {};
  },
  created(){
  },
  computed: {
    ...mapGetters(["sidebar"]),
    variables() {
      return variables;
    },
  },
};
</script>

<style lang="less" scoped>
.el-menu-item {
  font-size: 12px;
  padding: 0px 80px;
  span {
    font-size: 12px !important;
  }
}
::v-deep .el-submenu__title {
  width: 200px;
  font-size: 12px !important;
}
.el-menu-vertical-demo {
  .iconfont {
    margin-right: 16px;
  }
}
::v-deep .el-menu {
  width: 200px !important;
}
::v-deep .el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 500px !important;
  min-height: 600px !important;
}
::v-deep .el-tooltip {
  width: 68% !important;
}
</style>