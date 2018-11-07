const lazyLoadImg = () => {
	var h = document.documentElement.clientHeight || document.body.clientHeight // 获取浏览器的高度
	// console.log(h)
	var s=document.documentElement.scrollTop || document.body.scrollTop // 获取滚动距离
	// console.log(s)
	var img = document.querySelectorAll('img') // 获取页面内所有的图片
	for (let dom of img) {
		var t =dom.offsetTop // 获取图片元素距离文档的距离
		// console.log(t)
		var inH= dom.offsetHeight // 获取图片元素滋生的高度
		// console.log(inH)
		if ((s+h) >= (t+inH+88)) { // 判断滚动距离加浏览器高度  是否大于 图片元素自身高度加它到文档顶部的距离
            var url = dom.getAttribute('data_url') // 设置图片的src属性
            dom.src= url
		}
	} 
}

export default lazyLoadImg