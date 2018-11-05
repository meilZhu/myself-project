const axios = require('axios')
const qs = require('qs')
var baseURL=''

if (process.env.NODE_ENV != 'development') {
	baseURL = process.env.API_ROOT
}

axios.interceptors.request.use(config => {
  if (localStorage.getItem('api_token')) {
   	config.header.apiToken = `${localStorage.getItem('api_token')}`
  }
  return config
}, err => {
  return Promise.reject(err)
})

axios.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.reject(error)
})

function checkStatus (res, resolve, reject) {
  if (res.status == '200') {
    return resolve(res.data)
  } else {
    return reject(res)
  }
}

export default function (method, url, params) {
  return new Promise((resolve, reject) => {
    if (method == 'post') {
	  axios({
        method: 'post',
        baseURL: baseURL,
        url,
        data: qs.stringify(params),
        timeout: 5000,
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      }).then(
        (response) => {
          checkStatus(response, resolve, reject)
        }
      ).then(
        (error) => {
          reject(error)
        }
      )
    } else if (method == 'get') {
      axios({
        method: 'get',
        baseURL: baseURL,
        url,
        params, // get 请求时带的参数
        timeout: 5000,
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        }
      }).then(
        (response) => {
          checkStatus(response, resolve, reject)
        }
      ).then(
        (error) => {
          reject(error)
        }
      )
    } else if (method == 'postJson') {
      axios({
        method: 'post',
        baseURL: baseURL,
        url,
        data: JSON.stringify(params),
        timeout: 5000,
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          'Content-Type': 'application/json'
        }
      }).then(
        (response) => {
          checkStatus(response, resolve, reject)
        }
      ).then(
        (error) => {
          reject(error)
        }
      )
    } else if (method == 'postForm') {
	  axios({
        method: 'post',
        baseURL: baseURL,
        url,
        data: params, // 这里不转换就对了
        timeout: 5000,
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          'Content-Type': undefined // 当上传的时候不设置Content-Type默认就是formData格式的，boundary也是自动生成的
        }
      }).then(
        (response) => {
          checkStatus(response, resolve, reject)
        }
      ).then(
        (error) => {
          reject(error)
        }
      )
    }
  })
}
