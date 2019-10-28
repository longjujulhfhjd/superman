//注册接口

//引入封装的邮箱文件
let common=require('../controller/common')
//引入操作数据库文件
let data=require('../controller/data')
//引入url文件
let url=require("url")
//引入配置发送邮箱文件
let sendEmail=require("../controller/emailTransport")
//引入数据库文件，操作数据库
let query=require('../controller/mysql')
module.exports={
    //注册
    async register(req,res){
        // params元素
        let params=req.body
        //判断邮箱是否正确
        if(!params.email || !common.isEmail(params.email)){
            res.json({
                status:501,
                message:'邮箱格式不正确'
            })
            return false;
        }
        // 判断验证码是否存在
        if(!params.code){
            res.json({
                status:503,
                message:'请输入验证码'
            })
            return false;
        }
          // 判断密码是否存在
          if(!params.psd){
            res.json({
                status:504,
                message:'请输入密码'
            })
            return false;
        }
        //判断用户是否注册
        //查询user数据表,如果数据大于0条，则返回失败，如果为0条
       let isregister= await data.isRegister(params.email,function(){
            res.json({
                status:507,
                message:'服务器错误'
            })
            return false;
       })
       if(!isregister){
        res.json({
            status:505,
            message:'用户已经注册'
        })
        return false;
       }
       //验证验证码是否正确
       //根据时间排序表去查询对应的邮箱号的验证码，判断与当前所填的是否正确
       let iscode=await data.isCode(params.email,params.code)
       if(!iscode){
            res.json({
                status:506,
                message:'验证码不正确'
             })
        return false;
       }
       //则将数据写入数据库中
      let isdata=await data.register([params.email,params.psd])
      if(isdata){
        res.json({
            status:200,
            message:'注册成功！'
         })
      }else{
        res.json({
            status:507,
            message:'服务器错误！'
         })
      }
    },

    //获取验证码
    getCode(req,res){
        //获取前端发送来的邮箱
        //验证邮箱是否正确  req.url解析地址
        //url.parse(req.url,true)第二个参数用于将地址转换成对象
        let email=url.parse(req.url,true).query.email
         if(common.isEmail(email)){
             //验证通过就获取验证码，发送到邮箱，存到数据库
            let code= Math.round(Math.random()*8999+1000)//随机产生4位数字
            let html=`<hl class="color:red">你的邮箱验证码为${code}</h1>`
            sendEmail(email,'注册验证码',html,function(error,response){
                if(error){
                    res.json({
                        status:510,
                        message:'邮箱发送失败'
                    })
                }else{
                    let sql='insert into verify(email,code) values(?)'
                    query(sql,[[email,code]]).then(function(result){
                        res.json({
                            status:200,
                            data:code,
                            message:''
                        })
                    }).catch(function(error){
                        res.json({
                            status:502,
                            message:'失败'
                        })
                    })
                }
                
            })

         }else{
             res.json({
                 status:501,
                 message:'邮箱格式不正确'
             })
         }
    }
}