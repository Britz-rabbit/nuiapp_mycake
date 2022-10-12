<template>
	<view>
		<!-- 顶部导航条 -->
		<navBar></navBar>
		<!-- 左侧弹出菜单 -->
		<u-popup :show="isShow" mode="left" @close="isShow=false">
			<view class="flex flex-direction pop-con align-center">
				<view class="flex u-border-bottom" @tap="toHome">
					<text class="lg text-gray cuIcon-home"></text>
					<text class="">首页</text>
				</view>
				<view class="flex u-border-bottom" @tap="toPersonal">
					<text class="lg text-gray cuIcon-service"></text>
					<text class="">个人中心</text>
				</view>
				<view class="flex u-border-bottom" @tap="toMap">				
					<text class="lg text-gray cuIcon-location"></text>
					<text class="">收货地点</text>
				</view>
				<view class="flex u-border-bottom">
					<text class="lg text-gray cuIcon-favor"></text>
					<text class="" @tap="aboutUs">关于项目</text>
				</view>
			</view>
			<u-collapse>
				<!-- 组件库尽量别放到view中来添加样式，否则真机体验可能出问题 -->
				<!-- 这个组件不支持v-for，故采用数据分组后单独渲染 -->
				<u-collapse-item title='所有蛋糕'>
					<view class="itemContent flex justify-between"
					 v-for="(item,index) in cakes.list"
					 @click="choseFlavor(item)"
					 >
						<text>{{item.tname}}</text>
						<view class='cu-tag round bg-yellow'>{{item.num}}</view>
						<u-icon name="arrow-right"></u-icon>
					</view>
					<!-- 判断会放到外面，因为v-for在遍历空对象后会跳过内部结构的渲染 -->
					<text v-if="!cakes.list.length">暂无更多分类</text>

				</u-collapse-item>
				<u-collapse-item title='所有面包'>
					<view class="itemContent" v-for="(item,index) in breads.list">
						<text>{{item.tname}}</text>
					</view>
					<text v-if="!breads.list.length">暂无更多分类</text>
				</u-collapse-item>
				<u-collapse-item title='所有零食'>
					<view class="itemContent" v-for="(item,index) in foods.list">
						<text v-if="foods.list.length">{{item.tname}}</text>
					</view>
					<text v-if="!foods.list.length">暂无更多分类</text>
				</u-collapse-item>
				<u-collapse-item title='所有配件'>
					<view class="itemContent" v-for="(item,index) in fittings.list">
						<text v-if="fittings.list.length">{{item.tname}}</text>
					</view>
					<text v-if="!fittings.list.length">暂无更多分类</text>
				</u-collapse-item>
			</u-collapse>

		</u-popup>
		<!-- 中间内容区 -->
		<view class="context-con flex flex-wrap">
			<good v-for="(item) in goodsList" :key='item.id' :data="item"></good>
		</view>
		<!-- 底部菜单 -->
		<view class="bottonMenu flex text-center justify-around padding-sm">
			<view class="menuItem flex align-center" v-for="(item,index) in menuList" @tap="tapMenu(item)">
				<text>{{item.title}}</text>
				<u-line v-show="!item.noline" direction="col" length='20' color='#4f4f4f'></u-line>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		components: {

		},
		data() {
			return {
				goodsList: [],
				page: 0,
				isShow: false,
				//获取数据的部分查询参数，依不同情况而变
				// condition:{
				// 	bcid:1
				// },
				menuList: [{
						title: '菜单',
						bcid: '',
						target: ''
					},
					{
						title: '蛋糕',
						bcid: '1',
						target: ''
					},
					{
						title: '面包',
						bcid: '11',
						target: ''
					},
					{
						title: '零食',
						bcid: '6',
						target: ''
					},
					{
						title: '购物车',
						bcid: '',
						target: '/pages/cart/cart',
						noline: true
					}
				],
				//使用的组件库不支持v-for，故采用数据分组单独渲染
				breads: [],
				cakes: [],
				foods: [],
				fittings: []

			}
		},
		onPullDownRefresh() {
			this.reloadData()
			uni.stopPullDownRefresh()
		},
		onLoad() {
			//获取面包分类的数据
			this.loadData()
			//获取口味列表
			this.$request('/1.1/classes/classify', {
				limit: 4
			}).then((res) => {
				//console.log(res);
				this.cakes = res.results[0]
				this.breads = res.results[1]
				this.foods = res.results[2]
				this.fittings = res.results[3]
			})
		},
		onReachBottom() {
			// /1.1/classes/goods?where={"bcid":1}
			this.loadData()
		},
		computed: {
			condition() {
				return this.$store.state.condition.condition
			}
		},
		methods: {
			aboutUs(){
				this.isShow=false
				uni.showToast({
					title:'购物车页有彩蛋',
					icon:'none'
				})
			},
			toMap(){
				uni.navigateTo({
					url:'/pages/map/map'
				})
			},
			toHome(){
				uni.navigateTo({
					url:'/pages/home/home'
				})
			},
			toPersonal(){
				uni.navigateTo({
					url:'/pages/personal/personal'
				})
			},
			//获取商品列表数据
			loadData() {
				this.page += 1
				let where = JSON.stringify(this.condition)
				console.log(where);
				let skip = this.page * 8
				this.$request(`/1.1/classes/goods?where=${where}&limit=8&skip=${skip}`).then((res) => {
					let {
						results
					} = res
					let isOver = this.goodsList.map((item) => item.id).indexOf(results[1].id)
					if (isOver < 1) {
						// if(results.length){
						//uniapp中并没有实现对data中对象的方法重写，所以要通过扩展运算符的方式实现data中的数组追加
						this.goodsList = [
							...this.goodsList,
							...res.results
						]
						return
					} else {
						uni.showToast({
							title: '没有更多数据啦',
							icon: 'none'
						})
					}
				})
			},
			//情况data后重新获取商品数据列表
			reloadData(){
				this.goodsList = []
				this.page = 0
				this.loadData()
			},
			//底部菜单点击切换到不同页面
			tapMenu(item) {
				let {
					bcid,
					target
				} = item
				if (bcid) {
					this.goodsList = []
					this.page = 0,
						// this.condition.bcid = bcid*1
						this.$store.commit('changeCon', {
							bcid: bcid * 1
						})
					this.loadData()
				} else if (target) {
					uni.navigateTo({
						url:'/pages/cart/cart'
					})
				} else {
					this.isShow = true
				}
			},
			//左侧菜单单机跳转分类
			choseFlavor({bid,tid}){
				this.$store.commit('changeCon',{
					bcid:bid,
					fid:tid
				})
				this.reloadData()	
			},
			//
		
		},
		
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: #fff;
		padding: 100rpx 0rpx;
	}

	// 底部菜单 
	.bottonMenu {
		position: fixed;
		bottom: 0;
		background-color: #fff;
		box-shadow: 0 0 16rpx 4rpx rgba(0, 0, 0, 0.2);
		width: 100%;

		.menuItem {
			width: 20%;
			height: 60rpx;
			font-size: 34rpx;
			line-height: 60rpx;
			justify-content: space-evenly;
		}
	}

	//左侧菜单栏
	.u-border-bottom:nth-child(1){
		margin-top: 120rpx;
	}
	.u-border-bottom {
		width: 300rpx;
		font-size: 38rpx;
		height: 86rpx;
		line-height: 86rpx;
		padding-left: 28rpx;
		box-sizing: border-box;
		border-radius: 16rpx;
	}

	.itemContent {
		font-size: 36rpx;
		height: 48rpx;
		height: 48rpx;
		margin-top: 16rpx;
	}
</style>
