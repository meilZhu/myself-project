<template>
	<div class="index">
		<baseindexsearch :isNeedLogin='isNeedLogin'></baseindexsearch>
	</div>
</template>

<script>
	export default {
		name: 'index',
		data () {
			return {
				isNeedLogin: true
			}
		},

		mounted () {
            let params= {
				activityId: '2442'
			}
			this.$store.dispatch('GetPlaceholder',params)
		}
	}
</script>

<style lang='scss' scoped>
    .index {
    	height:2000px
    }
</style>