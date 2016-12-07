/**
 * Created by yinshipeng on 2016/11/4.
 */
import http from './http'

export function getUserList (queryParams) {
  if (queryParams.username) {
    return http.get('http://127.0.0.1:3000/api/user?_page=' + queryParams.pageNo + '&username=' + queryParams.username + '&_sort=id&_order=DESC')
  } else {
    return http.get('http://127.0.0.1:3000/api/user?_page=' + queryParams.pageNo + '&_sort=id&_order=DESC')
  }
}

export function getUserListCount (queryParams) {
  if (queryParams.username) {
    return http.get('http://127.0.0.1:3000/api/user?username=' + queryParams.username)
  } else {
    return http.get('http://127.0.0.1:3000/api/user')
  }
}

export function postOneUser (user) {
  return http.post('http://127.0.0.1:3000/api/user/', user)
}

export function putOneUser (user) {
  return http.put('http://127.0.0.1:3000/api/user/'+user.id, user)
}

export function deleteOneUserById (id) {
  return http.delete('http://127.0.0.1:3000/api/user/' + id)
}
