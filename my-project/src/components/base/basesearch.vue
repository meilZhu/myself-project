<template>
	<div class="basesearch">
	    <slot name='left-operate'></slot>   <!-- <i class="iconfont icon-xiangzuo7 go-back" slot='left-operate' @click='goback()'></i> -->
	    <i class="iconfont icon-sousuo search-btn" @click='search()'></i>
	    <div class="input-box">
	    	<input type="text" v-model='text' class="text" @focus="focusText()"  @blur='blurText()' @input='changeText()' :placeholder="placeholder"/>
	    	<i class="iconfont icon-quxiao4 remove" v-show='isRemove' @click='remove()'></i>
	    </div>
	    <slot name='right-operate'></slot>  <!-- <span slot='right-operate' class='other' @click='goback()'>取消</span> -->
	</div>
</template>

<script>
	export default {
		name:'search',
		data () {
			return {
				text:'',
				isRemove:false,
				placeholder:'当input没有输入时的默认搜索值'
			}
		},
		props:[''],
		methods:{
			focusText() {
				if(this.text) {
					this.isRemove= true
				}else {
					this.isRemove= false
				}
			},
			blurText() {
				this.isRemove= false
			},
			changeText() {
				if(this.text) {
					this.isRemove= true
				}else {
					this.isRemove= false
				}
			},
			search() {
				//这里点解可以调取接口，获取搜索结果，
			},
			remove() {
				this.text= ''
			},
			getSearchWord() {
				//这里面调取接口，从而获得初始化的 palceholder、text 值
			}
		},
		mounted() {
			this.getSearchWord()
			this.placeholder= this.$store.state.search.placeholder
		}
	}
</script>

<style lang='scss' scoped>
    .basesearch {
    	width:100%;
    	padding:.14rem .1rem;
    	height:.88rem;
    	box-shadow: 0 .01rem 0 #ccc;
    	display:flex;
    	justify-content: center;
    	.go-back,.search-btn {
    		width:.6rem;
    		height:100%;
    		text-align: center;
    		line-height: .6rem;
    		font-size:.4rem;
    	}
    	.go-back {
    		margin-right:.2rem;
    	}
    	.search-btn {
    		background:#E7E1CD;
    		border-top-left-radius: 8px;
    		border-bottom-left-radius: 8px;
    	}
    	.input-box {
    		position:relative;
    	    font-size:0;
    		width:4.5rem;
    		.text {
	    		width:100%;
	    		background:#E7E1CD;
	    		font-size:.24rem;
	    		height:.6rem;
	    		line-height: .6rem;
	    		border-top-right-radius: 8px;
	    		border-bottom-right-radius: 8px;
	    		padding-right:.6rem;
	    	}
	    	.remove {
	    		position:absolute;
	    		top:0;
	    		right:0;
	    		width:.6rem;
	    		height:100%;
	    		text-align: center;
	    		line-height: .6rem;
	    		font-size:.2rem;
	    		color:#969896;
	    	}
    	}
    	.other {
    		font-size:.2rem;
    		height:.5rem;
    		width:.9rem;
    		text-align: center;
    		background:#FF0000;
    		border-radius:5px;
    		margin-top:.05rem;
    		line-height:.55rem;
    		margin-left:.2rem;
    		color:#fff;
    	}
    }
</style>