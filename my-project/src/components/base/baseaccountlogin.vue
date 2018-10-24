<template>
	<div class="login-box">
		<div class="mobile-box">
			<i class="iconfont icon-bangdingshouji i-mobile"></i>
			<input type="text" @blur='blurMobile()' v-model='mobile' class="mobile" placeholder="请输入手机号码"/>
			<p class="error-mobile" v-if='isMobileError'>{{errorMobile}}</p>
		</div>
		<div class="code-box">
			<i class="iconfont icon-3denglumima i-code"></i>
			<input type="password" @blur='blurCode()' v-model='code' class="code" placeholder="输入密码"/>
			<p class="error-code" v-if='isCodeError'>{{errorCode}}</p>
		</div>
		<button :class="canLogin ? 'login': 'isLogin' " @click='login()'>登录</button>
		<p class='tips'><span class="change" @click='changeFast()'>快速登录</span><span class="register" @click='register()'>注册账号</span></p>
	</div>
</template>

<script>
	import appObj from '../../utils/publicPath'
	export default {
		name:'passLogin',
		data () {
			return {
				mobile:'',
				isMobileError:false,
				errorMobile:'',
				code:'',
				isCodeError:false,
				errorCode:'',
				canLogin:false,
			}
		},
		props:['closeDialog', 'showDialog', 'accountLogin'],
		methods: {
			blurMobile() {
				let reg= /^(13[0-9]|14[579]|15[0-3,5-9]|166|17[0135678]|18[0-9]|19[89])\d{8}$/
				let regPas= /^[a-zA-Z][0-9a-zA-Z_]*$/
				if (reg.test(this.mobile)) {
					this.errorMobile= ''
					this.isMobileError= false
					if (this.code && regPas.test(this.code)) {
						this.canLogin= true
					}
				}else if (!this.mobile) {
					this.errorMobile= '请输入手机号码'
					this.isMobileError= true
					this.canLogin= false
				} else if (!reg.test(this.mobile)) {
					this.errorMobile= '输入的手机格式不正确'
					this.isMobileError= true
					this.canLogin= false
				}
			},
			blurCode() {
				let reg= /^(13[0-9]|14[579]|15[0-3,5-9]|166|17[0135678]|18[0-9]|19[89])\d{8}$/;
				let regPas= /^[a-zA-Z][0-9a-zA-Z_]*$/
				if(!this.code) {
					this.errorCode= '请输入密码'
					this.isCodeError= true
					this.canLogin= false
				}else if(!regPas.test(this.code)) {
					this.errorCode= '格式错误（字母开头，只包含字母、数字、下划线）'
					this.isCodeError= true
					this.canLogin= false
				}else {
					this.errorCode= ''
					this.isCodeError= false
					if (reg.test(this.mobile)) {
						this.canLogin= true
					}
				} 
			},
			login() {
				//调取登录接口
				let userInfo= {
					mobile:this.mobile,
					password:this.code
				}
				this.accountLogin(userInfo)
			},
			changeFast() {
				this.closeDialog('accountLogin','fastLogin')
			},
			register() {
				this.$router.push({path:`${appObj.path}register`})
			}
		}
	}
</script>

<style lang='scss' scoped>
    .login-box {
    	font-size:0;
    	width:100%;
    	height:5rem;
    	padding-top:.3rem;
    	background:rgba(255,66,37,0);
    	.mobile-box {
    		font-size:0;
    		position:relative;
    		margin-bottom:.6rem;
    		.mobile {
	    		width:6rem;
	    		height:.8rem;
	    		margin-left:.75rem;
	    		box-shadow: 0 .01rem 0 #666666;
	    		padding-left:.8rem;
	    		letter-spacing: .02rem;
	    	}
	    	.i-mobile {
	    		width:.6rem;
	    		height:.6rem;
	    		text-align: center;
	    		line-height: .6rem;
	    		font-size:.5rem;
	    		position:absolute;
	    		bottom:.1rem;
	    		left:.85rem;
	    	}
	    	.error-mobile {
	    		width:6rem;
	    		margin-left:.75rem;
	    		color:#FF0000;
	    		font-size:.2rem;
	    		position:absolute;
	    		left:0;
	    		top:.85rem;
	    		overflow: hidden;
	    		white-space: nowrap;
	    		text-overflow: ellipsis;
	    	}
    	}
    	.code-box {
    		font-size:0;
    		position:relative;
    		margin-bottom:.6rem;
    		.code {
    			width:6rem;
    			height:.8rem;
    			margin-left:.75rem;
    			padding-left:.8rem;
    			box-shadow: 0 .01rem 0 #666666;
    		}
    		.i-code {
    			width:.6rem;
	    		height:.6rem;
	    		text-align: center;
	    		line-height: .6rem;
	    		font-size:.5rem;
	    		position:absolute;
	    		bottom:.1rem;
	    		left:.85rem;
    		}
    		.error-code {
    			width:6rem;
	    		margin-left:.75rem;
	    		color:#FF0000;
	    		font-size:.2rem;
	    		position:absolute;
	    		left:0;
	    		top:.85rem;
	    		overflow: hidden;
	    		white-space: nowrap;
	    		text-overflow: ellipsis;
    		}
    	}
    	.isLogin {
    		width:6rem;
    		height:.8rem;
    		margin-left:.75rem;
    		border-radius:.05rem;
    		font-size:.36rem;
    		background:#CCCCCC;
    		color:#333333;
    	}
    	.login {
    		width:6rem;
    		height:.8rem;
    		margin-left:.75rem;
    		border-radius:.05rem;
    		font-size:.36rem;
    		color:#fff;
    		background:-webkit-linear-gradient(left,#f00,#f0f)
    	}
    	.tips {
    		width:6rem;
    		margin-left:.75rem;
    		display: flex;
    		font-size:.3rem;
    		margin-top:.3rem;
    		justify-content: space-between;
    		color:#333333;
    		&>span {
    			height:.5rem;
    		}
    	}
    }
</style>