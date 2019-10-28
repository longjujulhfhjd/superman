

// 产品热门推荐ajax请求数据
function getProductRecommendData(){
	$.ajax({
		url:api + "productRecommend",
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
                $('.product-lists.recommend').html(html)
	        }
		}
	})
}
//添加提交产品热门推荐数据 提交到后台
$('.product-recommend-add').click(function(){
    console.log(2222)
    // // form表单一定要用js 获取 FormData中需要js对象
    let form = document.querySelector('.form-add-product-recommend')
    //将表单中数据转为对对象传到
    let formdata =  new FormData(form)
    console.log(formdata)
    $.ajax({
        url:api + 'addProductRecommend',
        type: 'post',
        data: formdata,
        dataType:'json',
        contentType: false,
        //限定文件传送数据格式
        processData: false,
        success: function(res){
                if(res.status == 200){
                $('.modal-add.click-product-recommend').modal('hide');
                getProductRecommendData();
            }
        }

    })
})
// 删除
$(".product-lists.recommend").on("click",".delete",function(){
    // 得到id
    let parent = $(this).parents('.applist')
	let id = $(this).siblings('.id').html()
        let iddata = {id:id}
        console.log(iddata)
        $.ajax({
            url:api+'delProductRecommend',
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