<template>

    <div class="all">
        <el-container class="tie">
            <el-header height="null" class="header">
                <el-avatar shape="square" :size="79.5" fit="fit" :src="url"></el-avatar>
                <div>
                    <div class="name">张三</div>
                    <div class="introduce">大家好我是张三大家好我是张三大家好我是张三大家好我是张三</div>
                </div>
            </el-header>

            <div class="content">
                <MarkdownPreview :initialValue="data"/>
            </div>

            <el-footer height="null" class="footer">
                <div style="width:25%;text-align: center;font-size:25px">
                    <i class="el-icon-link"></i>
                </div>
                <div style="width:25%;text-align: center;font-size:25px">
                    <i class="el-icon-chat-dot-round"></i>
                </div>
                <div style="width:25%;text-align: center;font-size:25px">
                    <i class="el-icon-trophy"></i>
                </div>
            </el-footer>

            <el-divider content-position="center">语汇阁</el-divider>
        </el-container>

        <el-container class="tie">
            <el-header height="null" class="header">
                <el-avatar shape="square" :size="79.5" fit="fit" :src="url"></el-avatar>
                <div>
                    <div class="name">张三</div>
                    <div class="introduce">大家好我是张三大家好我是张三大家好我是张三大家好我是张三</div>
                </div>
            </el-header>

            <div class="content">
                <MarkdownPreview :initialValue="data"/>
            </div>

            <el-footer height="null" class="footer">
                <div style="width:25%;text-align: center;font-size:25px">
                    <i class="el-icon-link"></i>
                </div>
                <div style="width:25%;text-align: center;font-size:25px">
                    <i class="el-icon-chat-dot-round"></i>
                </div>
                <div style="width:25%;text-align: center;font-size:25px">
                    <i class="el-icon-trophy"></i>
                </div>
            </el-footer>

            <el-divider content-position="center">语汇阁</el-divider>
        </el-container>

        <el-container class="tie">
            <el-header height="null" class="header">
                <el-avatar shape="square" :size="79.5" fit="fit" :src="url"></el-avatar>
                <div>
                    <div class="name">张三</div>
                    <div class="introduce">大家好我是张三大家好我是张三大家好我是张三大家好我是张三</div>
                </div>
            </el-header>

            <div class="content">
                <MarkdownPreview :initialValue="data"/>
            </div>

            <el-footer height="null" class="footer">
                <div style="width:25%;text-align: center;font-size:25px">
                    <i class="el-icon-link"></i>
                </div>
                <div style="width:25%;text-align: center;font-size:25px">
                    <i class="el-icon-chat-dot-round"></i>
                </div>
                <div style="width:25%;text-align: center;font-size:25px">
                    <i class="el-icon-trophy"></i>
                </div>
            </el-footer>

            <el-divider content-position="center">语汇阁</el-divider>
        </el-container>
        
    </div>

</template>

<script>
import { MarkdownPreview } from 'vue-meditor';
export default {
    components: {
        MarkdownPreview
    },
    data() {
        return {
            url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
            data: '# 发福利了！！！  ![image](https://t7.baidu.com/it/u=852388090,130270862&fm=193&f=GIF)',
        }
    }
}
</script>

<style scoped>


.tie {
    width: 100%;
    max-height: 600px;
    /* background-color: rgb(214, 214, 214); */
    border-radius: 5px;
    margin-bottom: 10px;
    padding:10px;

}

.el-header {
    padding: 0;
    height: 20%;
    background: linear-gradient(to right, pink, blue);
    border-radius: 0 5px 0 5px;

}

.el-main {
    padding: 0;
    background-color: blue;
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
}

.footer {
    display: flex;
    justify-content: space-between;
    line-height: 40px;
}

::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
</style>