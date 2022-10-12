<template>
	<view>
		<navBar />
		<map :latitude="latitude" :longitude="longitude"></map>

		<view class="from">
			<view class="cu-form-group">
				<view class="title">
					<text class="text-xl text-gray cuIcon-location"></text>
				</view>
				<picker mode="selector" :range="addressArr" @change="choseAddress">
					<view class="pickerItem">{{curIndex===-1?'请选择收货地址':addressArr[curIndex]}}</view>
				</picker>
			</view>
			<view class="cu-form-group">
				<view class="title">
					<text class="text-xl text-gray cuIcon-edit"></text>
				</view>
				<input placeholder="请输入详细地址" v-model="address" name="input"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">
					<text class="text-xl text-gray cuIcon-profile"></text>
				</view>
				<input placeholder="请输入收件人" name="input"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">
					<text class="text-xl text-gray cuIcon-phone"></text>
				</view>
				<input placeholder="请输入收件人联系方式" name="input"></input>
			</view>
			<button type="primary" @tap="fahuo">填好了</button>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				address: '',
				addressArr: ['未央区', '经开区', '长安区', '碑林区', '莲湖区', '雁塔区'],
				curIndex:-1,//选中的地址下标
				title: 'map',
				latitude: 34.341568,
				longitude: 108.940174,
			}
		},
		methods: {
			//picker的选择器事件
			choseAddress(e) {
				this.curIndex=e.detail.value
			},
			//安排发货
			fahuo() {
				uni.showModal({
					title: '收到！已安排45年后发货。',
					confirmText: '彳亍X_X',
					cancelColor: 'red',
					cancelText: '(╬▔皿▔)凸'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	map {
		width: 750rpx;
		height: 600rpx;
	}

	.from {
		margin: 68rpx auto;
	
	button {
			width: 100%;
		}
	}
</style>
