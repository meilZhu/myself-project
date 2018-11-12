<template>
	<div class="confirm-order">
		<baseheader :title='"确认订单"' :needBorder="true">
		    <i class="iconfont icon-xiangzuo7 go-back" slot='left-operate' @click='goback()'></i>
		    <i class="iconfont icon-more other" @click='showList()'></i>
		</baseheader>
		<basetips v-if='isTips' :tipsType='tipsType' :tipsContent='tipsContent' needCancelBtn='needCancelBtn' :sureFn='sureFn' :cancelFn='cancelFn'></basetips>
		<basejumpicon class='jump-icon' v-if='isJumpIcon'>
		    <div class="interface" @click='hideList()'></div>
		</basejumpicon>
	</div>
</template>

<script>
	export default {
		name: 'confirmorder',
		data () {
			return {
				isTips: false,
				isJumpIcon: false,
				tipsType: 'warning',
				tipsContent: '确定退出吗？',
				tipswork: '返回',
                needCancelBtn: true
			}
		},
		methods: {
            goback () {
				this.tipsType='warning'
				this.tipsContent='确定退出吗？'
				this.needCancelBtn= true
				this.tipswork='返回'
				this.showDialog('tips')
			},
			showList () {
                this.showDialog('jumpIcon')
			},
			hideList () {
                this.closeDialog('jumpIcon')
			},
			sureFn () {
				if (this.tipswork == '返回') {
					this.closeDialog('tips')
                    window.history.go(-1)
				}
			},
			cancelFn () {
				this.closeDialog('tips')
			},
			closeDialog (hideType,...showType) {
				switch (hideType) {
					case 'tips':
						this.isTips= false
						break
					case 'jumpIcon':
						this.isJumpIcon= false
						break
					default:
				}
				showType.map(t => {
					this.showDialog(t)
				})
			},
			showDialog (showType) {
				switch (showType) {
					case 'tips':
						this.isTips= true
						break
					case 'jumpIcon':
						this.isJumpIcon= true
						break
					default:
				}
			}
		}
	}
</script>

<style lang='scss' scoped>
    .confirm-order {
		width:100%;
        .jump-icon {
			position:absolute;
			top:1.2rem;
			right:.3rem;
		}
	}
</style>