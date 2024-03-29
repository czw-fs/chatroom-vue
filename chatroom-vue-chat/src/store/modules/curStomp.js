import Stomp from "stompjs";
import SockJS from "sockjs-client";
import chat from './chat.js'
import user from './user.js'
const curStomp = {
    state:{
        //连接
        stomp: null
    },

    mutations: {},

    actions: {
        connect(context) {
            //连接Stomp站点
            context.state.stomp = Stomp.over(new SockJS('http://localhost:8888/server'));

            //订阅群聊消息
            context.state.stomp.connect({}, success => {
                context.state.stomp.subscribe("/topic/group", msg => {

                    //接收到的消息数据
                    let receiveMsg = JSON.parse(msg.body);
                    console.log(receiveMsg.groupId.toString());
                    chat.state.curMsgSession.groupMsgMap[receiveMsg.groupId.toString()].push(receiveMsg)

                    console.log( chat.state.curMsgSession.groupMsgMap[receiveMsg.groupId.toString()])

                });

                //私聊消息
                const friendUrl = '/user/' + user.state.id + '/chat';
                console.log(friendUrl)
                context.state.stomp.subscribe(friendUrl, msg => {
                    //接收到的消息数据  
                    let receiveMsg=JSON.parse(msg.body);
                    chat.state.curMsgSession.friendMsgMap[receiveMsg.sendUserId.toString()].push(receiveMsg)
                })
            })
        },

        //与Websocket服务端断开连接
        disconnect(context) {
            if (context.state.stomp != null) {
                context.state.stomp.disconnect();
                console.log("关闭连接~");
            }
        },
    }

}

export default curStomp
