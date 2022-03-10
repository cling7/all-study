/* eslint-disable camelcase */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

let instance = null // 卸载应用需要

function render (props = {}) {
  const { container } = props
  instance = new Vue({
    store,
    router,
    render: (h) => h(App)
  }).$mount(container ? container.querySelector('#app') : '#app')
  // 这里是挂载到自己的html中，基座会拿到这个挂载后的html的,将其插入进去
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

// 作为微应用时加载正确的publicPath
if (window.__POWERED_BY_QIANKUN__) {
  // eslint-disable-next-line no-undef
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__
}

// props可以接受父应用传过来的各种属性，值，用来通信。也可以传递vuex数据
// 启动方法
export async function bootstrap (props) {
  console.log('[vue] vue app bootstraped')
}
// 应用挂载方法
export async function mount (props) {
  console.log('[vue] props from main framework', props)
  render(props)
}
// 应用卸载时
export async function unmount () {
  instance.$destroy()
  instance.$el.innerHTML = ''
  instance = null
}

// Vue.config.productionTip = false
// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')
