<template>  
	<div class="right-goods-list"> 
		<scroller class='scroller' ref="index_scroller" :on-refresh="refresh" :on-infinite="infinite">
		    <div class="box"><img class='title-img' :src="classifyData.goodsImg" alt=""></div>
			<ul class="goods-classify">
				<li class="classify-list" v-for='(items, index) in classifyData.goodsDetail' :key='index'>
					<h1 class="classify-title">{{items.goodsDetailTitle}}</h1>
					<ul class="goods-list-content">
                        <li class="goods-box" v-for='(item, indexs) in items.detailData' :key='indexs'>
							<img :src="item.goodsDetailImg" alt="" class="goods-img">
							<p class="goods-name">{{item.goodsDetailName}}</p>
						</li>
					</ul>
				</li>
			</ul>
		</scroller>			
	</div>	
</template>

<script>
    import bus from '../../utils/bus'
	export default {
		name: 'rightgoodslist',
		data () {
			return {
				classifyData: {}
			}
		},
		methods: {
            refresh (done) {
				setTimeout(() => {
					console.log(1)
                    done()
				},800)
			},
			infinite (done) {
				setTimeout(() => {
					console.log(1)
                    done(true)
				},2000)
			}
		},
		created () {
			let obj= {
					goodsImg: '//img30.360buyimg.com/mcoss/jfs/t13219/268/1743066918/91817/3175b47d/5a28ede8Nea02839c.jpg',
					goodsDetail: [{
						goodsDetailTitle: '热门分类',
						detailData: [{
							goodsDetailImg: '//img12.360buyimg.com/focus/s140x140_jfs/t18055/312/1342501458/9462/4699ed8a/5ac48672N11cf61fe.jpg',
							goodsDetailName: '手机储/存卡'
						},{
							goodsDetailImg: '//img14.360buyimg.com/focus/s140x140_jfs/t13657/281/912225045/5343/3109ae02/5a167b73Na69aae95.jpg',
							goodsDetailName: '手机储/存卡手手机储/存卡手手机储/存卡手'
						},{
							goodsDetailImg: '//img12.360buyimg.com/focus/s140x140_jfs/t18055/312/1342501458/9462/4699ed8a/5ac48672N11cf61fe.jpg',
							goodsDetailName: '数据线'
						},{
							goodsDetailImg: '//img14.360buyimg.com/focus/s140x140_jfs/t13657/281/912225045/5343/3109ae02/5a167b73Na69aae95.jpg',
							goodsDetailName: '手机储存卡'
						}]
					}]
				}
			bus.$on('fetchGoodsList',(val) => {
				obj.goodsDetail[0].goodsDetailTitle = val
                this.classifyData=obj
			})
		}
	}
</script>

<style lang='scss' scoped>
    .right-goods-list {
		height:100%;
		padding:.2rem;
		.scroller {
			right:0;
			position:static;
			.box {
				font-size:0;
				.title-img {
					width:100%;
					height:2.466667rem;
				}
			}
			.goods-classify {
				width:100%;
				padding-top:.266667rem;
				.classify-list {
					width:100%;
                    .classify-title {
						font-size:14px;
						font-weight:600;
					}
					.goods-list-content {
						padding:.2rem .2rem;
						overflow:hidden;
						.goods-box {
                            width:33.33%;
							float:left;
							display: flex;
							flex-direction: column;
							justify-content: center;
							align-items:center;
							.goods-img {
								width:1.866667rem;
								height:1.866667rem;
							}
							.goods-name {
								margin-top:.05rem;
								width:100%;
								font-size:12px;
								height:.933333rem;
								text-align:center;
								overflow:hidden;
								text-overflow:ellipsis;
                                display: -webkit-box;
								-webkit-box-orient:vertical;
								-webkit-line-clamp:2;
							}
						}
					}
				}
			}
		}
	}
</style>