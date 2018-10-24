<template>
	<div class="login" ref='login'>
		<div class="content">
			<baseheader class='header' :title='title'>
				<!--<i class="iconfont icon-xiangzuo7 go-back" slot='left-operate' @click='goback()'></i>
				<i class="iconfont icon-more other"></i>-->
				<img slot='left-operate' src="../../static/logo.png" alt="" class="go-back" @click='goIndex()' />
			</baseheader>
			<basefastlogin class='fastlogin' v-show='isFastLogin' :closeDialog='closeDialog' :showDialog='showDialog' :fastLogin='fastLogin'></basefastlogin>
			<baseaccountlogin class="accountlogin" v-show='isAccountLogin' :closeDialog='closeDialog' :showDialog='showDialog' :accountLogin='accountLogin'></baseaccountlogin>
		</div>
    </div>
</template>

<script>
	import appObj from '../utils/publicPath'
	export default {
		name:'login',
		data() {
			return {
				title:'登录页面',
				isFastLogin:false,
				isAccountLogin:true,
				type: this.$route.query.type || ''
			}
		},
		methods: {
			goIndex() {
				this.$router.push({path: `${appObj.path}nav/index`})
			},
			goback() {
				window.history.go(-1)
			},
			closeDialog(hideType,showType) {
				switch(hideType) {
					case 'fastLogin':
					    this.isFastLogin= false 
					    break;
					case 'accountLogin':
					    this.isAccountLogin= false
					    break;
					default:
				}
				this.showDialog(showType)
			},
			showDialog(showType,hideType) {
				switch(showType) {
					case 'fastLogin':
					    this.isFastLogin= true
					    break;
					case 'accountLogin':
					    this.isAccountLogin= true
					    break;
					default:
				}
			},
			fastLogin(userInfo) {
				this.$store.dispatch('FastLogin',userInfo)
			},
			accountLogin() {
				this.$store.dispatch('AccountLogin',userInfo)
			}
		},
		created() {
			if(this.type == 'fast') {
				this.closeDialog('accountLogin','fastLogin')
			}
			
		}
	}
</script>

<style lang='scss' scoped>
    .login {
    	position:fixed;
    	top:0;
    	left:0;
    	bottom:0;
    	width:100%;    	
    	height:100%;
    	max-width:7.5rem;
    	background:url(../assets/img/login/7.png) no-repeat 0 0/100% 100%;
    	background-attachment: fixed;
    	overflow-y: auto;
    	.fastlogin {
	    	position:absolute;
	    	left:0;
	    	top:4rem;
	    }
	    .accountlogin {
	    	position:absolute;
	    	left:0;
	    	top:4rem;
	    }
    }
    
</style>