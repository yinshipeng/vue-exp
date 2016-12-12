/**
 * Created by yinshipeng on 2016/11/4.
 */
import Vue from 'vue'
import VueResource from 'vue-resource'
import Cache from './cache'
Vue.use(VueResource)

// Vue.http.options.root = '/api';
Vue.http.options.crossOrigin = true;
Vue.http.options.xhr = {withCredentials: true};
Vue.http.headers.common['Token'] = Cache.token;

const host = 'http://127.0.0.1:3000'

export const getUrl = function({url, mockUrl, mock}) {
    url = '/api/' + url;
    if(Cache.debug){
        if(mock){
            url = '/mock/' + mockUrl;
        }
    }
    return host + url;
}

export const http = Vue.http