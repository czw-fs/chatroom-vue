<template>
    <div>
        <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect"
            background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
            
                <el-menu-item index="1" style="margin-left: 12%;" @click="toChatRoom">聊天室</el-menu-item>
                <el-menu-item index="2" style="margin-left: 12%;">个人空间</el-menu-item>
                <el-menu-item index="4" style="margin-left: 12%;" disabled>消息中心</el-menu-item>
                <el-menu-item index="5" style="margin-left: 12%;">
                    <a href="https://www.baidu.com" target="_blank">订单管理</a>
                </el-menu-item>
            
        </el-menu>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeIndex2: '1'
        };
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        toChatRoom(){
            
        }
    }
}
</script>

<style scoped>
.el-menu{
    height: 6.5vh;
    position: static;
}
</style>