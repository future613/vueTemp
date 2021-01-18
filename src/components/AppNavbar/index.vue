<template>
  <div  class="bread-box" >
    <span> {{breadlist.length > 1?breadlist[1].name:""}}</span>
    <div class="right"> 
      <span >{{breadlist.length?breadlist[0].name:''}} / {{breadlist.length > 1?breadlist[1].name:''}}</span> 
       <el-button  @click='goBack' size='mini' type="primary">返回</el-button>     
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      breadlist:[],
    }
  },
  created () {
    this.getBread();
    
  },
  methods: {
    getBread () {
      this.breadlist = this.$route.matched;
    },
    goBack(){
      window.history.go(-1);
    }
  },
  watch: {
    $route () {
      this.getBread();
    }
  }
}
</script>
<style scoped lang="less">
.bread-box {
  height: 40px;
  line-height: 40px;
  text-indent: 20px;
  border-bottom: 1px solid #DCDFE6;
  box-sizing: border-box;
  position: relative;
  span{
     font-size: 14px;
      color: #444;
      cursor: pointer;
  }
  .right{
    position: absolute;
    bottom: 1px;
    right:40px;
    span{
      margin-right: 10px;
      cursor: pointer;
      font-size: 14px;
      color: #444;
    }
  }
  
}

</style>
