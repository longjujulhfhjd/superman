// APP开发产品ajax请求，产品APP开发数据
function getProductappData(){
	$.ajax({
		url:api + "productapp",
		type:"get",
		dataType:"json",
		success:function(res){
			res.api = api
			// 新闻渲染
			if(res.status == 200){
                let html = '';
                for(var i = 0; i< res.data.length; i++){
                    html+=` <li class="applist">
                                <span>产品标题:</span>
                                <span class="title">${res.data[i].p_title}</span>
                                <span>图片:</span>
                                <div class="img">
                                    <img src="${api+ res.data[i].p_img}"/>
                                </div>
                                <span>序号:</span>
                                <span class="id">${res.data[i].p_id}</span>
                                <a class ="fr padding-10-lr change">修改</a>
                                <a class ="fr padding-10-lr change delete">删除</a>
                                <a class ="fr padding-10-lr change">查找</a>
                            </li>`
                }
                $('.product-lists.app').html(html)
	        }
		}
	})
}
//点击添加提交产品APP开发数据 提交到后台
$('.productapp-add').click(function(){
    //form表单一定要用js 获取 FormData中需要js对象
    let form = document.querySelector('.form-add-productapp')
    //将表单中数据转为对对象传到
    let formdata =  new FormData(form)
    console.log(formdata)
    $.ajax({
        url:api + 'addproductapp',
        type: 'post',
        data: formdata,
        dataType:'json',
        contentType: false,
        //限定文件传送数据格式
        processData: false,
        success: function(res){
                if(res.status == 200){
                $('.modal-add.click-productapp').modal('hide');
                getProductappData();
            }
        }

    })
})
// 删除
$(".product-lists.app").on("click",".delete",function(){
    // 得到id
    let parent = $(this).parents('.applist')
	let id = $(this).siblings('.id').html()
        let iddata = {id:id}
        console.log(iddata)
        $.ajax({
            url:api+'delproductapp',
            type: 'post',
            data: iddata,
            dataType:'json',
            success: function(res){
                if(res.status == 200){
                    parent.remove()
                }
            }
        })
})





// 网站建设产品ajax请求数据
function getProductbuildData(){
	$.ajax({
		url:api + "productbuild",
		type:"get",
		dataType:"json",
		success:function(res){
			console.log(res)   //已经得到
			res.api = api
			// 新闻渲染
			if(res.status == 200){
                let html = '';
                for(var i = 0; i< res.data.length; i++){
                    html+=` <li class="applist">
                                <span>产品标题:</span>
                                <span class="title">${res.data[i].p_title}</span>
                                <span>图片:</span>
                                <div class="img">
                                    <img src="${api+ res.data[i].p_img}"/>
                                </div>
                                <span>序号:</span>
                                <span class="id">${res.data[i].p_id}</span>
                                <a class ="fr padding-10-lr change">修改</a>
                                <a class ="fr padding-10-lr change delete">删除</a>
                                <a class ="fr padding-10-lr change">查找</a>
                            </li>`
                }
                $('.product-lists.build').html(html)
	        }
		}
	})
}
//点击添加提交网站建设数据 提交到后台
$('.productbuild-add').click(function(){
    console.log(2222)
    // // form表单一定要用js 获取 FormData中需要js对象
    let form = document.querySelector('.form-add-productbuild')
    //将表单中数据转为对对象传到
    let formdata =  new FormData(form)
    console.log(formdata)
    $.ajax({
        url:api + 'addproductbuild',
        type: 'post',
        data: formdata,
        dataType:'json',
        contentType: false,
        //限定文件传送数据格式
        processData: false,
        success: function(res){
                if(res.status == 200){
                $('.modal-add.click-productbuild').modal('hide');
                getProductbuildData();
            }
        }

    })
})
// 删除
$(".product-lists.build").on("click",".delete",function(){
    // 得到id
    let parent = $(this).parents('.applist')
	let id = $(this).siblings('.id').html()
        let iddata = {id:id}
        console.log(iddata)
        $.ajax({
            url:api+'delProductBuild',
            type: 'post',
            data: iddata,
            dataType:'json',
            success: function(res){
                if(res.status == 200){
                    parent.remove()
                }
            }
        })
})



// 平面设计产品ajax请求数据
function getProductsignData(){
	$.ajax({
		url:api + "productsign",
		type:"get",
		dataType:"json",
		success:function(res){
			console.log(res)   //已经得到
			res.api = api
			// 新闻渲染
			if(res.status == 200){
                let html = '';
                for(var i = 0; i< res.data.length; i++){
                    html+=` <li class="applist">
                                <span>产品标题:</span>
                                <span class="title">${res.data[i].p_title}</span>
                                <span>图片:</span>
                                <div class="img">
                                    <img src="${api+ res.data[i].p_img}"/>
                                </div>
                                <span>序号:</span>
                                <span class="id">${res.data[i].p_id}</span>
                                <a class ="fr padding-10-lr change">修改</a>
                                <a class ="fr padding-10-lr change delete">删除</a>
                                <a class ="fr padding-10-lr change">查找</a>
                            </li>`
                }
                $('.product-lists.sign').html(html)
	        }
		}
	})
}
//添加
$('.productsign-add').click(function(){
    console.log(2222)
    // // form表单一定要用js 获取 FormData中需要js对象
    let form = document.querySelector('.form-add-productsign')
    //将表单中数据转为对对象传到
    let formdata =  new FormData(form)
    console.log(formdata)
    $.ajax({
        url:api + 'addproductsign',
        type: 'post',
        data: formdata,
        dataType:'json',
        contentType: false,
        //限定文件传送数据格式
        processData: false,
        success: function(res){
                if(res.status == 200){
                $('.modal-add.click-productsign').modal('hide');
                getProductsignData();
            }
        }

    })
})
// 删除
$(".product-lists.sign").on("click",".delete",function(){
    // 得到id
    let parent = $(this).parents('.applist')
	let id = $(this).siblings('.id').html()
        let iddata = {id:id}
        console.log(iddata)
        $.ajax({
            url:api+'delProductSign',
            type: 'post',
            data: iddata,
            dataType:'json',
            success: function(res){
                if(res.status == 200){
                    parent.remove()
                }
            }
        })
})