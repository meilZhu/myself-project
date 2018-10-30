<template>
	<ul class="basecircleicon">
		<slot></slot>
	</ul>
</template>

<script>
	export default {
		name: 'basecircleicon',
		data () {
			return {
				
			}
		}
	}
</script>

<style lang='scss' scoped>
    .basecircleicon {
    	width:100%;
    	display:flex;
    	flex-wrap: wrap;
		padding-bottom:.4rem;
    	.icon-list {
    		width:20%;
			height:2rem;
			padding-top:.2rem;
    		&>a {
				display:inline-flex;
				flex-direction: column;
				justify-content: space-between;
				align-items: center;
				width: 100%;
				text-decoration: none;
				&>img {
					width:1rem;
					height:1rem;
					border-radius:50%;
				}
				&>p {
					width:100%;
					margin-top:.3rem;
					text-align: center;
					white-space: nowrap;
					overflow:hidden;
					text-overflow: ellipsis;
					font-size:12px;
				}
			}
    	}
    }
</style>