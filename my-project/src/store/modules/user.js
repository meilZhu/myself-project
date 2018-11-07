import {getUserName, setUserName, removeUserName} from '../../assets/js/cookie'
import {login, fastLogin, logout} from '../../assets/js/api'
import appObj from '../../utils/publicPath'

const user = {
	state: {
		name: getUserName()
	},
	mutations: {
		SET_NAME: (state,name) => {
			state.name= name
		}
	},
	actions: {
		AccountLogin ({ commit }, userInfo) {
			login(userInfo)
			.then((res) => {
				if (res.status == '200') {
					setUserName(res.data.name)
					commit('SET_NAME',res.data.name)					
				}
			}).catch((err) => {
				console.log(err)
			})
		},
		FastLogin ({commit},userInfo) {
			fastLogin(userInfo)
			.then((res) => {
				console.log(res)
				setUserName(res.data.name)
				commit('SET_NAME',res.data.name)
			}).catch((err) => {
				console.log(err)
			})
		},
		Logout ({commit,state}) {
			logout()
			.then((res) => {
				if (res.status=='200') {
					removeUserName()
					commit('SET_NAME','')
					this.$router.push({path: `${appObj.path}nav/index`})
				}
			})
		}
	}
}

export default user
