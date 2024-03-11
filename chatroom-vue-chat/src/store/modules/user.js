const user = {
    state: {
        id: '',
        name: '',
        userProfile: '',
        userStateId: '',
        groupList: [],
        userPrivateList: [],
        AIList: [],

        //下面的属性用来存储当前用户点击所展示的是所有数据
        curChatList:[],//当前对话列表
        curMsgList:[]  //当前对话框中的内容
    },

    mutations: {
        set_id: (state, id) => {
            state.id = id
        },
        set_name: (state, name) => {
            state.name = name
        },
        set_userProfile: (state, userProfile) => {
            state.userProfile = userProfile
        },
        set_userStateId: (state, userStateId) => {
            state.userStateId = userStateId
        },
        set_groupList: (state, groupList) => {
            state.groupList = groupList
        },
        set_userPrivateList: (state, userPrivateList) => {
            state.userPrivateList = userPrivateList
        },
        set_AIList: (state, AIList) => {
            state.AIList = AIList
        },
        set_curChatList: (state, curChatList) => {
            state.curChatList = curChatList
        },
        set_curMsgList: (state, curMsgList) => {
            state.curChatList = curMsgList
        }
    },

    actions: {
        // 登录
        getUserInfo({ commit }, userInfo) {
            
        },
    }

}

export default user
