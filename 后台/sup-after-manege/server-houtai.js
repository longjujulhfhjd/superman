//监听接口
let express = require('express');
let mysql = require('mysql');
let path = require('path')
let bodyparser = require('body-parser')
let jsonpsrser = bodyparser.json()
let urlencoded = bodyparser.urlencoded({extended:false})
let formidable = require('formidable')
let app = express();
app.use(jsonpsrser)
app.use(urlencoded)
// 引入上传图片模块


app.use(express.static('./after-manage'))
// 启动图片静态服务器
app.use(express.static('./upload'))
// app.use(express.static('./image'))

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


// 案例
//获取
app.get('/case',function(req,res){
    //查询数据库数据
    connect.query('select * from case_img',function(err,data){
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
//添加
app.post('/addcase', function(req,res){
    let form = new formidable.IncomingForm();
    //设置图片上传的地址
    form.uploadDir = './upload';
    form.keepExtensions = true;
    form.parse(req,function(err,fields,files){
        //将获取的参数写入数据库
        let filebase = path.parse(files.img.path).base;
        let sql = 'insert into case_img(title,img) values (?)';
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
//删除
app.post('/delcase',urlencoded, function(req,res){
    let data = req.body.id 
    let sql = 'delete from case_img where id = ?';
        connect.query(sql,[data],function(err,data){
            console.log(err)
            if(!err){
                res.json({
                    status:200,
                    data:data
                })
            }
        })


})


//新闻
// 获取
app.get('/information',function(req,res){
    //查询数据库数据
    connect.query('select * from news',function(err,data){
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
//添加
app.post('/addinformation', function(req,res){
    let form = new formidable.IncomingForm();
    //设置图片上传的地址
    form.uploadDir = './upload';
    form.keepExtensions = true;
    form.parse(req,function(err,fields,files){
        //将获取的参数写入数据库
        let filebase = path.parse(files.img.path).base;
        let sql = 'insert into news(title, img, author, text) values (?)';
        let data = [fields.title, filebase, fields.author,fields.text];
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
//删除
app.post('/delInformation',urlencoded, function(req,res){
    let data = req.body.id
    let sql = 'delete  from news where id = ?';
        connect.query(sql,[data],function(err,data){
            if(!err){
                res.json({
                    status:200,
                    data:data
                })
            }
        })

})


//新闻热门推荐
//获取 
app.get('/newsRecommend',function(req,res){
    //查询数据库数据
    connect.query('select * from recommend',function(err,data){
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
//添加
app.post('/addNewsrecommend', function(req,res){
    console.log(res)
    let form = new formidable.IncomingForm();
    //设置图片上传的地址
    form.uploadDir = './upload';
    form.keepExtensions = true;
    form.parse(req,function(err,fields,files){
        // console.log(fields)
        // console.log(files)
        //将获取的参数写入数据库
        let filebase = path.parse(files.img.path).base;
        let sql = 'insert into recommend(title,img) values (?)';
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
//删除
app.post('/delNewsrecommend',urlencoded, function(req,res){
    // console.log(req.body.iddata)
    // console.log(req.body.iddata)
    console.log(req.body.id)
    let data = req.body.id 
    
    let sql = 'delete from  recommend where id = ?';
        connect.query(sql,[data],function(err,data){
            console.log(err)
            if(!err){
                res.json({
                    status:200,
                    data:data
                })
            }
        })


})


//APP开发产品
// 获取
app.get('/productapp', function(req,res){
        //查询数据库数据
        connect.query('select * from p_app2',function(err,data){
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
//添加
app.post('/addproductapp', function(req,res){
    let form = new formidable.IncomingForm();
    //设置图片上传的地址
    form.uploadDir = './upload';
    //保留图片后缀名 
    form.keepExtensions = true;
    // 获取表单数据
    form.parse(req,function(err,fields,files){
        // console.log(fields)
        // console.log(files)
        //将获取的参数写入数据库
        let filebase = path.parse(files.img.path).base;
        let sql = 'insert into p_app2(p_title,p_img) values (?)';
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
//删除
app.post('/delproductapp',urlencoded, function(req,res){
    let data = req.body.id
    let sql = 'delete  from  p_app2 where p_id = ?';
        connect.query(sql,[data],function(err,data){
            if(!err){
                res.json({
                    status:200,
                    data:data
                })
            }
        })

})


// 网站建设产品
// 获取
app.get('/productbuild', function(req,res){
    //查询数据库数据
    connect.query('select * from p_build',function(err,data){
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
//添加
app.post('/addproductbuild', function(req,res){
let form = new formidable.IncomingForm();
//设置图片上传的地址
form.uploadDir = './upload';
//保留图片后缀名 
form.keepExtensions = true;
// 获取表单数据
form.parse(req,function(err,fields,files){
    // console.log(fields)
    // console.log(files)
    //将获取的参数写入数据库
    let filebase = path.parse(files.img.path).base;
    let sql = 'insert into p_build(p_title,p_img) values (?)';
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
//删除
app.post('/delProductBuild',urlencoded, function(req,res){
    let data = req.body.id
    let sql = 'delete  from p_build where p_id = ?';
        connect.query(sql,[data],function(err,data){
            if(!err){
                res.json({
                    status:200,
                    data:data
                })
            }
        })

})


// 平面设计产品
// 获取
app.get('/productsign', function(req,res){
    //查询数据库数据
    connect.query('select * from p_sign',function(err,data){
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
//添加
app.post('/addproductsign', function(req,res){
let form = new formidable.IncomingForm();
//设置图片上传的地址
form.uploadDir = './upload';
//保留图片后缀名 
form.keepExtensions = true;
// 获取表单数据
form.parse(req,function(err,fields,files){
    // console.log(fields)
    // console.log(files)
    //将获取的参数写入数据库
    let filebase = path.parse(files.img.path).base;
    let sql = 'insert into p_sign(p_title,p_img) values (?)';
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
//删除
app.post('/delProductSign',urlencoded, function(req,res){
    let data = req.body.id
    let sql = 'delete  from p_sign where p_id = ?';
        connect.query(sql,[data],function(err,data){
            if(!err){
                res.json({
                    status:200,
                    data:data
                })
            }
        })

})


// 产品热门推荐
// 获取
app.get('/productRecommend', function(req,res){
    //查询数据库数据
    connect.query('select * from p_recommend',function(err,data){
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
//添加
app.post('/addProductRecommend', function(req,res){
let form = new formidable.IncomingForm();
//设置图片上传的地址
form.uploadDir = './upload';
//保留图片后缀名 
form.keepExtensions = true;
// 获取表单数据
form.parse(req,function(err,fields,files){
    // console.log(fields)
    // console.log(files)
    //将获取的参数写入数据库
    let filebase = path.parse(files.img.path).base;
    let sql = 'insert into p_recommend(p_title,p_img) values (?)';
    let data = [fields.title, filebase];
    connect.query(sql,[data],function(err,data){
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
//删除
app.post('/delProductRecommend',urlencoded, function(req,res){
    let data = req.body.id
    let sql = 'delete  from p_recommend where p_id = ?';
        connect.query(sql,[data],function(err,data){
            if(!err){
                res.json({
                    status:200,
                    data:data
                })
            }
        })

})


//产品详细页面
// 获取
app.get('/productInto', function(req,res){
    //查询数据库数据
    connect.query('select * from product',function(err,data){
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
//添加
app.post('/addProductInto', function(req,res){
let form = new formidable.IncomingForm();
//设置图片上传的地址
form.uploadDir = './upload';
//保留图片后缀名 
form.keepExtensions = true;
// 获取表单数据
form.parse(req,function(err,fields,files){
    // console.log(fields)
    // console.log(files)
    //将获取的参数写入数据库
    let filebase1 = path.parse(files.img1.path).base;
    let filebase2 = path.parse(files.img2.path).base;
    let filebase3 = path.parse(files.img3.path).base;
    let filebase4 = path.parse(files.detailed1.path).base;
    let filebase5 = path.parse(files.detailed2.path).base;
    let filebase6 = path.parse(files.detailed3.path).base;

    let sql = 'insert into product(title,eye,img1,img2,img3,detailed1,detailed2,detailed3,text) values (?)';
    let data = [fields.title,fields.eye, filebase1,filebase2,filebase3,filebase4,filebase5,filebase6,fields.text];
    connect.query(sql,[data],function(err,data){
        if(!err){
            res.json({
                status:200,
                data:''
            })
        }
    })
})

})
//删除
app.post('/delProductInto',urlencoded, function(req,res){
    let data = req.body.id
    console.log(data)
    let sql = 'delete  from product where id = ?';
        connect.query(sql,[data],function(err,data){
            if(!err){
                res.json({
                    status:200,
                    data:data
                })
            }
        })

})




console.log('port:' + 3000)
app.listen(3000)

