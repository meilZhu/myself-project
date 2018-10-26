<template>
	<div class="header">
		<slot name='left-operate'></slot>
		<h1 class="titles">{{title}}</h1>
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: 'baseheader',
		data () {
			return {
	          
			}
		},
		props: ['title']
	}
</script>

<style lang='scss' scoped>
    .header {
    	width:100%;
    	height:1.066667rem;
        position:relative;
        .go-back,.other {
        	width:1.066667rem;
        	height:100%;
        	font-size:20px;
        	text-align:center;
        	line-height: 1.066667rem;
        	position:absolute;
        	top:0;
        }
        .go-back {
        	left:0;
        }
        .other {
        	right:0
        }
        .titles {
        	font-size:18px;
        	width:100%;
        	height:100%;
        	text-align: center;
        	line-height:1.066667rem;
        }
    }
</style>