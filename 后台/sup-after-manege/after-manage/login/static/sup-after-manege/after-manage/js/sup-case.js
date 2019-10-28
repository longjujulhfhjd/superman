
// 案例发送ajax请求，案例数据
function getcaseData(){
	$.ajax({
		url:api + "case",
		type:"get",
		dataType:"json",
		success:function(res){
			console.log(res)   //已经得到
			res.api = api
			// 案例渲染
			if(res.status == 200){
	        		let html = '';
					for(var i = 0; i< res.data.length; i++){
						html+=`<li class="case-list-cont">
									<span class="case-list">${res.data[i].title}</span>
									<div class="case-list">
										<img src="${api+res.data[i].img}"/>
									</div>
									<span>${res.data[i].time}</span>
									<span class="id">${res.data[i].id}</span>
									<a class ="fr padding-10-lr">修改</a>
									<a class ="fr padding-10-lr delete">删除</a>
									<a class ="fr padding-10-lr">查找</a>
					

								</li>`
					}
					$('.case-modoule-lists.case-lists').html(html)
	        	}
		}
	})
}
// 点击添加提交数据 提交到后台
$('.case-add').click(function(){
	// form表单一定要用js 获取 FormData中需要js对象
	let form = document.querySelector('.form-add-case')
	//将表单中数据转为对对象传到
	let formdata =  new FormData(form)
	// console.log(formdata)
	$.ajax({
		url:api + 'addcase',
		type: 'post',
		data: formdata,
		dataType:'json',
		contentType: false,
		//限定文件传送数据格式
		processData: false,
		success: function(res){
				if(res.status == 200){
				$('.modal-add.clickcase').modal('hide');
				getcaseData();
			}
		}

	})
	
})

// 删除
$(".case-lists").on("click",".delete",function(){
	// console.log(111)
    // 得到id
	let id = $(this).siblings('.id').html()
        let iddata = {id:id}
        $.ajax({
            url:api+'delcase',
            type: 'post',
            data: iddata,
            dataType:'json',
            success: function(res){
                if(res.status == 200){
                    delcont()
                }
            }
        })
})
// delcont 删除方法
function delcont(){
    $(".case-lists").on("click",".delete",function(){
        let parent = $(this).parents('.case-list-cont')
        parent.remove()
        // console.log(parent)
    })
}
