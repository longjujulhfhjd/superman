let index = 0
	
	$('.sup-connection .prev').click(function(){
		if(index == 0){
			$(this).css({
				cursor:'not-allowed'
			})
		}else{
			index--
			$(this).siblings('.sup-connection-page-num').eq(index).css({
				background: '#00C0FF'
			})
			$(this).eq(index).addClass('on').siblings().removeClass('on')
		}
//		$(this).parents('.sup-procenter-content').find('.sup-procenter-lists').removeClass('on').prev().addClass('on')
//		if($(this).parents('.sup-procenter-content').find('.prev')){
//			$('.prev').attr('disabled','disabled')
//		}
//		console.log($(this).parents('.sup-procenter-content').find('.sup-procenter-lists.on'))
	})
	$('.sup-connection .next').click(function(){
		if(index == $(" .sup-connection-page-num").length-1){
			$(this).css({
				cursor:'not-allowed'
			})
		}else{
			index++
			$(this).siblings('.sup-connection-page-num').eq(index).css({
				background: '#00C0FF'
			})
			$(this).eq(index).addClass('on').siblings().removeClass('on')
		}
	})