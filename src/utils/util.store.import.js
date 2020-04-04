/**
 * 自动注册store模块
 */

const autoImport = () => {
  // 查找modules目录下的所有js文件
  const files = require.context('@/store/modules', false, /\.js$/)
  const modules = {}
  // 将文件列表赋值给modules
  files.keys().forEach(key => {
    modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
  })
  return modules
}

export default autoImport
