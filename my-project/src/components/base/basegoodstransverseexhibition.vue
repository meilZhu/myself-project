<template>
	<div class="transverse-exhibition">
		<ul class="content">
			<!--<li class="goods-list" v-for='item in exhibitionData' :key='item'>
				<span class="goods-brand"></span>
				<img :src="item.img" alt="" class="goods-img">
                <p class="goods-name">{{item.name}}</p>
				<p class="goods-price">￥{{item.price}}</p>
			</li>-->
			<slot></slot>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'exhibition',
		data () {
			return {
               
			}
		},
		props: {
			
		}
	}
</script>

<style lang='scss' scoped>
    .transverse-exhibition {
		min-width:100%;
		overflow-x:auto;
		padding:.2rem 0;
		background: #fff;
		.content {
			padding:0 0 .133333rem;
			display: flex; 
			.goods-list {
				padding:0 .1rem;
				position:relative;
				.goods-img {
					width:2.8rem;
					height:2.8rem;
				}
				.goods-name {
					width:2.8rem;
					padding:.2rem .1rem 0;
					font-size:12px;
					overflow:hidden; 
					text-overflow:ellipsis;
					white-space: nowrap;
				}
				.goods-price {
					font-size:14px;
					color:#f00;
					padding:.13333rem 0;
				}
			}
			.goods-list:first-child {
				padding-left:.2rem;
			}
			.goods-list:last-child {
				padding-right:.2rem;
			}
		}
	}
	.transverse-exhibition::-webkit-scrollbar {
		display: none;
	}
</style>