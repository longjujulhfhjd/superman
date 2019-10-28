
//案例欣赏js
var prev=$('.sup-index-caseshow .pre');
var next=$('.sup-index-caseshow .next');
var scrool=$('.sup-index-caseshow-lists')
var scrooltwo=$('.sup-index-caseshow-lists-two ')
var img=$('.sup-index-caseshow-list')
var imglength=img.length
var imgwidth=img.outerWidth(true);
var scollwidth=imglength*imgwidth;
scrool.css({
	width:scollwidth + 24
})
next.click(function(){
	scrool.animate({
		'margin-left':-imgwidth
},function(){
		scrool.find('li').eq(0).appendTo(scrool);
		scrool.css({
			'margin-left':0
		})
	}
)
})
prev.click(function(){
		scrool.find('li:last').prependTo(scrool);
		scrool.css({
			'margin-left':-imgwidth
		})
		scrool.animate({
			'margin-left':0
		})
})
var ad=setInterval(function(){
   		next.click();
},4000)  
  
scrool.hover(function(){
	clearInterval(ad)
}),function(){
	ad=setInterval(function(){
   		next.click()
   },4000)
}
scrooltwo.css({
	width:scollwidth + 24
})
next.click(function(){
	scrooltwo.animate({
		'margin-left':-imgwidth
},function(){
		scrooltwo.find('li').eq(0).appendTo(scrooltwo);
		scrooltwo.css({
			'margin-left':0
		})
	}
)
})
prev.click(function(){
	scrooltwo.find('li:last').prependTo(scrooltwo);
	scrooltwo.css({
		'margin-left':-imgwidth
	})
	scrooltwo.animate({
		'margin-left':0
	})
})
var ad=setInterval(function(){
   	next.click();
},4000)  
  
scrooltwo.hover(function(){
	clearInterval(ad)
}),function(){
	ad=setInterval(function(){
   		next.click()
   },4000)
}

