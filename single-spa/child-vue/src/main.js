/* eslint-disable camelcase */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import singleSpaVue from 'single-spa-vue'
Vue.config.productionTip = false

const appOptions = {
  el: '#vue', // 挂载到父应用的id为vue的标签中
  router,
  render: h => h(App)
}

const vueLifeCycle = singleSpaVue({
  Vue,
  appOptions
})

// 如果是父应用引入,文件的路径要改变
// 保证子应用当前的引用路径都是绝对路径，相对于自己的路径，而不是父类的。
if (window.singleSpaNavigate) {
  // eslint-disable-next-line no-undef
  __webpack_public_path__ = 'http://localhost:10000/'
}

// 希望子应用独立运行
// 独立运行时不能再挂载到#vue上了，要挂载到id为app的标签中
if (!window.singleSpaNavigate) {
  delete appOptions.el
  // eslint-disable-next-line no-new
  new Vue(appOptions).$mount('#app')
}

// 协议接入，父应用会调用这些方法
export const bootstrap = vueLifeCycle.bootstrap
export const mount = vueLifeCycle.mount
export const unmount = vueLifeCycle.unmount
