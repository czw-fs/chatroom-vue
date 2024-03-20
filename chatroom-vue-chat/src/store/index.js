import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import chat from './modules/chat'
import curStomp from './modules/curStomp'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    chat,
    curStomp,
    user
  }
})
