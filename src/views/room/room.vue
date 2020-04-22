<template>
  <div class="signature-wrap">
    <div>
      <el-form :inline="true">
        <el-form-item label="地区:">
          <el-cascader v-model.trim="condition.area" :options="options"></el-cascader>
        </el-form-item>
        <el-form-item class="mg-l10" label="球房名称:">
          <el-input v-model.trim="condition.title" clearable placeholder="请输入球房名称"></el-input>
        </el-form-item>
        <el-form-item class="mg-l10" label="创建日期:">
          <el-date-picker
                  v-model.trim="condition.createTime"
                  align="right"
                  type="date"
                  placeholder="请选择日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item class="mg-l20">
          <el-button @click="initData">查询</el-button>
          <el-button @click="clickAddBtn" type="primary">新增</el-button>

        </el-form-item>
      </el-form>
    </div>
    <div>总计: 100家</div>
    <div class="mg-t20">
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
                label="球房ID"
                width="180">
        </el-table-column>
        <el-table-column
                prop="name"
                label="球房名称"
                width="180">
        </el-table-column>
        <el-table-column
                prop="chargingRules"
                label="收费规则">
        </el-table-column>
        <el-table-column
                label="创建时间">
          <template slot-scope="scope">
            {{scope.row.createDate | Filter_FormatDate}}
          </template>
        </el-table-column>
        <el-table-column
                prop="state"
                width="120"
                label="活动">
        </el-table-column>
        <el-table-column
                prop="address"
                label="操作">
          <template slot-scope="scope">
            <el-button @click="clickEditBtn(scope.row)" type="primary">编辑</el-button>
            <el-button @click="clickRemoveBtn(scope.row)" type="danger">禁用</el-button>
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
            :title="currentHandle === 'add' ? '新增球房': '编辑球房'"
            :visible.sync="isShowRoomDialog"
            @close="Mixin_dialogClose('room', 'isShowRoomDialog')"
            width="700px">
      <el-form label-width="120px">
        <el-form-item label="球房名称 :" prop="title">
          <el-input maxlength="20" placeholder="请输入教程标题" v-model.trim="room.title"></el-input>
        </el-form-item>
        <el-form-item label="球房设施 :" prop="details">
          <el-input maxlength="100" type="textarea" placeholder="请输入球房设施" v-model.trim="room.details"></el-input>
        </el-form-item>
        <el-form-item label="球房经度 :" prop="details">
          <el-input placeholder="请输入球房经度" v-model.trim="room.details"></el-input>
        </el-form-item>
        <el-form-item label="球房纬度 :" prop="details">
          <el-input placeholder="请输入球房纬度" v-model.trim="room.details"></el-input>
        </el-form-item>
        <el-form-item label="收费规则 :" prop="details">
          <el-input placeholder="请输入球房设施" v-model.trim="room.details"></el-input>
        </el-form-item>
        <el-form-item label="球房活动 :" prop="details">
          <el-input placeholder="请输入球房设施" type="textarea" v-model.trim="room.details"></el-input>
        </el-form-item>
        <el-form-item label="球房图片 :" prop="details">
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
        <el-button type="primary" @click="isShowRoomDialog = false">确定</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
    export default {
        name: "room",
        data() {
            return {
                options: [],
                //搜索条件
                condition: {
                    area: '',
                    title: '',
                    createTime: '',
                    integral: '',
                },
                //表格数据
                tableData: [],
                //显示弹框
                isShowRoomDialog: false,
                //教程obj
                room: {
                    //标题
                    title: '',
                    //详情
                    details: '',
                    //教程图片
                    img: ''
                },
                //当前操作类型
                currentHandle: ''
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
                this.$api.room.getRooms(params).then(res => {
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
                this.isShowRoomDialog = true;
            },
            //点击编辑按钮
            clickEditBtn() {
                this.currentHandle = 'edit';
                this.isShowRoomDialog = true;
            },
            //点击删除按钮
            clickRemoveBtn(row) {
                this.$confirm(`确定删除该球房 ?`, '', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {


                }).catch(() => {

                });
            },
            //删除图片
            handleRemove() {

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
