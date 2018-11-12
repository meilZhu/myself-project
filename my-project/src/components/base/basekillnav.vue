<template>
    <ul class="seckill-btn-contain">
        <li :class="index == btnIndex ?'kill-btn-active' : 'kill-btn'" v-for='(item, index) in btnData' :key='index' @click='changeKill(index)'><span>{{item.time}}</span><em>{{item.desc}}</em></li>
    </ul>
</template>

<script>
    export default {
        name: 'killnav',
        data () {
            return {
                btnIndex: 0
            }
        },
        props: {
            btnData: {
                type: Array
            }
        },
        methods: {
            changeKill (index) {
                this.btnIndex= index  
                this.scrollTop()
                // 先到接口，在接口调取成功以后，再实现该滑动
                this.$emit('changeKill',index)
            },
            scrollTop () {
                var scrollToptimer = setInterval(function () {
                    // console.log("定时循环回到顶部")
                    var top = document.body.scrollTop || document.documentElement.scrollTop
                    var speed = top / 4
                    if (document.body.scrollTop!=0) {
                        document.body.scrollTop -= speed
                    } else {
                        document.documentElement.scrollTop -= speed
                    }
                    if (top == 0) {
                        clearInterval(scrollToptimer)
                    }
                }, 1) 
            }
        }
    }
</script>

<style lang='scss' scoped>
    .seckill-btn-contain {
        width:100%;
        height:1.333333rem;
        background:#333;
        display:flex;
        overflow-x:auto;
        .kill-btn {
            flex:1;
            min-width:2rem;
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
            min-width:2rem;
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
    .seckill-btn-containi::-webkit-scrollbar {
        display:none;
    } 
</style>
