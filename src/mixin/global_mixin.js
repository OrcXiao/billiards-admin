import store from '../store';

const globalMixins = {
    data() {
        return {
            //表格分页页码
            Mixin_currentPage: 1,
            //表格每页大小
            Mixin_pageSize: 10,
            //表格总共数据
            Mixin_total: 0,
        }
    },
    computed: {
        Mixin_loading: function () {
            return this.$store.state.vx_vx_pageLoading
        }
    },

    mounted() {
        setTimeout(() => {
            store.commit('SET_LOADING_STATE', false);
        }, 500)
    },
    methods: {
        //表格分页
        Mixin_handleCurrentChange(val) {
            this.Mixin_currentPage = val;
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


