<template>
    <el-container>
        <el-header class="photo">
            <el-image :src="url" @error="handleImageError"></el-image>
        </el-header>

        <el-tooltip class="item" effect="dark" content="群聊" placement="right">
            <el-button @click="changeToGroup('toGroup')">群聊</el-button>
        </el-tooltip>

        <el-tooltip class="item" effect="dark" content="私聊" placement="right">
            <el-button @click="changeToGroup('toPrivate')">群聊</el-button>
        </el-tooltip>

        <el-tooltip class="item" effect="dark" content="AI" placement="right">
            <el-button @click="changeToGroup('toAI')">群聊</el-button>
        </el-tooltip>




    </el-container>
</template>

<script>
export default {

    data() {
        return {
            url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
        }
    },

    methods: {
        //加载失败默认显示图片
        handleImageError() {
            this.url = '@/assets/load-fail-photo.png'
        },
        changeToGroup(){
            
        }
    }

}
</script>

<style scoped>
.photo {
    width: 100%;
    height: 10%;
    padding: 0;
    /* aspect-ratio: 0; */
    /* fill:contain; */
    /* border-radius: 20%; */
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

.el-button,.el-button{
margin: 0;
}
</style>