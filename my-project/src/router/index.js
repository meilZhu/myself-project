import Vue from 'vue'
import Router from 'vue-router'
const Tab = () => import(/* webpackChunkName:'tab' */'@/view/tab')
const Index = () => import(/* webpackChunkName:'index' */'@/view/index')
const Mine = () => import(/* webpackChunkName:'mine' */'@/view/mine')
const Classify = () => import(/* webpackChunkName:'classify' */'@/view/classify')
const Cart = () => import(/* webpackChunkName:'cart' */'@/view/cart')
const Login = () => import(/* webpackChunkName:'loginRegister' */'@/view/login/login')
const Register = () => import(/* webpackChunkName:'loginRegister' */'@/view/login/register')
const Search = () => import(/* webpackChunkName:'search' */'@/view/search/search')
const SearchResult = () => import(/* webpackChunkName:'search' */'@/view/search/searchResult')
const BrowserHistory = () => import(/* webpackChunkName:'search' */'@/view/search/browserhistory')

let publicPath

if (Version && Version != '--inline') {
	publicPath= `static/${Version}/`
} else {
	publicPath=''
}
Vue.use(Router)

export default new Router({
	linkActiveClass: 'active',
	mode: 'history',
  routes: [{
	  	path: `/${publicPath}nav`,
	  	name: 'tab',
	  	component: Tab,
	  	children: [{
	      path: `index`,
	      name: 'index',
	      component: Index
	    },{
	    	path: `classify`,
	    	name: 'classify',
	    	component: Classify
	    }]
	  },{
	  	path: `/${publicPath}cart`,
	  	name: 'cart',
	  	component: Cart
	  },{
	  	path: `/${publicPath}mine`,
	  	name: 'mine',
	  	component: Mine
	  },{
	  	path: `/${publicPath}login`,
	  	name: 'login',
	  	component: Login
	  },{
	  	path: `/${publicPath}register`,
	  	name: 'register',
	  	component: Register
	  },{
	  	path: `/${publicPath}search`,
	  	name: 'search',
	  	component: Search
	  },{
	  	path: `/${publicPath}searchResult`,
	  	name: 'result',
	  	component: SearchResult
	  },{
	  	path: `/${publicPath}browserHistory`,
	  	name: 'browserhistory',
	  	component: BrowserHistory
	  },{
	  	path: '*',
	    redirect: {
	    	name: 'index',
	    	component: Index
	    }
	  }
   
  ]
})
