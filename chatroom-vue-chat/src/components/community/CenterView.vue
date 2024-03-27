<template>

    <div class="all">



        <el-container class="tie" v-for="(item, index) in tableData" :key="index">
            <el-header height="null" class="header">
                <el-avatar shape="square" :size="79.5" fit="fit" :src="url"></el-avatar>
                <div>
                    <div class="name">{{ item.user.userName }}</div>
                    <div class="introduce">{{ item.user.introduce }}</div>
                </div>
            </el-header>

            <div class="content">
                <MarkdownPreview :initialValue="item.content" />
            </div>

            <el-footer height="null" class="footer">
                <div style="width:25%;text-align: center;font-size:25px;cursor:pointer">
                    <i class="el-icon-link"></i>
                </div>
                <div style="width:25%;text-align: center;font-size:25px;cursor:pointer"
                    @click="showMessageComponnet(item.id)">
                    <i class="el-icon-chat-dot-round"></i>
                </div>
                <div style="width:25%;text-align: center;font-size:25px;cursor:pointer">
                    <i class="el-icon-trophy"></i>
                </div>
            </el-footer>

            <div v-if="showMessage[item.id]">
                <MessageView :msgId="item.id"></MessageView>
            </div>

            <el-divider content-position="center">语汇阁</el-divider>
        </el-container>

        <!-- 分页插件 -->
        <el-pagination background layout="prev, pager, next" :total="query.total" :current-page="query.pageNum"
            :page-size="query.pageSize" @current-change="handleCurrentChange" style="text-align: center;">
        </el-pagination>
    </div>

</template>

<script>
import { getArticlePage } from '@/api/article.js'
import CommnetView from './CommnetView.vue'
import MarkdownPreview from '@/components/markdown/components/preview/index.vue';
import MessageView from './MessageView.vue'

export default {
    components: {
        MarkdownPreview,
        CommnetView,
        MessageView,
        
    },
    data() {
        return {
            url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
            data: '# 发福利了！！！  ![image](https://t7.baidu.com/it/u=852388090,130270862&fm=193&f=GIF)',
            showMessage: {},
            query: {
                pageNum: 1,
                pageSize: 2,
                total: 0
            },
            tableData: '',
        }
    },
    created() {
        this.getPage();
    },
    methods: {
        getPage() {
            getArticlePage(this.query).then(res => {
                res = res.data
                this.tableData = res.rows;
                this.query.total = res.total;
                console.log(this.tableData)
            }).catch(error => {
                this.$message.error(error);
            })
        },
        showMessageComponnet(item) {
            if (this.showMessage[item] === true || this.showMessage[item] === false) {
                this.$set(this.showMessage, item, !this.showMessage[item]);
                return;
            }
            this.$set(this.showMessage, item, true);
        },
        //翻页
        handleCurrentChange(val) {
            this.query.pageNum = val;
            this.getPage();
        }
    }
}
</script>

<style scoped>
.tie {
    width: 100%;

    border-radius: 5px;
    margin-bottom: 10px;
    padding: 10px;
    overflow: -moz-scrollbars-none;

    background-color: rgb(241, 240, 240);
}

.el-header {
    padding: 0;
    height: 20%;
    background: linear-gradient(to right, rgb(206, 206, 206), blue);
    border-radius: 0 5px 0 5px;

}

.el-main {
    padding: 0;
    background-color: rgb(112, 75, 248);
    height: 10%;
}



.el-footer {
    padding: 0;
    height: 10%;
    background-color: rgb(180, 180, 180);
    border-radius: 0 5px 0 5px;
}

.header {
    display: flex;
}

.name {
    line-height: 30px;
    margin-left: 20px;
}

.introduce {
    margin-left: 20px;
}

.content {
    overflow: scroll;
    max-height: 500px;
}

.footer {
    display: flex;
    justify-content: space-between;
    line-height: 40px;
}

::-webkit-scrollbar {
    display: none;
    /* Chrome Safari */
}


.message {
    width: 100%;
}
</style>