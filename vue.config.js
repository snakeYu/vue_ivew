const path = require('path')

/**
* (description)
* @procution {开发环境}
* @/iview-admin/ {服务器}
* @/  {开发环境}
*/
const BASE_URL = process.env.NODE_ENV === 'procution' ? '/iview-admin/' : '/'

const resolve = dir => path.join(__dirname, dir)

module.exports = {
  baseUrl: BASE_URL,
  chainWebpack: config => {
    // 设置别名路径
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
  },
  // 打包时不生成.map文件
  procutionSourceMap: false,
  // 跨域代理
  devServer: {
    proxy: 'http://localhost:4000'
  }
}
