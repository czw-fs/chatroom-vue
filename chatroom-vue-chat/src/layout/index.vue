<template>
    <el-container id="lay">

        <el-header>
            <Nav></Nav>
        </el-header>

        <el-main>
            <router-view />
        </el-main>

    </el-container>
</template>


<script>
import Nav from '@/components/home/Nav.vue'
export default {

    components:{
      Nav
    }

}
</script>

<style scoped>
#lay{
    width: 100%;
    height: 100%;
    /* background-image:url('https://pic.3gbizhi.com/uploadmark/20240304/f52da0d6b5c14e87d6499270e05120a5.jpg'); */
    /* background-size: cover; */
}

.el-main{
    padding:0;
}
.el-header{
    padding:0;
}
</style>