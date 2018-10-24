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
	export default {
		name: 'searchhistory',
		data () {
			return {
				
			}
		},
		props:['searchTitle', 'isShowRemove','searchContent','closeDialog','showDialog','type'],
		methods: {
			removeSearch() {
				//需要请调取接口
				this.closeDialog(this.type)
			},
			search(ele) {
				console.log(ele)
				//这里再次调取搜索接口
			}
		}
	}
</script>

<style lang='scss' scoped>
    .search-history {
    	width:100%;
    	padding:.2rem .2rem 0.4rem;
    	.search-box {
    		width:100%;
    		height:.45rem;
    		display: flex;
    		justify-content: space-between;
    		line-height:.45rem;
    		font-size:.3rem;
    		margin-bottom:.1rem;
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
    			padding:.08rem .2rem;
    			font-size:.24rem;
    			background:#ddd;
    			margin-right:.2rem;
    			margin-bottom:.2rem;
    			border-radius:3px;
    			color:#444
    		}
    	}
    }
</style>