const modulePath = process.argv[2] || '' 
const obj= {
	path: `/`,
	appName: ''
}

if (modulePath && modulePath != '--inline') {
	obj.path= `/static/${modulePath}/`
	obj.appName= `${modulePath}`
} else {
	obj.path= '/'
	obj.appName = ''
}
 
module.exports= obj