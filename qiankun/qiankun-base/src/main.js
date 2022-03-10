import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import elementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { registerMicroApps, start } from 'qiankun'

// 注册方法
registerMicroApps([
  {
    name: 'vueApp', // 应用的名字
    entry: '//localhost:10000', // 默认会加载这个html，解析里面的js，动态的执行 （子应用必须支持跨域） （可以省略http:）
    container: '#vue', // 挂载html到哪个元素上
    activeRule: '/vue' // 激活规则/路径,当访问/vue时，就会挂载子应用
  }
])
// 启动 qiankun
start({
  prefetch: false // 取消预加载
})

Vue.config.productionTip = false
Vue.use(elementUi)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
