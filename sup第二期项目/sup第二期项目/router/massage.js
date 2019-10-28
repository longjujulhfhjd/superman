//提交留言接口
//引入封装的邮箱文件
let common=require('../controller/common')
//引入操作数据库文件
let data=require('../controller/handdata')
//引入url文件
let url=require("url")
//引入数据库文件，操作数据库
let query=require('../controller/mysql')
module.exports={
    //提交留言
    async massage(req,res){
        // params元素
        let params=req.body
         // 1.判断姓名是否存在
         if(!params.name){
            res.json({
                status:501,
                message:'请输入姓名'
            })
            return false;
        }
        //2.判断邮箱是否正确
        if(!params.email || !common.isEmail(params.email)){
            res.json({
                status:502,
                message:'邮箱格式不正确'
            })
            return false;
        }
         // 3.判断电话是否存在并且是否是正确形式
         if(!params.telnum || !common.isTelnumber(params.telnum)){
            res.json({
                status:503,
                message:'电话格式不正确'
            })
            return false;
        }
         //4. 联系地址是否存在
         if(!params.address){
            res.json({
                status:504,
                message:'请输入地址'
            })
            return false;
        }
         // 5.判断密码是否存在
         if(!params.massage){
            res.json({
                status:505,
                message:'请输入留言'
            })
            return false;
        }
         //6.则将数据写入数据库中
         let massage=await data.massage([params.name,params.email,params.telnum,params.address,params.massage])
         if(massage){
           res.json({
               status:200,
               message:'提交留言成功！'
            })
         }else{
           res.json({
               status:506,
               message:'服务器错误！'
            })
         }
       
    }
}

