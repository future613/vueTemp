<template>
  <div class="header" style="height:80px">
    <div class="header-menu">
      <p  class="menu-left">
         <img  class="logo" src="@/assets/logo.png"/>
        <span class="company"> <i> vue-Web基础模板  </i></span>
        <i @click="isNavbar" :class="sidebar?'el-icon-s-unfold':'el-icon-s-fold'"></i>
      </p>
      <el-menu
        :default-active="'1'"
        class="el-menu-horizon-demo"
        background-color="#0d5ab1"
        text-color="#fff"
        
        active-text-color="#fff"
        mode="horizontal"
        > 
        <el-menu-item >
        </el-menu-item>
        <el-menu-item  index="/inter">
           <span class="iconfont icon-guoji"></span>
           <span slot="title">模块一</span>
        </el-menu-item>
        <el-menu-item index="/point/addtask">
           <span class="iconfont icon-caozuo_xuandian_dingwei"></span>
           <span slot="title">模块二</span>
        </el-menu-item>
        <el-menu-item index="3">
           <span class="iconfont icon-org"></span>
           <span slot="title">模块三</span>
        </el-menu-item>
        <el-menu-item index="4">
           <span class="iconfont icon-tushuguan"></span>
           <span slot="title">模块四</span>
        </el-menu-item>
        
        <el-menu-item index="/system/user">
           <span class="iconfont icon-icon-user-light"></span>
           <span slot="title">模块五</span>
        </el-menu-item>
         </el-menu>
    </div>

    <div class="nav-right">
     <p class="feedback">
       <i style="margin-right:4px" class="el-icon-warning-outline"></i>
        <span>反馈</span>
     </p>
        <p class="timeNub">
          <span>{{time_year}}</span> 
          <span>{{time_date}}</span>
        </p>

   

      <el-dropdown class="avatar-container right-menu-item hover-effect" trigger="click">
        <div class="avatar-wrapper">
          <img  src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3022729924,1588907214&fm=11&gp=0.jpg" class="user-avatar" />
           <span style="color:#fff">Admin</span>
          <i style="color:#fff" class="el-icon-arrow-down" />
        </div>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item >
            <span @click="handleLogout">退出登录</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

    
    </div>
  </div>
</template>

<script>
import store from "@/store";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
     time_year:'',
     time_date:'',
     time_week:'',
    };
  },
  computed: {
        ...mapGetters(["sidebar"]),  
    },
  created() {
   this.timeInterval = setInterval(() => {
      this.timeupload();
    }, 1000);
  },
  methods: {
    isNavbar(){
     store.dispatch('toggleSideBar')
    },
    /** 退出登录 */
    handleLogout(){
    //  store.dispatch('LogOut').then(()=>{
    //     this.$router.push("/");
    //   })
      this.$router.push("/");
    },
    /** 滚动时间 */
    timeupload() {
      //获取当前时间
      let myDate = new Date();
      //获取当前年
      let year = myDate.getFullYear();
      //获取当前月
      let month = myDate.getMonth() + 1;
      //获取当前日
      let date = myDate.getDate();
      let h = myDate.getHours(); //获取当前小时数(0-23)
      let m = myDate.getMinutes(); //获取当前分钟数(0-59)
      let s = myDate.getSeconds();
      if (m >= 0 && m <= 9) {
        m = "0" + m;
      }
      if (s >= 0 && s <= 9) {
        s = "0" + s;
      }
      let a = ["日", "一", "二", "三", "四", "五", "六"];
      let week = "星期" + a[myDate.getDay()];
      let now = h + ":" + m + ":" + s;
      let year2 = year + "/" + month + "/" + date;
      this.time_year = year2;
      this.time_date = now;
      this.time_week = week;
    }
    
   
  }
};
</script>

<style scoped lang="less">
::v-deep .el-input .el-input-group__append{
  width: 80px !important;
  height: 40px !important;
  padding: 0;
  .input-append{
    height: 40px !important;
    line-height: 40px !important;
  }
}


