<template>
    <div>
        <h3 style="margin: 10px 10px;font-size: 20px;">发表评论 <small v-show="isRespond">取消回复</small></h3>
        <el-input type="textarea" :rows="3" placeholder="请输入内容" v-model="textarea"></el-input>
        <el-button type="primary" style="margin-top: 10px;">主要按钮</el-button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            textarea: ''
        }
    }
}
</script>

<style></style>