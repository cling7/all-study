module.exports = {
  devServer: {
    port: 10000, // 跟主应用协议好的端口号
    headers: {
      'Access-Control-Allow-Origin': '*' // 子应用必须允许跨域，方便主应用加载子应用的资源
    }
  },
  configureWebpack: {
    output: {
      library: 'vueApp',
      libraryTarget: 'umd' // 把微应用打包成 umd 库格式
      // jsonpFunction: `webpackJsonp_${name}`
    }
  }
}
