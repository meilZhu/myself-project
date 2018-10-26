<template>
	<div class="search-history">
		<div class="search-box">
		    <h1 class="title">{{searchTitle}}</h1>
		    <i class="iconfont remove icon-shanchu2" v-if='isShowRemove' @click='removeSearch()'></i>
		</div>
		<div class="search-contain">
			<span v-for='(ele,index) in searchContent' :key='index' class="search-content" @click='search(ele)'>{{ele}}</span>
		</div>
	</div>
</template>

<script>
	import appObj from '../../utils/publicPath'
	export default {
		name: 'searchhistory',
		data () {
			return {
				
			}
		},
		props: ['searchTitle', 'isShowRemove','searchContent','closeDialog','showDialog','type'],
		methods: {
			removeSearch () {
				// 需要请调取接口
				this.closeDialog(this.type)
			},
			search (ele) {
				console.log(ele)
				// 这里再次调取搜索接口
				this.$router.push({path: `${appObj.path}searchResult`})
			}
		}
	}
</script>

<style lang='scss' scoped>
    .search-history {
    	width:100%;
    	padding:.266667rem .266667rem .533333rem;
    	.search-box {
    		width:100%;
    		height:.6rem;
    		display: flex;
    		justify-content: space-between;
    		line-height:.6rem;
    		font-size:14px;
    		margin-bottom:.133333rem;
    		.title {
    			font-weight: bold;
    		}
    	}
    	.search-contain {
    		width:100%;
    		font-size:0;
    		display: flex;
    		flex-direction: row;
    		flex-wrap: wrap;
    		.search-content {
    			display: inline-block;
    			padding:.106667rem .266667rem;
    			font-size:12px;
    			background:#ddd;
    			margin-right:.266667rem;
    			margin-bottom:.266667rem;
    			border-radius:3px;
    			color:#444
    		}
    	}
    }
</style>