//用于配置邮箱的信息

//引入nodemailer模块
let nodemailer=require('nodemailer')
//引入nodemailer-smtp-transport模块
let nodemailertransport=require('nodemailer-smtp-transport')
//引入config封装的公共的配置信息
let  config=require("../config")



//配置邮箱的信息nodemailertransport（方法）
nodemailertransport=nodemailer.createTransport(nodemailertransport({
    //配置文件
    service:config.email.service,
    auth:{
        user:config.email.user,
        pass:config.email.pass
    },
    domains:[
        "qq.com"
    ],
    host:"smtp.qq.com",
    port:465,
    secure:true

}))
/**
 * @description 发送邮件
 * 
 * @param receipt {string} 收件人
 * @param subject {string} 邮件主题
 * @param html {string} 邮件内容
 */
let sendEmail=function(receipt,subject,html,callback){
    nodemailertransport.sendMail({
        from:config.email.user,
        to:receipt,
        html
    },callback)
}
module.exports=sendEmail