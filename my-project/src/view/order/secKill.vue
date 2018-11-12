<template>
	<div class="second-kill">
		<baseheader :title='"限时秒杀"' :needBorder="true">
			<i class="iconfont icon-xiangzuo7 go-back" slot='left-operate' @click='goback()'></i>
			<i class="iconfont icon-more other" @click='showList()'></i>
		</baseheader>
		<basejumpicon class='jump-icon' v-if='isJumpIcon'>
			<div class="interface" @click='hideList()'></div>
		</basejumpicon>
		<basekillnav :btnData='btnData' class='killBtn' @changeKill='changeKill'></basekillnav>
		<basescrolltop class='scrollTop' :closeDialog='closeDialog' v-if='isScrollTop'></basescrolltop>
		<div class="goods-contain" ref='goodsContain'>
			<h1 class="goods-title"><span>{{killTitle}}</span><p if='isCountTime'>距开始 <i>{{hour}}</i>:<i>{{minute}}</i>:<i>{{second}}</i></p></h1>
			<ul class="goods-content">
				<li class="goods-list" v-for='(item, index) in goodsData' :key='index' @click='getDetail(item.goodsId)'>
					<img src="../../assets/img/logo.png" alt="" :data_url='item.goodsImg' class="goods-img">
					<div class="goods-detail">
						<p class="goods-name">{{item.goodsName}}</p>
						<div class="price-contain">
							<p class="kill-price"> <span>￥<strong>{{item.goodsPrice | toNumber}}</strong></span><button class='kill-btn'>{{btnDesc}}</button></p>
							<h1 class="original-price"><del>￥ 188.90</del> <p class="has-kill">已售 {{20/53 | percent}} <span><em :style="'width:' + 20/53*100 + '%'"></em></span></p></h1>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import appObj from '../../utils/publicPath' 
	import goods from '../../../static/goodsInfo'
	import lazyLoadImg from '../../utils/lazyLoading'
	export default {
		name: 'seckill',
		data () {
			return {
				isJumpIcon: false,
				isScrollTop: false,
				isCountTime: true,
				killTitle: '抢购中 先下单先的哦',
				hour: '08',
				minute: '34',
				second: '34',
				btnData: [{
					time: '08:00',
					desc: '已结束'
				},{
					time: '10:00',
					desc: '已抢购'
				},{
					time: '12:00',
					desc: '抢购中'
				},{
					time: '14:00',
					desc: '预浏览'
				},{
					time: '16:00',
					desc: '即将抢购'
				},{
					time: '18:00',
					desc: '即将抢购'
				},{
					time: '20:00',
					desc: '即将抢购'
				}],
				goodsData: goods.goodsSecond,
				btnDesc: '立即抢购',
				percent: 0,
				width: 0
			}
		},
		mounted () {
			lazyLoadImg()
			this.scroll()
			this.countDown()
		},
		filters: {
            toNumber: function (num) {
                return Number(num).toFixed(2)
			},
			percent: function (num) {
                return (Number(num)*100).toFixed(0)+'%'
			}
		},
		methods: {
			goback () {
                window.history.back(-1)
			},
			showList () {
                this.showDialog('jumpIcon')
			},
			hideList () {
                this.closeDialog('jumpIcon')
			},
			changeKill (index) {
                console.log(index)
			},
			getDetail (id) {
                this.$router.push({path: `${appObj.path}goodsDetail`,query: {goodsId: id}})
			},
			scroll () {
				let _this=this
				let dom= document.querySelector('.killBtn')
				let h= dom.offsetTop
				let content = this.$refs.goodsContain
                window.onscroll=function () {
					lazyLoadImg()
					let t= document.documentElement.scrollTop || document.body.scrollTop
					if (t >= h) {
						content.style.marginTop= dom.offsetHeight +'px'
						dom.style.position='fixed'
						dom.style.top='0'
						dom.style.left='0'
						dom.style.right='0'
						dom.style.zIndex=5
					} else {
						dom.style.position= 'static'
						content.style.marginTop='0'
					}
					if (t>document.documentElement.clientHeight || t > document.body.clientHeight) {
						_this.showDialog('scrollTop')
					} else {
						_this.closeDialog('scrollTop')
					}
				}
			},
			countDown (time) {
				let _this=this
				let origin = new Date(2018,10,13).getTime()
				let timer= setInterval(() => {
					let now =new Date().getTime()
					let t= origin - now
					if (t <= 0) {
						clearInterval(timer)
						_this.isCountTime= false
					}
                    // 计算剩余多少天
					let d= Math.floor(t/(24*3600*1000))
					let timeH= t % (24*3600*1000)
                    // 计算剩余多少小时
					let h= Math.floor(timeH/(3600*1000))
					let timeM= timeH % (3600*1000)
                    // 计算剩余多少分钟
					let m= Math.floor(timeM /(60*1000))
					let timeS=timeM % (60 * 1000)
                    // 计算剩余多少秒
					let s= Math.floor(timeS/1000)

					_this.hour=_this.scale(h)
					_this.minute= _this.scale(m)
					_this.second= _this.scale(s)
				},1000)
			},
			scale (n) {
				if (n >= 10) {
					return n
				} else {
					return '0' + n
				}
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
				showType.map(t => {
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
			}
		}
	}
</script>

<style lang='scss' scoped>
    .second-kill {
		width:100%;
		.jump-icon {
			position:absolute;
			top:1.2rem;
			right:.4rem;
			z-index:5;
		}
		.goods-contain {
			width:100%;
			.goods-title {
				width:100%;
				padding:0 .25rem;
				height:1.066667rem;
				display: flex;
				justify-content: space-between;
				align-items: center;
				&>p {
					&> i {
						padding:.02rem .06rem;
						background:#fc0;
						margin:0 .05rem;
						border-radius:5px;
					}
				}
			}
			.goods-content {
				width:100%;	
				padding-bottom:.8rem;
				.goods-list {
					width:100%;
					margin:.1rem 0;
					display: flex;
					.goods-img {
						width:3.333333rem;
						height:3.333333rem;
					}
					.goods-detail {
						flex:1;
						display: flex;
						padding:0 .3rem;
						flex-direction: column;
						justify-content: space-between;
						.goods-name {
							margin-top:.1rem;
							font-size:14px;
							width:100%;
							overflow: hidden;
							text-overflow: ellipsis;
							display: -webkit-box;
							-webkit-box-orient:vertical;
							-webkit-line-clamp:2
						}
						.price-contain {
							width:100%;
							.kill-price {
								font-size:12px;
								color:#e93b3d;
								display: flex;
								justify-content: space-between;
								align-items:flex-end;
								margin-bottom:.1rem;
								&>span {
									&>strong {
										font-size:16px;
									}	
								}
								.kill-btn {
									width:2.133333rem;
									height:.666667rem;
									border-radius:2px;
									background:#e93b3d;
									color:#FFF;
								}
							}
							.original-price {
								width:100%;
								display:flex;
								justify-content: space-between;
								align-items: cenetr;
								color:#999;
								.has-kill {
									&>span {
										display:inline-block;
										width:2.133333rem;
										height:.16rem;
										border:#e93b3d .01rem solid;
										position:relative;
										&>em {
											display: inline-block;
											height:100%;
											background:#e93b3d;
											position:absolute;
											top:0;
											left:0;
										}
									}
								}
							}
						}
					}
				}
			}
		}
		.scrollTop {
			position:fixed;
			bottom:2rem;
			right:.8rem;
		}
		
	}
</style>