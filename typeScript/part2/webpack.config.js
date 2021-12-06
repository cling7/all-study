const path = require('path')

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
  }
}