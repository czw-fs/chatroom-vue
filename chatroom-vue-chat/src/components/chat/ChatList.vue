<template>
    <el-container class="all-list">


        <!--群聊列表-->
        <el-main v-if="chat.curChatListName === 'group'">
            <el-container v-for="item in chat.curChatList" :key="item.id" class="groupList"
                @click.native="getGroupMsg(item.id)">
                <el-aside width="null" class="imgAside">
                    <img class="avatar" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg">
                </el-aside>
                <el-aside width="null" class="groupName">
                    {{ item.groupName }}
                </el-aside>
            </el-container>
        </el-main>

        <!-- 好友列表 -->
        <el-main v-if="chat.curChatListName === 'friend'">
            <el-container v-for="item in chat.curChatList" :key="item.id" class="friendList" @click.native="getCurFriendMsg(item.id)">
                <el-aside width="null" class="imgAside">
                    <img class="avatar" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg">
                </el-aside>
                <el-aside width="null" class="friendName">
                    私聊：{{ item.userName }}
                </el-aside>
            </el-container>
        </el-main>

        <!-- robot列表 -->
        <el-main v-if="chat.curChatListName === 'robot'">
            <el-container v-for="item in chat.curChatList" :key="item.id" class="groupList">
                <el-aside width="null" class="imgAside">
                    <img class="avatar" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg">
                </el-aside>
                <el-aside width="null" class="groupName">
                    群聊：{{ item.groupName }}
                </el-aside>
            </el-container>
        </el-main>

    </el-container>
</template>

<script>
import { getGroupMsgById,getFriendMsg } from '@/api/chatListMsg.js'
import { mapState } from 'vuex'
export default {

    data() {
        return {

        }
    },
    computed: {
        ...mapState([
            'chat'
        ])
    },
    methods: {
        getGroupMsg(chatId) {
            this.chat.curMsgList = this.chat.curMsgSession.groupMsgMap.get(chatId.toString())
        },
        getCurFriendMsg(receiveUserId){
            this.user.curChatId = receiveUserId;
            const sendUserId = this.user.id;
            getFriendMsg(receiveUserId,sendUserId).then(res =>{
                // this.$store.commit('set_curMsgList', res.data);
                this.user.curMsgSession.friendMsgMap.set(receiveUserId,res.data);
                this.$store.commit('set_curMsgList', this.user.curMsgSession.friendMsgMap.get(receiveUserId));
            }).catch(err => {
                this.$message.error('获取当前对话消息失败');
            })
        }
    }
}
</script>

<style scoped>
.all-list {
    width: 100%;
    height: 91%;
}

.el-main {
    padding: 0;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
}

.el-aside {
    overflow: hidden !important;
}

.el-imgAside {
    width: 30%;
    height: 100px;
    overflow: scroll;
}

img {
    width: 100%;
    height: 100%;
}

.groupList {
    height: 66px;
    width: 100%;
    border-bottom: 1px solid rgb(151, 151, 151);
    cursor: pointer;
}

.groupName {
    width: 66%;
    height: 100%;
    text-align: center;
    line-height: 66px;
}

.friendList {
    height: 66px;
    width: 100%;
    border-bottom: 1px solid rgb(151, 151, 151);
    cursor: pointer;
}

.friendName {
    width: 66%;
    height: 100%;
    text-align: center;
    line-height: 66px;
}
</style>@/api/msg.js