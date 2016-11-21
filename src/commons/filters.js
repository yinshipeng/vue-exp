/**
 * Created by yinshipeng on 2016/10/28.
 * 如果要定义一个函数是用作过滤器，命名方式为 methodNameFilter，然后注册到commonFilters对象中
 * 如果属性名和值重名，可简写
 */
import constants from './constants'

/**
 * 常量过滤器
 * @param classCode
 * @param input
 * @returns {*}
 */
function constantsFilter (classCode, input) {
  if (classCode !== undefined && input !== undefined) {
    return constants[classCode][input]
  } else {
    return ''
  }
};

export default {
  constantsFilter
}
