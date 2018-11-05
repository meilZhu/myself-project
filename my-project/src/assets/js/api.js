import apiFetch from './getFetch'

export const getDetail = params => {
	return apiFetch('get','/url',params)
}
// 密码登录接口
export const login = params => {
	return apiFetch('post','/login2',params)
}
// 快速登录接口(微信)
export const wxFastLogin = params => {
	return apiFetch('get','/wx/wxLogin',params)
}
// 快速登录 （浏览器）获取验证码
export const fastLogin = params => {
	return apiFetch('get','/sendSms',params)
}
// 快速注册（浏览器）获取验证码
export const getCode = params => {
	return apiFetch('get','/sendSms',params)
}
// 注册接口
export const register = params => {
	return apiFetch('post', 'url', params)
}
// 登出接口
export const logout = params => {
	return apiFetch('get', 'url',params)
}

// 获取搜索口默认搜索值的接口
export const getDefSearch = params => {
	return apiFetch('get', '/zhanTuan/activityDetail', params)
}
