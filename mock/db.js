/**
 * Created by yinshipeng on 2016/11/4.
 */
const news = require('./data/news')
const users = require('./data/users')

module.exports = function () {
  var data = { news: news, user: users }
  return data
}
