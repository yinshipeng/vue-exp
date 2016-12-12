/**
 * Created by yinshipeng on 2016/11/4.
 */
import { http, getUrl } from './http'

export function getMockUserById() {
    const id = parseInt(20 * Math.random())
    let url = getUrl({
        url: 'user/' + id,
        mockUrl: 'user/' + id,
        mock: true
    })
    return http.get(url)
}