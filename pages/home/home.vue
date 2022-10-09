<template>
	<view>
		<scroll-view scroll-y="true" 
		@scroll="handleSroll" 
		:scroll-into-view='topItem'
		scroll-with-animation="true"
		style="height: 100vh;">
			<navBar id='top'></navBar>
				<!-- 轮播图 -->
			<swiper :indicator-dots="true" :autoplay="true"
			 :interval="3000" :duration="1000" indicator-active-color='#ffe32a'
			 class="banner">
				<swiper-item v-for="(item,index) in bannerList" :id='item.objectId'>
					<view class="swiper-item" @tap="handleBannerAd(item.link)">
						<image :src="item.img" mode=""></image>
					</view>
				</swiper-item>
			</swiper>
			<!-- 第一区域 -->
			<homeTitle></homeTitle>
			<scroll-view scroll-x="true" >
				<view>
					<image src="../../static/img/recommend1.jpeg" mode="heightFix"></image>
					<image src="../../static/img/recommend2.jpg" mode="heightFix"></image>
					<image src="../../static/img/recommend3.jpg" mode="heightFix"></image>
				</view>
			</scroll-view>
			<!-- 第二区域 -->
			<homeTitle title='法式经典' title2='French Classics' title3='French'></homeTitle>
			<image src="../../static/img/french.jpg" class="scope2" mode="widthFix"></image>
			<view class="flex goods-detail flex-wrap">
				<detail v-for="(item,index) in 4"></detail>
			</view>
			<!-- 点击返回顶部 -->
			<view class="backTop" @click="backToTop" v-if="isShow">
				<text class="iconfont icon-tubiao_fanhuidingbu"></text>
			</view>
		</scroll-view>
	
	</view>
</template>

<script>
	import homeTitle from "@/components/homeTitle"
	export default {
		components: {
			homeTitle
		},
		
		data() {
			return {
				title: 'Hello',
				isShow:false,
				topItem:'',
				cd:true,//scroll事件的最短触发触发
				bannerList:[],
			}
		},
		methods: {
		//监视滚动的y轴距离
		handleSroll(e){
			if(!this.cd) return
			setTimeout(()=>{
		    this.topItem=''
			let {scrollTop}=e.detail
			this.isShow = scrollTop>350
			this.cd=true
			},380)
			
		},
		//点击回到首页
		backToTop(){
			this.topItem='top'
		},		
		//天机轮播图跳转到详情页
		handleBannerAd(link){
			uni.navigateTo({
				url:`/pages/home/bannerAd?link=${link}`,
				
			})
		}
		
		},
		onLoad() {
		//获取轮播图数据
		this.$request('/1.1/classes/banner').then((res)=>{
				this.bannerList=res.results.filter((item)=>item.img)
		})
		
		//
		
		
		},
	}
</script>

<style lang="scss">
.banner{
	height: 1000rpx;
	.swiper-item{
		height: 100%;
		width: 100%;
	}
}
scroll-view{
	white-space: nowrap;
	height: 290rpx;
	
}
.scope2{
	width: 100%;
}
.backTop{
	width: 100rpx;
	height: 100rpx;
	background-color: #fff;
	border-radius: 50%;
	box-shadow: 0 0 20rpx 4rpx rgba(0, 0, 0, 0.4);
	text-align: center;
	line-height: 100rpx;
	position: fixed;
	bottom: 85rpx;
	right: 20rpx;
	text{
		font-size: 52rpx;
		font-weight: 600;
		color: orange;
	}
}
</style>
