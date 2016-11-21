import Vue from 'vue'
import App from './app.vue'
import Commons from './commons'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import '../lib/bootstrap/css/bootstrap.min.css'
import '../lib/lodash/lodash.min'
import router from './router'
import store from './store'

Vue.use(Element)
Vue.use(Commons)

router.beforeEach((to, from, next) => {
  /**
   * 1.如果已经登陆，访问的是登陆页面，直接重定向到主页，如果不是则放开
   * 2.如果没有登陆，所有访问重定向到登录页
   */
  console.log(to.path)
  if (store.getters.getIsLogin) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      next()
    }
  } else {
    if (to.path === '/login') {
      next()
    } else {
      next('/login')
    }
  }
})

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
