import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex) 

//引入模块化的小仓库
import condition from './condition.js'
import user from './user.js'
import cart from './cart.js'

const store = new Vuex.Store({
  modules:{
	  //采用模块化的优点是结构清晰，缺点是它确实会分出很多小仓库，用计算属性书写的时候会略显繁琐
	  condition,
	  user,
	  cart
  }
})

export default store