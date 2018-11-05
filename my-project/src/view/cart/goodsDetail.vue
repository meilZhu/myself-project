<template>
	<div class="goods-detail">
		<baseheader class='header' :title='title' :needBorder='headerBorder'>
		    <i class="iconfont icon-xiangzuo7 go-back" slot='left-operate' @click='goback()'></i>
		    <i class="iconfont icon-more other" @click='showList()'></i>
		</baseheader>
		<basejumpicon v-if='isJumpIcon' class='jump-icon'>
			<div class="interface" @click='hideList()'></div>
		</basejumpicon>
		<div class="swiper">
			<baseswiperslider :height='height'>
			    <li class="slider" v-for='(item, index) in goodsImg' :key='index'>  
                    <a href="javascript:;">
						<img :src="item" alt="" :data_url='item'>
					</a>
				</li>
			</baseswiperslider>
			
		</div>
		<basebuybutton @joinCart='joinCart' @buyNow='buyNow' :buyNum='buyNum' class='buy-btn-contain'>
		    <li class="buy-list buy-change" @click='connect()'>
				<a href="javascript:;">
					<i class="iconfont icon-duihua btn-icon"></i>
					<span class="btn-text">联系客服</span>
				</a>
			</li>
			<li class="buy-list buy-change" @click='goStore()'>
				<a href="javascript:;">
					<i class="iconfont icon-shouyedianpujishishangcheng btn-icon"></i>
					<span class="btn-text">进店</span>
				</a>
			</li>
		</basebuybutton>
	</div>
</template>

<script>
    import goods from '../../../static/goodsInfo'
	export default {
		name: 'goodsDetail',
		data () {
			return {
				headerBorder: true,
				height: 10,
				title: '商品详情',
				isJumpIcon: false,
				goodsImg: [],
				buyNum: 0 // 购物按钮中在购物车上的数字
			}
		},
		methods: {
			goback () {
				window.history.go(-1)
			},
			showList () {
				this.showDialog('jumpIcon')
			},
			hideList () {
				this.closeDialog('jumpIcon')
			},
			joinCart () {
				console.log('加入购物车')
				this.buyNum++
				console.log(this.buyNum)
			},
			buyNow () {
				console.log('立即购买')
				this.buyNum--
			},
			connect () {
                console.log('联系客服')
			},
		    goStore () {
                console.log('进入商店')
			},
			closeDialog (hideType,...showType) {
                switch (hideType) {
					case 'jumpIcon' :
						this.isJumpIcon= false
						break
					default:
				}
				showType.map(t => {
					this.showDialog(t)
				})
			},
			showDialog (showType) {
				switch (showType) {
					case 'jumpIcon' :
						this.isJumpIcon= true
						break
					default:
				}
			}
		},
		mounted () {
			let id = this.$route.query.goodsId
			for (let t of goods.goodsDetail) {
				if (t.goodsId == id) {
					this.goodsImg = t.goodsImg
					break
				}
			}
		}
	}
</script>

<style lang='scss' scoped>
    .goods-detail {
    	.header {
    		position:absolute;
    		top:0;
    		left:0;
    		z-index:2;
    	}
    	.jump-icon {
    		position:absolute;
    		top:1.2rem;
			right:.4rem;
			z-index:5;
    	}
    	.swiper {
    		width:100%;
    		padding-top:1.066667rem;
    	}
		.buy-btn-contain {
			position:absolute;
			bottom:0;
			left:0;
			z-index:2;
		}
    }
</style>