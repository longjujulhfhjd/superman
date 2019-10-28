//提交留言接口
//引入操作数据库文件
let data=require('../controller/handdata/handdata')
//引入url文件
let url=require("url")
//引入数据库文件，操作数据库
let query=require('../controller/mysql')
module.exports={
    async getCaseDetaile(req,res) {  
         //查询数据
        let result = await data.caseDetail()
        res.json({
            status:200,
            data:result
        })              
    }
}

