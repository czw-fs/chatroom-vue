import user from './user.js'
import { getAllGroupList, getAllGroupMsg, getAllFriendList, getAllFriendMsg } from '@/api/initAllMsg.js'
const chat = {
    state: {

        //数据库中查出来的原始数据

        //对话列表
        originChatList: {
            groupList: [],//群组列表
            friendList: [],//好友列表
            AIList: []//robot
        },

        //消息
        curMsgSession: {
            groupMsgMap: null,
            friendMsgMap: null,//朋友消息
            robotMap: null
        },
        curChatList: [],//当前对话列表
        curChatListName: [],//当前对话列表: group friend robot,默认group
        curMsgList: [],  //当前对话框中的内容
        curChatId: '',//当前聊天会话id 如 groupId,friendId,robotId

    },

    mutations: {
        set_originChatList: (state, originChatList) => {
            state.originChatList = originChatList
        },
        set_curMsgSession: (state, curMsgSession) => {
            state.curMsgSession = curMsgSession
        },



        set_curChatList: (state, curChatList) => {
            state.curChatList = curChatList
        },
        set_curChatListName: (state, curChatListName) => {
            state.curChatListName = curChatListName
        },
        set_curMsgList: (state, curMsgList) => {
            state.curMsgList = curMsgList
        },
        set_curChatId(state, curChatId) {
            state.curChatId = curChatId
        }
    },

    actions: {
        async initAllChatData(context) {

            await getAllGroupList().then(resp => {
                if (resp.data !== null && resp.data.length) {
                    context.state.originChatList.groupList = resp.data;
                }
            })

            await getAllGroupMsg().then(resp => {
                if (resp.data !== null) {
                    context.state.curMsgSession.groupMsgMap = resp.data;
                }

            })

            await getAllFriendList(user.state.id).then(resp => {
                if (resp.data !== null && resp.data.length) {
                    context.state.originChatList.friendList = resp.data;
                }
            })

            await getAllFriendMsg(user.state.id).then(resp => {
                if (resp.data !== null) {
                    context.state.curMsgSession.friendMsgMap = resp.data;
                }
            })

            //设置刚进入页面时的初始显示数据
            context.state.curChatListName = 'group'
            context.state.curChatList = context.state.originChatList.groupList;

            //群聊目前只有一个，暂时写死
            context.state.curMsgList = context.state.curMsgSession.groupMsgMap["1"];
            context.state.curChatId = context.state.originChatList.groupList[0].id;

            // console.log(context.state.originChatList)

            // console.log(JSON.stringify(context.state.curMsgSession))
            // console.log(context.state.curMsgSession)
            // console.log(context.state.curChatList) 
            console.log(context.state.curMsgList)
            console.log(context.state.curChatId)

            // console.log(context.state.curMsgSession.groupMsgMap)

            //存入sessionStorage
            const temp = context.state.curMsgSession;
            if (!sessionStorage.getItem("chat")) {
                sessionStorage.setItem("chat", JSON.stringify(context.state))
            }
        }
    }

}



const savedStateString = window.sessionStorage.getItem('chat');
if (savedStateString) {
    const savedState = JSON.parse(savedStateString);
    Object.assign(chat.state, savedState);
}

export default chat
