<template>
	<view>
		<view class="detail-con">
			<view class="detail-item">
				<!-- 上方图片封面 -->
				<view class="poster"  @tap="toGoodDetail">
					<image :src="data.img?data.img:'/static/logo.png'" mode=""></image>
				</view>
				<!-- 下方信息栏 -->
				<view class="info-con">
					<view class="fs-24">
						{{data.name}}
					</view>
					<view class="info flex justify-between">
						<view class="fs-16">
							{{data.french}}
						</view>
						<view class="cart-btn" @tap="addToCart">
							<text class="iconfont icon-gouwuche"></text>
						</view>
					</view>
					<view class="fs18">
						<text class="fs-14">￥</text>{{data.price}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "detai",
		props: {
			data: {
				type: Object,
				default: {}
			}
		},
		data() {
			return {

			};
		},
		methods: {
			//跳转至商品详情页面
			toGoodDetail() {
				//console.log(this.$props.data);
				uni.setStorage({
					key:'goodInfo',
					data:this.$props.data,
					//当前商品数据存入后跳转到详情页面
					success() {
					uni.navigateTo({
					url: '/pages/good-detail/good-detail'
				});
					}
				})
			},
			//点击购物车图标直接加入购物车
			addToCart(){
				// console.log('要加入的购物车信息是',this.$props.data);
				this.$store.commit('addItem',this.$props.data)
				uni.showToast({
					title:'加入购物车成功',
					icon:'none'
				})
			}
		}
	}
</script>

<style lang="scss">
	.detail-con {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	.detail-item {
		margin-left: 18rpx;
		width: 350rpx;

		.poster {
			display: flex;
			height: 350rpx;
			background-color: #f5f5f5;
			justify-content: center;
			align-items: center;

			image {
				width: 75%;
				height: 75%;
			}
		}
	
	.fs-24 {
			margin-top: 22rpx;
		}

		.fs-16 {
			margin-top: 14rpx;
		}

		.fs-18 {
			margin: 14rpx 0;
		}
	}

	.info {
		width: 100%;
	}

	.cart-btn {
		margin-right: 46rpx;
		width: 60rpx;
		height: 60rpx;
		background-color: #ffe32a;
		border-radius: 50%;
		text-align: center;
		line-height: 60rpx;

		text {
			font-size: 48rpx;
		}
	}
</style>
