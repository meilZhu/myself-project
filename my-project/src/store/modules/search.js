import { getDefSearch } from '../../assets/js/api'
import {setPlaceholder, getPlaceholder, removePlaceholder} from '../../assets/js/cookie'

const search= {
    state: {
    	placeholder: getPlaceholder()
    },
    mutations: {
    	SET_PLACEHOLDER: (state,placeholder) => {
    		state.placeholder= placeholder
    	}
    },
    actions: {
    	GetPlaceholder ({commit},params) {
    		getDefSearch(params)
    		.then((res) => {
    			console.log(res)
    			if (res.status=='OK') {
//  				console.log(res.message.AcitivityTypeName)
					// commit('SET_PLACEHOLDER',res.message.AcitivityTypeName)  //他的作用是在调取接口是就将其赋值，使各个组件可以立即拿到想要的值
					commit('SET_PLACEHOLDER','战团新战绩')
					// setPlaceholder(res.message.AcitivityTypeName)         //这里的作用是利用cookie本地储存，在后面页面刷新时，和可以拿到想要的值
					setPlaceholder('战团新战绩')
    			}
    		})
    	}
    }
}

export default search