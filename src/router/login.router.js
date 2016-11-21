/**
 * Created by yinshipeng on 2016/11/3.
 */
import Login from '../views/login/login.vue'
export default [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/logout',
    redirect: '/login'
  }
]

