<template>
	<div class="wordrotation">
		<img :src="imgSrc" alt="" class="rotation-logo" />
		<ul class="word-rotation-content" :class='className'>
		    <li class="rotation-list-text" v-for='(item, index) in textData' :key='index'>
		    	<span>{{item.tips}}</span>{{item.text}}
		    </li>
		</ul>
		<span class="more-info">{{more}}</span>
	</div>
</template>

<script>
	export default {
		name: 'wordrotation',
		data () {
			return {
				off_height: 0,
				dom: {},
			    timer1:'',
			    auto:true,
			    slidesLength:0,
			    activeIndex:1,
			    className:'',
				textData: [{
					tips: 'HOT',
					text: '恭喜你已经被我们小站抽中为特殊用户，欢迎前来学习，谢谢您的惠顾'
				},{
					tips: '热门',
					text: 'vue轮播图插件vue-awesome-swiper的使用 - xiaogezl的..._CSDN博客'
				}]
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
			interval: {  //多久轮播一次
				type: Number,
				default: 2000
			},
			duration: {
				type:Number,
				default: 250
			}
		},
		mounted () {
			this.className = `wh_swiper_${Math.random().toFixed(3) * 1000}`
            setTimeout(()=> {
            	//克隆dom
            	this.cloneDom()
            	this.dom.transform= `translate3d(0, ${this.off_height * -1}px, 0)`
            	this.dom['-webkit-transform']= `translate3d(0, ${this.off_height * -1}px, 0)`
            	this.dom['-ms-transform']= `translate3d(0, ${this.off_height * -1}px, 0)`
            	this.setTime()
            },50)
		},
		methods:{
			cloneDom () {
				var SlideDom= document.querySelector('.'+ this.className).getElementsByClassName('rotation-list-text') || document.querySelector('.'+ this.className).getElementsByClassName('rotation-list-img')
				this.slidesLength= SlideDom.length
				if(this.slidesLength > 1) {
					var cloneDom1= SlideDom[0].cloneNode(true)
					var cloneDom2= SlideDom[this.slidesLength - 1].cloneNode(true)
					document.querySelector('.'+ this.className).insertBefore(cloneDom2, SlideDom[0])
					document.querySelector('.'+ this.className).appendChild(cloneDom1)
					this.off_height= document.querySelector('.'+ this.className).offsetHeight
					this.dom= document.querySelector('.'+ this.className).style
				}
			},
			setTime () {
				this.timer1= window.setTimeout(()=> {
					if(this.auto) {
						this.activeIndex++;
						this.wh()
					}else {
						window.clearTimeout(this.timer1)
					}
				},this.interval)
			},
			wh() {
				this.dom.transition= this.duration + 'ms'
				this.setTransform(this.activeIndex * -1 * this.off_height)
				this.setTime()
				setTimeout(()=> {
					this.dom.transition= '0s'
					if(this.activeIndex >= this.slidesLength + 1) {
						this.activeIndex = 1
						this.setTransform(this.off_height * -1 * this.activeIndex)
					}
					if(this.activeIndex <= 0) {
						this.activeIndex = this.slidesLength
						this.setTransform(this.activeIndex * -1 * this.off_height)
					}
					this.auto= true
				},this.duration)
			},
			setTransform(num) {
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
			margin-left:.4rem;
		}
		.word-rotation-content {
			flex:1;
			height:.8rem;  
	        position:relative;
	        -moz-transition-duration: 0s linear;
	        -webkit-transition-duration: 0s linear;
	        -o-transition-duration: 0s linear;
	        transition-duration: 0s linear;
	        overflow: hidden;
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
		}
    }
</style>