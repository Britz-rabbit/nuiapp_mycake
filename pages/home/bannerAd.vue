<template>
	<view>
		<web-view :src="webSrc"></web-view>b
	</view>
</template>

<script>
	export default {
		data() {
			return {
				webSrc:''
			}
		},
		methods: {
			
		},
		onLoad({link,type,key2}){
			this.webSrc = `${link}&key2=${key2}&type=${type}`
			console.log(this.webSrc);
		},
	}
</script>

<style lang='scss'>

</style>
