<template>
	<div class="cart">
		<basetips v-if='isTips' :cancelFn='cancelFn' :sureFn='sureFn' :tipsType='tipsType' :tipsContent='tipsContent' :needCancelBtn='needCancelBtn'></basetips>
		<baseheader :title='title' :needBorder='needBorder'>
		    <i class="iconfont icon-xiangzuo7 go-back" slot='left-operate' @click='goback()'></i>
		    <i class="iconfont icon-more other" @click='showList()'></i>
		</baseheader>
		<basejumpicon v-if='isJumpIcon' class='jump-icon'>
		    <div class="interface" @click='hideList()'></div>
		</basejumpicon>
		<basebalancebutton class='balance-btn' v-if='isBalanceBtn'></basebalancebutton>
        <baseemptycart  v-if='!isBalanceBtn'></baseemptycart>
		<basecommoditycart v-if='isBalanceBtn'></basecommoditycart>
	    <basetitletips :tipsTitle="'你可能喜欢的'"></basetitletips>
		<basegoodsportraitexhibition>
		    <li class="goods-list" v-for='(item, index) in relatedData' :key='index' @click='jumpDetail(item.goodsId)'>
				<img src="../../assets/img/logo.png" alt="" class='goods-img' :data_url='item.goodsSrc'>
				<p class="goods-name">{{item.goodsName}}</p>
				<p class="goods-price">￥ {{item.goodsPrice}}</p>
			</li>
		</basegoodsportraitexhibition>
		<basescrolltop class='scroll-top' v-if='isScrollTop' :closeDialog='closeDialog' :showDialog='showDialog'></basescrolltop>
	</div>
</template>

<script>
	import goods from '../../../static/goodsInfo'
	import lazyLoadImg from '../../utils/lazyLoading'
	import appObj from '../../utils/publicPath'
	export default {
		name: 'cart',
		data () {
			return {
				isTips: false,
				isBalanceBtn: true,
				isScrollTop: false,
				title: '购物车',
				needBorder: true,
				tipsType: 'right',
				tipsContent: '提示框提示框提示框提示框提示框提示框提示框提示框',
				needCancelBtn: true,
				isJumpIcon: false,
				relatedData: goods.goodsList
			}
		},
		mounted () {
			lazyLoadImg()
			this.scroll()
		},
		methods: {
			scroll () {
				let _this=this
				window.onscroll= function () {
					lazyLoadImg()
					let t = document.documentElement.scrollTop || document.body.scrollTop
					let h = document.documentElement.clientHeight || document.body.clientHeight
					if (t >= h) {
						// console.log('出现')
						_this.showDialog('scrollTop')
					}
					if (t < 200) {
						// console.log('xiaoshi')
						_this.closeDialog('scrollTop')
					}
				}
			},
			jumpDetail (id) {
                this.$router.push({path: `${appObj.path}goodsDetail`,query: {goodsId: id}})
			},
			closeDialog (hideType,...showType) {
                switch (hideType) {
					case 'jumpIcon':
						this.isJumpIcon=false
						break
					case 'scrollTop':
						this.isScrollTop= false
						break
				    default:
				}
				showType.map((t) => {
					this.showDialog(t)
				})
			},
			showDialog (showType) {
                switch (showType) {
					case 'jumpIcon':
						this.isJumpIcon= true
						break
					case 'scrollTop':
						this.isScrollTop= true
						break
					default:
				}
			},
            cancelFn () {
                console.log('取消')
			},
			sureFn () {
                console.log('确定')
			},
            goback () {
				window.history.go(-1)
			},
			showList () {
                this.showDialog('jumpIcon')
			},
			hideList () {
				this.closeDialog('jumpIcon')
			}
		}
	}
</script>

<style lang='scss' scoped>
    .cart {
		padding-bottom: 1.173333rem;
		.jump-icon {
			position:absolute;
			top:1.2rem;
			right:.4rem;
			z-index:5;
		}
		.goods-brand {
			display:inline-block;
			width:.8rem;
			height:.8rem;
			background:#f00;
		}
		.balance-btn {
			position:fixed;
			bottom:0;
			left:0;
			z-index:2
		}
		.scroll-top {
			position:fixed;
			bottom:2rem;
			right:.8rem;
		}
	}
</style>