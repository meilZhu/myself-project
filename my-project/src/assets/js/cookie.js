import Cookie from 'js-cookie'

const userName = 'user-name'
const defPlaceholder = 'search-placeholder'

//用户名
export function getUserName() {
	return Cookie.get(userName)
}

export function setUserName(name) {
	return Cookie.set(userName , name)
}

export function removeUserName() {
	return Cookie.remove(UserName)
}
//默认搜索placeholder
export function getPlaceholder() {
	return Cookie.get(defPlaceholder)
}

export function setPlaceholder(placeholder) {
	return Cookie.set(defPlaceholder, placeholder)
}

export function removePlaceholder() {
	return Cookie.remove(defPlaceholder)
}
