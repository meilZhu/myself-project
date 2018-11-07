<template>
	<div class="cart-contain">
	    <div class="operate-contain">
			<p class="address" @click='chooseAddress()'><i class="iconfont addr-icon icon-dizhi2"></i>{{address}}</p>
			<button class="operate-btn" @click='operateGoods()'>{{operateText}}</button>
		</div>
		
	</div>
</template>

<script>
    import bus from '../../utils/bus'
	export default {
		name: 'commoditycart',
		data () {
			return {
				address: '选择配送地址',
				operateText: '编辑商品',
				isOperateGoods: true
			}
		},
		methods: {
			chooseAddress () {
                console.log('选择配送地址')
			},
			operateGoods () {
                if (this.isOperateGoods) {
					this.operateText='完成'
					this.isOperateGoods= !this.isOperateGoods
					bus.$emit('change')
				} else {
					this.operateText='编辑商品'
					this.isOperateGoods= !this.isOperateGoods
					bus.$emit('change')
				}
			}
		}
	}
</script>

<style lang= 'scss' scoped>
    .cart-contain {
    	width:100%;
        .operate-contain {
			width:100%;
			padding:0 .2rem;
			height:1.2rem;
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size:14px;
			color:#666;
			border-bottom:.01rem solid #eee;
			.address {
				&>i {
					margin-right:.1rem;
				}
			}
			.operate-btn {
				color:#f00;
				background:#fff;
			}
		}
    }
</style>