import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login'
import user from './modules/user'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    login,
    user
  },
  strict: process.env.NODE_ENV !== 'production'
})

export default store
