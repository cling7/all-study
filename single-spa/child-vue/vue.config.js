module.exports = {
  configureWebpack: {
    output: {
      library: 'singleVue',
      // eslint-disable-next-line no-dupe-keys
      libraryTarget: 'umd'
    },
    devServer: {
      port: 10000
    }
  }
}
// window.singleVue.bootstrap
