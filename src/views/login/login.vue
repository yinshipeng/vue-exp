<template>
  <div class="login-wrapper">
    <div class="bg"></div>
    <h1>XXXX 后台管理系统</h1>
    <el-col :span="8" :offset="8">
      <el-form ref="form" :model="form" :rules="rules" @submit.native.prevent="onSubmit">
        <el-form-item prop="username" >
            <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
            <el-input v-model="form.password" type="password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="login-button" :class="{error: loginError}"
                     type="success" native-type="submit" :loading="loading">登录
          </el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </div>
</template>
<script>
    export default{
        data(){
          return {
            form:{
              username:'',
              password:''
            },
            rules: {
              username: [{
                required: true, message: '请输入用户名', trigger: 'blur'
              }],
              password: [{
                required: true, message: '请输入密码', trigger: 'blur'
              }]
            },
            loading: false,
            valid: false,
            loginError: false
          }
        },
        methods: {
          onSubmit () {
            this.$refs.form.validate(valid => {
              if (valid) {
                this.loading = true
                this.$store.dispatch('saveCurrentLoginInfo',this.form).then(() => {
                        this.$router.replace({path:'/'});
                        location.reload()
                  })
              }
            })
          }
        }

    }


</script>
<style>
.bg{
  position:absolute;
  left:0;
  right:0;
  top:0;
  bottom:0;
  width:100%;
  height:100%;
  background-size:cover;
  background-position:100%;
  background-image:url('../../assets/login-bg.jpg');
}
h1{
  position:relative;
  margin:0 0 1rem;
  z-index:1;
}
.login-wrapper{
    margin-top:10%;
}
</style>
