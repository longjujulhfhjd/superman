//操作数据库数据库的一切操作
//引入数据库连接池
let query =require('../mysql.js')
module.exports={
    massage:async function(data){
        let sql='insert into connect(name,email,tel,address,massage) values(?)'
        let result = await query(sql,[data]).catch(function(res){
            console.log(res)
        })
        console.log(result)
        if(result){
            return true;
        }else{
            return false;
        }
       
    },
    caseshow: async function() {
        let sql = 'select * from case_img'
        let result = await query(sql,'')
        if(result){
            return result;
        }else{
            return false;
        }
    },
    news:async function(){
        let sql='select * from news'
        let result=await query(sql,'')
        if(result){
            return result;
        }
        else{
            return false;
        }
    },
    recommend:async function(){
        let sql='select * from recommend'
        let result=await query(sql,'')
        if(result){
            return result;
        }
        else{
            return false;
        }
    },
    caseDetail:async function(){
        let sql='select * from  case_img'
        let result=await query(sql,'')
        if(result){
            return result;
        }
        else{
            return false;
        }
    },  
    app1:async function(){
        let sql='select * from  p_app1'
        let result=await query(sql,'')
        if(result){
            return result;
        }
        else{
            return false;
        }
    }, 
    app2:async function(){
        let sql='select * from  p_app2'
        let result=await query(sql,'')
        if(result){
            return result;
        }
        else{
            return false;
        }
    },  
    sign:async function(){
        let sql='select * from  p_sign'
        let result=await query(sql,'')
        if(result){
            return result;
        }
        else{
            return false;
        }
    },
    build:async function(){
        let sql='select * from  p_build'
        let result=await query(sql,'')
        if(result){
            return result;
        }
        else{
            return false;
        }
    },
    indexCase: async function(){
        let sql='select * from   case_img'
        let result=await query(sql,'')
        if(result){
            return result;
        }
        else{
            return false;
        } 
    },
    search: async function(data){
        console.log(data)
        let total = []
        let table = [['case_img','title'],['news','title']]
        for(let tab of table) {
            let sql='select * from ' + tab[0] + ' where ' + tab[1] + ' like "%' + data + '%"'
            console.log(sql)

            let result=await query(sql,[data]).catch(function(err){
                
            })
            if(!result){
                return false;
            }
            console.log(result)
            total = total.concat(result) 
            // console.log(total)                                                                                                                                                              
        }   
       
        return total
    },
    productrecommend:async function(){
        let sql='select * from  p_recommend'
        let result=await query(sql,'')
        if(result){
            return result;
        }
        else{
            return false;
        }
    },  
    // productdetail:async function(){
    //     let sql='select * from  product'
    //     let result=await query(sql,'')
    //     if(result){
    //         return result;
    //     }
    //     else{
    //         return false;
    //     }
    // },
}