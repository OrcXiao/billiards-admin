<template>
  <div class="login-wrap dis-fl ju-ct al-ct wd100 hg100">
    <div class="login-box bo-r6 pd20">
      <div class="te-ct fs18 ft-b pd-b20">
        台球+后台管理系统
      </div>
<!--      <el-tabs v-model="activeName" @tab-click="handleClick">-->
<!--        <el-tab-pane label="登 录" name="1">-->
          <el-form :model="login" :rules="loginRules" ref="login">
            <el-form-item prop="user">
              <el-input maxlength="20" v-model="login.user" placeholder="请输入账号"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input maxlength="20" v-model="login.password" type="password" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button @click="submitLogin('login')" class="wd100" type="primary">登 录</el-button>
            </el-form-item>
          </el-form>
<!--        </el-tab-pane>-->
<!--        <el-tab-pane label="注 册" name="2">-->
<!--          <el-form :model="register" :rules="loginRules" ref="register">-->
<!--            <el-form-item prop="user">-->
<!--              <el-input maxlength="20" v-model="register.user" placeholder="请输入账号"></el-input>-->
<!--            </el-form-item>-->
<!--            <el-form-item prop="password">-->
<!--              <el-input maxlength="20" v-model="register.password" type="password" placeholder="请输入密码"></el-input>-->
<!--            </el-form-item>-->
<!--            <el-form-item>-->
<!--              <el-button @click="submitRegister('register')" class="wd100" type="primary">注 册</el-button>-->
<!--            </el-form-item>-->
<!--          </el-form>-->

<!--        </el-tab-pane>-->
<!--      </el-tabs>-->

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
                },
                activeName: '1',
                register: {
                    user: '',
                    password: '',
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
            //切换选项卡
            handleClick(tab, event) {
                this.login = {
                    user: '',
                    password: '',
                };
                this.register = {
                    user: '',
                    password: '',
                };
                this.$refs['login'].resetFields();
                this.$refs['register'].resetFields();
            },
            //点击登录
            submitLogin(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$router.push('/admin')
                    }
                });
            },
            //点击注册
            submitRegister(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {

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
      height: 250px;
      background: #ffffff;
    }

    /deep/ .el-tabs__nav {
      width: 100%;

      .el-tabs__item {
        width: 50%;
        padding: 0 !important;
        text-align: center;
      }

      .el-tabs__active-bar {
        width: 50% !important;
      }
    }
  }
</style>
