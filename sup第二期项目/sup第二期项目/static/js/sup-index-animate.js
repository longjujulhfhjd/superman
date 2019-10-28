
// 获取浏览器可见区域高度
var window_height= document.documentElement.clientHeight;;

// 用户手动修改浏览器可见区域高度时修改变量
window.onresize=function () {
	//获取元素的高度
     window_height=document.documentElement.clientHeight;
};
// 获取所需效果元素
var My_dream=document.getElementsByClassName('dream');
   // 鼠标滚轮滚动执行方法
   
$(document).scroll(function(){
//	my_animation();
	var _scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
	var dreamList = $(".dream")
	
	$(dreamList).each(function(){
		
		let elemHeight = $(this).height()
		let offsetTop = $(this).offset().top
		console.log(((_scrollTop + window_height - elemHeight) >= offsetTop) && ((offsetTop) >=_scrollTop))
		if(((_scrollTop + window_height - elemHeight) >= offsetTop) && ((offsetTop ) >=_scrollTop)){
			$(this).css({
				transform: $(this).data('trans-enter')
			})			
		}else {
			$(this).css({
				transform:$(this).data('trans-leave')
			})
		}	
		
	})
})
   // 判断元素父集是否有已定位元素
   function getOffsetTop(ele) {
     var rtn = ele.offsetTop;
     var o = ele.offsetParent;
     while(o!=null)
     {
         rtn += o.offsetTop;
         o = o.offsetParent;
     }
     return rtn;
   }
   // 滚动条等于0时执行第一屏效果
   function my_animation() {
     var _scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
     // 效果方法
     for (var k=0;k<My_dream.length;k++){
         if (_scrollTop>= getOffsetTop(My_dream[k]) - window_height && _scrollTop<= getOffsetTop(My_dream[k]) ){
             My_dream[k].style.animationName=My_dream[k].dataset.animate.split(',')[0];
             My_dream[k].style.animationDuration=My_dream[k].dataset.animate.split(',')[1];
             My_dream[k].style.animationTimingFunction=My_dream[k].dataset.animate.split(',')[2];
         }
     }   
}