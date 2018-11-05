<template>
	<div class="wordrotation">
		<img :src="imgSrc" alt="" class="rotation-logo" :data_url='imgSrc' />
		<div class="word-contain">
			<ul class="word-rotation-content">
				<!-- <li class="rotation-list-text" v-for='(item, index) in textData' :key='index'>
					<span>{{item.tips}}</span>{{item.text}}
				</li> -->
				<!-- <li class="rotation-list-img" v-for='(item, index) in textData' :key='index'>
					<img :src="item.src" alt="">{{item.text}}
				</li> -->
				<slot></slot>
			</ul>
		</div>
		<span class="more-info" @click='moreInfo()'>{{more}}</span>
	</div>
</template>

<script>
	export default {
		name: 'wordrotation',
		data () {
			return {
				off_height: 0,
				dom: {},
			    timer1: '',
			    auto: true,
			    slidesLength: 0,
			    activeIndex: 1
			}
		},
		props: {
			imgSrc: {
				type: String,
				default: '//m.360buyimg.com/mobilecms/jfs/t14752/82/2574581467/6535/c8158ace/5aa8935bN94e31ff6.jpg.dpg'
			},
			more: {
				type: String,
				default: '更多'
			},
			interval: { // 多久轮播一次
				type: Number,
				default: 3000
			},
			duration: {
				type: Number,
				default: 350
			}
		},
		mounted () {
			this.className = `wh_swiper_${Math.random().toFixed(3) * 1000}`
            setTimeout(() => {
            	// 克隆dom
            	this.cloneDom()
            	this.dom.transform= `translate3d(0, ${this.off_height * -1}px, 0)`
            	this.dom['-webkit-transform']= `translate3d(0, ${this.off_height * -1}px, 0)`
            	this.dom['-ms-transform']= `translate3d(0, ${this.off_height * -1}px, 0)`
            	this.setTime()
            },50)
		},
		methods: {
			moreInfo () {
                this.$emit('moreInfo')
			},
			cloneDom () {
				var SlideDom= document.querySelector('.word-rotation-content').getElementsByClassName('rotation-list-text').length ? document.querySelector('.word-rotation-content').getElementsByClassName('rotation-list-text') : document.querySelector('.word-rotation-content').getElementsByClassName('rotation-list-img')
				console.log(SlideDom)
				this.slidesLength= SlideDom.length
				if (this.slidesLength > 1) {
					var cloneDom1= SlideDom[0].cloneNode(true)
					var cloneDom2= SlideDom[this.slidesLength - 1].cloneNode(true)
					document.querySelector('.word-rotation-content').insertBefore(cloneDom2, SlideDom[0])
					document.querySelector('.word-rotation-content').appendChild(cloneDom1)
					this.off_height= document.querySelector('.word-contain').offsetHeight
					this.dom= document.querySelector('.word-rotation-content').style
				}
			},
			setTime () {
				this.timer1= window.setTimeout(() => {
					if (this.auto) {
						this.activeIndex++
						this.wh()
					} else {
						window.clearTimeout(this.timer1)
					}
				},this.interval)
			},
			wh () {
				this.dom.transition= this.duration + 'ms'
				this.setTransform(this.activeIndex * -1 * this.off_height)
				this.setTime()
				setTimeout(() => {
					this.dom.transition= '0s'
					if (this.activeIndex >= this.slidesLength + 1) {
						this.activeIndex = 1
						this.setTransform(this.off_height * -1 * this.activeIndex)
					}
					if (this.activeIndex <= 0) {
						this.activeIndex = this.slidesLength
						this.setTransform(this.activeIndex * -1 * this.off_height)
					}
					this.auto= true
				},this.duration)
			},
			setTransform (num) {
				this.dom.transform= `translate3d(0, ${num}px, 0)`
				this.dom['-webkit-transform']= `translate3d(0, ${num}px, 0)`
				this.dom['-ms-transform']= `translate3d(0, ${num}px, 0)`
			},
			clearTimeOut () {
                this.auto = false
                window.clearTimeout(this.timer1)
            }
		}
	}
</script>

<style lang='scss' scoped>
    .wordrotation {
    	width:100%;
    	height:.8rem;
		padding:0 .2rem;
		font-size:12px;
		display:flex;
		flex-wrap:nowrap;
		align-items: center;
		.rotation-logo {
			width:2rem;
			height:.4rem;
		}
		.more-info {
			display: block;
			width:1rem;
			height:100%;
			text-align: center;
			line-height:.8rem;
			margin-left:.2rem;
		}
		.word-contain {
			height:.8rem; 
			flex:1;
		    position:relative;
			overflow: hidden;
			.word-rotation-content {
				-moz-transition-duration: 0s linear;
				-webkit-transition-duration: 0s linear;
				-o-transition-duration: 0s linear;
				transition-duration: 0s linear;
				.rotation-list-text {
					width:100%;
					height:.8rem;
					line-height: .8rem;
					padding:0 .2rem;
					white-space: nowrap;
					text-overflow: ellipsis;
					overflow: hidden;
					&>span {
						color:#f00;
						margin-right:.2rem;
					}
				}
				.rotation-list-img {
					display:flex;
					align-items: center;
					width:100%;
					height:.8rem;
					line-height: .8rem;
					padding:0 .2rem;
					white-space: nowrap;
					text-overflow: ellipsis;
					overflow: hidden;
					&>img {
						width:.8rem;
						height:.8rem;
						margin-right:.2rem;
					}
					
				}
			}
		}
		
    }
</style>