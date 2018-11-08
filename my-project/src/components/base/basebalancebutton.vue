<template>
	<div class="basebalancebutton">
		<div class="choose-box" @click='chooseAll()'>
		    <i class="iconfont choose-all-false"></i>
			<p class="choose-tips">全选</p>
		</div>
		<div class="btn-box" v-if="isBalance">
			<div class="left-content">
				<h1 class="all-price">总计&nbsp;：<span>￥{{allPrice}}</span></h1>
			    <p class='minus-price'>总额￥{{allPrice}} 立减￥{{minusPrice}}</p>
			</div>
           <button :class="canBalance ? 'right-yes': 'right-no'" @click='goBalance()'>去结算<span>({{number}}件)</span></button>
		</div>
		<div class="btn-operate" v-if="!isBalance">
			<button class="operate" @click='collect()'>移至收藏</button>
			<button class="operate" @click='remove()'>删除</button>
		</div>
	</div>
</template>

<script>
import bus from '../../utils/bus'
    import appObj from '../../utils/publicPath'
 	export default {
		name: 'balancebutton',
		data () {
			return {
				isBalance: true,
				canBalance: false,
				allPrice: 0,
				minusPrice: 0,
				number: 0
			}
		},
		methods: {
			chooseAll () {
				let icon= document.querySelector('.choose-all-false')
				icon.classList.toggle('choose-all-true')
				let className= icon.getAttribute('class')
				let reg=/choose-all-true/g
				let res=reg.test(className)
				if (res) {
					this.canBalance= true
					bus.$emit('radiosAll',true)
				} else {
					this.canBalance= false
					bus.$emit('radiosAll',false)
				}
			},
			goBalance () {
				if (this.canBalance) {
                    this.$router.push({path: `${appObj.path}confirmOrder`})
				}
			},
			collect () {
				console.log('收藏')
			},
			remove () {
				console.log('删除')
			}
		},
		mounted () {
			function test () {
				this.isBalance= !this.isBalance
			}
			bus.$on('change',test.bind(this)) // 这里也可以用箭头函数、 【这里不能用普通函数、因为普通函数中的this指向是最外层的vue实例；只有箭头函数他会绑定当前组件；
											  // 同时用bind 函数也可以绑定this 指向】
		    bus.$on('radios',(val,price,numb) => {
				this.allPrice=price.toFixed(2)
				this.number= numb
				if (val) {
					document.querySelector('.choose-all-false').classList.add('choose-all-true')
				} else {
					document.querySelector('.choose-all-false').classList.remove('choose-all-true')
				}
				if (this.number >= 1) {
					this.canBalance= true
				} else {
					this.canBalance= false
				}
			})
			bus.$emit('radiosAll',false)
		},
		beforeDestroy () {
			bus.$off('change') // 注意：如果用到bus传递兄弟之间的属性，那么用$on绑定了事件，在销毁之前需要用$off 对其进行解绑 否则可能会带来不好的效果
			bus.$off('radios')
		}
	}
</script>

<style lang='scss' scoped>
    .basebalancebutton {
		width:100%;
		height:1.333333rem;
		display: flex;
		justify-content: space-between;
		background:#fff;
		border-top:.01rem #e2e2e2 solid;
		.choose-box {
			width:1.066667rem;
			height:100%;
			text-align: center;
			.choose-all-false {
				display:inline-block;
				width:.533333rem;
				height:.533333rem;
				font-size:20px;
				border-radius:50%;
				border: .02rem solid #666;
				margin:.2rem 0 0;
				position:relative;
			}
			.choose-all-true {
				border:none;
			}
			.choose-all-true:before {
				content:'\e606';
				display:inline-block;
				width:.533333rem;
				height:.533333rem;
				font-size:18px;
				border-radius:50%;
				color:#fff;
				background:#f00;
				position:absolute;
				top:-.02rem;
				left:-.02rem;
			}
		}
		.btn-box {
			display: flex;
			.left-content {
				display: flex;
				flex-direction: column;
				align-items: flex-end;
				justify-content: center;
				padding-right:.2rem;
				.all-price {
					font-size:16px;
					font-weight:600;
					margin-bottom:.1rem;
					&>span {
						color:#FF0000;
					}
				}
				.minus-price {
					color:#666;
				}
			}
			.right-yes {
				width:2.933333rem;
				height:100%;
				text-align: center;
				line-height:1.333333rem;
				font-size:16px;
				font-weight:600;
				color:#fff;
				background:#e4393c;
				&>span {
					font-size:12px;
				}
			}
			.right-no {
				width:2.933333rem;
				height:100%;
				text-align: center;
				line-height:1.333333rem;
				font-size:16px;
				font-weight:600;
				color:#999;
				background:#d7d7d7;
				&>span {
					font-size:12px;
				}
			}
		}
		.btn-operate {
			display:flex;
			.operate {
				width:2.933333rem;
				height:100%;
				text-align: center;
				line-height:1.333333rem;
				color:#fff;
				font-size:16px;
				font-weight: 500;
			}
			.operate:first-child {
				background:#ff9600;
			}
			.operate:last-child {
				background:#e4393c;
			}
		}
	}
</style>