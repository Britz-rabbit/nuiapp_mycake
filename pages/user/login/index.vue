<template>
    <view class="login">
        <bm-login :base-config="myConfig"
                  v-on:phoneLogin="to_phoneLogin"
                  v-on:forgetPassword="to_forgetPassword"
                  v-on:toProtocol="to_protocol"
                  v-on:register="to_register"
                  @parent_rememberMe="rememberMe"
                  @parent_login="login">
            <template v-slot:header>
                <h2>欢迎登陆！</h2>
            </template>
        </bm-login>
    </view>
</template>

<script>
	import bmLogin from '../../../components/bm-login/bm-login.vue'
    export default {
        name: "login",
		components: {
			bmLogin
		},
        data(){
            return{
                myConfig:{
                    //根据需要自行配置
                    forgetPwd_register_protocol: true,
                    forgetPassword:true,
                    register:true,
                    protocol:true,
                    quickLogin:true,
                    otherLoginWays: true
                }
            }
        },
        methods:{
            to_phoneLogin(){
				uni.navigateTo({
					url: '../phone-login/index'
				})
            },
            to_forgetPassword(){
				uni.navigateTo({
					url: '../reset-pwd/index'
				})
            },
            // 用户协议
            to_protocol(){

            },
            login(input_info){
				this.$request('/1.1/login',input_info).then((res)=>{
					//console.log('返回结果',res);
					//登陆失败的处理
					if(res.code==211){
						uni.showToast({
							title:'用户未注册',
							icon:'none'
						})
						return 
					}else if(res.code==210){
						uni.showToast({
							title:'密码错误',
							icon:"none"
						})
						return
					}
					//登陆成功的处理:vuex和本地都存一份用户信息
					uni.setStorage({
						key:'userInfo',
						data:res
					})
					this.$store.commit('setInfo',res)
					//console.log(this.$store.state);
					uni.reLaunch({
						url:'/pages/cake/cake'
					})
				})
                
            },
            to_register(){
				uni.navigateTo({
					url: '../register/index'
				})
            }
        }
    }
</script>

<style scoped>
   /* .login{
        height: 100vh;
    } */
</style>
