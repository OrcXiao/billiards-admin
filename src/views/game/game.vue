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
        >
        </el-table-column>
        <el-table-column
                prop="title"
                label="赛讯标题"
        >
        </el-table-column>
        <el-table-column
                prop="peopleNumber"
                label="赛讯人数"
        >
        </el-table-column>
        <el-table-column
                prop="money"
                label="总奖金"
        >
        </el-table-column>
        <el-table-column
                width="260"
                label="缩略图">
          <template slot-scope="scope">
            <div class="thumbnail-wrap">
              <img class="hg100 wd100" :src="scope.row.imgUrl" alt="">
            </div>
          </template>
        </el-table-column>

        <el-table-column
                width="180"
                label="创建时间">
          <template slot-scope="scope">
            {{scope.row.createDate | Filter_FormatDate}}
          </template>
        </el-table-column>
        <el-table-column
                width="280"
                prop="address"
                label="操作">
          <template slot-scope="scope">
            <el-button :loading="scope.row.buttonLoading" @click="clickEditBtn(scope.row)" type="primary">编辑</el-button>
            <el-button @click="clickManageBtn(scope.row)">管理</el-button>
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
        <el-form-item label="赛事城市 :" prop="city">
          <el-cascader class="wd100" placeholder="请选择赛事城市" v-model.trim="info.city" :options="options"
                       :props="props"></el-cascader>
        </el-form-item>
        <el-form-item label="比赛详细地址 :" prop="address">
          <el-input maxlength="20" placeholder="请输入比赛详细地址" v-model.trim="info.address"></el-input>
        </el-form-item>
        <el-form-item label="点赞数 :" prop="fabulousNumber">
          <el-input placeholder="请输入点赞数" v-model.trim="info.fabulousNumber"></el-input>
        </el-form-item>
        <el-form-item label="总奖金 :" prop="money">
          <el-input placeholder="请输入总奖金" v-model.trim="info.money"></el-input>
        </el-form-item>
        <el-form-item label="比赛球房id :" prop="play_room">
          <el-input placeholder="请输入比赛球房id" v-model.trim="info.play_room"></el-input>
        </el-form-item>
        <el-form-item label="比赛时间 :" prop="play_time">
          <el-date-picker
                  class="wd100"
                  v-model="info.play_time"
                  type="datetime"
                  placeholder="选择比赛时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="参赛人数 :" prop="peopleNumber">
          <el-input placeholder="请输入参赛人数" v-model.trim="info.peopleNumber"></el-input>
        </el-form-item>
        <el-form-item label="赛事状态 :" prop="state">
          <el-select class="wd100" v-model="info.state" placeholder="请选择赛事状态">
            <el-option label="待开始" value="0"></el-option>
            <el-option label="进行中" value="1"></el-option>
            <el-option label="已结束" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="是否展示 :" prop="showFlag">
          <el-radio-group v-model="info.showFlag">
            <el-radio :label="true" border>展示</el-radio>
            <el-radio :label="false" border>不展示</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="赛讯标题图片  :" prop="imgUrl">
          <CmUpload
                  upload-name="img"
                  :initObj="info.imgUrl"
                  @uploadSuccess="uploadSuccess">
          </CmUpload>
        </el-form-item>
        <el-form-item label="赛讯详情 :" prop="context">
          <el-input maxlength="100" type="textarea" placeholder="请输入赛讯详情" v-model.trim="info.context"></el-input>
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
        props: {
          value: 'text',
          label: 'text',
          children: 'children'
        },
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
          //城市
          city: '',
          //详细地址
          address: '',
          //点赞数
          fabulousNumber: '',
          //总奖金
          money: '',
          //比赛球房id
          play_room: '',
          //比赛时间
          play_time: '',
          //参赛人数
          peopleNumber: '',
          //赛事状态
          state: '',
          //是否展示
          showFlag: '',
          //详情
          context: '',
          //赛讯图片
          imgUrl: '',

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
          city: [
            {
              required: true,
              validator: this.$verifys.nullStr({item: '赛事城市'}),
              trigger: 'change'
            },
          ],
          address: [
            {
              required: true,
              validator: this.$verifys.nullStr({item: '比赛详细地址'}),
              trigger: 'blur'
            },
          ],
          fabulousNumber: [
            {
              required: true,
              validator: this.$verifys.nullStr({item: '点赞数'}),
              trigger: 'blur'
            },
          ],
          money: [
            {
              required: true,
              validator: this.$verifys.nullStr({item: '总奖金'}),
              trigger: 'blur'
            },
          ],
          play_room: [
            {
              required: true,
              validator: this.$verifys.nullStr({item: '比赛球房id'}),
              trigger: 'blur'
            },
          ],
          play_time: [
            {
              required: true,
              validator: this.$verifys.nullStr({item: '比赛时间'}),
              trigger: 'blur'
            },
          ],
          peopleNumber: [
            {
              required: true,
              validator: this.$verifys.nullStr({item: '参赛人数'}),
              trigger: 'blur'
            },
          ],
          state: [
            {
              required: true,
              validator: this.$verifys.nullStr({item: '赛事状态'}),
              trigger: 'change'
            },
          ],
          showFlag: [
            {
              required: true,
              validator: this.$verifys.nullStr({item: '是否展示'}),
              trigger: 'change'
            },
          ],
          context: [
            {
              required: true,
              validator: this.$verifys.nullStr({item: '赛讯详情'}),
              trigger: 'blur'
            },
          ],
          imgUrl: [
            {
              required: true,
              validator: this.$verifys.nullStr({item: '赛讯标题图片'}),
              trigger: 'change'
            },
          ],
        },
        //当前操作状态(edit->编辑, add->新增)
        currentHandle: '',
      }
    },
    computed: {
      options: function () {
        return this.$store.state.vx_allCity
      }
    },
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
        delete this.info.id;
        this.isShowGameDialog = true;
      },
      //点击编辑按钮
      clickEditBtn(row) {
        this.currentHandle = 'edit';
        this.info.id = row.id;
        row.buttonLoading = true;
        this.$api.game.getContestById(row.id).then(res => {
          row.buttonLoading = false;
          if (res.data && res.data.resultCode === 0) {
            let data = res.data.data;
            this.info.title = data.title;
            this.info.context = data.context;
            this.info.imgUrl = data.imgUrl;
            this.info.fabulousNumber = data.fabulousNumber;
            this.info.money = data.money;
            this.info.peopleNumber = data.peopleNumber;
            this.info.play_room = data.playRoom;
            this.info.play_time = data.playTime;
            this.info.showFlag = data.showFlag;
            this.info.state = data.state;
            this.info.address = data.address;

            this.isShowGameDialog = true;
          }
        });
      },
      //点击'管理'按钮
      clickManageBtn(row) {
        this.$router.push('/gameManage?id=' + row.id);
      },
      //点击'删除'按钮
      clickRemoveBtn(row) {
        this.$confirm(`确定删除当前赛讯 ?`, '', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$api.game.delContest(row.id).then(res => {
            if (res.data && res.data.resultCode === 0) {
              this.$message.success('赛讯删除成功');
              this.initData();
            }
          });
        }).catch(() => {
        });
      },
      //上传成功
      uploadSuccess(data) {
        this.info.imgUrl = data.imgSrc;
      },
      //提交赛讯
      submitInfoBtn(formName) {
        this.$refs[formName].validate(async valid => {
          if (valid) {
            if (this.currentHandle === 'add') {
              let params = {};
              params.address = this.info.address;
              params.city = this.info.city ? this.info.city.join('') : '';
              params.context = this.info.context;
              params.fabulousNumber = this.info.fabulousNumber;
              params.imgUrl = this.info.imgUrl;
              params.money = this.info.money;
              params.peopleNumber = this.info.peopleNumber;
              params.play_room = this.info.play_room;
              params.play_time = this.info.play_time;
              params.showFlag = this.info.showFlag;
              params.state = this.info.state;
              params.title = this.info.title;

              this.$api.game.addContest(params).then(res => {
                if (res.data && res.data.resultCode === 0) {
                  this.$message.success('赛讯删除成功');
                  this.initData();
                  this.isShowGameDialog = false;
                }
              });

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
