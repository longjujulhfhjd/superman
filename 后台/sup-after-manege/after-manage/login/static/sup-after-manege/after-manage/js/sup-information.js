
// 新闻发送ajax请求，新闻数据
function getinformationData(){
	$.ajax({
		url:api + "information",
		type:"get",
		dataType:"json",
		success:function(res){
			console.log(res)   //已经得到
			res.api = api
			// 新闻渲染
			if(res.status == 200){
	        		let html = '';
					for(var i = 0; i< res.data.length; i++){
						html+=`<li class="information-list-cont">
									<span class="list">${res.data[i].title}</span>
									<div class="list">
										<img src="${api+res.data[i].img}"/>
									</div>
									<span class="list">${res.data[i].author}</span>
									<span class="list">${res.data[i].eye}</span>
									<span class ="list">${res.data[i].time}</span>
									<span class="id">${res.data[i].id}</span>
									<a class ="fr padding-10-lr">修改</a>
									<a class ="fr padding-10-lr delete">删除</a>
									<a class ="fr padding-10-lr">查找</a>
									<p>
										<span class="fl cont">文章：</span>
										<p class="text">${res.data[i].text}</p>
									</p>
								</li>`
					}
					$('.case-modoule-lists.information').html(html)
	        	}
		}
	})
}
// // 点击添加提交新闻数据 提交到后台
$('.information-add').click(function(){
	// // form表单一定要用js 获取 FormData中需要js对象
	let form = document.querySelector('.form-add-information')
	//将表单中数据转为对对象传到
	let formdata =  new FormData(form)
	$.ajax({
		url:api+'addInformation',
		type: 'post',
		data: formdata,
		dataType:'json',
		contentType: false,
		//限定文件传送数据格式
		processData: false,
		success: function(res){
				if(res.status == 200){
					console.log(222)
				$('.modal-add.clickinformation').modal('hide');
				getinformationData();
			}
		}

	})
})
// 删除
$(".case-modoule-lists.information").on("click",".delete",function(){
    // 得到id
    let parent = $(this).parents('.information-list-cont')
	let id = $(this).siblings('.id').html()
        let iddata = {id:id}
        $.ajax({
            url:api+'delInformation',
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