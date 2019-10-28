//引入模块
let express=require('express')
let app=express()
let router=require("./router")
////需要安装 提交表单是formidable 用于提交文件，比较浪费
//则需要安装body-parser npm i body-parser --save
//引入模块body-parser 用于前端提交数据
let bodyParser=require('body-parser')
//解析参数的两种格式，相当于中间件，去解析前端发送的数据
//前端发送请求格式为application/json
let jsonParser=bodyParser.json();

//前端发送请求格式为application/x-www-form-urlencoded
let urlenParser=bodyParser.urlencoded({extended:false});
app.use(jsonParser)
app.use(urlenParser)



// 跨域
app.all("*",function(req,res,next){
    res.header("Access-Control-Allow-Origin","*")
    next()
})
// 项目
app.use(express.static(__dirname+'/static'))

// 图片
app.use(express.static('./upload'))

// 添加新闻列表
app.get("/news",router.getNews)

// 为你推荐
app.get("/recommend",router.getRecommend)

// 案例展示
app.get("/case",router.getCase)

// 留言
app.post('/massage',router.massage)

//案例展示详情
app.get('/casedetail',router.getCaseDetaile)

//案例展示详情按钮
app.get('/casedetailbtn',router.getCaseDetaile)

//首页案例展示
app.get('/indexcase',router.getIndexCase)

//产品详情页推荐
app.get("/productrecommend",router.getProductRecommend)

//产品中心
app.get("/app1",router.getApp1)

//产品中心
app.get("/app2",router.getApp2)

//产品中心
app.get("/build",router.getBuild)

//产品中心
app.get("/sign",router.getSign)

// 搜索
app.post("/search",router.getSearch)

//产品详情描述渲染
// app.get("/productdetail",router.getProductDetail)

console.log(3006)
app.listen(3006)