//所有接口回调汇总
let caseshow = require('./caseshow')

let news = require('./news')

let recommend = require('./recommend')

let  massage=require('./massage')

let product=require('./product')

let caseDetail=require('./casedetail')

let app1 = require('./app1')

let  app2=require('./app2')

let build=require('./build')

let sign=require('./sign')

let indexcase=require('./indexcase')

let search=require('./search')

let productrecommend=require('./productrecommend')

let productdetail=require('./productdetail')

let option=Object.assign({},massage,caseshow,news,recommend,product,
    caseDetail,app1,app2,build,sign,indexcase,search,productrecommend,productdetail)

module.exports=option