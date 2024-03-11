<template>
  <el-container class="chatwindow">

    <el-header class="header" height="null">
      <el-aside class="groupName" width="null">
        群聊名称：群聊简介
      </el-aside>
    </el-header>


    <ul class="msgWindow">
      <li v-for="(item, index) in user.currentChatList" :key="item.index" class="currentMsg">

        <!-- 别人发的消息 -->
        <div class="otherMsg" v-if="index % 2 == 0">
          <img src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" alt="Img" class="otherImg">
          <div class="otherMsgText">消息: {{ index }} : {{ item }}</div>
        </div>

        <!-- 自己发的消息 -->
        <div class="myMsg" v-if="index % 2 == 1">
          <img src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" alt="Img" class="myImg">
          <div class="myMsgText">消息: {{ index }} : {{ item }}</div>
        </div>

      </li>
    </ul>



  </el-container>
</template>

<script>
export default {
  data() {
    return {
      user: {
        id: 1,
        currentChatList: [111111111111111, "333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333", 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

      }
    }
  }
}
</script>

<style scoped>
.chatwindow {
  width: 100%;
  height: 62vh;
  background-color: rgb(247, 235, 212);
}

.el-main,
.el-header {
  height: 0;
  padding: 0;
}

.header {
  height: 8.5vh;
  border-bottom-style: solid;
  border-bottom-width: 0.1vh;
  border-bottom-color: rgb(211 200 200)
}

.groupName {
  height: 100%;
  width: 20%;
  line-height: 8.5vh;
  margin-left: 40px;
  font-size: 30px;
  overflow: hidden;
}

.msgWindow {
  height: 53.5vh;
  overflow: auto;
  overflow-x: hidden;
}

li {
  /* 消息上下排列 */
  display: flex;
  flex-direction: column;
}

.otherMsg {
  /* 别人的用户头像和文本消息横向排列 */
  display: flex;
  margin-bottom: 10px;
}

.otherImg {
  width: 35px;
  height: 35px;
}

.myImg {
  width: 35px;
  height: 35px;
}

.otherMsgText{
  max-width: 70%;
  border: 1px solid rgb(206, 206, 206);
  border-radius: 16px;
  padding: 6px;
  word-wrap: break-word;
  word-break: break-all;
  background-color: rgb(217, 217, 218);
}

.myMsg {
  display: flex;
  flex-direction: row-reverse;
  margin-bottom: 10px;
}

.myImg {
  width: 35px;
  height: 35px;
}

.myMsgText{
  /* width: 70%; */
  max-width: 70%;
  border: 1px solid rgb(206, 206, 206);
  border-radius: 16px;
  padding: 6px;
  word-wrap: break-word;
  word-break: break-all;
  background-color: rgb(112, 241, 95);
}
</style>