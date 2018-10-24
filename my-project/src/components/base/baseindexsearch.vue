<template>
	<div class="basesearch">
		<div class="indexSearch">
			<i class="list iconfont icon-liebiao21" @click='jumpList()'></i>
			<form action="" class='search-box'>
				<div class="logo"><img src="../../assets/img/logo.png" alt="" /></div>
				<input type="text" class="text" v-model='content' @click='input()' :placeholder='placeholder'/>
				<div class='search-btn'><i class="iconfont icon-sousuo" @click='search()'></i></div>
			</form>
			<a href="javascript:;" v-if='isNeedLogin' class="login" @click='login()'>登录</a>
		</div>
	</div>
</template>

<script>
	import {
		
	} from '../../assets/js/api'
	import appObj from '../../utils/publicPath'
	export default {
		name:'indexSearch',
		data () {
			return {
				content:'',
				placeholder:'nih'
			}
		},
		props:['closeDialog', 'showDialog', 'isNeedLogin'],
		methods:{
			jumpList() {
				this.$router.push({path:`${appObj.path}nav/classify`})
			},
			input() {
				this.$router.push({path:`${appObj.path}search`})
			},
			search() {
				this.$router.push({path:`${appObj.path}searchResult`,query:{content:this.content}})
			},
			login() {
				this.$router.push({path:`${appObj.path}login`})
			}
		},
		mounted() {
			this.placeholder= this.$store.state.search.placeholder
		}
	}
</script>

<style lang='scss' scoped>
    .basesearch {
    	width:100%;
    	padding:.14rem 0;
    	background:rgba(255,23,43,.8);
	    .indexSearch {
	    	width:100%;
	    	height:.6rem;
	    	display:flex;
	    	justify-content: space-around;
	    	.list {
	    		display: inline-block;
	    		width:.6rem;
	    		height:.6rem;
	    		font-size::.54rem;
	    		color:#fff;
	    	}
	    	.search-box {
	    		width:5.2rem;
	    		height:100%;
	    		padding-left:1.3rem;
	    		position:relative;
	    		border-radius:15px;
	    		background:#fff;
	    		.logo {
	    			width::.65rem;
	    			height:100%;
	    			position:absolute;
	    			top:0;
	    			left:0;
	    			border-top-left-radius:15px;
	    			border-bottom-left-radius:15px;
	    			&>img {
	    				width:.45rem;
	    				height:.46rem;
	    				position:absolute;
	    				top:.07rem;
	    				right:.05rem;
	    			}
	    		}
	    		.search-btn {
	    			width:.64rem;
	    			height:.4rem;
	    			position:absolute;
	    			top:.1rem;
	    			left:.65rem;
	    			border-left:.01rem #969896 solid;
	    			display:flex;
	    			justify-content: center;
	    			.iconfont {
		    			font-size:.4rem;
		    		}
	    		}
	    		.text {
	    			width:3.9rem;
	    			height:100%;
	    			line-height: .7rem;
	    			position:absolute;
	    			top:0;
	    			left:1.3rem;
	    			font-size:.24rem;
	    			color:#404040;
	    			border-top-right-radius:15px;
	    			border-bottom-right-radius:15px;
	    		}
	    	}
	    	.login {
	    		font-size:.28rem;
	    		width:1rem;
	    		height:100%;
	    		line-height:.6rem;
	    		text-align: center;
	    		color:#fff
	    	}
	    }
	}
</style>