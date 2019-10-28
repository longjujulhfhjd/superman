
function DY_scroll(wraper, prev, next, img, speed, or) {
	var wraper = $(wraper);
	var prev = $(prev);
	var next = $(next);
	var img = $(img).find('ul');
	var w = img.find('li').outerWidth(true);
	var s = speed;
	next.click(function() {
		img.animate({
			'margin-left': -w
		}, function() {
			img.find('li').eq(0).appendTo(img);
			img.css({
				'margin-left': 0
			});
		});
	});
	prev.click(function() {
		img.find('li:last').prependTo(img);
		img.css({
			'margin-left': -w
		});
		img.animate({
			'margin-left': 0
		});
	});
	if(or == true) {
		ad = setInterval(function() {
			next.click();
		}, s * 1000);
		wraper.hover(function() {
			clearInterval(ad);
		}, function() {
			ad = setInterval(function() {
				next.click();
			}, s * 1000);
		});

	}
}

$('.img-list li').click(function() {
	let width = $('.enlarge-bg-img li').width()
	$(this).css('border', '1px solid coral').siblings().css('border', '1px solid transparent');
	$('.enlarge-bg-img img').eq(0).attr('src', 'img/aboutUs' + ($(this).index() + 1) + '.jpg');
	$(".block").animate({left: '+'+ ($(this).width()) +'px'}, "slow");
	
})

$('.close').click(function(){
	$('.enlarge').css('display','none')
})

$('.img-box').click(function(){
	$('.enlarge').css('display','block')
})