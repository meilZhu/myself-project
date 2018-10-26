<template>
	<ul class="jump-icon">
		<li class="jump-list" @click='jumpIndex()'><i class="iconfont picture icon-shouye2"></i><span class="jump-text">首页</span></li>
		<li class="jump-list" @click='jumpClassify()'><i class="iconfont picture icon-liebiao7"></i><span class="jump-text">分类搜索</span></li>
		<li class="jump-list" @click='jumpCart()'><i class="iconfont picture icon-gouwuchekong"></i><span class="jump-text">购物车</span></li>
		<li class="jump-list" @click='jumpMine()'><i class="iconfont picture icon-wode6"></i><span class="jump-text">我的商城</span></li>
		<li class="jump-list" @click='jumpHistory()'><i class="iconfont picture icon-jiaoyin"></i><span class="jump-text">我的足迹</span></li>
		<slot></slot>
	</ul>
</template>

<script>
	import appObj from '../../utils/publicPath'
	export default {
		name: 'jumpicon',
		data () {
			return {

			}
		},
		methods: {
			jumpIndex () {
				this.$router.push({path: `${appObj.path}nav/index`})
			},
		    jumpClassify () {
                this.$router.push({path: `${appObj.path}nav/classify`})
			},
			jumpCart () {
                this.$router.push({path: `${appObj.path}cart`})
			},
			jumpMine () {
				this.$router.push({path: `${appObj.path}mine`})
			},
			jumpHistory () {
				this.$router.push({path: `${appObj.path}browserHistory`})
			}
		}
	}
</script>

<style lang='scss' scoped>
    .jump-icon {
    	width:3.333333rem;
    	font-size:14px;
		font-weight:500;
		color:#fff;
		border-radius:3px;
		position:relative;
		.jump-list {
			background:rgba(0,0,0,.8);
            width:100%;
			height:1.066667rem;
			border-bottom:.013333rem solid #ccc;
			.picture {
				display: inline-block;
				width:1.066667rem;
				height:1.066667rem;
				font-size:16px;
				text-align: center;
				line-height:1.066667rem;
			}
		}
		.jump-list:first-child {
			border-top-left-radius: 3px;
			border-top-right-radius: 3px;
		}  	
		.jump-list:last-child {
			border-bottom-left-radius: 3px;
			border-bottom-right-radius: 3px;
		}  	
		.interface {
			position:fixed;
			top:0;
			left:0;
			bottom:0;
			width:100%;
		    z-index:-1;
		}
    }
	.jump-icon::before {
		display: inline-block;
        content:' ';
		transform:rotate(-135deg);
		position:absolute;
		top:-5px;
		right:.32rem;
		width: 0px;
        height: 0px;
        border-width: 6px;
        border-style: solid; /*定义的是实现边框*/
        border-color: transparent rgba(0,0,0,.8) rgba(0,0,0,.8) transparent;
	}
</style>