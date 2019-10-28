//启服务器

//引入模块
let express=require('express')
let app=express()
//为一个文件创建一个服务器，里面的文件都可以通过这个接口访问
//如果启用了两个服务器，里面的文件名相同时，访问的是第一个文件夹里的文件
app.use(express.static(__dirname+'/static'))


////需要安装 提交表单是formidable 用于提交文件，比较浪费
//则需要安装body-parser npm i body-parser --save
//引入模块body-parser 用于前端提交数据
let bodyParser=require('body-parser')
//解析参数的两种格式，相当于中间件，去解析前端发送的数据
//前端发送请求格式为application/json
let jsonParser=bodyParser.json();

//前端发送请求格式为application/x-www-form-urlencoded
let urlenParser=bodyParser.urlencoded({extended:false});


//引入接口汇总文件
let router=require("./router")

//获取前端文件
app.get('/news',router.getNewsList)

//获取验证码的接口
app.get('/getcode',router.getCode)

//注册的接口 
app.post('/register',urlenParser,router.register)

//登录的接口
app.post('/login',urlenParser,router.login)

//验证登录接口
app.post('/verifylogin',urlenParser,router.verifyLogin)

//退出登录
app.post('/loginout',urlenParser,router.loginout)

app.listen(3003)