<template>
	<div class="result">
		搜索结果
	</div>
</template>

<script>
	export default {
		name:'result',
		data () {
			return {
				
			}
		},
		mounted() {
			console.log(this.$route.query.content)
		}
	}
</script>

<style lang='scss' scoped>

</style>