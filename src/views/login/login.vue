<template>
  <div class="login-wrap dis-fl ju-ct al-ct wd100 hg100">
    <div class="login-box bo-r6 pd20">
      <div class="te-ct fs18 ft-b pd-b20">
        台球+后台管理系统
      </div>
      <el-form :model="login" :rules="loginRules" ref="login">
        <el-form-item prop="user">
          <el-input maxlength="20" v-model="login.user" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input maxlength="20" v-model="login.password" type="password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="submitLogin('login')" class="wd100" type="primary">登录</el-button>
        </el-form-item>
        <el-form-item>
          <div class="te-ct cl0061b2">
            made in 成都星球科技有限公司
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
    export default {
        name: "login",
        data() {
            return {
                login: {
                    user: '',
                    password: '',
                },
                loginRules: {
                    user: [
                        {required: true, message: '请输入账号', trigger: 'blur'},
                    ],
                    password: [
                        {required: true, message: '请输入密码', trigger: 'blur'},
                    ],
                }
            }
        },
        computed: {},
        created() {
        },
        mounted() {
            //this.$ nextTick(() => {

            //})
        },
        methods: {
            submitLogin(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                       this.$router.push('/admin')
                    }
                });
            },
        },
        props: {},
        watch: {},
        mixins: [],
        filters: {},
        components: {},
    }
</script>

<style lang="scss" scoped>
  .login-wrap {
    background: url("../../assets/img/login-bg.jpg") no-repeat;

    & > .login-box {
      width: 300px;
      height: 295px;
      background: #ffffff;
    }
  }
</style>
