<template>
	<view>
		<view class="cu-bar bg-white">
			<view class="action">
				<text class="cuIcon-locationfill text-grey"></text> 西安
			</view>
			<view class="content text-bold">
			 MYCAKE
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
		}
	}
</script>

<style lang="scss">
.cu-bar{
	position: fixed;
	top: 0rpx;
	margin-bottom:15rpx ;
	width: 100%;
	z-index: 9;
}
</style>