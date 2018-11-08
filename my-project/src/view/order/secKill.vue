<template>
	<div class="second-kill">
	  	<baseheader :title='"限时秒杀"' :needBorder="true">
		    <i class="iconfont icon-xiangzuo7 go-back" slot='left-operate' @click='goback()'></i>
		    <i class="iconfont icon-more other" @click='showList()'></i>
		</baseheader>
		<basejumpicon class='jump-icon' v-if='isJumpIcon'>
		    <div class="interface" @click='hideList()'></div>
		</basejumpicon>
		<ul class="seckill-btn-contain" ref='killBtn'>
            <li :class="index == btnIndex ?'kill-btn-active' : 'kill-btn'" v-for='(item, index) in btnData' :key='index' @click='changeKill(index)'><span>{{item.time}}</span><em>{{item.desc}}</em></li>
		</ul>
		<div class="goods-contain" ref='goodsContain'>
            <ul class="goods-content">
				<li class="goods-list" v-for='(item, index) in goodsData' :key='index' @click='getDetail(item.goodsId)'>
					<img src="../../assets/img/logo.png" alt="" :data_url='item.goodsImg' class="goods-img">
					<div class="goods-detail">
						<p class="goods-name">{{item.goodsName}}</p>
						<div class="price-contain">
							<p class="kill-price"><span></span><button class='kill-btn'>{{btnDesc}}</button></p>
							<h1 class="original-price"><span></span><p class="has-kill"><em></em></p></h1>
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
	export default {
		name: 'seckill',
		data () {
			return {
				isJumpIcon: false,
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
				}],
				btnIndex: 0,
				goodsData: goods.goodsSecond,
				btnDesc: '立即抢购'
			}
		},
		mounted () {
            this.scroll()
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
                this.btnIndex= index  
			},
			scroll () {
				let _this=this
				let dom= this.$refs.killBtn
				let h= dom.offsetTop
				let content = this.$refs.goodsContain
                window.onscroll=function () {
					let t= document.documentElement.scrollTop || document.body.scrollTop
					if (t >= h) {
						content.style.marginTop= dom.offsetHeight +'px'
						dom.style.position='fixed'
						dom.style.top='0'
						dom.style.left='0'
						dom.style.right='0'
					} else {
						dom.style.position= 'static'
						content.style.marginTop='0'
					}
				}
			},
			closeDialog (hideType,...showType) {
                switch (hideType) {
					case 'jumpIcon':
						this.isJumpIcon=false
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
		.seckill-btn-contain {
			width:100%;
			height:1.333333rem;
			background:#333;
			display:flex;
			.kill-btn {
				flex:1;
				color:#999;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				font-size:12px;
				&>span {
					font-size:18px;
				}
			}
			.kill-btn-active {
				flex:1;
				color:#fff;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				font-size:12px;
				background:#e93536;
				&>span {
					font-size:18px;
				}
			}
		}
		.goods-contain {
			height:2000px;
		}
	}
</style>