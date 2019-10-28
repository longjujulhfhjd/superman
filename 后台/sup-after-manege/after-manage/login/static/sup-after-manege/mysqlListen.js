//监听接口
let express = require('express');
let mysql = require('mysql');
let path = require('path');
//引入上传图片模块
let formidable = require('formidable');
let app = express();


// 解析图片
//引入formidable
//安装formidable  npm i formidable --save
//静态服务器 某个文件夹下的文件可以通过当前服务器设置的端口和ip访问
app.use(express.static('./shop/html/backPage'))
// 给图片启动一个服务器
app.use(express.static('./upload'))
//创建数据库连接 upload 这个文件夹专门用来存放如偏，相当与一个图片服务器
let conn = mysql.createConnection({
    host:'192.168.97.235',
    user:'root',
    password:'root',
    database:'shop'
})

//连接数据库

conn.connect();
//跨域
app.all('*',function(req,res,next){
    res.header("Access-Control-Allow-Origin","*")
    next();
});

// let sql = 'select * from goods';

//使用get请求监听接口
//从数据库获取goods表中的数据并返回到接口数据中
app.get('/goods',function(req,res){
    //查询数据库
    conn.query('select * from goods_table',function(err,data){

        if(!err){
            //返回接口数据，并结束接口请求
            res.json({
                status:200,
                data:data
            })
        }else{
            res.json({
                status:500,
                data:[]
            })
        }
    }) 
});

//获取商品分类列表接口
app.get('/class',function(req,res){
    conn.query('select * from class_table',function(err,data){
        if(!err){
            //返回接口数据，并结束接口请求
            res.json({
                status:200,
                data:data
            })
        }else{
            res.json({
                status:500,
                data:[]
            })
        }
    })
})


//监听添加商品的接口
app.post('/addgoods',function(req,res){
    //获取请求的参数
    //获取传入的form表单 解析地址传入的form表单
    let form = new formidable.IncomingForm();

    //设置图片上传的地址
    form.uploadDir = './upload';

    //保留图片后缀名
    form.keepExtensions = true;

    //解析参数
    //fileds 除了上传的图片外，其他的数据
    //files 上传的文件
    form.parse(req,function(err,fields,files){
        //将获取的参数写入数据库
        //console.log(files)
        // 将获取到的参数写入数据库
        console.log(files)
        let filebase = path.parse(files.img.path).base;
        // console.log(filebase)
        //?号代表sql语句需要的参数
        let sql = 'insert into goods_table(g_name,g_price,g_store,g_class,g_imgs) values (?)';
        let data = [fields.name,fields.price,fields.store,fields.class,filebase];
        conn.query(sql,[data],function(err,data){
            // console.log(err)
            if(!err){
                res.json({
                    status:200,
                    data:''
                })
            }
        })
    })
})

// 为了避免以后服务器多分不清楚端口
console.log('port:' + 3002);
app.listen(3002);