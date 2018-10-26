<template>
	<div class="related-search">
		<h1 class="title">相关商品</h1>
		<p v-for='item in goodsData' :key='item' class="goods-box"><a href="javascript:;" class="goods-name" @click=search(item)>{{item}}</a></p><!--<i class="iconfont icon-shanchu2 remove"></i>-->
	</div>
</template>

<script>
	import appObj from '../../utils/publicPath'
	import bus from '../../utils/bus'
	export default {
		name: 'relatedsearch',
		data () {
			return {
				goodsData: ['电磁炉','保温杯']
			}
		},
		methods: {
			search (val) {
				console.log(val)
				this.$router.push({path: `${appObj.path}searchResult`})
			}
		},
		mounted () {
			bus.$on('searchRelated',(val) => {
				console.log(val)
				// 在这里调取接口获取自己想要说的数据
			})
		}
	}
</script>

<style lang='scss' scoped>
    .related-search {
    	width:100%;
    	padding:.266667rem .266667rem .533333rem;
    	.title {
    		font-size:14px;
    		font-weight:bold;
    		margin-bottom:.133333rem;
    	}
    	.goods-box {
    		width:100%;
    		font-size:12px;
    		line-height:.4rem;
    		padding:.266667rem 0;
    		display: flex;
    		justify-content: space-between;
    		
    	}
    }
</style>