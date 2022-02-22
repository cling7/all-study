/* eslint-disable camelcase */
// import './public-path'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

let instance = null
// 组件创建的方法
function render (props = {}) {
  const { container } = props
  instance = new Vue({
    router,
    store,
    render: (h) => h(App)
  }).$mount(container ? container.querySelector('#app') : '#app') // 这里是挂载到自己的html中，基座会拿到挂载后的html，将其插入进去.
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}
if (window.__POWERED_BY_QIANKUN__) {
  // eslint-disable-next-line no-undef
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__
}

export async function bootstrap () {
  console.log('bootstraped')
}
// 挂载方法
export async function mount (props) {
  console.log('mount')
  render(props)
}
// 卸载方法
export async function unmount () {
  instance.$destroy()
  // instance.$el.innerHTML = ''
  // instance = null
  // router = null
}
