import store from '../store';

const globalMixins = {
    data() {
        return {
            //表格分页页码
            Mixin_pageNum: 1,
            //表格每页大小
            Mixin_pageSize: 10,
            //表格总共数据
            Mixin_total: 0,
        }
    },
    computed: {
        Mixin_loading: function () {
            return this.$store.state.pageLoading
        }
    },

    mounted() {
        setTimeout(() => {
            store.commit('SET_LOADING_STATE', false);
        }, 500)
    },
    methods: {
        //开始过渡动画
        Mixin_startLoading() {
            store.commit('SET_LOADING_STATE', true);
        },
        //结束过渡动画
        Mixin_endLoading() {
            store.commit('SET_LOADING_STATE', true);
        },
        //表格分页
        Mixin_handleCurrentChange(val) {
            this.Mixin_pageNum = val;
            this.initData()
        },
        //弹框关闭,重置表单
        Mixin_dialogClose(formName, Dialog) {
            this[Dialog] = false;
            setTimeout(() => {
                this.$refs[formName] && this.$refs[formName].resetFields();
            }, 100);
        },

    },
};

export default globalMixins;


