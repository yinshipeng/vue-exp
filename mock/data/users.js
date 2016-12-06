const Pinyin = require('../../lib/pinyin/pinyin')
const Mock = require('mockjs')
const Random = Mock.Random

const users = []

for (var i = 0; i < 100; i++) {
  var realname = Random.cname()
  users.push({
    id: i,
    realname: realname,
    username: Pinyin.convertPinyin(realname),
    password: '123456',
    idcard: Random.id(),
    birthday: Random.date(),
    email: Random.email('163.com'),
    address: Random.county(true)
  })
};

users.push({
  id: i,
  username: 'admin',
  realname: '系统管理员',
  password: 'admin',
  idcard: Random.id(),
  birthday: Random.date(),
  email: Random.email('126.com'),
  address: Random.province() + Random.city(false) + Random.county(false)
})
module.exports = users
