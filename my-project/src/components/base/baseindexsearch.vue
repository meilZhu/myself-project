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
		name: 'indexSearch',
		data () {
			return {
				content: '',
				placeholder: 'nih'
			}
		},
		props: ['closeDialog', 'showDialog', 'isNeedLogin'],
		methods: {
			jumpList () {
				this.$router.push({path: `${appObj.path}nav/classify`})
			},
			input () {
				this.$router.push({path: `${appObj.path}search`})
			},
			search () {
				this.$router.push({path: `${appObj.path}searchResult`})
			},
			login () {
				this.$router.push({path: `${appObj.path}login`})
			}
		},
		mounted () {
			this.placeholder= this.$store.state.search.placeholder
		}
	}
</script>

<style lang='scss' scoped>
    .basesearch {
    	width:100%;
    	padding:.186667rem 0;
    	background:rgba(255,23,43,.8);
	    .indexSearch {
	    	width:100%;
	    	height:.8rem;
	    	display:flex;
	    	justify-content: space-around;
	    	.list {
	    		display: inline-block;
	    		width:.8rem;
	    		height:.8rem;
	    		font-size:24px;
	    		color:#fff;
				text-align: center;
				line-height:.8rem;
	    	}
	    	.search-box {
	    		width:6.933333rem;
	    		height:100%;
	    		padding-left:1.733333rem;
	    		position:relative;
	    		border-radius:15px;
	    		background:#fff;
	    		.logo {
	    			width:.866667rem;
	    			height:100%;
	    			position:absolute;
	    			top:0;
	    			left:0;
	    			border-top-left-radius:15px;
	    			border-bottom-left-radius:15px;
	    			&>img {
	    				width:.6rem;
	    				height:.613333rem;
	    				position:absolute;
	    				top:.093333rem;
	    				right:.066667rem;
	    			}
	    		}
	    		.search-btn {
	    			width:.853333rem;
	    			height:.533333rem;
	    			position:absolute;
	    			top:.133333rem;
	    			left:.866667rem;
	    			border-left:.013333rem #969896 solid;
	    			display:flex;
	    			justify-content: center;
	    			.iconfont {
		    			font-size:15px;
						line-height:.533333rem;
		    		}
	    		}
	    		.text {
	    			width:5.2rem;
	    			height:100%;
	    			line-height:.933333rem;
	    			position:absolute;
	    			top:0;
	    			left:1.733333rem;
	    			font-size:14px;
	    			color:#404040;
	    			border-top-right-radius:15px;
	    			border-bottom-right-radius:15px;
	    		}
	    	}
	    	.login {
	    		font-size:15px;
	    		width:1.333333rem;
	    		height:100%;
	    		line-height:.8rem;
	    		text-align: center;
	    		color:#fff
	    	}
	    }
	}
</style>