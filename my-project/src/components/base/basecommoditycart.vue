<template>
	<div class="cart-contain">
	    <div class="operate-contain">
			<p class="address" @click='chooseAddress()'><i class="iconfont addr-icon icon-dizhi2"></i>{{address}}</p>
			<button class="operate-btn" @click='operateGoods()'>{{operateText}}</button>
		</div>
		<ul class="cart-goods-contain">
			<li class="cart-goods-content" v-for='(item, index) in cartData' :key='index'>
				<slot></slot>
				<div class="goods-content">
					<div class="choice-box">
						<i v-if='!item.goodsSelected' class="icon-choose" @click='radios(index)'></i>
						<i v-if='item.goodsSelected' class="iconfont icon-choosed" @click='radios(index)'></i>
					</div>
					<img src="../../assets/img/logo.png" alt="" class="goods-img" :data_url='item.goodsImg'>
					<div class="goods-detail">
						<p class="goods-name">{{item.goodsName}}</p>
						<p class="goods-brand">{{item.goodsBrand}}</p>
						<div class="goods-price-content">
							<p class="goods-price"><span>￥ </span>{{item.goodsPrice}}</p>
							<div class="operate-content">
								<button class="minus" @click='munis(index)'>-</button>
								<input type="text" v-model='item.goodsNumber' class="number" disabled>
								<button class="plus" @click='plus(index)'>+</button>
							</div>
						</div>
					</div>
				</div>
				<slot></slot>
			</li>
		</ul>
		<basetips v-if='isTips' :tipsType='tipsType' :tipsContent="tipsContent"></basetips>
	</div>
</template>

<script>
    import goods from '../../../static/goodsInfo'
    import bus from '../../utils/bus'
	export default {
		name: 'commoditycart',
		data () {
			return {
				isTips: false,
				address: '选择配送地址',
				operateText: '编辑商品',
				isOperateGoods: true,
				tipsType: 'tips',
				tipsContent: '最少1件起售',
				cartData: goods.goodsCart,
				allPrice: 0
			}
		},
		methods: {
			chooseAddress () {
                console.log('选择配送地址')
			},
			operateGoods () {
                if (this.isOperateGoods) {
					this.operateText='完成'
					this.isOperateGoods= !this.isOperateGoods
					bus.$emit('change') // 控制的是 basebalancebutton 基础组件中的方法
				} else {
					this.operateText='编辑商品'
					this.isOperateGoods= !this.isOperateGoods
					bus.$emit('change')
				}
			},
			radios (index) {
				let list=this.cartData
				for (let i=0; i<list.length; i++) {
                    if (index == i) {
                        list[i].goodsSelected= !list[i].goodsSelected
					} 
				}
				this.count()
			}, 
			munis (index) {
				let list= this.cartData
				for (let i=0; i<list.length; i++) {
                    if (index == i) {
						if (list[i].goodsNumber > 1) {
							list[i].goodsNumber--
						} else {
                            this.isTips=true
							setTimeout(() => {
								this.isTips=false
							},1200)
						}
					}
				}
				this.count()
			},
			plus (index) {
                let list= this.cartData
				for (let i=0; i<list.length; i++) {
                    if (index == i) {
						list[i].goodsNumber++
					}
				}
				this.count()
			},
            count () {
				let list= this.cartData
				let	price=0
				let num=0
				for (let t of list) {
                    if (t.goodsSelected) {
						price += Number(t.goodsNumber) * Number(t.goodsPrice)
						num += Number(t.goodsNumber)
					}
				}
				if (list.every(t => t.goodsSelected)) {
                    bus.$emit('radios',true,price,num)
				} else {
					bus.$emit('radios',false,price,num)
				}
			}
		},
		created () {
            bus.$on('radiosAll',(boolean) => {
				let list=this.cartData
				if (boolean) {
					for (let t of list) {
                        t.goodsSelected= true
					}
					this.count()
				} else {
                    for (let t of list) {
                        t.goodsSelected= false
					}
					this.count()
				}
			})
		},
		breforeDestroy () {
			bus.$off('radiosAll')
		}
	}
</script>

<style lang= 'scss' scoped>
    .cart-contain {
    	width:100%;
        .operate-contain {
			width:100%;
			padding:0 .2rem;
			height:1.2rem;
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size:14px;
			color:#666;
			border-bottom:.01rem solid #eee;
			.address {
				&>i {
					margin-right:.1rem;
				}
			}
			.operate-btn {
				color:#f00;
				background:#fff;
			}
		}
		.cart-goods-contain {
			width:100%;
			padding:.1rem .2rem .4rem;
			.cart-goods-content {
				width:100%;
				.goods-content {
					width:100%;
					display: flex;
					align-items: center;
					padding:.2rem 0;
                    .choice-box {
						width:.866667rem;
						margin-right:.3rem;
						.icon-choose {
							display:inline-block;
							width:.533333rem;
							height:.533333rem;
							font-size:20px;
							border-radius:50%;
							border: .02rem solid #666;
							margin:.2rem 0 0;
							position:relative;
						}
						.icon-choosed {
							display:inline-block;
							width:.533333rem;
							height:.533333rem;
							font-size:20px;
							border-radius:50%;
							margin:.2rem 0 0;
							position:relative;
						}
						.icon-choosed:before {
							content:'\e606';
							display:inline-block;
							width:.533333rem;
							height:.533333rem;
							font-size:18px;
							border-radius:50%;
							color:#fff;
							background:#f00;
							position:absolute;
							top:-.02rem;
							left:-.02rem;
						}
					}
					.goods-img {
						width:2rem;
						height:2rem;
						margin-right:.4rem;
					}
					.goods-detail {
						flex:1;
						.goods-name {
							width:100%;
							font-size:15px;
							overflow:hidden;
							text-overflow:ellipsis;
							display:-webkit-box;
							-webkit-box-orient:vertical;
							-webkit-line-clamp:2;
							margin-bottom:.1rem
						}
						.goods-brand {
							font-size:14px;
							color:#999;
							margin-bottom:.1rem;
						}
						.goods-price-content {
							display:flex;
							justify-content: space-between;
                            .goods-price {
								font-size:16px;
								color:#f00;
								&>span {
									font-size:12px;
								}
							}
							.operate-content {
								display: flex;
								align-items: center;
								.minus,.plus {
									width:.533333rem;
									height:.533333rem;
									font-size:20px;
									line-height:.533333rem;
									color:#666;
								}
								.minus-no {			
									color:#ccc;
									background:#eee;
								}
								.number {
									width:1rem;
									height:.533333rem;
									text-align: center;
									background:#fff;
								}
							}
						}
					}
				}
			}
		}
    }
</style>