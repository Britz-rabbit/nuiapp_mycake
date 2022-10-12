<template>
	<view>
		<view class="navBar">
			<navBar></navBar>
		</view>
		<view class="doudi" v-show="!goodList.length">
			<text>你的购物车还是空空的哦！</text>
		</view>
		<cartItem v-for="(item,index) in goodList" :data='item'/>
		<!-- 底部菜单栏 -->
		<view class="btmMenu flex justify-between text-center">
			<view class="info flex justify-between">
				<view class="">
					<text class="iconfont icon-gouxuan"
				:class="isAllChecked?'coloryellow':'color9292'"
				></text>全选
				</view>
				
				<text>合计：￥{{sumPrice}}</text>
			</view>
			<view class="settle" @tap="BuyAll">
				<text>去结算({{goodList.length}})</text>
			</view>
		</view>
	
	</view>
</template>

<script>
	import cartItem from '../../components/cartItem.vue'
	export default {
		components:{
			'cartItem':cartItem
		},
		data() {
			return {
				isAllChecked:true,
				titleList:['大佬，你真有钱','大佬，你家还缺佣人吗？','卧槽，包养我吧！','汪汪汪！'],
				count:0,
				goodList:[]
			};
		},
		onLoad() {
			//从仓库里拿数据
			this.goodList=this.$store.state.cart.itemList
			console.log(this.goodList);
		},
		methods:{
			//假装你是大款
			BuyAll(){
				this.$store.commit('clearList')
				this.count++
				let index=Math.floor(Math.random()*4)
				uni.showToast({
					title:this.titleList[index],
					icon:'success'
				})
				if(this.count>20 && this.count%10===0){
					uni.showToast({
						title:`大哥，你已经点了${this.count}次了，再点下去就受不了了`,
						icon:'loading'
					})
				}
			}
		},
		computed:{
			sumPrice(){
				let sum=0
				this.goodList.map(item=>{
					sum+=item.num*item.price
				})
				return sum
			}
		}
		
	}
</script>

<style lang="scss">
.navBar{
	margin-bottom: 120rpx;
	position: relative;
	z-index: 10;
}

.btmMenu{
	position: fixed;
	bottom: -1rpx;
	box-shadow: 0 0 4rpx 4rpx #d0d0d0;
	height: 90rpx;
	line-height: 90rpx;
	width: 100%;
	font-size: 38rpx;
	// z-index: 9;
	background-color: #fff;
	.info{
		margin-left: 8rpx;
		width: 62%;
	}
	.settle{
	width: 26%;
	background-color: #fae456;
}
}
.doudi{
	font-size: 68rpx;
	text-align: center;
	margin-top: 460rpx;
	width: 100%;
	height: 120rpx;
	line-height: 120rpx;
	color: #a8a8a8;
	font-style: italic;
}
</style>
