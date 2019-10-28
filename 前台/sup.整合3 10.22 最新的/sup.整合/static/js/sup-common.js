//根节点字体大小的计算
	//初始调用一次方法
	fontSize()
	//每次改变屏幕尺寸时 都去调用一次计算字体大小的方法
	window.onresize = function(){
		fontSize()
	}
	function fontSize(){
		//768 600px  750px  
		//盒子的宽度比上字体大小和 = 750/100
		//手机屏幕计算的是物理像素的宽度 需要乘以2
		var width  = document.documentElement.clientWidth;
		//此处 限制大小上面就要乘以2 不限制大小上面就不用乘以2 都可以
		//此处只是限制了750px 也就是手机端 对于ipad等并没有做限制，就让其跟着手机端大小显示
		width = width > 750 ? 750 : width;
		fontsize = width/750*100;
		document.querySelector("html").style['font-size'] = fontsize + 'px'
	}

	
//1.右边滚动条判断
window.onscroll = function() {
	
	var scrollTop = document.body.scrollTop || document.documentElement.scrollTop
	if(scrollTop >= 20) {
		$('.sup-nav-cont').addClass('active')
	} else {
		$('.sup-nav-cont').removeClass('active')
	}
}

//2.头部导航蓝色btn按钮点击
$('.sup-header-lists .list').click(function(){
	console.log(111)
	$('.sup-header-lists .list').not(this).removeClass('click')
	$(this).addClass('click')
})
//3.1侧边栏划出划入
$('.sup-nav-cont .navbar-toggle').click(function(){
	console.log(222)
	//判断open时
	if($(this).hasClass('open')){
		$(this).removeClass('open')
		//点击按钮和侧边栏回去
		$(this).animate({
			'right':'0px'
		},10)
		$('.sup-side-box').animate({
			'right':'-284px'
		},300)
		$('.sup-side-main').removeClass(	'open')
	}else{
		//点击按钮和侧边栏出来
		$(this).addClass('open')
		$(this).animate({
			'right':'296px'
		},400)
		$('.sup-side-box').animate({
			'right':'0px'
		},400)
		//侧边栏添加open类名
		$('.sup-side-main').addClass('open')
		
	}
})
//3.2点击蒙层滑进侧边栏
$('.sup-side-opacity').click(function(){
	$('.sup-nav-cont .navbar-toggle').animate({
		'right':'0px'
	},100)
	$('.sup-side-box').animate({
		'right':'-284px'
	},300)
	$('.sup-side-main').removeClass('open')
	$('.sup-nav-cont .navbar-toggle').removeClass('open')
})

//侧边下拉 

$(document).ready(function(){
//当前屏幕宽度


	
		$('.sup-sidedown-box').click(function(){
			//获取屏幕宽度
			let width =$(window).width();
			if(width < 996){
				//设置大盒子小屏显示
//				$(this).addClass('min')
//				$(this).children('.side-down').addClass('active')
				$('.sup-sidedown-box').not(this).children('.side-down').slideUp()
				$(this).children('.side-down').slideToggle()
			}
		})

})

