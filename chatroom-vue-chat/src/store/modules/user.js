import { getUserInfo } from '@/api/user.js'
import { login } from '@/api/login.js'
import { Message } from "element-ui"
import SockJS from '@/utils/sockjs'
import '@/utils/stomp.js'
const user = {
    state: {
        id: '',
        userName: '',
        userProfile: '',//用户头现象
        userStateId: '',//用户当前状态列表
        friendList: [],//好友列表
        groupList: [],//群组列表
        userPrivateMsgList: [],//用户私聊信息
        AIList: [],//robot

        stomp: null,

        //下面的属性用来存储当前用户点击所展示的是所有数据
        curChatList: [],//当前对话列表
        curChatListName: [],//当前对话列表: group friend robot,默认group
        curMsgList: [],  //当前对话框中的内容
        curChatId: '',//当前聊天会话id 如 groupId,friendId,robotId
    },

    mutations: {
        set_id: (state, id) => {
            state.id = id
        },
        set_name: (state, userName) => {
            state.userName = userName
        },
        set_userProfile: (state, userProfile) => {
            state.userProfile = userProfile
        },
        set_userStateId: (state, userStateId) => {
            state.userStateId = userStateId
        },
        set_friendList: (state, friendList) => {
            state.friendList = friendList
        },
        set_groupList: (state, groupList) => {
            state.groupList = groupList
        },
        set_userPrivateMsgList: (state, userPrivateMsgList) => {
            state.userPrivateMsgList = userPrivateMsgList
        },
        set_AIList: (state, AIList) => {
            state.AIList = AIList
        },
        set_curChatList: (state, curChatList) => {
            state.curChatList = curChatList
        },
        set_curChatListName: (state, curChatListName) => {
            state.curChatListName = curChatListName
        },
        set_curMsgList: (state, curMsgList) => {
            state.curMsgList = curMsgList
        }
    },

    actions: {

        async getUserId({ commit }, loginForm) {
            await login(loginForm).then(res => {
                const userId = res.data;

                window.sessionStorage.setItem("userId",userId);
                commit('set_id', userId);
            })

        },

        // 获取用户详情
        async getUserInfo({ commit }, userId) {
            await getUserInfo(23).then(resp => {
                const data = resp.data;
                const user = data.user;
                const group = data.group;
                const friendList = data.friendList;

                commit('set_id', user.id);
                commit('set_name', user.userName)
                commit('set_userProfile', user.userProfile)
                commit('set_userStateId', user.userStateId)
                commit('set_friendList', friendList)

                //群组相关
                commit('set_groupList', group)

                //当前展示变量
                commit('set_curChatList', group)//进入页面默认显示对话列表为group
                commit('set_curChatListName', 'group')//进入页面默认显示对话列表为group

                console.log(resp);
            }).catch(err => {
                Message.error({ message: err })
            })
        },

        //实现连接服务端连接与消息订阅
        //与store实例具有相同方法和属性的context对象
        connect(context) {
            //连接Stomp站点
            context.state.stomp = Stomp.over(new SockJS('http://localhost:8888/ws/ep'));

            //订阅群聊消息
            context.state.stomp.connect({}, success => {
                context.state.stomp.subscribe("/topic/group", msg => {

                    //接收到的消息数据
                    let receiveMsg = JSON.parse(msg.body);
                    context.state.curMsgList.push(receiveMsg);

                });
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

export default user
