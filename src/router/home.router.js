/**
 * Created by yinshipeng on 2016/11/3.
 */
import Home from '../views/home/home.vue'
import UserRouter from './user.router'
export default [
  {
    path: '/',
    name: 'home',
    component: Home,
    children: [
      ...UserRouter
    ]
  }
]
