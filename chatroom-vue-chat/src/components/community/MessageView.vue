<template>
    <div ref="commentBox">

        <div class="comment" ref="comment">
            <h3 style="margin: 10px 10px;font-size: 20px;">发表评论</h3>
            <el-input type="textarea" :rows="3" placeholder="请输入内容" v-model="textarea"></el-input>
            <el-button type="primary" style="margin-top: 10px;">发表评论</el-button>
            <el-button type="primary" style="margin-top: 10px;" @click="removeRespComment">取消发表</el-button>
        </div>

        <ul ref="commentList" v-if="tableData && tableData.length > 0">
            <li ref="mainElement" v-for="(item, index) in tableData" :key="index">
                <div class="message">
                    <el-avatar shape="circle" :size="60" fit="fit" :src="url"></el-avatar>
                    <div class="rightcontent">
                        <div style="margin-bottom: 10px;font-weight: 600;">{{ item.sendUser.userName }}</div>
                        <div>
                            {{ item.content }}
                        </div>

                        <div class="commentFooter">
                            <div class="sendTime">{{ item.updateTime }}</div>
                            <div class="reply" @click="showCommentView">{{ reply }}</div>
                        </div>
                    </div>
                </div>

                <div v-if="item.children && item.children.length > 0">
                    <div class="submessage" v-for="(item, index) in item.children" :key="index">
                        <el-avatar shape="circle" :size="60" fit="fit" :src="url"></el-avatar>
                        <div class="rightcontent">
                            <div style="margin-bottom: 10px;font-weight: 600;">{{ item.sendUser.userName }} 回复 {{ item.receiveUser.userName }}</div>
                            <div>
                                {{ item.content }}
                            </div>
                            <div class="commentFooter">
                                <div class="sendTime">{{ item.updateTime }}</div>
                                <div class="reply" @click="showCommentView">{{ reply }}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <el-divider></el-divider>
            </li>

            <!-- 分页插件 -->
            <el-pagination background layout="prev, pager, next" :total="query.total" :current-page="query.pageNum"
                :page-size="query.pageSize" @current-change="handleCurrentChange" style="text-align: center;">
            </el-pagination>
        </ul>

        <div v-else style="text-align: center;color: rgb(170, 170, 170);">
            暂时还没评论，开来发布一个吧！
        </div>
    </div>
</template>

<script>
import Comment from './CommnetView.vue'
import { getCommentPage } from '@/api/comment.js'
export default {
    components: {
        Comment
    },
    props: ['msgId'],
    data() {
        return {
            query: {
                pageNum: 1,
                pageSize: 5,
                total: 0,
                articleId: ''
            },
            url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
            data: '# 发福利了！！！  ![image](https://t7.baidu.com/it/u=852388090,130270862&fm=193&f=GIF)',
            reply: '回复',
            textarea: '',
            tableData: '',
        }
    },
    created() {
        this.query.articleId = this.msgId;
        // console.log(this.query.articleId)
        this.getPage();
    },
    methods: {
        getPage() {
            getCommentPage(this.query).then(res => {
                console.log(res)
                res = res.data
                this.tableData = res.rows;
                this.query.total = res.total;
                console.log(this.tableData)
            }).catch(error => {
                this.$message.error(error);
            })
        },

        //回复
        showCommentView(event) {
            console.log(event.currentTarget.parentNode)
            event.currentTarget.parentNode.parentNode.appendChild(this.$refs.comment)
        },
        //取消回复
        removeRespComment() {
            this.$refs.commentBox.insertBefore(this.$refs.comment, this.$refs.commentList);
        },
        handleCurrentChange(val) {
            this.query.pageNum = val;
            this.getPage();
        }
    }
}
</script>

<style scoped>
.message {
    display: flex;
}

.rightcontent {
    margin-left: 30px;
    word-wrap: break-word;
    width: 80%;
}

.commentFooter {
    margin-top: 7px;
    font-size: 15px;
    color: rgb(170, 170, 170);
    display: flex;
}

.reply {
    margin-left: 36px;
    cursor: pointer
}

.comment {
    margin-bottom: 20px;
}

.submessage {
    display: flex;
    margin-top: 7px;
    margin-left: 87px;
}
</style>