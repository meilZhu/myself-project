<template>
	<ul class="goods-contain">
		<!--<li class="goods-list" v-for='(item, index) in goodsData' :key='index' @click='jumpDetail(item.goodsId)'>
			<img src="../assets/img/logo.png" alt="" :data_url='item.goodsSrc'>
			<p class="goods-name">{{item.goodsName}}</p>
			<p class="goods-price">￥ {{item.goodsPrice}}</p>
		</li>-->
		<slot></slot>
	</ul>
</template>

<script>
	export default {
		name: 'portraitexhibition',
		data () {
			return {
				
			}
		}
	}
</script>

<style lang='scss' scoped>
	.goods-contain {
		width:100%;
		padding:.4rem .2rem;
		display: flex;
		flex-wrap: wrap;
		.goods-list {
			width:4.733333rem;
			padding:.2rem;
			.goods-img {
				width:100%;
				height:4.333333rem;
			}
            .goods-name {
				width:100%;
				font-size:14px;
				padding:.2rem ;
				height:.8rem;
				text-align:center;
				line-height:.4rem;
				text-overflow: ellipsis;
				overflow: hidden;
			    white-space: nowrap;
			}
			.goods-price {
				width:100%;
				font-size:14px;
				color:#f00;
			}
		}
	}
</style>