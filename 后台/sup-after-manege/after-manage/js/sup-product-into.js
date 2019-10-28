// 网站建设产品ajax请求数据
function getProductIntoData(){
	$.ajax({
		url:api + "productInto",
		type:"get",
		dataType:"json",
		success:function(res){
			res.api = api
			// 新闻渲染
			if(res.status == 200){
                let html = '';
                for(var i = 0; i< res.data.length; i++){
                    html+=` <li class="list">
                                <p class="into-title">
                                    <span>产品标题</span>
                                    <span>点击量</span>
                                    <span>时间</span>
                                </p>
                                <p class="into-cont first">
                                    <span>${res.data[i].title}</span>
                                    <span>${res.data[i].eye}</span>
                                    <span>${res.data[i].time}</span>
                                    <span>序号：</span>
                                    <span class="id">${res.data[i].id}</span>
                                    <a class ="fr padding-10-lr change">修改</a>
                                    <a class ="fr padding-10-lr change delete">删除</a>
                                    <a class ="fr padding-10-lr change">查找</a>
                                </p>
                                <div class="into-cont">
                                    <span class="text">样图：</span>
                                    <div class="photo">
                                        <img src="{res,data[i].p_eye}</span>
                                        <span>${api+res.data[i].img1}"/>
                                    </div>
                                    <div class="photo">
                                        <img src="${api+res.data[i].img2}"/>
                                    </div>
                                    <div class="photo">
                                        <img src="${api+res.data[i].img3}"/>
                                    </div>
                                    <span class="text">详图：</span>
                                    <div class="photo">
                                        <img src="${api+res.data[i].datailed1}"/>
                                    </div>
                                    <div class="photo">
                                    <img src="${api+res.data[i].datailed2}"/>
                                    </div>
                                    <div class="photo">
                                    <img src="${api+res.data[i].datailed3}"/>
                                    </div>
                                </div>
                                <p class="into-cont main-text">
                                    <span class="discribe">文本描述：</span>
                                    <span >${res.data[i].text}</span>
                                </p>
                          </li>`
                }
                $('.product-lists.into').html(html)
	        }
		}
	})
}
//点击添加提交网站建设数据 提交到后台
$('.product-into-add').click(function(){
    // // form表单一定要用js 获取 FormData中需要js对象
    let form = document.querySelector('.form-add-product-into')
    //将表单中数据转为对对象传到
    let formdata =  new FormData(form)
    $.ajax({
        url:api + 'addProductInto',
        type: 'post',
        data: formdata,
        dataType:'json',
        contentType: false,
        //限定文件传送数据格式
        processData: false,
        success: function(res){
                if(res.status == 200){
                $('.modal-add.click-product-into').modal('hide');
                getProductIntoData();
            }
        }

    })
})
// 删除
$(".product-lists.into").on("click",".delete",function(){
    console.log(111)
    // 得到id
    let parent = $(this).parents('.list')
	let id = $(this).siblings('.id').html()
        let iddata = {id:id}
        // console.log(iddata)
        $.ajax({
            url:api+'delProductInto',
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