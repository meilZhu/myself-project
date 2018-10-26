<template>
	<div class="register">
		<div class="swipper">
			<baseheader :title='title'>
				<img src="../../../static/logo.png" alt="" slot='left-operate' class="go-back" @click='goIndex()'/>
			</baseheader>
			<baseregister class="base-register" :baseRegister='baseRegister'></baseregister>
		</div>
	</div>
</template>

<script>
	import {
		register
	} from '../../assets/js/api'
	import appObj from '../../utils/publicPath'
	export default {
		name: 'register',
		data () {
			return {
				title: '注册页面'
			}
		},
		methods: {
			baseRegister (registerInfo) {
				register(registerInfo)
				.then((res) => {
					
				}).catch((err) => {
					console.log(err)
				})
			},
			goIndex () {
				this.$router.push({path: `${appObj.path}/nav/index`})
			}
		}
	}
</script>

<style lang='scss' scoped>
    .register {
    	position:fixed;
    	top:0;
    	bottom:0;
    	width:100%;
    	max-width: 750px;
    	height:100%;
    	overflow-y:auto;
    	background:url(../../assets/img/login/7.png) no-repeat 0 0/100% 100%;
    	
    }
    .base-register {
    	position:absolute;
    	left:0;
    	top:4rem;
    }
</style>