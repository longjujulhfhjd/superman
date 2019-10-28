//封装数据库连接池
//引入mysql
let mysql=require('mysql')
let config=require('../config')
let pool=mysql.createPool(config.mysql)
// 操作数据库
let query=function(sql,data){

    //解决异步，promise返回一个实例
    return new Promise(function(resolve,reject){  
        //getconnection 获取连接 回调函数中返回
        //err 连接是否失败
        //connetion 获取连接的信息
        pool.getConnection(function(err,connetion){
            if(!err){
                //sql查询的语句
                //data查询过程中需要的数据
                //error 查询的错误信息
                //result 查询的结果
                connetion.query(sql,data,function(error,result){
                   if(!error){
                        //将查询结果返回存入result
                        resolve(result)
                   }else{
                        reject(error)
                   }
                   //释放资源内存
                   connetion.release()
                })
            }else{
                reject(error)
            }
        })
    })


}
module.exports=query