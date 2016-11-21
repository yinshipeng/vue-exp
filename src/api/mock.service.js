/**
 * Created by yinshipeng on 2016/11/4.
 */
import http from './http'

export function getMockUserById () {
  const id = parseInt(20 * Math.random())
  return http.get('http://127.0.0.1:3000/api/user/' + id)
}

export default {
  getMockUserById
}
