<template>
  <div class="home-wrap">
    <el-container>
      <el-header class="header-wrap">
        <div class="header-box dis-fl ju-sb fs22 clffffff hg100">
          <div class="">台球+ 后台管理系统</div>
          <div>
            <el-dropdown @command="handleCommand" trigger="click" class="cu-pt">
              <span class="clffffff">
                 <i class="fs18 el-icon-user-solid"></i>
                  <span class="fs16 mg-l10">管理员</span>
                  <i class="fs16 mg-l10 el-icon-arrow-down"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="logout">退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </el-header>
      <el-container class="container-wrap">
        <el-aside class="nav-wrap" width="200px">
          <el-menu
                  router
                  :default-active="defaultActive"
                  class="el-menu-vertical-demo">
            <el-menu-item index="/">
              <i class="el-icon-menu"></i>
              <span slot="title">导航1</span>
            </el-menu-item>
            <el-menu-item index="/nav2">
              <i class="el-icon-document"></i>
              <span slot="title">导航2</span>
            </el-menu-item>
            <el-menu-item index="/nav3">
              <i class="el-icon-setting"></i>
              <span slot="title">导航3</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
    export default {
        name: "home",
        data() {
            return {
                defaultActive: '/'
            }
        },
        computed: {},
        created() {
        },
        mounted() {
            this.$nextTick(() => {
                this.defaultActive = this.$route.path || '/';
            })
        },
        methods: {
            handleCommand(command) {
                if (command === 'logout') {
                    this.$router.push('/login');
                }
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
  .home-wrap {
    .header-wrap {
      background: #1899ff;

      .header-box {
        line-height: 60px;
      }
    }

    .container-wrap {

      .nav-wrap {
        min-height: calc(100vh - 60px);
        border-right: 1px solid #cccccc;
      }
    }
  }
</style>
