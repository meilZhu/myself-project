<template>
	<section class="baseswiperslider" @touchmove="fn" :style="{height:this.height + 'rem'}">
		<div :class='className' :style="{height:this.height + 'rem'}" class="swiper-content" @touchstart='moveStart($event)' @touchmove='move($event)' @touchend='moveEnd($event)'>
			<slot></slot>
		</div>
		<div class="pagination" v-if='showIndicator'>
			<div :class="index-1 == $index ? 'pagination_active' : 'pagination_item'" v-for='(tag,$index) in slidesLength' :key='$index' @click='slideTo($index)'></div>
		</div>
	</section>
</template>

<script>
	export default {
		name: 'baseswiperslider',
		data () {
			return {
				className: '',
				slidesLength: 1,
				off_width: 0,
				auto: true,
				slideing: true,
				timer1: '',
				dom: {},
				t: {
				    sx: 0,
				    s: 0,
				    m: 0,
				    e: 0
				},
				index: 1 // 当前页面所在的下标
			}
		},
		props: {
			autoPlay: { // 是否轮番播放
				type: Boolean,
				default: true
			},
			duration: { // 每页滚动的时间
				type: Number,
				default: 500
			},
			interval: { // 多久轮播滚动一次
				type: Number,
				default: 2500
			},
			showIndicator: { // 是否显示轮播的那个点
				type: Boolean,
				default: true
			},
			height: {
				type: Number,
				default: 4
			}
		},
		mounted () {
            this.className = `wh_swiper_${Math.random().toFixed(3) * 1000}`
            setTimeout(() => {
                // 克隆dom
                this.starDom()
                this.dom.transform = `translate3d(${this.off_width * -1}px, 0px, 0px)`
                this.dom['-webkit-transform'] = `translate3d(${this.off_width * -1}px, 0px, 0px)`
                this.dom['-ms-transform'] = `translate3d(${this.off_width * -1}px, 0px, 0px)`
                if (this.autoPlay) {
                    this.setTime()
                }
            }, 50)
        },
        methods: {
            moveStart (x) {
                if (this.slideing) {
                    this.clearTimeOut()
                    this.t.sx = this.getTransform()
                    this.t.s = x.touches[x.touches.length - 1].clientX
                }
            },
            move (x) {
                if (this.slideing && this.t.s != -1) {
                    this.clearTimeOut()
                    this.t.m = x.touches[x.touches.length - 1].clientX - this.t.s
                    this.setTransform(this.t.m + this.t.sx)
                }
            },
            moveEnd (x) {
                if (this.slideing && this.t.s != -1) {
                    this.clearTimeOut()
                    this.setTransform(this.t.m + this.t.sx)
                    var w = this.getTransform()
                    w += this.t.m > 0 ? this.off_width * 0.3 : this.off_width * -0.3
                    this.index = Math.round(w / this.off_width) * -1
                    this.wh('touch')
                }
            },
            setTransform (num) {
                this.dom.transform = `translate3d(${num}px, 0px, 0px)`
                this.dom['-webkit-transform'] = `translate3d(${num}px, 0px, 0px)`
                this.dom['-ms-transform'] = `translate3d(${num}px, 0px, 0px)`
            },
            getTransform () {
                var x = this.dom.transform || this.dom['-webkit-transform'] || this.dom['-ms-transform']
                x = x.substring(12)
                x = x.match(/(\S*)px/)[1]
                return Number(x)
            },
            fn (e) {
                e.preventDefault()
            },
            prevSlide () {
                this.clearTimeOut()
                this.index--
                this.wh()
            },
            nextSlide () {
                this.clearTimeOut()
                this.index++
                this.wh()
            },
            slideTo (index) {
                this.clearTimeOut()
                this.index = index + 1
                this.wh()
            },
            wh (type) {
                this.slideing = false
                this.dom.transition = type == 'touch' ? '250ms' : this.duration + 'ms'
                this.setTransform(this.index * -1 * this.off_width)
                this.t.m = 0
                this.t.s = -1 // 保证下次重新赋值
                if (this.autoPlay) {
                    this.setTime()
                }                
                var timeDuration = type == 'touch' ? '250' : this.duration
                setTimeout(() => {
                    this.dom.transition = '0s'
                    if (this.index >= this.slidesLength + 1) {
                        this.index = 1
                        this.setTransform(this.index * -1 * this.off_width)
                    }
                    if (this.index <= 0) {
                        this.index = this.slidesLength
                        this.setTransform(this.index * -1 * this.off_width)
                    }
                    this.$emit('transtionend', this.index - 1)
                    this.auto = true
                    this.slideing = true
                }, timeDuration)
            },
            setTime () {
                this.timer1 = window.setTimeout(() => {
                    if (this.auto) {
                        this.index++
                        this.wh()
                    } else {
                        window.clearTimeout(this.timer1)
                    }
                }, this.interval)
            },
            starDom () {
                var SlideDom = document.querySelector('.' + this.className).getElementsByClassName('slider')
                this.slidesLength = SlideDom.length
                if (this.slidesLength > 1) {
                    var cloneDom1 = SlideDom[0].cloneNode(true) // 向最后append
                    var cloneDom2 = SlideDom[this.slidesLength - 1].cloneNode(true) // 向最前append
                    document.querySelector('.' + this.className).insertBefore(cloneDom2, SlideDom[0])
                    document.querySelector('.' + this.className).appendChild(cloneDom1)
                    this.off_width = document.querySelector('.' + this.className).offsetWidth
                    this.dom = document.querySelector('.' + this.className).style
                }
            },
            clearTimeOut () {
                this.auto = false
                window.clearTimeout(this.timer1)
            }
        }
	}
</script>

<style lang='scss' scoped>
    .baseswiperslider {
    	width:100%;
    	position:relative;
    	overflow:hidden;
    	z-index:1;
    	.swiper-content {
    		width: 100%;
	        display: -webkit-box;
	        display: -moz-box;
	        display: -webkit-flex;
	        display: -ms-flexbox;
	        display: flex;
	        -moz-transition-duration: 0s linear;
	        -webkit-transition-duration: 0s linear;
	        -o-transition-duration: 0s linear;
	        transition-duration: 0s linear;
	        .slider {
				height:100%;
	        	width: 100%;
		        -ms-flex-negative: 0;
		        flex-shrink: 0;
		        z-index: 10;
		        min-height: 100px;
		        img {
		        	display:block
		        }
	        }
    	}
    	.pagination {
    		position: absolute;
	        bottom: 8px;
	        width: 100%;
	        text-align: center;
	        background: 0 0;
	        .pagination_item {
	        	display: inline-block;
		        width: 8px;
		        height: 8px;
		        margin: 1px 7px;
		        cursor: pointer;
		        border-radius: 100%;
		        background: #aaa;
	        }
	        .pagination_active {
	        	display: inline-block;
		        width: 8px;
		        height: 8px;
		        margin: 1px 7px;
		        cursor: pointer;
		        border-radius: 100%;
		        background:#0fc37c;
	        }
    	}
    }
</style>