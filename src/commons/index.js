/**
 * Created by yinshipeng on 16/10/28.
 * 此文件包括常量对象constants，过滤器对象commonFilters，工具类对象commonUtils
 * 将各对象注册Vue全局对象中，在vue文件中使用方式为
 * 示例：Vue.commonFilters.constantsFilter()
 */
;
/**
 * 导入常量对象
 */
import constants from './constants'
import commonFilters from './filters'
import commonUtils from './utils'
/**
 * 插件必须有一个install(Vue,options)方法，其中options可选
 * @param Vue
 */
const install = function (Vue) {
  Vue.prototype.$filters = commonFilters
  Vue.prototype.$constants = constants
  Vue.prototype.$utils = commonUtils
}
export default install
