const path = require('path')
console.log(process.env.NODE_ENV)
const config = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-admin/' : '/',
  // outputDir: 'vue-admin',
  devServer: {
    // proxy: 'http://localhost:4000',
    open: true,
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000
  },
  // webpack配置
  configureWebpack: {
    plugins: [
    ]
  }
}

module.exports = config
