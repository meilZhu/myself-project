<template>
	<div class="result">
		<basesearch :isJump='isJump'>
		    <i class="iconfont icon-xiangzuo7 go-back" slot='left-operate' @click='goback()'></i>
		    <i class="iconfont icon-more other-icon" slot='right-operate' @click='showList()'></i>
		</basesearch>
		<basejumpicon v-if='isJumpIcon' class='jump-icon'>
		    <div class="interface" @click='hideList()'></div>
		</basejumpicon>
	</div>
</template>

<script>
	export default {
		name: 'result',
		data () {
			return {
				isJump: true,
				isJumpIcon: false
			}
		},
		methods: {
			goback () {
				
			},
			showList () {
				this.showDialog('jumpIcon')
			},
			hideList () {
				this.closeDialog('jumpIcon')
			},
            closeDialog (hideType,showType) {
                switch (hideType) {
					case 'jumpIcon':
						this.isJumpIcon= false
						break
					default:
				}
				this.showDialog(showType)
			},
			showDialog (showType) {
				switch (showType) {
					case 'jumpIcon':
						this.isJumpIcon= true
						break
					default:
				}
			}
		},
		mounted () {
			
		}
	}
</script>

<style lang='scss' scoped>
    .result {
		width:100%;
		position:relative;
		.jump-icon {
			position:absolute;
			top:1.5rem;
			right:.266667rem;
			z-index:5;
		}
	}
</style>