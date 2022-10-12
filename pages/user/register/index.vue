<template>
    <view class="register">
        <bm-login :base-config="myConfig"
                  v-on:forgetPassword="to_forgetPassword"
                  v-on:phoneLogin="to_phone_login"
                  @parent_login="login">
            <template v-slot:header>
                <view style="display: flex;flex-direction: column;align-items: flex-start;">
					<view class="toLogin" @tap="toLogin">
						 <h2>已有账号？</h2>
					</view>
                   
                    <h2>账号密码注册</h2>
                </view>
            </template>
        </bm-login>
    </view>
</template>

<script>
	import bmLogin from '../../../components/bm-login/bm-login.vue'
    export default {
        name: "register",
		components: {
			bmLogin
		},
        data(){
            return{
                myConfig:{
                    forgetPwd_register_protocol: false,
                    //为false时，下面三项设置为true无效
                    rememberPassword:false,
                    quickLogin:true,
                    otherLoginWays: false,
                    login_btn_value:'注册',
                    phone_login_text:'返回账号密码登录'
                }
            }
        },
        methods:{
            //根据配置自行选择需要的方法
            to_forgetPassword(){
                //进入忘记密码页面
				uni.navigateTo({
					url: '../phone-login/index'
				})
            },
            login(input_info){
                //登录
              this.$request('/1.1/users',input_info,'post').then((res)=>{
              	let {object,code}=res
              	console.log('返回结果',res);
				let title = res.code==202?'该用户名已被使用':'注册成功'
				uni.showToast({
					title,
					icon:'none'
				})
				ths.toLogin()
              })
            },
            to_phone_login(){
                //返回登录页面
				uni.navigateTo({
					url: '../phone-login/index'
				})
            },
			toLogin(){
				uni.navigateTo({
					url:'/pages/user/login/index'
				})
			}
        }
    }
</script>

<style scoped>
.toLogin{
	color: #128AE7;
}
</style>
