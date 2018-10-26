import { getDefSearch } from '../../assets/js/api'
import { setPlaceholder, getPlaceholder, removePlaceholder} from '../../assets/js/cookie'

const search= {
    state: {
    	placeholder:getPlaceholder(),
    },
    mutations: {
    	SET_PLACEHOLDER: (state,placeholder)=> {
    		state.placeholder= placeholder
    	}
    },
    actions: {
    	GetPlaceholder({commit},params) {
    		getDefSearch(params)
    		.then((res)=> {
    			console.log(res)
    			if(res.status=='OK') {
//  				console.log(res.message.AcitivityTypeName)
    				commit('SET_PLACEHOLDER',res.message.AcitivityTypeName)
    			    setPlaceholder(res.message.AcitivityTypeName)
    			}
    			
    		})
    	}
    }
}

export default search