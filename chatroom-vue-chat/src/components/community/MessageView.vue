<template>
    <div ref="commentBox">

        <div class="comment" ref="comment">
            <h3 style="margin: 10px 10px;font-size: 20px;">发表评论</h3>
            <el-input type="textarea" :rows="3" placeholder="请输入内容" v-model="textarea"></el-input>
            <el-button type="primary" style="margin-top: 10px;">发表评论</el-button>
            <el-button type="primary" style="margin-top: 10px;" @click="removeRespComment">取消发表</el-button>
        </div>

        <ul ref="commentList">
            <li ref="mainElement" v-for="(item, index) in [1, 2, 3]" :key="index">
                <div class="message">
                    <el-avatar shape="circle" :size="60" fit="fit" :src="url"></el-avatar>
                    <div class="rightcontent">
                        <div style="margin-bottom: 10px;font-weight: 600;">张三</div>
                        <div>
                            这篇文章写的真好这篇文章写的真好这篇文章写的真好这篇文章写的真章写的真好这篇文章写的真好章写的真好这篇文章写的真好章写的真好这篇文章写的真好好这篇文章写的真好这篇文章写的真好这篇文章写的真好这篇文章写的真好篇文章写的真好这篇文章写的真好这篇文章写的真好
                        </div>

                        <div class="commentFooter">
                            <div class="sendTime">2022-01-30 10:06:21</div>
                            <div class="reply" @click="showCommentView">{{ reply }}</div>
                        </div>
                    </div>
                </div>
                <div class="submessage">
                    <el-avatar shape="circle" :size="60" fit="fit" :src="url"></el-avatar>
                    <div class="rightcontent">
                        <div style="margin-bottom: 10px;font-weight: 600;">张三</div>
                        <div>
                            这篇文章写的真好这篇文章写的真好这篇文章写的真好这篇文章写的真章写的真好这篇文章写的真好章写的真好这篇文章写的真好章写的真好这篇文章写的真好好这篇文章写的真好这篇文章写的真好这篇文章写的真好这篇文章写的真好篇文章写的真好这篇文章写的真好这篇文章写的真好
                        </div>
                        <div class="commentFooter">
                            <div class="sendTime">2022-01-30 10:06:21</div>
                            <div class="reply" @click="showCommentView">{{ reply }}</div>
                        </div>
                    </div>
                </div>
                <el-divider></el-divider>
            </li>

        </ul>
    </div>
</template>

<script>
import Comment from './CommnetView.vue'
export default {
    components: {
        Comment
    },
    props:['msgId'],
    data() {
        return {
            url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
            data: '# 发福利了！！！  ![image](https://t7.baidu.com/it/u=852388090,130270862&fm=193&f=GIF)',
            reply: '回复',
            textarea: '',
        }
    },
    created(){
        console.log("sdjflsjdflskd")
        console.log(this.msgId)
    },
    methods: {
        //回复
        showCommentView(event) {
            console.log(event.currentTarget.parentNode)
            event.currentTarget.parentNode.parentNode.appendChild(this.$refs.comment)
        },
        //取消回复
        removeRespComment() {
            this.$refs.commentBox.insertBefore(this.$refs.comment, this.$refs.commentList);
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