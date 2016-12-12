/**
 * Created by yinshipeng on 2016/11/4.
 */
import { http} from './http'

export function getMockUserById () {
  const id = parseInt(20 * Math.random())
  return http.get(host + '/user/' + id)
}

export default {
  getMockUserById
}
