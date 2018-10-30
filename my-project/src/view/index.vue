<template>
	<div class="index">
		<baseindexsearch :isNeedLogin='isNeedLogin' class='base-search'></baseindexsearch>
		<baseswiperslider class='swiper-contain' :height='4'>
		    <li class="slider" v-for='(item, index) in sliderData' :key='index'>
				<a :href="item.href">
					<img :src="item.src" alt="" class="swiper-img">
				</a>
			</li>
		</baseswiperslider>
		<basecircleicon>
		    <li class="icon-list" v-for='(icon, index) in iconData' :key='index'>
				<a :href="icon.href">
					<img :src="icon.src" alt=""/>
					<p>{{icon.name}}</p>
				</a>
			</li>
		</basecircleicon>
		<basewordrotation></basewordrotation>
	</div>
</template>

<script>
	export default {
		name: 'index',
		data () {
			return {
				isNeedLogin: true,
				sliderData: [{
						href: '',
						src: '//img11.360buyimg.com/mcoss/jfs/t14983/111/284200903/54357/6001c9ac/5a28f3a9Na23c9e4f.jpg'
					},{
						href: '',
						src: '//img11.360buyimg.com/mcoss/jfs/t15421/47/293004734/40519/28d550fb/5a28f4faNec3688d3.jpg'
					},{
						href: '',
						src: '//img30.360buyimg.com/mcoss/jfs/t13219/268/1743066918/91817/3175b47d/5a28ede8Nea02839c.jpg'
					}],
				iconData: [{
						href: '',
						src: '//m.360buyimg.com/mobilecms/jfs/t25534/207/1767774998/8085/523157d6/5bbc800fN502129b8.png.webp',
						name: '自己超市'
					},{
						href: '',
						src: '//m.360buyimg.com/mobilecms/jfs/t21658/347/221358098/7461/f86e6f74/5b03b170Nc9e0ec7c.png.webp',
						name: '全球购'
					},{
						href: '',
						src: '//m.360buyimg.com/mobilecms/jfs/t18865/90/1804471517/14538/72c79ba/5ad87b67N1ebcb69b.png.webp',
						name: '你的服饰'
					},{
						href: '',
						src: '//m.360buyimg.com/mobilecms/jfs/t17725/156/1767366877/17404/f45d418b/5ad87bf0N66c5db7c.png.webp',
						name: '食品生鲜'
					},{
						href: '',
						src: '//m.360buyimg.com/mobilecms/jfs/t16990/157/2001547525/17770/a7b93378/5ae01befN2494769f.png.webp',
						name: '服务到家'
					},{
						href: '',
						src: '//m.360buyimg.com/mobilecms/jfs/t18454/342/2607665324/6406/273daced/5b03b74eN3541598d.png.webp',
						name: '充值缴纳'
					},{
						href: '',
						src: '//m.360buyimg.com/mobilecms/jfs/t22228/270/207441984/11564/88140ab7/5b03fae3N67f78fe3.png.webp',
						name: '9.9元拼购'
					},{
						href: '',
						src: '//m.360buyimg.com/mobilecms/jfs/t19495/200/1823004232/14065/ca00ab2c/5ad87cf5N4ad8e6f1.png.webp',
						name: '领券'
					},{
						href: '',
						src: '//m.360buyimg.com/mobilecms/jfs/t16828/63/2653634926/5662/d18f6fa1/5b03b779N5c0b196f.png.webp',
						name: '赚钱'
					},{
						href: '',
						src: '//m.360buyimg.com/mobilecms/jfs/t21481/263/412160889/15938/4246b4f8/5b0cea29N8fb2865f.png.webp',
						name: '全部'
					}]
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
		position:relative;
    	width:100%;
		padding-top:1.173333rem;
		.base-search {
			position:absolute;
			top:0;
		}
        .swiper-contain {
			width:100%;
			a {
                width:100%;
				height:100%;
				&>img {
					width:100%;
					height:100%;
				}
			}
		}
    }
</style>