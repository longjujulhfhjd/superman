//接口
//引入操作数据库文件
let data=require('../controller/handdata')
//引入url文件
let url=require("url")
//引入数据库文件，操作数据库
let query=require('../controller/mysql')
module.exports={
    async getProductRecommend(req,res) {  
         //查询数据
        let result = await data.productrecommend()
         res.json({
             success:200,
             data:result
         })              
    }
}
