// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import './assets/css/base.scss'
import './assets/css/styl.scss'
import './assets/js/rem'
import store from './store'
import router from './router'

import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const requireComponent=require.context(
	'./components/base', // 其组件目录的相对路径
	false, // 是否查询其子目录
	/\w+\.(vue|js)$/ // 匹配基础组件文件名的正则表达式
)
requireComponent.keys().forEach(fileName => {
	const componentConfig=requireComponent(fileName) // 获取组件配置
	const componentName = upperFirst( // 获取组件的 PascalCase 命名
		camelCase( // 剥去文件名开头的 `'./` 和结尾的扩展名
			fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
		)
	)
//	console.log(componentName)
	Vue.component( // 全局注册组件
		componentName,  
		// 如果这个组件选项是通过 `export default` 导出的，
    // 那么就会优先使用 `.default`，
    // 否则回退到使用模块的根。
		componentConfig.default || componentConfig
	)
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
