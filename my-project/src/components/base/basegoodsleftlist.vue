<template>
	<ul class="left-goods-list">
		<li class="goods-list" v-for='item in goodsData' :key='item' @click='searchDetail(item)'>{{item}}</li>
	</ul>
</template>

<script>
	import bus from '../../utils/bus'
	export default {
		name: 'leftgoodslist',
		data () {
			return {
				goodsData: ['汽车用品','床上用品', '洗漱用品', '男装', '女装', '户外运动', '食品生鲜', '酒水饮料', '宠物生活', '全球购', '二手商品', '艺术邮票', '奢侈品', '生活旅行', '礼品鲜花']
			}
		},
		methods: {
			searchDetail (val) {
				console.log(val)
				bus.$emit('fetchGoodsList',val)
			}
		},
		mounted () {
			// 注意此处的初始化一定要比bus.$on初始化晚，因为只有先定义方法，才能调用
			// 一进来就调取获取以及商品列表的接口，初始化一级商品列表
			// 在获取、初始化一级商品列表之后，在 用 bus.$emit('fetchGoodsList','默认值') 来初始化二级商品列表
			bus.$emit('fetchGoodsList','初始化')
		}
	}
</script>

<style lang='scss' scoped>
    .left-goods-list {
		width:2.266667rem;
		height:100%;
		.goods-list {
			width:100%;
			height:1.226667rem;
			text-align: center;
			line-height:1.226667rem;
			font-size:14px;
		}
		.goods-list:hover {
			color:#E81B20;
		}
    }
</style>