<template>
    <el-container>
        <el-header class="photo">
            <el-image :src="user.userProfile" @error="handleImageError" v-if="user && user.userProfile"></el-image>
        </el-header>

        <el-tooltip class="item" effect="dark" content="群聊" placement="right">
            <el-button @click="changeToGroup('group')">群聊</el-button>
        </el-tooltip>

        <el-tooltip class="item" effect="dark" content="私聊" placement="right">
            <el-button @click="changeToGroup('friend')">好友</el-button>
        </el-tooltip>

        <el-tooltip class="item" effect="dark" content="AI" placement="right">
            <el-button @click="changeToGroup('robot')">robot</el-button>
        </el-tooltip>

        <el-tooltip class="item" effect="dark" content="AI" placement="right">
            <el-button @click="logOut">logOut</el-button>
        </el-tooltip>




    </el-container>
</template>

<script>
import { mapState } from 'vuex'
export default {

    data() {
        return {

        }
    },
    computed: {
        ...mapState([
            'chat',
            'user'
        ])
    },

    methods: {
        //加载失败默认显示图片
        handleImageError(err) {
            console.log(err)
            this.$message({
                message: '头像加载失败',
                type: 'warning'
            });
        },

        changeToGroup(data) {
            if (this.chat.curChatListName !== data) {
                this.chat.curChatId = null;
                this.chat.curMsgList = [];
            }

            if (data === 'group') {
                this.$store.commit('set_curChatListName', 'group')
                this.$store.commit('set_curChatList', this.chat.originChatList.groupList)
            } else if (data === 'friend') {
                this.$store.commit('set_curChatListName', 'friend')
                this.$store.commit('set_curChatList', this.chat.originChatList.friendList)
            } else if (data == 'robot') {
                this.$store.commit('set_curChatListName', 'robot')
                this.$store.commit('set_curChatList', this.chat.originChatList.AIList)
            }
        },
        logOut() {
            window.sessionStorage.removeItem("user");
            window.sessionStorage.removeItem("chat");
            this.$router.push("/login")
        }
    }

}
</script>

<style scoped>
.photo {
    width: 20px;
    height: 100px;
    padding: 0;
}

.el-image {

    width: 100%;
    height: 8.5vh;
}

.el-main {
    padding: 0;
}

.el-header {
    width: 100%;
    height: 10% !important;
}

.item {
    width: 100%;
    padding: 30% 0;
    background: rgb(55, 59, 63);
}

.el-button,
.el-button {
    margin: 0;
}
</style>./Toolbar.vue