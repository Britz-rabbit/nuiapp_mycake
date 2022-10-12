const state={
	//获取数据的部分查询参数，依不同情况而变
	condition:{
		bcid:1
	},
}

const mutations={
	//由于异步操作已经在外面处理好了，所以这里我们直接使用mutations，跳过派发actions
	changeCon(state,opt){
		state.condition=opt
	}
}

const actions={
	
}

export default {
	state,mutations,actions
}

// export default {
// 	state(){
// 		return {
// 			condition:{
// 					bcid:1
// 				},
// 		}
// 	}
// }