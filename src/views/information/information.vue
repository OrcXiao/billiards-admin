<template>
  <div class="information-wrap">
    <div>
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="审批人:">
          <el-input v-model="formInline.user" placeholder="审批人"></el-input>
        </el-form-item>
        <el-form-item class="mg-l20" label="活动区域:">
          <el-select v-model="formInline.region" placeholder="活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="mg-l20">
          <el-button @click="initData">查询</el-button>
          <el-button type="success" @click="clickAddBtn">新增</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div>
      <el-table
              border=""
              :data="tableData"
              style="width: 100%">
        <el-table-column
                type="index"
                label="序号"
                width="50">
        </el-table-column>
        <el-table-column
                prop="date"
                label="资讯ID"
                width="180">
        </el-table-column>
        <el-table-column
                prop="name"
                label="资讯标题"
                width="180">
        </el-table-column>
        <el-table-column
                prop="address"
                label="创建时间">
        </el-table-column>
        <el-table-column
                prop="address"
                label="操作">
          <template slot-scope="scope">
            <el-button type="primary">查看</el-button>
            <el-button type="danger">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-row class="mg-t20">
        <el-col :offset="8" :span="8">
          <el-pagination
                  @current-change="handleCurrentChange"
                  :page-size="10"
                  layout="prev, pager, next, jumper"
                  :total="1000">
          </el-pagination>
        </el-col>
      </el-row>

    </div>
  </div>
</template>

<script>
    export default {
        name: "information",
        data() {
            return {
                formInline: {
                    user: '',
                    region: ''
                },
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
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
            //获取数据
            initData() {

            },
            //点击新增按钮
            clickAddBtn() {

            },
            //表格分页
            handleCurrentChange() {

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

</style>
