<template>

    <el-container id="container">

        <el-aside width="null" class="toolbar">
            <ToolBar></ToolBar>
        </el-aside>


        <el-aside width="null" class="list">
            <Search></Search>
            <ChatList></ChatList>
        </el-aside>

        <el-aside width="null" class="chat">
            <ChatWindow></ChatWindow>
            <InputWindow></InputWindow>
        </el-aside>
    </el-container>

</template>

<script>
import ToolBar from '@/components/chat/ToolBar.vue'
import Search from '@/components/chat/Search.vue'
import ChatList from '@/components/chat/ChatList.vue'
import ChatWindow from '@/components/chat/ChatWindow.vue'
import InputWindow from '@/components/chat/InputWindow.vue'
export default {
    components: {
        ToolBar,
        Search,
        ChatList,
        ChatWindow,
        InputWindow
    },
    data() {
        return {
            
        }
    },
    methods:{

    }

}
</script>

<style scoped>
.container {
    overflow: auto;
}

.el-aside {
    height: 93.5vh;
}

.toolbar {
    width: 7%;
    background-color: rgb(55, 59, 63);
}

.list {
    width: 20%;
    background-color: rgb(255, 249, 224);
}

.chat{
    width: 73%;
    background-color: rgb(241, 232, 194);
}
.el-aside{
    overflow: hidden;
}

.el-header{
    height: 0;
}
</style>