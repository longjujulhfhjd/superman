// 操作数据库数据库的一切操作都在这里面
//引入封装的资源池
let query =require('../mysql.js')
module.exports={
    isRegister:async function(email,callback){
    let data= await query('select * from user where email=?',email).catch(function(err){
        callback
    })
    if(data.length>0){
        return false;

    }else{
        return 1;
    }
    },
    isCode:async function(email,code){
        let sql='select * from verify where email= ?  order by createTime desc'
        let data=await query(sql,email)
        if(data.length<=0){return false}
        //获取第一条数据
       if(data[0].code == code){
           return true;
       }else{
        return false;
       }
    },
    register:async function(data){
        let sql='insert into user(email,passwords) values(?)'
        let result = await query(sql,[data]).catch(function(res){
            console.log(res)
        })
        if(result){
             return true;
        }else{
            return false;
        }
       
    },
    //验证用户登录信息
    login:async function(data){
        let sql='select * from user where email= ? and passwords= ?'
        let result=await query(sql ,data)
        if(result.length>0){
             return result[0];
        }else{
            return false;
        }
       
    }
}