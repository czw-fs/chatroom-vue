<template>
  <el-container>
    <el-header height="null" class="header">

    </el-header>

    <el-main class="main">
      <el-input type="textarea" :rows="10" placeholder="输入要发送的消息" v-model="userInputData"
        @keyup.native.enter="inputKeyDown">
      </el-input>
    </el-main>

    <el-footer height="null">
      <el-button size="mini" type="success" class="send" @click="sendMsg">发送</el-button>
    </el-footer>

  </el-container>
</template>

<script>
import moment from 'moment'
import { mapState } from 'vuex'
import { nanoid } from 'nanoid'
export default {
  data() {
    return {
      userInputData: ''
    }
  },
  computed: {
    ...mapState([
      'user'
    ])
  },
  methods: {
    inputKeyDown(event) {

      if (!(event.shiftKey && event.keyCode === 13)) {
        if (this.currentSession.username=="群聊"){
        console.log(this.content);
        this.$store.state.stomp.send("/ws/groupChat",{},JSON.stringify(msgObj));
      }
        this.sendMsg()
      } else {
        this.userInputData += '\n'
      }

    },
    sendMsg() {
      if (this.userInputData.trim() === '') {
        return;
      }
      //生成id唯一标识
      let msgId = nanoid(15)
      const curUserSendMsg = {
        msgId: msgId,
        groupId: this.user.curChatId,
        sendUserId: this.user.id,
        sendUserName: this.user.userName,
        sendUserProfile: this.user.userProfile,
        sendTime: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
        content: this.userInputData,

        //消息类型暂时写死
        msgTypeId: 1
      }

      //发送成功后由后端群发消息到监听路径后，推送到群组中的每个用户
      this.user.stomp.send("/group/chat",{},JSON.stringify(curUserSendMsg));
      
      //发送成功后清空输入框
      this.userInputData = '';
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

.el-footer {
  height: 100%;
  display: flex;
  flex-direction: row-reverse;
}

.send {
  width: 83px;
  height: 34px;
  margin-top: 9px;
}
</style>