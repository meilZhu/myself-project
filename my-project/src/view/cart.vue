<template>
	<div class="cart">
		<!-- <basetips :tipsType='tipsType' :tipsContent='tipsContent' ></basetips> -->
		<!-- <basetips :cancelFn='cancelFn' :sureFn='sureFn' :tipsType='tipsType' :tipsContent='tipsContent' :needCancelBtn='needCancelBtn'></basetips> -->
		<baseheader :title='title'>
		    <i class="iconfont icon-xiangzuo7 go-back" slot='left-operate' @click='goback()'></i>
		    <i class="iconfont icon-more other" @click='showList()'></i>
		</baseheader>
		<basejumpicon v-if='isJumpIcon' class='jump-icon'>
		    <div class="interface" @click='hideList()'></div>
		</basejumpicon>
		<!-- <basegoodsexhibition :exhibitionType='exhibitionType'>
		     <li class="goods-list" v-for='item in exhibitionData' :key='item.id'>
				<span class="goods-brand"></span>
				<img :src="item.img" alt="" class="goods-img">
                <p class="goods-name">{{item.name}}</p>
				<p class="goods-price">￥{{item.price}}</p>
			</li>
		</basegoodsexhibition> -->
	</div>
</template>

<script>
	export default {
		name: 'cart',
		data () {
			return {
                title: '购物车',
				tipsType: 'right',
				tipsContent: '提示框提示框提示框提示框提示框提示框提示框提示框',
				needCancelBtn: true,
				isJumpIcon: false,
				exhibitionType: 'transverse',
				exhibitionData: [{
					name: 'OPPO K1【全新系列】首款千元屏幕指纹手机 屏下指纹解锁 6.4英寸水滴屏 R17同款A5升级版 梵星蓝 4G+64G 官',
					price: '1599',
					img: '//m.360buyimg.com/babel/jfs/t17149/173/1779654602/189601/335d3d90/5ad8628dN03dc292f.jpg!q70.dpg',
					id: '1'
				},{
					name: 'OPPO K1【全新系列】首款千元屏幕指纹手机 屏下指纹解锁 6.4英寸水滴屏 R17同款A5升级版 梵星蓝 4G+64G 官',
					price: '1599',
					img: '//m.360buyimg.com/babel/jfs/t17149/173/1779654602/189601/335d3d90/5ad8628dN03dc292f.jpg!q70.dpg',
					id: '2'
				},{
					name: 'OPPO K1【全新系列】首款千元屏幕指纹手机 屏下指纹解锁 6.4英寸水滴屏 R17同款A5升级版 梵星蓝 4G+64G 官',
					price: '1599',
					img: '//m.360buyimg.com/babel/jfs/t17149/173/1779654602/189601/335d3d90/5ad8628dN03dc292f.jpg!q70.dpg',
					id: '3'
				},{
					name: 'OPPO K1【全新系列】首款千元屏幕指纹手机 屏下指纹解锁 6.4英寸水滴屏 R17同款A5升级版 梵星蓝 4G+64G 官',
					price: '1599',
					img: '//m.360buyimg.com/babel/jfs/t17149/173/1779654602/189601/335d3d90/5ad8628dN03dc292f.jpg!q70.dpg',
                    id: '4'
				},{
					name: 'OPPO K1【全新系列】首款千元屏幕指纹手机 屏下指纹解锁 6.4英寸水滴屏 R17同款A5升级版 梵星蓝 4G+64G 官',
					price: '1599',
					img: '//m.360buyimg.com/babel/jfs/t17149/173/1779654602/189601/335d3d90/5ad8628dN03dc292f.jpg!q70.dpg',
					id: '5'
				},{
					name: 'OPPO K1【全新系列】首款千元屏幕指纹手机 屏下指纹解锁 6.4英寸水滴屏 R17同款A5升级版 梵星蓝 4G+64G 官',
					price: '1599',
					img: '//m.360buyimg.com/babel/jfs/t17149/173/1779654602/189601/335d3d90/5ad8628dN03dc292f.jpg!q70.dpg',
					id: '6'
				}]
			}
		},
		methods: {
			closeDialog (hideType,...showType) {
                switch (hideType) {
					case 'jumpIcon':
						this.isJumpIcon=false
						break
				    default:
				}
				showType.map((t) => {
					this.showDialog(t)
				})
			},
			showDialog (showType) {
                switch (showType) {
					case 'jumpIcon':
						this.isJumpIcon= true
						break
					default:
				}
			},
            cancelFn () {
                console.log('取消')
			},
			sureFn () {
                console.log('确定')
			},
            goback () {
				window.history.go(-1)
			},
			showList () {
                this.showDialog('jumpIcon')
			},
			hideList () {
				this.closeDialog('jumpIcon')
			}
		}
	}
</script>

<style lang='scss' scoped>
    .cart {
		.jump-icon {
			position:absolute;
			top:1.2rem;
			right:.4rem;
			z-index:5;
		}
		.goods-brand {
			display:inline-block;
			width:.8rem;
			height:.8rem;
			background:#f00;
		}
	}
</style>