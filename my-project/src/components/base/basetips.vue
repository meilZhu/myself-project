<template>
	<div class="tips-box">
		<div class="operate-tips"  v-if=" tipsType== 'error' || tipsType== 'warning' || tipsType== 'right'">
			<div class="content">
				<div class="tips-logo-box">
					<i class="iconfont tips-icon" :class="tipsType == 'error' ? 'icon-guanbi1' : tipsType == 'warning'? 'icon-iconfontcolor100-copy' : 'icon-duihao'"></i>
				</div>
				<div class="tips-text">{{tipsContent}}</div>
				<div class="tips-btn"> 
					<button class="cancel-btn" v-if='needCancelBtn' @click='cancel()'>取消</button>
					<button class="sure-btn" :class="tipsType == 'error' ? 'error-sure-btn' :tipsType == 'warning'? 'warn-sure-btn' : 'right-sure-btn'" @click='sure()'>确定</button>
				</div>
			</div>
		</div>
		<div class="pure-tips"  v-if="tipsType== 'tips'">
            <div class="tips-text">{{tipsContent}}</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'basetips',
		data () {
			return {
			    
			}
		},
		props: ['cancelFn', 'sureFn', 'tipsType', 'tipsContent', 'needCancelBtn'],
		methods: {
			cancel () {
				this.cancelFn()
			},
			sure () {
				this.sureFn()
			}
		}
	}
</script>

<style lang='scss' scoped>
    .operate-tips {
		width:100%;
		background:rgba(0,0,0,.3);
		position:fixed;
		top:0;
		bottom:0;
		display:flex;
		justify-content: center;
		align-items: center;
		z-index:10;
		max-width:750px;
		.content {
            width:7.333333rem;
			padding-top: .32rem;
			background:#fff;
			border-radius: 5px;
			.tips-logo-box {
				width:100%;
				height:1.6rem;
				display: flex;
				justify-content: center;
				align-items: center;
				padding-top:.2rem;
				.tips-icon {
					width:1.066667rem;
					height:1.066667rem;
					font-size:30px;
					text-align: center;
					line-height: 1.066667rem;
				}
				.icon-guanbi1 {
					color:#e81b20;
				}
				.icon-iconfontcolor100-copy {
					color:#ff4225;
				}
				.icon-duihao {
					color:#68c93b;
				}
			}
			.tips-text {
				width:100%;
				padding:.4rem .666667rem .666667rem;
				font-size:13px;
				text-indent: 28px;
				line-height:24px;
			}
			.tips-btn {
				width:100%;
				height:1.2rem;
				box-shadow: 0 -.013rem 0 #ccc;
				display: flex;
				margin-top:.2rem;
				.cancel-btn,.sure-btn {
					flex:1;
					background:none;
					border-left:.01rem solid #e2e2e2;
					color:#666;
				}
				.cancel-btn {
					border-bottom-left-radius:5px;
				}
				.error-sure-btn {
					color:#e81b20;
				}
				.warn-sure-btn {
					color:#ff4225;
				}
				.right-sure-btn {
					color:#68c93b;
				}
			}
		}
	} 
	.pure-tips {
		width:100%;
		position:fixed;
		top:0;
		bottom:0;
		display:flex;
		justify-content: center;
		align-items: center;
		z-index:10;
		max-width:750px;
        .tips-text {
			width:7.333333rem;
			padding:.6rem .666667rem;
			font-size:14px;
			text-align:center;
			background:rgba(0,0,0,.4);
			border-radius:8px;
			color:#f2f2f2
		}
	}
</style>