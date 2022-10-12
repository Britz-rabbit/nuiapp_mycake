<template>
	<view>
		<view class="cu-bar bg-white">
			<view class="action">
				<text class="cuIcon-locationfill text-grey"></text> 西安
			</view>
			<view class="title text-bold" @click="toCake">
			 <text> MYCAKE </text>
			</view>
			<view class="action text-grey">
				<text class="cuIcon-search"></text>
				<u-line direction="col" length='25rpx' margin='15rpx'></u-line>
				<text class="cuIcon-sort"></text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"navBar",
		data() {
			return {
				
			};
		},
		methods: {
			toCake() {
				uni.navigateTo({
					url:'/pages/cake/cake'
				})
			}
		},
	}
</script>

<style lang="scss" scoped>
.cu-bar{
	position: fixed;
	top: 0rpx;
	margin-bottom:15rpx ;
	width: 100%;
	z-index: 9;
}
.title{
	    text-align: center;
	    width: calc(100% - 170px);
	    height: 30px;
	    font-size: 16px;
	    line-height: 30px;
		padding-top: 6rpx;
		text-decoration: underline;
}
</style>