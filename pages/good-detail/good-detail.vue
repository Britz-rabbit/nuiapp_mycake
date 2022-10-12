<template>
	<view>
			<navBar></navBar>
		<swiper class="banner" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item>
				<view class="swiper-item">
					<image :src="detail.img" mode="widthFix"></image>
				</view>
			</swiper-item>
		</swiper>
		<view class="flex justify-around">
			<view 
				v-for="(item,index) in detail.list" 
				:key="index"
				:class="['text-center padding-sm tab',{active:tabIdx==index}]" 
				@click="tabIdx=index"
			>
				<view class="">{{item.spec}}</view>
				<view class="">{{item.weight}}</view>
				<view class="">{{item.edible}}</view>
			</view>
		</view>
		<view class="padding fs-28 u-border-bottom">
			￥{{detail.list[tabIdx].price}}
		</view>
		<view class="padding fs-28 u-border-bottom">
			{{detail.list[tabIdx].ahead}}
			<text class="margin-lr">10cm*20cm</text>
			{{detail.list[tabIdx].edible}}
		</view>
		<view class="padding fs-28 u-border-bottom">
			{{detail.list[tabIdx].fittings}}
		</view>
		<view class="flex justify-around fixed padding-tb-sm">
			<button @tap="addToCart" class="cu-btn bg-brown lg" type="default">加入购物车</button>
			<button @tap="toCart" class="cu-btn bg-yellow lg" type="default">立即购买</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabIdx:0,  //标志用户切换选中的子商品序号
				detail:null
			}
		},
		onLoad(){
			uni.getStorage({
				key:'goodInfo',
				success: (res) => {
					this.detail = res.data
				}
			})
		},
		methods: {
			addToCart(){
				uni.getStorage({
					key:'goodInfo',
					success:(res)=>{
						// console.log(res.data);
						this.$store.commit('addItem',res.data)
						console.log(this.$store.state.cart.itemList);
					}
				})
				uni.showToast({
					title:'加入购物车成功',
					icon:'none'
				})
				//console.log('仓库内有',this.$store.state.cart.itemList);
			},
			toCart(){
			//替换本地存储的商品信息，放到仓库一份，然后跳转至购物车
			uni.getStorage({
				key:'goodInfo',
				success:(res)=>{
					// console.log(res.data);
					this.$store.commit('addItem',res.data)
					console.log(this.$store.state.cart.itemList);
				}
			})
				uni.navigateTo({
					url:'/pages/cart/cart'
				})
			}
		},
	}
</script>

<style lang="scss">
.banner{
	height: 600upx;
	swiper-item{
		height: 600upx;
	}
	image{
		width: 100%;
		// height: 600upx;
	}
}
.tab{
	&.active{
		border-bottom: 4upx solid #fae456;
	}
}
.cu-btn.lg{
	width: 46%;
}
</style>
