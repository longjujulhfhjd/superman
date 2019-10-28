//所有的接口回调汇总/
//汇总消息板块
let news=require('./news')
//汇总登录模块
let login=require('./login')
//汇总注册模块
let register=require('./register')
//Object.assign合并对象
let option =Object.assign({},news,login,register)

module.exports=option
