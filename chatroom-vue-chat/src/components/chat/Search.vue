<template>
    <el-container class="search">
        <el-input placeholder="请输入内容" v-model="searchName" class="query" @keyup.enter.native="changeUserId">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
    </el-container>
</template>

<script>
export default {
 data(){
    return{
        searchName:''
    }
 },
 methods:{
    changeUserId(){
        this.$store.dispatch("getUserInfo",this.searchName)
    }
 }
}
</script>

<style scoped>
.search{
    width: 100%;
    height: 9;
    background-color: rgb(252, 216, 169);
}
.query{
    width: 80%;
    margin: 19px auto;
    
}
</style>