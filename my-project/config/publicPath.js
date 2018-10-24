const modulePath = process.argv[2] || ''
const obj= {
  path: '/static/project/',
  appName: 'project' 
}
if (modulePath) {
  if(modulePath == 'name') {
    obj.path= '/static/name/'
    obj.appName= 'name'
  } else {
    obj.path= '/static/project/'
    obj,appName= 'project'
  }
} else {
  if (Version == 'name') {
    obj.path= '/static/name/'
    obj.appName= 'name'
  } else {
    obj.path= '/static/project/'
    obj.appName= 'project'
  }
}
module.exports=obj
