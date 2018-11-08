<template>
	<div class="cart-empty">
		<div class="empty-content">
			<img src="../../assets/img/cart.png" alt="" class="cart-img" :data_url='cart'>
			<p class="empty-cart-text">购物车空空如也，去逛逛吧~~</p>
		</div>
		<!-- <basetitletips></basetitletips>
		<basegoodstransverseexhibition>
		    <li class="goods-list" v-for='(item, index) in goodsData' :key='index' @click='jumpSeckill(item.goodsId)'>
                <img src="../../assets/img/logo.png" alt="" class="goods-img" :data_url='item.goodsImg'>
				<p class="goods-name">{{item.goodsName}}</p>
				<p class="goods-price">￥ {{item.goodsPrice}}</p>
			</li>
		</basegoodstransverseexhibition> -->
		<slot></slot>
	</div>
</template>

<script>
    import cartImg from '../../assets/img/cart.png'
	export default {
		name: 'emptycart',
		data () {
			return {
				cart: cartImg
			}
		},
		methods: {
			
		}
	}
</script>

<style lang='scss' scoped>
	.cart-empty {
		width:100%;
		background:#f2f2f2;
		.empty-content {
			width:100%;
			padding:.8rem 0 .4rem;
			display: flex;
			flex-direction: column;
			align-items: center;
			.cart-img {
				width:2.4rem;
				height:2.4rem;
			}
			.empty-cart-text {
				width:100%;
				margin:.3rem 0 .2rem;
				font-size:16px;
				color:#666;
				text-align:center;
			}
		}
	}
</style>