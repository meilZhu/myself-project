<template>
	<div class="tab">
		<router-view></router-view>
		<ul class="content">
			<router-link class="item" to='/nav/index'><i class="iconfont icon-shouye2"></i><span>首页</span></router-link>
			<router-link class="item" to='/nav/classify'><i class="iconfont icon-liebiao7"></i><span>列表</span></router-link>
			<router-link class="item" to='/cart'><i class="iconfont icon-gouwuchekong"></i><span>购物车</span></router-link>
			<router-link class="item" to='/mine'><i class="iconfont icon-wode6"></i><span>我的</span></router-link>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'tab',
		data () {
			return {
				
			}
		}
	}
</script>

<style lang='scss' scoped>
    .tab{
    	width:100%;
    	max-height: 100%;
        	.content {
    		width:100%;
    		height:.88rem;
    		display:flex;
    		box-shadow: 0 -1px 10px #CCCCCC;
    		position:fixed;
			left:0;
			bottom:0;
			z-index:2;
    		.item {
    			flex:1;
    			font-size:.24rem;
    			font-weight:500;
    			display: flex;
    			flex-direction: column;
    			justify-content: center;
    			align-items:center;
    			&>span {
    				text-align: center;
    			}
    			.iconfont {
    				font-size:.32rem
    			}
    		}
    		.active {
	    		color:#ff4225;
	    	}
    	}
    	
    }
</style>