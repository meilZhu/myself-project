<template>
	<div class="classify">
		<basesearch :isJump='isJump'>
		    <i class="iconfont icon-xiangzuo7 go-back" slot='left-operate' @click='goback()'></i>
		    <i class="iconfont icon-more other-icon" slot='right-operate' @click='showList()'></i>
		</basesearch>
		<basejumpicon v-if='isJumpIcon' class='jump-icon'>
		    <div class="interface" @click='hideList()'></div>
		</basejumpicon>
		<div class="goods-list-contain">
			<div class="left-content">
				<basegoodsleftlist></basegoodsleftlist>
			</div>
			<div class="right-content">
				 <basegoodsrightlist></basegoodsrightlist>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'classify',
		data () {
			return {
				isJump: true,
				isJumpIcon: false
			}
		},
		methods: {
            closeDialog (hideType,...showType) {
                switch (hideType) {
					case 'jumpIcon':
						this.isJumpIcon=false
						break
				    default:
				}
				showType.map((t) => {
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
			},
			goback () {
                window.history.go(-1)
			},
			showList () {
				this.showDialog('jumpIcon')
			},
			hideList () {
				this.closeDialog('jumpIcon')
			}
		}
	}
</script>

<style lang='scss' scoped>
    .classify {
		.jump-icon {
			position:absolute;
			top:1.2rem;
			right:.4rem;
            z-index:5;
		}
		.goods-list-contain {
			width:100%;
			position:absolute;
			top:1.173333rem;
			max-width:750px;
			bottom:1.173333rem;
			display: flex;
			.left-content {
				overflow-y:auto;
				width:2.266667rem;
			}
			.left-content::-webkit-scrollbar {
				display: none;
			}
			.right-content {
				overflow-y:auto;
				flex:1
			}
			.right-content::-webkit-scrollbar {
				display: none;
			}
		}
	}
</style>