<template>
	<view>
		<view class="itemCon flex margin-top-xl">
			<text class="iconfont icon-gouxuan"
			 @tap="isChecked=!isChecked"
			 :class="isChecked?'coloryellow':'color9292'"></text>
			<view class="poster">
				<image :src="data.img" mode=""></image>
			</view>
			<!-- 中间信息栏 -->
			<view class="infoCon flex flex-direction">
				<view class="info flex justify-between">
					<view class="name flex flex-direction">
						<text class="weight700">{{data.name}}</text>
						<text>{{data.french}}</text>
					</view>
					<text class="iconfont icon-bianji" @tap="isChanging=!isChanging"></text>
					<!-- 修改商品数量的模态框 -->
					<u-modal :show="isChanging" :showConfirmButton='false' :closeOnClickOverlay="true">
						<view class="modal flex flex-direction text-center">
							<text>{{content}}</text>
							<input type="number" ref="input" :value="data.num" auto-focus>
							<view class="flex">
								<button type="default" size="mini" @tap="changeNum(0)">取消</button>
								<button type="primary" size="mini" @tap="changeNum(1)">确认修改</button>
							</view>
						</view>

					</u-modal>


				</view>
				<view class="info flex justify-between align-center">
					<text class="weight700">￥{{sumPrice}}({{this.data.num}}份)</text>
					<text>{{data.spec}}({{data.weight}})</text>
				</view>
			</view>
		</view>
		<!-- 底部配送 -->
		<view class="btm flex justify-between">
			<text class="tag">配送</text>
			<text>{{data.fittings}}</text>
		</view>
		<view class="brief">
			<p>{{data.chineseBrief}}</p>
		</view>
	</view>
</template>

<script>
	export default {
		name: "cartItem",
		props: ['data'],
		beforeMount() {
			
		},
		data() {
			return {
				isChanging: false,
				content: '通过下方按钮修改商品数量，如果输入值小于等于0则会从购物车中移除该商品。'
			};
		},
		computed: {
			sumPrice() {
				return this.$props.data.price * this.$props.data.num
			},
			isChecked:{
				get(){
					//console.log('调用了单个商品的get');
					return this.$props.data.isChecked
				},
				set(val){
					this.$props.data.isChecked=val
					this.$store.commit('changeChecked',this.$props.data)
				    //console.log('你更改了勾选，现在仓库信息是',this.$store.state.cart.itemList);
					
				}
			}
		},
		methods: {
			//修改商品数量
			changeNum(type) {
				if (!type) {
					return this.isChanging = false
				} else {
					let num = this.$refs.input.valueSync * 1
					if (num <= 0) {
						//输入值小于等于0，直接移除
						this.$store.commit('detItem', this.$props.data)
					} else {
						//输入值大于0，修改data的num，再重新提交
						this.$props.data.num = this.$refs.input.valueSync * 1
						this.$store.commit('changeChecked', this.$props.data)
						//使用自定义事件通知父组件重新刷新整个购物车	
						this.$emit('reload')
						this.isChanging = false
					}
				}

			},


		},

	}
</script>

<style lang="scss" scoped>
	page {
		background-color: #fff;
	}

	.iconfont {
		font-size: 48rpx;
	}

	.icon-gouxuan {
		margin: auto 16rpx;
	}

	.icon-bianji {
		font-size: 62rpx;
		color: #8c8c8c;
		background-color: #D7D7D7;
		border-radius: 50%;
		text-align: center;
		width: 68rpx;
		height: 68rpx;
		line-height: 68rpx;
	}

	.weight700 {
		height: 46rpx;
		line-height: 46rpx;
		font-size: 38rpx;
		font-weight: 800;
	}

	.poster {
		width: 230rpx;
		height: 230rpx;
		background-color: #f1f1f1;
		display: flex;
		justify-content: center;
		align-items: center;

		image {
			width: 100%;
			height: 100%;
		}

	}

	.infoCon {
		margin-left: 32rpx;
		margin-top: 16rpx;
		width: 360rpx;

		.info {
			margin-top: 8rpx;

		}
	}

	.name {
		white-space: nowrap;
		text-overflow: ellipsis;
		max-width: 300rpx;
		text:nth-child(2) {
			font-size: 28rpx;
			color: #a3a3a3;
		}
	}

	.btm {
		margin-left: 80rpx;
		margin-top: 18rpx;
		width: 360rpx;

		.tag {
			background-color: #dddddd;
			width: 72rpx;
			border-radius: 8rpx;
			font-size: 18rpx;
			text-align: center;
		}
	}

	.modal {
		text {
			font-size: 30rpx;
		}

		input {
			height: 60rpx;
			font-size: 48rpx;
			margin: 18rpx 0;
			border: 1rpx solid #a3a3a3;
		}

		button {
			height: 68rpx;
			font-size: 32rpx;
		}
	}

	.brief {
		margin-left: 60rpx;
		margin-top: 16rpx;
		font-size: 28rpx;
		color: #ccb3b5;
		width: 600rpx;
		text-indent: 38rpx;

		p::first-letter {
			font-size: 58rpx;
			font-weight: 600;
		}

		//加个分割线
		padding-bottom: 16rpx;
		border-bottom: deeppink 2rpx dotted;
	}
</style>
