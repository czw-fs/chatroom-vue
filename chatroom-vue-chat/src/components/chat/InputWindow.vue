<template>
  <el-container>
    <el-header height="null" class="header">

    </el-header>

    <el-main class="main">
      <el-input type="textarea" :rows="10" placeholder="输入要发送的消息" v-model="userInputData">
      </el-input>
    </el-main>

    <el-footer height="null">
      <el-button size="mini" type="success" class="send">发送</el-button>
    </el-footer>

  </el-container>
</template>

<script>
export default {
data(){
  return{
    userInputData:''
  }
}
}
</script>

<style scoped>
.el-header,
.el-main,
el-footer {
  padding: 0;
  margin: 0;
}

.header {
  height: 4vh;
  width: 100%;
}

.main {
  height: 22.5vh;
  background-color: rgb(235, 200, 104);
}

.el-footer{
  height: 100%;
  display: flex;
  flex-direction: row-reverse;
}

.send{
  width: 83px;
  height: 34px;
  margin-top: 9px;
}
</style>