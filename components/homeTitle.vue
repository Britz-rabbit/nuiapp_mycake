<template>
	<view class="padding flex justify-between align-center margin-top-sm">
		<view class="flex align-center">
			<text class='iconfont icon-canju '></text>
			<view class="fs-28 margin-left">
				{{title}}
				<view class="fs-14">{{title2}}</view>
			</view>
		</view>
		<view class="">
			{{title3}}
		</view>
	</view>
</template>

<script>
	export default {
		name:"homeTitle",
		props: {
			title: {
				type: String,
				default: '本季推荐' 
			},
			title2: {
				type: String,
				default: 'Seasonal Recommend'
			},
			title3: {
				type: String,
				default: 'Seasonal'
			},
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.icon-canju{
	font-size: 62rpx;
}
</style>