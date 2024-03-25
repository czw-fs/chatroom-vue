<template>
    <el-container class="main">
        <el-aside class="left" width="null">
            ewerwe
        </el-aside>

        <el-aside class="center" width="null">
            <CenterView></CenterView>
        </el-aside>
            
        <el-aside class="right" width="null">
asdfsdfsdfs
        </el-aside>
    </el-container>

</template>

<script>
import CenterView from '@/components/community/CenterView.vue'
export default {
    components:{
        CenterView
    }
}
</script>

<style>

.main{
    width: 100%;
    height: 100%
}

.left {
    width: 20%;
    height: 100%;
    background-color: rgb(236, 236, 236);
}

.center {
    width: 60%;
    height: 100%;
}

.right {
    width: 20%;
    height: 100%;
    background-color: rgb(236, 236, 236);
}

</style>