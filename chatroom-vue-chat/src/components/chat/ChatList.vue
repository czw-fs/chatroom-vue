<template>
    <el-container class="all-list">


        <!--群聊列表-->
        <el-main v-if="currentListName == 'group'">
            <el-container v-for="item in currentList" :key="item.id" class="groupList">

                    <el-aside width="null" class="imgAside">
                        <img class="avatar" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg">
                        
                    </el-aside>

                    <el-aside width="null" class="groupName">
                       群聊：{{ item }}
                    </el-aside>

            </el-container>
        </el-main>


    </el-container>
</template>

<script>
import { mapState } from 'vuex'
export default {

    data() {
        return {
            currentListName: 'group',
            currentList:[]
        }
    },
    computed:{
        ...mapState([
            'user'
        ])
    },
    mounted(){
        this.currentList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]
    },
    created(){
        // this.currentList = 
    }
}
</script>

<style scoped>
.all-list {
    width: 100%;
    height: 91%;
}

.el-main{
    padding: 0;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
}
.groupList{
    height: 66px;
    width: 100%;
}
.el-imgAside{
    width: 30%;
    height: 100px;
    overflow: scroll;
}

img{
    width: 100%;
    height: 100%;
}

.groupName{
    width: 66%;
    height: 100%;
    text-align: center;
    line-height: 66px;
}
.el-aside{
    overflow: hidden !important;
}
</style>