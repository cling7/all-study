const path = require('path')
// 引入webpackplugin插件
const HTMLWebpackPlugin = require('html-webpack-plugin')
// 引入clean插件
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
  entry:'./src/index.ts',
  output:{
    // 指定打包后的目录
    path: path.resolve(__dirname,'dist'),
    filename: "bundle.js"
  },
  // 指定webpack打包时使用的模块s
  module:{
    // 指定loader的规则
    rules:[
      {
        // 指定规则生效的文件
        test: /\.ts$/,
        // 指定使用的loader
        use:"ts-loader",
        // 要排除的文件
        exclude: /node_modules/
      }
    ]
  },
  plugins:[
    new HTMLWebpackPlugin({
      title:'自定义的title',
      template:'./src/index.html'
    }),
    new CleanWebpackPlugin()
  ],

  // 用来设置引用模块
  resolve:{
    extensions:['.ts','.js']
  }
}