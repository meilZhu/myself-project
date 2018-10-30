<template>
    <div class="slider" ref='slider'>
        <div class="container" @mouseenter='endInterval()' @mouseleave='startInterval()'>
            <div class="slider-wrap" :style="{width:wrap_width + 'px',height:wrap_height + 'rem',left:offset_left + 'px'}">
                <div class="img" v-for='item in slider_des' :key='item.id' ref='img'>  
                    <img :src="item.src" alt="">
                </div>
            </div>
            <div class="bottom">
                <ul class="pointContainer">
                    <li @click='changeIndex(index)' :class="nowIndex === index ? 'active' : 'point'" v-for='(point,index) in length' :key='index'></li>
                </ul>
            </div>
            <div class="click pre" @click='pre()'>&lt;</div>
            <div class="click next" @click='next()'>&gt;</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'slider',
        data () {
            return {
                length: new Array(this.img.length),
                nowIndex: 0,
                wrap_width: this.width*(this.img.length+2),
                wrap_height: this.height,
                offset_left: -this.width,
                isTransition: true,
                timer: null,
                animateFlag: true,
                timerAuto: null
            }
        },
        props: {
        	img: {
        		type: Array,
        		default: []
            },
            width: {
                type: Number,
                default: 375
            },
            height: {
                type: Number,
                default: 4
            }
        },
        computed: {
            slider_des: function () {
                let arr=[...this.img] // 深copy这个数组  、、复制
                arr.push(this.img[0])
                arr.unshift(this.img[this.img.length-1])
                return arr
            }
        },
        methods: {
            startInterval () {
                this.timerAuto=setInterval(this.next,5000)
            },
            endInterval () {
                console.log(1)
                clearInterval(this.timerAuto)
            },
            pre () {
                if (this.nowIndex===0) {
                    if (!this.animateFlag) {
                        clearInterval(this.timer)
                        this.animateFlag=true
                        this.offset_left=-(this.length.length)*this.width
                    }
                    this.animate(-this.width,0,() => {
                        this.offset_left=-(this.length.length)*this.width
                    })
                    this.nowIndex=this.img.length-1
                    return
                } else {
                    if (!this.animateFlag) {
                        this.animateFlag=true
                        clearInterval(this.timer)
                        this.offset_left=-(this.nowIndex*this.width)
                    }
                    this.animate(-(this.nowIndex+1)*this.width,-(this.nowIndex*this.width))
                }
                this.nowIndex-=1
            },
            next () {
                if (this.nowIndex === this.length.length-1) {
                    if (!this.animateFlag) {
                        this.animateFlag= true
                        clearInterval(this.timer)
                        this.offset_left= -this.width
                    }
                    this.animate(-(this.length.length)*this.width,-(this.length.length+1)*this.width,() => {
                        this.offset_left= -this.width
                    })
                    this.nowIndex = 0
                    return
                } else {
                    if (!this.animateFlag) {
                        this.animateFlag= true
                        clearInterval(this.timer)
                        this.offset_left= -(this.nowIndex + 2)* this.width
                    }
                    this.animate(-(this.nowIndex+1)*this.width,-(this.nowIndex+2)*this.width)
                }
                this.nowIndex += 1
            },
            animate (start,end,fuc) {
                let distance= end-start 
                let preDis= distance/50
                this.timer= setInterval(() => {
                    this.animateFlag = false
                    if (Math.abs(end-this.offset_left) <= Math.abs(preDis)) {
                        this.offset_left= end
                        if (fuc) {
                            fuc()
                        }
                        this.animateFlag= true
                        clearInterval(this.timer)
                        this.timer = null
                        return
                    }
                    this.offset_left += preDis
                },1)
            },
            changeIndex (index) {
                clearInterval(this.timer)
                this.animate(-(this.nowIndex + 1)*this.width,-(index+1)*this.width)
                this.nowIndex = index
            }
        },
        mounted () {
            this.startInterval()
            for (let ele of this.$refs.img) {
            	ele.style.width= this.width + 'px'
            	ele.style.height=this.height + 'rem'
            }
            this.$refs.slider.style.height= this.height + 'rem'
        }
    }
</script>

<style lang='scss' scoped>
    .slider {
        width:100%;
        height:150px;
        position:relative;
        .container {
            width:100%;
            height:100%;
            margin:0 auto;
            overflow:hidden;
            position:absolute;
            left:0;
            top:0;
            .slider-wrap {
                position:absolute;
                top:0;
                .img {
                    width:375px;
                    height:4rem;;
                    float:left;
                    display:inline;
                    &>img {
                        width:100%;
                        height:100%;
                    }
                } 
            }
            .bottom {
                width:100%;
                height:.4rem;
                position:absolute;
                bottom:.1rem;
                .pointContainer {
                    width:100%;
                    height:100%;
                    display:flex;
                    justify-content: center;
                    align-items: center;
                    .point {
                        display: inline-block;
                        width:.2rem;
                        height:.2rem;
                        border-radius:50%;
                        border:.01rem solid #e2e2e2;
                        background:#f00;
                        margin:0 .1rem;
                    }
                    .active {
                        display: inline-block;
                        width:.2rem;
                        height:.2rem;
                        border-radius:50%;
                        border:.01rem solid #e2e2e2;
                        background:#00f;
                        margin:0 .1rem;
                    }
                }
            }
        }
    }
</style>
