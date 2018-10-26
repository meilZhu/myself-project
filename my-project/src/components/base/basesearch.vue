<template>
	<div class="basesearch">
	    <slot name='left-operate'></slot>   <!-- <i class="iconfont icon-xiangzuo7 go-back" slot='left-operate' @click='goback()'></i> -->
	    <i class="iconfont icon-sousuo search-btn" @click='search()'></i>
	    <div class="input-box">
	    	<input v-if='!isJump' type="text" v-model='text' class="text" @focus="focusText()"  @blur='blurText()' @input='changeText()' :placeholder="placeholder"/>
	    	<input v-if='isJump' type="text" v-model='text' class="text" :placeholder="placeholder" @click='jump()'/>
	    	<i class="iconfont icon-quxiao4 remove" v-show='isRemove' @click='remove()'></i>
	    </div>
	    <slot name='right-operate'></slot>  <!-- <span slot='right-operate' class='other' @click='goback()'>取消</span> -->
	</div>
</template>

<script>
	import appObj from '../../utils/publicPath'
	import bus from '../../utils/bus'
	export default {
		name: 'search',
		data () {
			return {
				text: '',
				isRemove: false, // 用于判断输入框中的删除按钮是否展示，在聚焦、失焦、输入时生效
				placeholder: '当input没有输入时的默认搜索值'
			}
		},
		props: ['isJump','closeDialog','showDialog'],
		methods: {
			focusText () {
				if (this.text) {
					this.isRemove= true
					this.closeDialog('historySearch')
					this.closeDialog('hotSearch','relatedSearch')
					// 如果这里有相关商品的操作，需要调取接口 （这里可以用到 bus 这个兄弟组件之间的传递）
					bus.$emit('searchRelated',this.text)
				} else {
					this.isRemove= false
					this.closeDialog('relatedSearch', 'historySearch', 'hotSearch')
				}
			},
			blurText () {
				this.isRemove= false
			},
			changeText () {
				if (this.text) {
					this.isRemove= true
					this.closeDialog('historySearch')
					this.closeDialog('hotSearch','relatedSearch')
					// 如果这里有相关商品的操作，需要调取接口 （这里可以用到 bus 这个兄弟组件之间的传递）
					bus.$emit('searchRelated',this.text)
				} else {
					this.isRemove= false
					this.closeDialog('relatedSearch', 'historySearch', 'hotSearch')
				}
			},
			search () {
				// 这里点解可以调取接口，获取搜索结果，
				this.$router.push({path: `${appObj.path}searchResult`})
			},
			jump () {
				this.$router.push({path: `${appObj.path}search`})
			},
			remove () {
				this.text= ''
				this.closeDialog('relatedSearch', 'historySearch', 'hotSearch')
			},
			getSearchWord () {
				// 这里面调取接口，从而获得初始化的 palceholder、text 值
			}
		},
		mounted () {
			this.getSearchWord()
			this.placeholder= this.$store.state.search.placeholder
		}
	}
</script>

<style lang='scss' scoped>
    .basesearch {
    	width:100%;
    	padding:.186667rem .133333rem;
    	height:1.173333rem;
    	box-shadow: 0 .0133rem 0 #ccc;
    	display:flex;
    	justify-content: center;
    	.go-back,.search-btn {
    		width:.8rem;
    		height:100%;
    		text-align: center;
    		line-height: .8rem;
    		font-size:20px;
    	}
    	.go-back {
    		margin-right:.266667rem;
    	}
    	.search-btn {
    		background:#f1f1f1;
    		border-top-left-radius: 8px;
    		border-bottom-left-radius: 8px;
    	}
    	.input-box {
    		position:relative;
    	    font-size:0;
    		width:6rem;
    		.text {
	    		width:100%;
	    		background:#f1f1f1;
	    		font-size:14px;
	    		height:.8rem;
	    		line-height: .8rem;
	    		border-top-right-radius: 8px;
	    		border-bottom-right-radius: 8px;
	    		padding-right:.8rem;
	    	}
	    	.remove {
	    		position:absolute;
	    		top:0;
	    		right:0;
	    		width:.8rem;
	    		height:100%;
	    		text-align: center;
	    		line-height: .8rem;
	    		font-size:12px;
	    		color:#969896;
	    	}
    	}
    	.other {
    		font-size:14px;
    		height:.666667rem;
    		width:1.2rem;
    		text-align: center;
    		background:#FF0000;
    		border-radius:5px;
    		margin-top:.066667rem;
    		line-height:.666667rem;
    		margin-left:.266667rem;
    		color:#fff;
    	}
    	.other-icon {
    		font-size:20px;
    		height:.666667rem;
    		width:1.2rem;
    		text-align: center;
    		border-radius:5px;
    		margin-top:.066667rem;
    		line-height:.733333rem;
    		margin-left:.266667rem;
    	}
    }
</style>