const state={
	itemList:[]
}

const mutations={
	//添加到购物车
	addItem(state,item){
		//判断是否是第一次进，再做对应处理
		let index=state.itemList.findIndex(i=>i.id===item.id)	
		if(index>=0){
			state.itemList[index].num++
		}else{
			item.isChecked=true
			item.num=1
			state.itemList.push(item)
		}
		
	},
	//处理购物车内物品的勾选与数量
	changeChecked(state,item){
		let index=state.itemList.findIndex(i=>i.id===item.id)
		state.itemList[index]=item
	},
	//假装你全买了
	clearList(state){
		state.itemList=[]
	}
	
}

export default {
	state,mutations
}