import App from './App'
//引入并使用uview
import uView from "uview-ui";
Vue.use(uView);

//注册全局组件
import detail from '@/components/detai.vue'
import navBar from '@/components/navBar'
Vue.component('detail',detail)
Vue.component('navBar',navBar)

//全局挂载异步请求方法
import request from '@/utiles/request.js'
Vue.prototype.$request=request


// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif