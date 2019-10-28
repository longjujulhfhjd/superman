
//	//打开列表页，获取列表页数据，只要求页码，当前当前页码所要显示的列表数量
//	//存储地址
//	let requestUrl = 'http://127.0.0.1:3006/'
//	//1.从当前地址上获取页码和个数
//	//page没有时为第一页，每页个数为3个
//	let page = getQueryParam('page') || 1
//	let count = getQueryParam('count') || 1
//	console.log(page,count)
//	let total= 0
//	
//	//3.点击上一步下一步
//	$(".sup-page-btn").click(function(){
//		if(page <=1 && $(this).hasClass('prev')){
//			return;
//		}
//		if(page>=total && $(this).hasClass('next')){
//			page = total;
//		}
//		if($(this).hasClass('prev')){
//			page--
//		}else{
//			page++
//		}
//		
//		window.location.href = 'sup-procenter-build.html?page='+page+'&count='+count;
//	})
//	
//	//2.发送请求
//	$.ajax({
//		type:"get",
//		url:requestUrl + 'sup-procenter-build.html',
//		async:true,
//		data:{
//			page:page,
//			count:count
//		},
//		success:function(res){
//			var pageHtml = '';
//			//找到页码总和
////			console.log(res)
//			total= res.total;
//			for(let i=0;i<res.total;i++){
//				pageHtml += `sup-procenter-build.html?page=${i+1}}&count=${count}"></span>`;
//				console.log(pageHtml)
//			}
//			//在页码后的第一个a标签后插入放入的页码数
//			$(".sup-pages a:first").after(pageHtml)
//		}
//	});
//	function getQueryParam(name){
//		//获取请求的页数
//		let search = window.location.search
//		//截取字符串不要问号（？）
//		search = search.substr(1)
//		let reg = new RegExp("(^|&)"+name+"=([^&]*)(&|$)")
//		//matcn:从一个字符中匹配与正则相符的字符串
//		//返回的第一个字符为匹配的字符串
//		//后面的参数以小括号括起来的字符
//		let match = search.match(reg);
//		console.log(match)
//		if(match){
//			return match[2];
//		}
//		return ''
//	}
//	
//let index = 0
//	
//	$('.prev').click(function(){
//		if(index == 0){
//			$(this).css({
//				cursor:'not-allowed'
//			})
//		}else{
//			index--
//			$(this).siblings('.sup-page-num').eq(index).css({
//				background: '#00C0FF'
//			})
//			$(this).parents('.sup-procenter-content').find('.sup-procenter-lists').eq(index).addClass('on').siblings().removeClass('on')
//		}
////		$(this).parents('.sup-procenter-content').find('.sup-procenter-lists').removeClass('on').prev().addClass('on')
////		if($(this).parents('.sup-procenter-content').find('.prev')){
////			$('.prev').attr('disabled','disabled')
////		}
////		console.log($(this).parents('.sup-procenter-content').find('.sup-procenter-lists.on'))
//	})
//	$('.next').click(function(){
//		if(index == $(".sup-page-num").length-1){
//			$(this).css({
//				cursor:'not-allowed'
//			})
//		}else{
//			index++
//			$(this).siblings('.sup-page-num').eq(index).css({
//				background: '#00C0FF'
//			})
//			$(this).parents('.sup-procenter-content').find('.sup-procenter-lists').eq(index).addClass('on').siblings().removeClass('on')
//		}
//	})
	
//	$('.sup-page-num').click(function(){
//		$(this).addClass('hover').siblings().removeClass('hover')
//	})



//点击上下页换页按钮换页
function tabPage(btn,tabbox,tablist,prev,next){
	console.log(btn)
	let index = 0
	//点击指定页码
	$(btn).click(function(){
	    index=$(this).index()-1;
	    let parent = $(this).closest(tabbox);
	    parent.find(btn).eq(index).addClass('hover').siblings().removeClass('hover');
	    parent.find(tablist).eq(index).addClass('on').siblings().removeClass('on')
	})
	
	//上一页
	$(prev).click(function(){
		if(index == 0) {
			$(this).css({cursor:'not-allowed'})
			return false
		}
		index--
		let parent = $(this).closest(tabbox)
		parent.find(tablist).eq(index).addClass('on').siblings().removeClass('on')
		parent.find(btn).eq(index).addClass('hover').siblings().removeClass('hover')
		$(next).css({cursor:'pointer'})
		if(index <=0) {
			$(this).css({cursor:'not-allowed'})	
		}
	})
	
	//下一页
	$(next).click(function() {
		if(index >= $(btn).length-1 ) return false
		index++
		let parent = $(this).closest(tabbox)
		parent.find(tablist).eq(index).addClass('on').siblings().removeClass('on')
		parent.find(btn).eq(index).addClass('hover').siblings().removeClass('hover')
		$(prev).css({cursor:'allowed'})
		if(index == $(btn).length-1) {
			$(this).css({cursor:'not-allowed'})
		}
	})
}

console.log(tabchange())