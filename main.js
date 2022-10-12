import App from './App'
//引入并使用uview
import uView from "uview-ui";
Vue.use(uView);

//注册全局组件
import good from '@/components/good.vue'
import navBar from '@/components/navBar'
Vue.component('good',good)
Vue.component('navBar',navBar)

//全局挂载异步请求方法
import request from '@/utiles/request.js'
Vue.prototype.$request=request
//引入vuex的状态实例
import store from '@/store/index.js'


// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App,
	store,//vue实例上挂载vuex状态实例
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