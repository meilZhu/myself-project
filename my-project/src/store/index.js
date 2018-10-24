import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import user from './modules/user'
import search from './modules/search'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		
	},
	modules:{
		user,
		search
	},
	getters
})

export default store