// 案例发送ajax请求，案例数据
function getNewsrecommendData(){
	$.ajax({
		url:api + "newsRecommend",
		type:"get",
		dataType:"json",
		success:function(res){
			// console.log(res)   //已经得到
			res.api = api
			// 案例渲染
			if(res.status == 200){
	        		let html = '';
					for(var i = 0; i< res.data.length; i++){
						html+=`<li class="case-list-cont">
                                    <span class="case-list news-recommend">${res.data[i].title}</span>
                                    <div class="case-list">
                                        <img src="${api+res.data[i].img}"/>
                                    </div>
                                    <span>${res.data[i].TIME}</span>
                                    <span class="id">${res.data[i].id}</span>
                                    <a class ="fr padding-10-lr">修改</a>
                                    <a class ="fr padding-10-lr delete">删除</a>
                                    <a class ="fr padding-10-lr">查找</a>
                                </li>`
					}
					// console.log(html)
					$('.case-modoule-lists.news-recommend-lists').html(html)
	        	}
		}
	})
}
// 点击添加提交数据 提交到后台
$('.news-recommend-add').click(function(){
    // form表单一定要用js 获取 FormData中需要js对象
    let form = document.querySelector('.form-add-news-recommend')
    //将表单中数据转为对对象传到
    let formdata =  new FormData(form)
    // console.log(formdata)
    $.ajax({
        url:api + 'addNewsrecommend',
        type: 'post',
        data: formdata,
        dataType:'json',
        contentType: false,
        //限定文件传送数据格式
        processData: false,
        success: function(res){
                if(res.status == 200){
                $('.modal-add.click-news-recommend').modal('hide');
                getNewsrecommendData();
            }
        }

    })
    
})

// 删除
// delcont 删除方法

$(".news-recommend-lists").on("click",".delete",function(){
    // 得到id
    let parent = $(this).parents('.case-list-cont')
    let id = $(this).siblings('.id').html()
        let iddata = {id:id}
        // console.log(iddata)
        console.log()
        $.ajax({
            url:api+'delNewsrecommend',
            type: 'post',
            data: iddata,
            dataType:'json',
            // contentType: false,
            //限定文件传送数据格式
            // processData: false,
            success: function(res){
                if(res.status == 200){
                    parent.remove()
                }
            }
        })

})

