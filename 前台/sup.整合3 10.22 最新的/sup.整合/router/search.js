let data=require('../controller/handdata')
//引入url文件
let url=require("url")
//引入数据库文件，操作数据库
let query=require('../controller/mysql')
module.exports={
    async getSearch(req,res) {  
         //查询数据
         let searchText = req.body.text
        let result = await data.search(searchText)
        console.log(result)
         res.json({
             success:200,
             data:result
         })              
    }
}
