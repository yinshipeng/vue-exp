/**
 * Created by yinshipeng on 2016/11/4.
 */
import { http, getUrl } from './http'

export function loginAuth (username, password) {
  let url = getUrl({
    url: 'user?username=' + username + '&password=' + password,
    mockUrl: 'user?username=' + username + '&password=' + password,
    mock: true
  })
  return http.get(url)
}