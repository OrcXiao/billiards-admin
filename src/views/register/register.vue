<template>
  <div class="register-wrap">
    <el-form :model="register" :rules="registerRules" ref="register" label-width="100px">
      <el-form-item label="登录账号" prop="name">
        <el-input v-model="register.name"></el-input>
      </el-form-item>
      <el-form-item label="登录账号" prop="name">
        <el-input v-model="register.name"></el-input>
      </el-form-item>
      <el-form-item label="登录密码" prop="password">
        <el-input v-model="register.password"></el-input>
      </el-form-item>
      <el-form-item label="phone" prop="phone">
        <el-input v-model="register.phone"></el-input>
      </el-form-item>
      <el-form-item label="活动区域" prop="region">
        <el-select v-model="register.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
    export default {
        name: "register",
        data() {
            return {
                register: {},
                registerRules: {}
            }
        },
        computed: {},
        created() {
        },
        mounted() {
            //this.$ nextTick(() => {

            //})
        },
        methods: {},
        props: {},
        watch: {},
        mixins: [],
        filters: {},
        components: {},
    }
</script>

<style lang="scss" scoped>

</style>
