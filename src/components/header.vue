<template>
  <div id="header">
    <el-menu theme="dark"  class=" navbar-fixed-top " mode="horizontal" @select="handleselect">
      <el-menu-item index="1">用户管理</el-menu-item>
      <el-col :offset="21" :span="0">
        <el-submenu index="2">
          <template slot="title">尹士鹏</template>
          <el-menu-item index="2-1">基本信息</el-menu-item>
          <el-menu-item index="2-2">设置</el-menu-item>
          <el-menu-item index="2-3">退出</el-menu-item>
        </el-submenu>
      </el-col>
    </el-menu>
  </div>
</template>
<script>
export default{
    methods:{
        handleselect(index){
            if(index == 1){
              this.$router.push({name:'user'})
            }else if(index == '2-3'){
                this.$store.dispatch("loginOut").then(() => {
                      this.$router.replace({path:'/login'})
                      location.reload()
                })
            }
        }
    }
}
</script>