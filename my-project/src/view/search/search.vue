<template>
	<div class="search">
		<basesearch :isJump='isJump' :closeDialog='closeDialog' :showDialog='showDialog'>
		    <i class="iconfont icon-xiangzuo7 go-back" slot='left-operate' @click='goback()'></i>
		    <span slot='right-operate' class='other' @click='goback()'>取消</span>
		</basesearch>
		<basesearchhistory v-if='isHistorySearch' :searchTitle='searchHistoryTitle' :isShowRemove='isShowHistoryRemove' :searchContent='historyContent' :closeDialog='closeDialog' :showDialog='showDialog' :type='closeType'></basesearchhistory>
		<basesearchhistory v-if='isHotSearch' :searchTitle='searchHotTitle' :isShowRemove='isShowHotRemove' :searchContent='hotContent'></basesearchhistory>
	    <baserelatedsearch v-if='isRelatedSearch'></baserelatedsearch>
	</div>
</template>

<script>
	export default {
		name: 'search',
		data() {
			return {
				isJump:false,
				isHistorySearch:true,
				isHotSearch:true,
				isRelatedSearch:false,
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
			closeDialog(hideType,...showType) {
				switch(hideType) {
					case 'historySearch':
					    this.isHistorySearch= false
					    break;
					case 'hotSearch':
					    this.isHotSearch= false
					    break;
					case 'relatedSearch':
					    this.isRelatedSearch= false
					    break;
					default:
				}
				showType.map(t=> {
					this.showDialog(t)
				})
				
			},
			showDialog(showType) {
				switch(showType) {
					case 'historySearch':
					    this.isHistorySearch= true
					    break;
					case 'hotSearch':
					    this.isHotSearch= true
					    break;
					case 'relatedSearch':
					    this.isRelatedSearch= true
					    break;
					default:
				}
			}
		}
		
	}
</script>

<style lang='scss' scoped>

</style>