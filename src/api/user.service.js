/**
 * Created by yinshipeng on 2016/11/4.
 */
import { http, base, getUrl } from './http'

export function getUserList (queryParams) {
  if (queryParams.username) {
    return http.get(base + '/user?_page=' + queryParams.pageNo + '&username=' + queryParams.username + '&_sort=id&_order=DESC')
  } else {
    return http.get(base + '/user?_page=' + queryParams.pageNo + '&_sort=id&_order=DESC')
  }
}

export function getUserListCount (queryParams) {
  if (queryParams.username) {
    return http.get(base + '/user?username=' + queryParams.username)
  } else {
    return http.get(base + '/user')
  }
}

export function postOneUser (user) {
  let url = getUrl({
    url: 'user/',
    mockUrl: 'user/',
    mock: true
  })
  return http.post(url, user)
}

export function putOneUser (user) {
  return http.put(base + '/user/'+user.id, user)
}

export function deleteOneUserById (id) {
  return http.delete(base + '/user/' + id)
}
