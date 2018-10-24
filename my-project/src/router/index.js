import Vue from 'vue'
import Router from 'vue-router'
const Tab = () => import(/* webpackChunkName:'tab' */'@/view/tab')
const Index = () => import(/* webpackChunkName:'index' */'@/view/index')
const Mine = () => import(/* webpackChunkName:'mine' */'@/view/mine')
const Classify = () => import(/* webpackChunkName:'classify' */'@/view/classify')
const Cart = () => import(/* webpackChunkName:'cart' */'@/view/cart')
const Login = () => import(/* webpackChunkName:'loginRegister' */'@/view/login')
const Register = () => import(/* webpackChunkName:'loginRegister' */'@/view/register')
const Search = () => import(/* webpackChunkName:'search' */'@/view/search')
const SearchResult = () => import(/* webpackChunkName:'search' */'@/view/searchResult')


let publicPath

if (Version && Version != '--inline') {
	publicPath= `static/${Version}/`
} else {
	publicPath=''
}
Vue.use(Router)

export default new Router({
	linkActiveClass:'active',
	mode: 'history',
  routes: [{
	  	path: '/nav',
	  	name: 'tab',
	  	component: Tab,
	  	children: [{
	      path: `${publicPath}index`,
	      name: 'index',
	      component: Index
	    },{
	    	path:`${publicPath}classify`,
	    	name:'classify',
	    	component:Classify
	    }]
	  },{
	  	path:`/${publicPath}cart`,
	  	name:'cart',
	  	component:Cart
	  },{
	  	path:`/${publicPath}mine`,
	  	name:'mine',
	  	component:Mine
	  },{
	  	path:`/${publicPath}login`,
	  	name:'login',
	  	component:Login
	  },{
	  	path:`/${publicPath}register`,
	  	name:'register',
	  	component:Register
	  },{
	  	path:`/${publicPath}search`,
	  	name:'search',
	  	component:Search
	  },{
	  	path:`/${publicPath}searchResult`,
	  	name:'result',
	  	component:SearchResult
	  },{
	  	path:'*',
	    redirect:{
	    	name:'index',
	    	component:Index
	    }
	  }
   
  ]
})
