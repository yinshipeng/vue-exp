import { CURRENT_LOGIN_INFO, LOGIN_OUT } from '../mutation-types'
import { save, read, clear } from '../../storage/session'
import { loginAuth } from '../../api/login.service'

const state = {
  isLogin: false,
  currentUser: {}
}

const mutations = {
  [CURRENT_LOGIN_INFO] (state, userInfo) {
    state.isLogin = true
    state.currentUser = userInfo
  },
  [LOGIN_OUT] (state) {
    state.isLogin = false
    state.currentUser = {}
  }
}

const actions = {
  saveCurrentLoginInfo ({ commit }, userInfo) {
    return new Promise(function (resolve, reject) {
      loginAuth(userInfo.username, userInfo.password).then(function () {
        commit(CURRENT_LOGIN_INFO, userInfo)
        save(CURRENT_LOGIN_INFO, JSON.stringify(state))
        resolve()
      }).catch(function (error) {
        reject(error)
      })
    })
  },
  loginOut ({ commit }) {
    return new Promise(function (resolve) {
      commit(LOGIN_OUT)
      clear(CURRENT_LOGIN_INFO, true)
      resolve()
    })
  }

}

const getters = {
  getCurrentLoginInfo () {
    return JSON.parse(read(CURRENT_LOGIN_INFO))
  },
  getIsLogin () {
    if (JSON.parse(read(CURRENT_LOGIN_INFO)) == null) {
      return false
    }
    return JSON.parse(read(CURRENT_LOGIN_INFO)).isLogin
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
