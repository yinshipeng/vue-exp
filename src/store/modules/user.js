/**
 * Created by yinshipeng on 2016/11/7.
 */
import * as types from '../mutation-types'
import { getUserList, deleteOneUserById, getUserListCount } from '../../api/user.service'
import utils from '../../commons/utils'

const state = { userData: [], totalCount: 0 }

const mutations = {
  [types.QUERY_USER_DATA] (state, { userList, totalCount }) {
    state.userData = userList
    state.totalCount = totalCount
  },
  [types.DELETE_USER_DATA] (state, id) {
    state.userData = utils.removeFromArrayByPropertyVue(state.userData, 'id', id)
  }
}

const actions = {
  queryUserData ({ commit }, queryParams) {
    return new Promise((resolve) => {
      getUserList(queryParams).then((resp) => {
        return resp.body
      }).then((userList) => {
        getUserListCount(queryParams).then((resp) => {
          const totalCount = resp.body.length
          commit(types.QUERY_USER_DATA, { userList, totalCount })
          resolve(resp)
        })
      })
    })
  },
  deleteOneUserById ({ commit }, id) {
    return new Promise((resolve, reject) => {
      deleteOneUserById(id).then((resp) => {
        commit(types.DELETE_USER_DATA, id)
        resolve(resp)
      }, (error) => {
        reject(error)
      })
    })
  }
}

const getters = {
  getUserData (state) {
    return utils.toJsonFromVue(state.userData)
  },
  getTotalCount (state) {
    return state.totalCount
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
