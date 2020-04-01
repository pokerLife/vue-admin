import { jsonp, get } from '../../utils/util.http'

/**
 * 获取当前位置
 * 参考地址：https://lbsyun.baidu.com/index.php?title=webapi/ip-api
 */
function queryAddress () {
  return jsonp('http://api.map.baidu.com/location/ip?ak=GXGm3TlZpE4rg9joQAlQlXgCubZvy7GB&coor=bd09ll')
}

/**
 * 获取天气信息
 * 参考地址：https://lbsyun.baidu.com/index.php?title=webapi/ip-api
 */
function queryWeather (place) {
  return jsonp(`http://api.map.baidu.com/telematics/v3/weather?location=${place}&output=json&ak=P5Fs2CfR2IrcUhtphGMkarZQjO0PtdRh`)
}

/**
 * 获取系统列表
 */
function querySysList () {
  return get('sys/list', {})
}

export default {
  queryAddress,
  queryWeather,
  querySysList
}
