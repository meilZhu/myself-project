<template>
	<div class="search">
		<basesearch>
		    <i class="iconfont icon-xiangzuo7 go-back" slot='left-operate' @click='goback()'></i>
		    <span slot='right-operate' class='other' @click='goback()'>取消</span>
		</basesearch>
		<basesearchhistory :searchTitle='searchHistoryTitle' :isShowRemove='isShowHistoryRemove' :searchContent='historyContent' v-if='isHistorySearch' :closeDialog='closeDialog' :showDialog='showDialog' :type='closeType'></basesearchhistory>
		<basesearchhistory :searchTitle='searchHotTitle' :isShowRemove='isShowHotRemove' :searchContent='hotContent'></basesearchhistory>
	</div>
</template>

<script>
	export default {
		name: 'search',
		data() {
			return {
				isHistorySearch:true,
				searchHistoryTitle:'最近搜索',
				isShowHistoryRemove: true,
				closeType:'historySearch',
				searchHotTitle:'热门搜索',
				isShowHotRemove:false,
				historyContent:['电水壶','充电宝','你好三公主','电磁炉','笔记本电脑','电水壶','充电宝','你好三公主','电磁炉','笔记本电脑'],
				hotContent:['户外登山鞋','煎饼档','保温壶','折叠床','破壁机','足浴盆木桶','户外登山鞋','煎饼档','保温壶','折叠床','破壁机','足浴盆木桶']
			}
		},
		methods: {
			goback() {
				window.history.go(-1)
			},
			closeDialog(hideType,showType) {
				switch(hideType) {
					case 'historySearch':
					    this.isHistorySearch= false
					    break;
					default:
				}
				this.showDialog(showType)
			},
			showDialog(showType) {
				switch(showType) {
					case 'historySearch':
					    this.isHistorySearch= true
					    break;
					default:
				}
			}
		}
		
	}
</script>

<style lang='scss' scoped>

</style>