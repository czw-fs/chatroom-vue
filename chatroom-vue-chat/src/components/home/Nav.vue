<template>
    <div>
        <el-menu :default-active="activeIndex2" class="el-menu-demo main" mode="horizontal" background-color="#545c64"
            text-color="#fff" active-text-color="#ffd04b">

            <router-link to="/welcome"><el-menu-item index="1">欢迎来到语汇阁</el-menu-item></router-link>
            <router-link to="/chatroom"><el-menu-item index="2">阁楼畅论</el-menu-item></router-link>
            <router-link to="/community"><el-menu-item index="3">阁楼热帖</el-menu-item></router-link>
            <el-menu-item index="4">热论榜单</el-menu-item>
            <el-menu-item index="5">个人空间</el-menu-item>
            <el-menu-item index="6">语汇阁社区</el-menu-item>

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

    }

}
</script>

<style scoped>
.el-menu {
    height: 6.5vh;
    position: static;
    display: flex;
    justify-content: space-between;

}
</style>