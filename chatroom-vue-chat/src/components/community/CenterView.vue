<template>

    <div class="all">



        <el-container class="tie" v-for="(item, index) in [4, 5, 6]" :key="index">
            <el-header height="null" class="header">
                <el-avatar shape="square" :size="79.5" fit="fit" :src="url"></el-avatar>
                <div>
                    <div class="name">张三</div>
                    <div class="introduce">大家好我是张三大家好我是张三大家好我是张三大家好我是张三</div>
                </div>
            </el-header>

            <div class="content">
                <MarkdownPreview :initialValue="data" />
            </div>

            <el-footer height="null" class="footer">
                <div style="width:25%;text-align: center;font-size:25px;cursor:pointer">
                    <i class="el-icon-link"></i>
                </div>
                <div style="width:25%;text-align: center;font-size:25px;cursor:pointer" @click="showMessageComponnet(item)">
                    <i class="el-icon-chat-dot-round"></i>
                </div>
                <div style="width:25%;text-align: center;font-size:25px;cursor:pointer">
                    <i class="el-icon-trophy"></i>
                </div>
            </el-footer>

            <div v-if="showMessage[item]">
                <MessageView :msgId="item"></MessageView>
            </div>

            <el-divider content-position="center">语汇阁</el-divider>
        </el-container>
    </div>

</template>

<script>
import CommnetView from './CommnetView.vue'
import { MarkdownPreview } from 'vue-meditor';
import MessageView from './MessageView.vue'
export default {
    components: {
        MarkdownPreview,
        CommnetView,
        MessageView
    },
    data() {
        return {
            url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
            data: '# 发福利了！！！  ![image](https://t7.baidu.com/it/u=852388090,130270862&fm=193&f=GIF)',
            showMessage: {},
        }
    },
    methods: {
        showMessageComponnet(item) {
            // this.showMessage = !this.showMessage;

            // event.currentTarget.parentNode.parentNode.appendChild(this.$refs.message.$el)
            // this.showMessage = !this.showMessage
            if(this.showMessage[item] === true || this.showMessage[item] === false){
                this.$set(this.showMessage, item, !this.showMessage[item]);
                return;
            }
            this.$set(this.showMessage, item, true);
        }
    }
}
</script>

<style scoped>
.tie {
    width: 100%;

    border-radius: 5px;
    margin-bottom: 10px;
    padding: 10px;
    background-color: rgb(241, 240, 240);
}

.el-header {
    padding: 0;
    height: 20%;
    background: linear-gradient(to right, rgb(206, 206, 206), blue);
    border-radius: 0 5px 0 5px;

}

.el-main {
    padding: 0;
    background-color: rgb(112, 75, 248);
    height: 10%;
}



.el-footer {
    padding: 0;
    height: 10%;
    background-color: rgb(180, 180, 180);
    border-radius: 0 5px 0 5px;
}

.header {
    display: flex;
}

.name {
    line-height: 30px;
    margin-left: 20px;
}

.introduce {
    margin-left: 20px;
}

.content {
    overflow: scroll;
    max-height: 500px;
}

.footer {
    display: flex;
    justify-content: space-between;
    line-height: 40px;
}

::-webkit-scrollbar {
    display: none;
    /* Chrome Safari */
}


.message {
    width: 100%;
}
</style>