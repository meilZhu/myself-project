<template>
	<ul class="basebuybutton">
		<!-- <li class="buy-list buy-change">
			<a href="javascript:;">
				<i class="iconfont icon-duihua btn-icon"></i>
				<span class="btn-text">联系客服</span>
			</a>
		</li>
		<li class="buy-list buy-change">
			<a href="javascript:;">
				<i class="iconfont icon-shouyedianpujishishangcheng btn-icon"></i>
				<span class="btn-text">进店</span>
			</a>
		</li> -->
		<slot></slot>
		<li class="buy-list buy-change">
			<a href="javascript:;" @click='jump()'>
				<i class="iconfont icon-gouwuchekong btn-icon"></i>
				<span class="btn-text">购物车</span>
				<span class="btn-num" v-if='buyNumber'>{{buyNum}}</span>
			</a>
		</li>
		<li class="buy-list buy-join join-cart" @click="joinCart()">加入购物车</li>
		<li class="buy-list buy-join buy-now" @click='buyNow()'>{{buyText}}</li>
	</ul>
</template>

<script>
    import appObj from '../../utils/publicPath'
	export default {
		name: 'basebuybutton',
		data () {
			return {
			    
			}
		},
		props: {
			buyText: {
				type: String,
				default: '立即购买'
			},
			buyNum: {
				type: Number,
				default: 0
			}
		},
		computed: {
            buyNumber () { // 这里利用计算属性，来实时监控购买的数量，并根据它来控制是否显示那个红色的数字提示框
                if (this.buyNum > 0) {
				    return true
				} else {
					return false
				}
			}
		},
		methods: {
            jump () {
				this.$router.push({path: `${appObj.path}cart`})
			},
			joinCart () {
				this.$emit('joinCart')
			},
			buyNow () {
				this.$emit('buyNow')
			}
		},
		mounted () {
            
		}
	}
</script>

<style lang='scss' scoped>
    .basebuybutton {
		width:100%;
		height:1.333333rem;
		display:flex;
		.buy-list {
			flex:1;
		}
		.buy-change {
			max-width:1.4rem;
			&>a {
				display: inline-flex;
				width:100%;
				height:100%;
				flex-direction: column;
				align-items: center;
				justify-content:space-between;
				color:#666;
				position:relative;
				text-decoration:none;
				.btn-icon {
                    font-size:18px;
					margin-top:.2rem;
				}
				.btn-text {
					margin-bottom:.1rem;
				}
				.btn-num {
					position:absolute;
					right:.25rem;
					top:.1rem;
					padding:.03rem;
					background:#f00;
					color:#fff;
					font-size:12px;
					border-radius:5px;
				}
			}
		}
        .buy-join {
			min-width:2.91rem;
			line-height:1.333333rem;
			text-align:center;
			color:#fff;
			font-size:14px;
			font-weight:600;
		}
		.join-cart {
            background:-webkit-linear-gradient(left,#c452e9,#a218e9)
		}
		.buy-now {
			background:-webkit-linear-gradient(left,#fe5771,#f00)
		}
	}
</style>