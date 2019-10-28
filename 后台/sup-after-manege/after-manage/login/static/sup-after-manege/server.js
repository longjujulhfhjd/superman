//监听接口
let express = require('express');
let mysql = require('mysql');
let path = require('path')
// 引入上传图片模块
let formidable = require('formidable')
let app = express();


//静态服务器  某个文件夹下的文件可以通过当前服务器设置的端口和ip访问
// 没有启用静态服务器则需要进行跨域解决
// app.use(express.static('./html/houtai'))
// app.use(express.static('./html/BG0'))
app.use(express.static('./after-manage'))

//upload 这个文件夹起了一个服务器
//这个文件夹之后全部用来存放图 这个文件夹就变成图片服务器
app.use(express.static('./image'))

//创建数据库连接
let connect = mysql.createConnection({
    host: '192.168.97.247',
    user: 'root',
    password: 'root',
    database: 'superman'
})

//连接数据库
connect.connect()

//跨域
app.all('*',function(req,res,next){
    res.header("Access-Control-Allow-Origin","*")
    next();
});


//使用get请求监听接口
//从数据库中获取案例数据 已经可以获取
app.get('/case',function(req,res){
    //查询数据库数据
    connect.query('select * from case_img',function(err,data){
        // console.log(data)
        if(!err){
            //返回接口数据， 并结束接口请求
            res.json({
                status: 200,
                data:data
            })
        }else{
            res.json({
                status: 500,
                data:[]
            })
        } 
    })
})

//监听添加案例的接口
app.post('/addcase', function(req,res){
    //获取请求参数
    //获取传入的form表单 解析地址传入的form表单
    let form = new formidable.IncomingForm();

    //设置图片上传的地址
    form.uploadDir = './image';
    //保留图片后缀名
    form.keepExtensions = true;
    //解析参数
    //fileds 除了上传的图片外，其他的数据
    //files 上传的文件
    form.parse(req,function(err,fields,files){
        //将获取的参数写入数据库
        // console.log(files)
        // console.log(fields)
        let filebase = path.parse(files.img.path).base;
        // console.log(filebase)
        //?号代表sql语句需要的参数
        let sql = 'insert into case_img(c_title, c_img) values (?)';
        let data = [fields.title, filebase];
        connect.query(sql,[data],function(err,data){
            console.log(err)
            if(!err){
                res.json({
                    status:200,
                    data:''
                })
            }
        })
    })


})

console.log('port:' + 3000)
app.listen(3000)

