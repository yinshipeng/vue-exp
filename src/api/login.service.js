/**
 * Created by yinshipeng on 2016/11/4.
 */
import http from './http'

export function loginAuth (username, password) {
  return http.get('http://127.0.0.1:3000/api/user?username=' + username + '&password=' + password)
}

export default {
  loginAuth
}
