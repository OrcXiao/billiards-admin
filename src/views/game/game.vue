<template>
  <div class="information-wrap">
    <div>
      <el-form :inline="true">
        <el-form-item label="标题:">
          <el-input v-model.trim="condition.title" clearable placeholder="请输入标题"></el-input>
        </el-form-item>
        <el-form-item class="mg-l10" label="创建日期:">
          <el-date-picker
                  class="w300"
                  v-model.trim="condition.timeRang"
                  type="daterange"
                  value-format="timestamp"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item class="mg-l20">
          <el-button @click="Mixin_handleCurrentChange(1)">查询</el-button>
          <el-button type="primary" @click="clickAddBtn">新增</el-button>
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
                prop="id"
                label="赛讯ID"
                width="180">
        </el-table-column>
        <el-table-column
                prop="title"
                label="赛讯标题"
                width="180">
        </el-table-column>
        <el-table-column
                prop="peopleNumber"
                label="赛讯人数"
                width="180">
        </el-table-column>
        <el-table-column
                prop="money"
                label="总奖金"
                width="180">
        </el-table-column>
        <el-table-column
                label="创建时间">
          <template slot-scope="scope">
            {{scope.row.createDate | Filter_FormatDate}}
          </template>
        </el-table-column>
        <el-table-column
                prop="address"
                label="操作">
          <template slot-scope="scope">
            <el-button @click="clickEditBtn(scope.row)" type="primary">编辑</el-button>
            <el-button @click="clickRemoveBtn(scope.row)" type="danger">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-row class="mg-t20">
        <el-col :offset="8" :span="8">
          <el-pagination
                  @current-change="Mixin_handleCurrentChange"
                  :page-size="Mixin_pageSize"
                  layout="prev, pager, next, jumper"
                  :total="Mixin_total">
          </el-pagination>
        </el-col>
      </el-row>
    </div>

    <el-dialog
            :title="currentHandle === 'add' ? '新增赛讯': '编辑赛讯'"
            :visible.sync="isShowGameDialog"
            @close="Mixin_dialogClose('info', 'isShowGameDialog')"
            width="700px">
      <el-form ref="info" :model="info" :rules="infoRules" label-width="120px">
        <el-form-item label="赛讯标题 :" prop="title">
          <el-input maxlength="20" placeholder="请输入赛讯标题" v-model.trim="info.title"></el-input>
        </el-form-item>
        <el-form-item label="赛讯详情 :" prop="details">
          <el-input maxlength="100" type="textarea" placeholder="请输入赛讯详情" v-model.trim="info.details"></el-input>
        </el-form-item>
        <el-form-item label="点赞数 :" prop="fabulousNumber">
          <el-input placeholder="请输入点赞数" v-model.trim="info.fabulousNumber"></el-input>
        </el-form-item>
        <el-form-item label="总奖金 :" prop="money">
          <el-input placeholder="请输入总奖金" v-model.trim="info.money"></el-input>
        </el-form-item>
        <el-form-item label="参赛人数 :" prop="peopleNumber">
          <el-input placeholder="请输入参赛人数" v-model.trim="info.peopleNumber"></el-input>
        </el-form-item>
        <el-form-item label="赛事状态 :" prop="state">
          <el-input placeholder="请输入赛事状态" v-model.trim="info.state"></el-input>
        </el-form-item>
        <el-form-item label="赛讯标题图片  :" prop="img">
          <el-upload
                  action="#"
                  list-type="picture-card"
                  :auto-upload="false">
            <i slot="default" class="el-icon-plus"></i>
            <div slot="file" slot-scope="{file}">
              <img class="el-upload-list__item-thumbnail" :src="file.url" alt="">
              <span class="el-upload-list__item-actions">
                <span class="el-upload-list__item-delete" @click="handleRemove(file)">
                  <i class="el-icon-delete"></i>
                </span>
              </span>
            </div>
          </el-upload>
        </el-form-item>
      </el-form>
      <div class="mt10 dis-fl ju-ct">
        <el-button type="primary" @click="submitInfoBtn('info')">确定</el-button>
        <el-button @click="isShowGameDialog = false">取消</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
    export default {
        name: "information",
        data() {
            return {
                //搜索条件
                condition: {
                    title: '',
                    createTime: ''
                },
                //表格数据
                tableData: [],
                //显示弹框
                isShowGameDialog: false,
                //赛讯obj
                info: {
                    //标题
                    title: '',
                    //详情
                    details: '',
                    //赛讯图片
                    img: ''
                },
                //规则校验
                infoRules: {
                    title: [
                        {
                            required: true,
                            validator: this.$verifys.nullStr({item: '赛讯标题'}),
                            trigger: 'blur'
                        },
                    ],
                    details: [
                        {
                            required: true,
                            validator: this.$verifys.nullStr({item: '赛讯详情'}),
                            trigger: 'blur'
                        },
                    ],
                    img: ''
                },
                //当前操作状态(edit->编辑, add->新增)
                currentHandle: '',
            }
        },
        computed: {},
        created() {
        },
        mounted() {
            this.$nextTick(() => {
                this.initData();
            })
        },
        methods: {
            //获取数据
            initData() {
                let params = {
                    title: this.condition.title,
                    currentPage: this.Mixin_currentPage,
                    pageSize: this.Mixin_pageSize,
                };
                if (this.condition.timeRang) {
                    params.startDate = this.condition.timeRang[0];
                    params.stopDate = this.condition.timeRang[1];
                }
                this.$api.game.getContests(params).then(res => {
                    if (res.data && res.data.resultCode === 0) {
                        res.data.data.records.forEach((item, index) => {
                            item.buttonLoading = false;
                        });
                        this.tableData = res.data.data.records;
                        this.Mixin_total = res.data.data.total;
                    }
                });
            },
            //点击新增按钮
            clickAddBtn() {
                this.currentHandle = 'add';
                this.isShowGameDialog = true;
            },
            //点击编辑按钮
            clickEditBtn() {
                this.currentHandle = 'edit';
                this.isShowGameDialog = true;
            },

            //删除图片
            handleRemove() {

            },

            //提交赛讯
            submitInfoBtn(formName) {
                this.$refs[formName].validate(async valid => {
                    if (valid) {
                        if (this.currentHandle === 'add') {

                        } else {

                        }
                    }
                })
            },
            //点击启用/禁用按钮
            clickStartOrEndBtn(row, type) {
                this.$confirm(`确定${type === 'start' ? '启用' : '禁用'}当前赛讯 ?`, '', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    if (type === 'start') {

                    } else {

                    }

                }).catch(() => {

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

</style>
