<template>
	<div class="basescrolltop">
		<i class="iconfont icon-xiangshangjiantouquan scroll-top" @click='goScrollTop()'></i>
	</div>
</template>

<script>
	export default {
		name: 'basescrolltop',
		data () {
			return {
				
			}
		},
		props: ['closeDialog','showDialog'],
		methods: {
			goScrollTop () {
                let timer= setInterval(() => {
					console.log('定时循环回到顶部')
					let t =document.documentElement.scrollTop || document.body.scrollTop
					let speed = t/4
					if (document.body.scrollTop != 0) {
						document.body.scrollTop -= speed
					} else {
						document.documentElement.scrollTop -= speed
					}
					if (t == 0) {
						this.closeDialog('scrollTop')
						clearInterval(timer)
					}
                },30)
			}
		}
	}
</script>

<style lang='scss' scoped>
    .basescrolltop {
		.scroll-top {
			font-size:34px;
			color:#888;
			background:rgba(255,255,255,0)
		}
	}
</style>