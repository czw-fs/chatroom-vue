<template>
  <el-container>
    <el-header height="null" class="header">

    </el-header>

    <el-main class="main">
      <el-input type="textarea" :rows="10" placeholder="输入要发送的消息" v-model="userInputData" :disabled="chat.curChatId ? false : true" @keyup.native.enter="sendMsg">
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
      userInputData: '',
    }
  },
  computed: {
    ...mapState([
      'chat',
      'user',
      'curStomp'
    ])
  },
  methods: {
    sendMsg(event) {

      if (this.userInputData.trim() === '') {
        return;
      }

      if (!(event.shiftKey && event.keyCode === 13) || event.target.tagName === 'BUTTON') {

        //group
        this.sendGroupMsg();

        //friend
        this.sendFriendMsg();

        //robot


        //发送成功后清空输入框
        this.userInputData = '';

      } else {
        this.userInputData += '\n'
      }

    },


    sendGroupMsg() {
      if (this.chat.curChatListName == "group") {
        let groupMsgObj = this.getGroupMsgObj();

        //发送成功后由后端群发消息到监听路径后，推送到群组中的每个用户
        //群发的消息自己也会收到到，所以不用推送到当前输入列表
        this.curStomp.stomp.send("/group/chat", {}, JSON.stringify(groupMsgObj));
        this.chat.curMsgList = this.chat.curMsgSession.groupMsgMap[this.chat.curChatId]
      }
    },

    getGroupMsgObj() {
      //生成id唯一标识
      let msgId = nanoid(30)
      const groupMsgObj = {
        msgId: msgId,
        groupId: this.chat.curChatId,
        sendUserId: this.user.id,
        sendUserName: this.user.userName,
        sendUserProfile: this.user.userProfile,
        sendTime: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
        content: this.userInputData,

        //消息类型暂时写死
        msgTypeId: 1
      }
      return groupMsgObj;
    },
    sendFriendMsg() {
      if (this.chat.curChatListName == "friend") {
        let friendMsgObj = this.getFriendMsgObj();

        //私发
        this.curStomp.stomp.send("/ws/chat", {}, JSON.stringify(friendMsgObj));

        //显示自己发送的消息
        this.chat.curMsgList.push(friendMsgObj)
      }
    },
    getFriendMsgObj() {
      let msgId = nanoid(30)
      const friendMsg = {
        msgId: msgId,
        sendUserId: this.user.id,
        sendUserName: this.user.userName,
        sendUserProfile: this.user.userProfile,
        receiveUserId: this.chat.curChatId,
        content: this.userInputData,
        sendTime: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),

        //消息类型暂时写死
        msgTypeId: 1
      }
      return friendMsg;
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