::v-deep .menu-left {
  height: 40px;
  line-height: 40px;
  margin: 20px 0;
 
}
.el-icon-s-fold,.el-icon-s-unfold{
  color: #fff;
    font-size: 20px;
    font-weight: 300;
    opacity: 0.8;
    vertical-align: middle;
    cursor: pointer;
    
}
.logo {
  width: 35px;
  height: 30px;
  vertical-align: middle;
}
.company {
  width: 345px;
  height: 27px;
  line-height: 27px;
  font-family: YouSheBiaoTiHei;
  font-size: 20px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 2px;
  color: white;
  vertical-align: middle;
  font-weight: bold;
  padding-right: 20px;
}
.nav-right {
  .feedback{
    height: 80px;
    line-height: 80px;
   color: #fff;
   font-size: 13px;
   margin: 0 30px 0 0;
   cursor: pointer;
  }
  display: flex;
  justify-content: space-between;
  .timeNub {
   
    margin-top: 18px;
  }
  .timeNub 
 
  span{
    display: inline-block;
	font-family: MicrosoftYaHei;
  font-size: 12px;
  opacity: 0.8;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
  color: #fff;
  font-weight: 300;
  margin-top: 15px;
  }
  .timeNub span:first-child{
    margin-right: 6px;
  }
  .timeNub span:last-child{
    margin-right: 20px;
  }
  ::v-deep .el-input {
    width: 300px;
    margin-top: 10px;
    margin-right: 50px;
    .el-input__inner {
      border-radius: 20px 0 0 20px;
      background-color: #444;
      border: none;
      color: #ccc;
    }
    .el-input-group__append {
      background-color: #4876ff;
      border-radius: 0 20px 20px 0;
      color: #fff;
      border: none;
      cursor: pointer;
      width: 40px;
      text-align: center;
    }
  }
  .el-tooltip {
    margin-right: 60px;
    cursor: pointer;
    
  }

}


/* 下拉菜单  */
.el-dropdown {
  margin-right: 40px;
}
.el-dropdown-link {
  color: white;
  cursor: pointer;
}
.header {
  display: flex;
  justify-content: space-between;
  background-color: #0d5ab1;
   padding-right: 16px;
   padding-left: 20px;
   height: 80px;
  .header-menu {
    display: flex;
    
  }
  /deep/ .el-menu.el-menu--horizontal {
    border-bottom: none !important;
  }
  
 
}

::v-deep .el-badge {
  margin-top: 10px;
  .el-icon-message-solid {
    font-size: 20px;
    color: #ccc;
  }
  .el-badge__content.is-fixed {
    top: 10px;
    border: none;
  }
}
.avatar-container {
  height: 40px;
  margin: auto 0;
  margin-right: 30px;
   
  .avatar-wrapper {
    height: 40px;
    position: relative;
    span{
      display:none;
    }
    .user-avatar {
      cursor: pointer;
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
    .el-icon-arrow-down {
      cursor: pointer;
      position: absolute;
      right: -20px;
      top: 16px;
      font-size: 12px;
      font-weight: 300;
    }
  }
}
.el-menu--horizontal>.el-submenu:focus .el-submenu__title{
    color: white;
  }
  .el-menu--popup-bottom-start .el-submenu  .el-submenu__title{
    color: #333333!important;
    font-size: 12px!important;
  }
  
  .el-menu--popup-bottom-start{
     width: 100px;
  }
  
  ::v-deep .el-menu .el-menu--popup {
    width: 100px;
  }
  ::v-deep .el-menu-item {
   padding: 0 23px;
   border-bottom:none !important;
   height: 80px !important;
   line-height: 80px !important;
   span{
    font-size: 16px  !important;
   }
  }
  .el-menu-horizon-demo {
    .iconfont {
      margin-right: 6px;
    }
  }
  .el-menu-item.is-active {
   background-color: rgba(0, 0, 0, 0.2) !important;
  }
</style>