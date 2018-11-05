<template>
	<div class="index">
		<baseindexsearch :isNeedLogin='isNeedLogin' class='base-search'></baseindexsearch>
		<baseswiperslider class='swiper-contain' :height='4'>
		    <li class="slider" v-for='(item, index) in sliderData' :key='index'>
				<a :href="item.href">
					<img src="../assets/img/logo.png" alt="" class="swiper-img" :data_url='item.src'>
				</a>
			</li>
		</baseswiperslider>
		<basecircleicon>
		    <li class="icon-list" v-for='(icon, index) in iconData' :key='index'>
				<a :href="icon.href">
					<img src="../assets/img/logo.png" alt="" :data_url="icon.src"/>
					<p>{{icon.name}}</p>
				</a>
			</li>
		</basecircleicon>
		<basewordrotation>
		    <li class="rotation-list-text" v-for='(item, index) in wordData' :key='index'>
                <span>{{item.tips}}</span>{{item.text}}
			</li>
		</basewordrotation>
		<ul class="goods-contain">
			<li class="goods-list" v-for='(item, index) in goodsData' :key='index' @click='jumpDetail(item.goodsId)'>
				<img src="../assets/img/logo.png" alt="" :data_url='item.goodsSrc'>
				<p class="goods-name">{{item.goodsName}}</p>
				<p class="goods-price">￥ {{item.goodsPrice}}</p>
			</li>
		</ul>
		<basescrolltop class='scroll' v-show='isScrollTop' :closeDialog='closeDialog' :showDialog='showDialog'></basescrolltop>
	</div>
</template>

<script>
	import appObj from '../utils/publicPath'
	import goods from '../../static/goodsInfo'
    import lazyLoadImg from '../utils/lazyLoading'
	export default {
		name: 'index',
		data () {
			return {
				isNeedLogin: true,
				isScrollTop: false,
				sliderData: [{
						href: '',
						src: '//img11.360buyimg.com/mcoss/jfs/t14983/111/284200903/54357/6001c9ac/5a28f3a9Na23c9e4f.jpg'
					},{
						href: '',
						src: '//img11.360buyimg.com/mcoss/jfs/t15421/47/293004734/40519/28d550fb/5a28f4faNec3688d3.jpg'
					},{
						href: '',
						src: '//img30.360buyimg.com/mcoss/jfs/t13219/268/1743066918/91817/3175b47d/5a28ede8Nea02839c.jpg'
					}],
				iconData: [{
						href: '',
						src: '//m.360buyimg.com/mobilecms/jfs/t25534/207/1767774998/8085/523157d6/5bbc800fN502129b8.png.webp',
						name: '自己超市'
					},{
						href: '',
						src: '//m.360buyimg.com/mobilecms/jfs/t21658/347/221358098/7461/f86e6f74/5b03b170Nc9e0ec7c.png.webp',
						name: '全球购'
					},{
						href: '',
						src: '//m.360buyimg.com/mobilecms/jfs/t18865/90/1804471517/14538/72c79ba/5ad87b67N1ebcb69b.png.webp',
						name: '你的服饰'
					},{
						href: '',
						src: '//m.360buyimg.com/mobilecms/jfs/t17725/156/1767366877/17404/f45d418b/5ad87bf0N66c5db7c.png.webp',
						name: '食品生鲜'
					},{
						href: '',
						src: '//m.360buyimg.com/mobilecms/jfs/t16990/157/2001547525/17770/a7b93378/5ae01befN2494769f.png.webp',
						name: '服务到家'
					},{
						href: '',
						src: '//m.360buyimg.com/mobilecms/jfs/t18454/342/2607665324/6406/273daced/5b03b74eN3541598d.png.webp',
						name: '充值缴纳'
					},{
						href: '',
						src: '//m.360buyimg.com/mobilecms/jfs/t22228/270/207441984/11564/88140ab7/5b03fae3N67f78fe3.png.webp',
						name: '9.9元拼购'
					},{
						href: '',
						src: '//m.360buyimg.com/mobilecms/jfs/t19495/200/1823004232/14065/ca00ab2c/5ad87cf5N4ad8e6f1.png.webp',
						name: '领券'
					},{
						href: '',
						src: '//m.360buyimg.com/mobilecms/jfs/t16828/63/2653634926/5662/d18f6fa1/5b03b779N5c0b196f.png.webp',
						name: '赚钱'
					},{
						href: '',
						src: '//m.360buyimg.com/mobilecms/jfs/t21481/263/412160889/15938/4246b4f8/5b0cea29N8fb2865f.png.webp',
						name: '全部'
					}],
				wordData: [{
						tips: 'HOT',
						text: '恭喜下恭喜恭喜恭喜恭喜恭喜恭喜恭喜恭喜恭喜恭喜恭喜恭喜恭喜恭喜'
					},{
						tips: '热销',
						text: '你说什么恭喜恭喜恭喜恭喜恭喜恭喜恭喜恭喜恭喜恭喜恭喜恭喜恭喜恭喜恭喜'
					},{
						tips: '热点',
						text: '服务到家服务到家服务到家服务到家服务到家'
					}],
				goodsData: goods.goodsList
			}
		},
		methods: {
            scroll () {
				window.onscroll =function () {
					lazyLoadImg()
					let t = document.documentElement.scrollTop || document.body.scrollTop
					let h = document.documentElement.clientHeight || document.body.clientHeight
					if (t >= h) {
						console.log('出现')
						this.showDialog('scrollTop')
					}
				}
			},
			jumpDetail (val) {
				console.log(val)
				this.$router.push({path: `${appObj.path}goodsDetail`, query: {goodsId: val}})
			},
			closeDialog (hideType,...showType) {
				switch (hideType) {
					case 'scrollTop':
						this.isScrollTop= false
						break
				    default:
				}
				showType.map(t => {
					this.showDialog(t)
				})
			},
			showDialog (showType) {
				switch (showType) {
					case 'scrollTop':
						this.isScrollTop= true
						break
				    default:
				}
			}
		},
		mounted () {
            let params= {
				activityId: '2442'
			}
			this.$store.dispatch('GetPlaceholder',params)
			lazyLoadImg()
			this.scroll()
		}
		
	}
</script>

<style lang='scss' scoped>
    .index {
		position:relative;
    	width:100%;
		padding-top:1.173333rem;
		padding-bottom:1.173333rem;
		.base-search {
			position:absolute;
			top:0;
		}
        .swiper-contain {
			width:100%;
			a {
                width:100%;
				height:100%;
				&>img {
					width:100%;
					height:100%;
				}
			}
		}
		.goods-contain {
			width:100%;
			padding:.4rem .2rem;
			display: flex;
			flex-wrap: wrap;
			.goods-list {
				width:4.733333rem;
				padding:.2rem;
				&>img {
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
		.scroll {
			position:fixed;
			right:.8rem;
			bottom:2rem;
		}
    }
</style>