//登录板块

//引入封装验证邮箱文件
let common=require('../controller/common')
//引入操作数据库的文件
let  data=require('../controller/data')
//引入获取token模块
let  jwt=require('jsonwebtoken')
module.exports={
    //登录
    async login (req,res) {
        //1.判断用户信息

        //前端传来的email和password
        let password=req.body.password     
        let email =req.body.email


        //1.1验证邮箱
        if(!email || !common.isEmail(email)){
            res.json({
                status:501,
                message:'邮箱格式不正确'
            })
            return false;
        }
        //1.2验证密码
        if(!password){
              res.json({
                status:504,
                message:'请输入密码'
            })
            return false;
        }

        //2.验证用户名和密码是否正确
        //去数据库查找用户名和密码，只要有一个不正确就返回用户名或者密码错误，提高安全性
        let isuser= await  data.login([email,password])
        if(isuser){
            // 3.获取token插件npm i jsonwebtoken --save
            //获取前台来胡数据，并且加密
            //sign({加密数据},'加密的秘钥')
            let token= jwt.sign({email:email},'jwt',{
                 //在线1分钟
                 expiresIn:60*60*1
             })

             //4返回用户信息
              res.json({
                status:200,
                data:{
                    token,
                    info:{
                        email:isuser.email,
                        password:isuser.password
                    }
                },
                message:'ok'
            })

        }else{
            res.json({
                status:508,
                message:'用户名或密码错误！'
            })
            return false;
        }


    },
    //验证登录
     verifyLogin(req,res){
        //拿到token 后台获取前端发送请求的token
        let  token=req.body.token;
        /** 
         * @description  jwt.verify  验证token
         * @param err登录失效
         * @param result 登录的token
         */
        jwt.verify(token,'jwt',function(err,result){
            if(err){
                res.json({
                    status:512,
                    message:'登录已过期，请重新登录！'
                })
            }else{
                res.json({
                    status:200,
                    message:'ok'
                })
            }
        })
    },
    //退出登录
    /**
     * @description  loginout退出登录
     * 判断邮箱是否存在，返回状态
     * @param  req 
     * @param  res 
     */
    async  loginout(req,res){
        //获取邮箱
        let email=req.body.email;
        let isregister=await data.isRegister(email)
        if(!isregister){
            res.json({
                status:200,
                massage:'ok'
            })
        }else{
            res.json({
                status:513,
                massage:'用户未登录！'
            })

        }
    }
}