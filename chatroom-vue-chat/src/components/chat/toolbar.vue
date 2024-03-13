<template>
    <el-container>
        <el-header class="photo" >
            <el-image :src="user.userProfile" @error="handleImageError" v-if="user && user.userProfile"></el-image>
        </el-header>

        <el-tooltip class="item" effect="dark" content="群聊" placement="right">
            <el-button @click="changeToGroup('toGroup')">群聊</el-button>
        </el-tooltip>

        <el-tooltip class="item" effect="dark" content="私聊" placement="right">
            <el-button @click="changeToGroup('toFriend')">好友</el-button>
        </el-tooltip>

        <el-tooltip class="item" effect="dark" content="AI" placement="right">
            <el-button @click="changeToGroup('toRobot')">robot</el-button>
        </el-tooltip>




    </el-container>
</template>

<script>
import { mapState } from 'vuex'
export default {

    data() {
        return {
            url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
        }
    },
    computed: {
        ...mapState([
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
            if(data === 'toGroup'){
                this.$store.commit('set_curChatListName','group')
                this.$store.commit('set_curChatList',this.user.groupList)
            }else if(data === 'toFriend'){
                this.$store.commit('set_curChatListName','friend')
                this.$store.commit('set_curChatList',this.user.friendList)
                console.log(this.user.friendList);
                console.log(this.user.curChatListName);
            }else if(data == 'toRobot'){
                this.$store.commit('set_curChatListName','robot')
                this.$store.commit('set_curChatList',this.user.robot)
            }
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
</style>