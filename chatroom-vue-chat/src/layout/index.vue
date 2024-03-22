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
}

.el-main{
    padding:0;
}
.el-header{
    padding:0;
}
</style>