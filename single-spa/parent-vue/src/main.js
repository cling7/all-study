import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { registerApplication, start } from 'single-spa'

async function loadScript (url) {
  console.log(url)
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = url
    script.onload = resolve
    script.onerror = reject
    document.head.appendChild(script)
  })
}

// 先注册一个应用，当条件满足时会加载另外一个应用的包（手动通过创建script标签去加载），加载好了以后子应用打包出来时会有bootStarp mount unmout供父应用调用
// 调mount方法时会走子应用的注册vue方法（appOptions）,将子应用挂载到父应用的vue标签内
registerApplication(
  'myVueApp',
  async () => {
    await loadScript('http://localhost:10000/js/chunk-vendors.js')
    await loadScript('http://localhost:10000/js/app.js')
    return window.singleVue // bootStarp mount unmout
  },
  // 应用切换到/vue的路径下，需要加载刚定义的子应用
  location => location.pathname.startsWith('/vue')
  // 可以通过props进行父子通信
  // props: {}
)
start()

// customElements事件可以进行父子应用的通信

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
