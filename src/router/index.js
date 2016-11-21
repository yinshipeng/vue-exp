/**
 * Created by yinshipeng on 2016/11/3.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginRouter from './login.router'
import HomeRouter from './home.router'
Vue.use(VueRouter)

const routes = [
  ...LoginRouter,
  ...HomeRouter
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
