

	DY_scroll('.sup-product-banner-box', '.prev', '.nexts', '.product-img-box1', 3, false);
	DY_scroll('.sup-product-banner-box', '.prev', '.nexts', '.product-img-box2', 3, false);
	DY_scroll('.sup-product-banner-box', '.prev', '.nexts', '.product-img-box3', 3, false);
	DY_scroll('.sup-product-banner-box', '.prev', '.nexts', '.product-img-box4', 3, false);
	
	//	产品tab切换
	$(".sup-active").click(function(){
		left = parseFloat($(".sup-product-lists-cont").innerWidth())
		left = -left
		aleft = left
		$(this).addClass('on')
		$(this).siblings().removeClass("on")
		var index = $(this).index()
		var parent = $(this).parents('.sup-product-content').find('.sup-product-body>.sup-product-banner-box')
		var ele = parent.find(".product-img-box")
		ele.eq(index).addClass("on")
		ele.eq(index).siblings().removeClass('on')
	})
	
//	产品轮播
//	interval = setInterval(leftmove, 2000)
//	function leftmove() {
//		if(aleft>width){
//			$(".product-img-box.on > .sup-product-lists").animate({
//				'left': aleft
//			},1000)
//			aleft+=left
//		}
//	}

//  interval = setInterval(getheight, 100)
//	function getheight() {
//		var height = parseFloat($(".product-img-box.on > .sup-product-lists").height())
//		$(".product-img-box.on > .sup-product-lists").css('height',height)
//	}





//tab切换
//;(function($){
//	/**
//	 * 
//	 * */
//	$.fn.tab = function(){
//		let title = $(this).find('.super-tab-title')
//		console.log(title)
//		title.click(function(){
//			$(this).addClass('on').siblings().removeClass('on')
//			let index = $(this).index();
//			let item = $(this).closest('.super-tab-box').find('.spuer-tab-item')
//			item.eq(index).show().siblings().hide()
//		})
//	}
//})($)
//$(".super-tab-box").tab()