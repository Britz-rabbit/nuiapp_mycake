<template>
	<view>
		<!-- 上方用户头像 -->
		<view class="avatar center text-center" @tap="toUser">
			<image src="../../static/logo.png" mode=""></image>
			<text class="fs-28">{{userName}}</text>
		</view>
		<!-- 下方内容区 -->
		<view class="context-con flex padding">
			<view class="context-item flex flex-direction align-center justify-around" v-for="(item,index) in iconArr">
				<text :class="['iconfont',item.icon]"></text>{{item.name}}
			</view>
			<view class="context-item flex flex-direction align-center justify-around" v-for="(item,index) in iconArr">
				<text :class="['iconfont',item.icon]"></text>{{item.name}}
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				iconArr:[
				{
					icon:'icon-danju',
					name:'我的订单'
				},
				{
					icon:'icon-jifen',
					name:'待收货'
				},
				{
					icon:'icon-ziliaoshouce',
					name:'待付款'
				},
				{
					icon:'icon-vip-fill',
					name:'会员等级'
				}
				]
			};
		},
		methods:{
			toUser(){
				uni.navigateTo({
					url:'/pages/user/login/index'
				})
			}
		},
		computed:{
			userName(){
				let name=this.$store.state.user.userInfo.username
				return name?name:'点击上方头像登陆'
			}
		}
	}
</script>

<style lang="scss" scoped>
page{
		background: #f6f6f6;
		
	}
.avatar{
	position: relative;
	top: 26rpx;
	width: 150rpx;
	height: 150rpx;
	border-radius: 50%;
	margin: 25rpx auto;
	margin-bottom: -50rpx;
	image{
		width: 100%;
		height: 100%;
	}
	
}
.context-con{
	width: 96%;
	height: 600rpx;
	background-color: #fff;
	margin: 0 auto;
	padding-top: 150rpx;
	flex-wrap: wrap;
	.context-item{
		width: 25%;
		border: 1rpx solid #f1f1f1;
	}
}
.iconfont{
	font-size: 60rpx;
	color: #888;
}
</style>
