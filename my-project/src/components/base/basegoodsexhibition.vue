<template>
	<div :class="exhibitionType == 'transverse'?'transverse-exhibition':''">
		<ul class="content">
			<!--<li class="goods-list" v-for='item in exhibitionData' :key='item'>
				<span class="goods-brand"></span>
				<img :src="item.img" alt="" class="goods-img">
                <p class="goods-name">{{item.name}}</p>
				<p class="goods-price">￥{{item.price}}</p>
			</li>-->
			<slot></slot>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'exhibition',
		data () {
			return {
                // exhibitionData: [{
				// 	name: 'OPPO K1【全新系列】首款千元屏幕指纹手机 屏下指纹解锁 6.4英寸水滴屏 R17同款A5升级版 梵星蓝 4G+64G 官',
				// 	price: '1599',
				// 	img: '//m.360buyimg.com/babel/jfs/t17149/173/1779654602/189601/335d3d90/5ad8628dN03dc292f.jpg!q70.dpg',
				// 	id: '1'
				// },{
				// 	name: 'OPPO K1【全新系列】首款千元屏幕指纹手机 屏下指纹解锁 6.4英寸水滴屏 R17同款A5升级版 梵星蓝 4G+64G 官',
				// 	price: '1599',
				// 	img: '//m.360buyimg.com/babel/jfs/t17149/173/1779654602/189601/335d3d90/5ad8628dN03dc292f.jpg!q70.dpg',
				// 	id: '2'
				// },{
				// 	name: 'OPPO K1【全新系列】首款千元屏幕指纹手机 屏下指纹解锁 6.4英寸水滴屏 R17同款A5升级版 梵星蓝 4G+64G 官',
				// 	price: '1599',
				// 	img: '//m.360buyimg.com/babel/jfs/t17149/173/1779654602/189601/335d3d90/5ad8628dN03dc292f.jpg!q70.dpg',
				// 	id: '3'
				// },{
				// 	name: 'OPPO K1【全新系列】首款千元屏幕指纹手机 屏下指纹解锁 6.4英寸水滴屏 R17同款A5升级版 梵星蓝 4G+64G 官',
				// 	price: '1599',
				// 	img: '//m.360buyimg.com/babel/jfs/t17149/173/1779654602/189601/335d3d90/5ad8628dN03dc292f.jpg!q70.dpg',
                //     id: '4'
				// },{
				// 	name: 'OPPO K1【全新系列】首款千元屏幕指纹手机 屏下指纹解锁 6.4英寸水滴屏 R17同款A5升级版 梵星蓝 4G+64G 官',
				// 	price: '1599',
				// 	img: '//m.360buyimg.com/babel/jfs/t17149/173/1779654602/189601/335d3d90/5ad8628dN03dc292f.jpg!q70.dpg',
				// 	id: '5'
				// },{
				// 	name: 'OPPO K1【全新系列】首款千元屏幕指纹手机 屏下指纹解锁 6.4英寸水滴屏 R17同款A5升级版 梵星蓝 4G+64G 官',
				// 	price: '1599',
				// 	img: '//m.360buyimg.com/babel/jfs/t17149/173/1779654602/189601/335d3d90/5ad8628dN03dc292f.jpg!q70.dpg',
				// 	id: '6'
				// }]
			}
		},
		props: ['exhibitionType']
	}
</script>

<style lang='scss' scoped>
    .transverse-exhibition {
		min-width:100%;
		overflow-x:auto;
		padding:.2rem 0;
		.content {
			padding:0 .133333rem .133333rem;
			display: flex;
			.goods-list {
				padding:0 .1rem;
				position:relative;
				.goods-img {
					width:2.8rem;
					height:2.8rem;
				}
				.goods-name {
					width:2.8rem;
					padding:.2rem .1rem 0;
					font-size:12px;
					overflow:hidden; 
					text-overflow:ellipsis;
					display:-webkit-box; 
					-webkit-box-orient:vertical;
					-webkit-line-clamp:2; 
				}
				.goods-price {
					font-size:14px;
					color:#f00;
					padding:.13333rem 0;
				}
			}
		}
	}
</style>