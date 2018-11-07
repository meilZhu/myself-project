import router from '../../router'

const scrollTop = () => {
    var scrollToptimer = setInterval(function () {
        // console.log("定时循环回到顶部")
	    var top = document.body.scrollTop || document.documentElement.scrollTop
	    var speed = top / 4
	    if (document.body.scrollTop!=0) {
	        document.body.scrollTop -= speed
	    } else {
	        document.documentElement.scrollTop -= speed
	    }
	    if (top == 0) {
	        clearInterval(scrollToptimer)
	    }
	}, 1) 
}

const top = () => {
	var top= document.body.scrollTop || document.documentElement.scrollTop
	if (top>0) {
		document.documentElement.scrollTop=document.body.scrollTop=0
	}
}

router.beforeEach((to,from,next) => {
	top()
	next()
})
