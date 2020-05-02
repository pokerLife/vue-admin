/**
 * 项目api接口管理
 * use: [vm].$api.[modules]
 * example: this.$api.home
 */

const modules = require.context('./modules', true, /.js$/)
const api = {}

modules.keys().forEach(v => {
  const key = v.replace(/(\.\/|\.js)/g, '')
  if (key in api) return
  api[key] = modules(v).default
})
console.log(api)
export default api
