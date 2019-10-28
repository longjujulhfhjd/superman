//tab切换
;(function($){
	/**
	 * 需要调用tab()方法来使用
	 * */
	$.fn.tab = function(){
		let title = $(this).find('.super-tab-title')
		console.log(title)
		title.click(function(){
			$(this).addClass('on').siblings().removeClass('on')
			let index = $(this).index();
			let item = $(this).closest('.super-tab-box').find('.spuer-tab-item')
			item.eq(index).show().siblings().hide()
		})
	}
})($)
$(".super-tab-box").tab()
