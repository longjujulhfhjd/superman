 //产品详情轮播
// $.ajax({
//     type:'get',
//     url:api+'productdetail',
//     dataType:'json',
//     success:function(result){
//         console.log(result.data)
//         if(result.success==200)
//         {
//             var lists=result.data 
//             function getQueryVariable(variable)
//             {
//                 var query = window.location.search.substring(1);
//                 console.log(query)
//                 var vars = query.split("&");
//                 for (var i=0;i<vars.length;i++) {
//                     var pair = vars[i].split("=");
                    
//                     if(pair[0] == variable){return pair[1];}
//                 }
//                 return(false);
//             }
//             var id = getQueryVariable("id")-1          
//             var casedetail=document.querySelector('.sup-module')	
//             var html =`
//                 <!--左边部分-->
// 				<div class="sup-module-left fl sup-procenter-banner-box">
// 					<div class="carousel slide super-tab-box" data-ride="carousel">
// 						<ul class="carousel-indicators">
// 							<li data-target=".carousel" data-slide-to="0" class="active"></li>
// 							<li data-target=".carousel" data-slide-to="1"></li>
// 							<li data-target=".carousel" data-slide-to="2"></li>
// 						</ul>
// 						<div class="carousel-inner text-center">
// 							<div class="item active spuer-tab-item">
// 								<img src="${api+lists[id].img1}"/>
// 							</div>
// 							<div class="item spuer-tab-item">
// 								<img src="${api+lists[id].img2}"/>
// 							</div>
// 							<div class="item spuer-tab-item">
// 								<img src="${api+lists[id].img3}"/>
// 							</div>
// 						</div>
// 						<a class="left carousel-control" href=".carousel" data-slide="prev">
// 							<div class="sup-procenter-banner-btn left ">〈</div>
// 							<!--<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>-->
// 						</a>
// 						<a class="right carousel-control" href=".carousel" data-slide="next">
// 							<div class="sup-procenter-banner-btn right">〉</div>
// 							<!--<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>-->
// 						</a>
// 					</div>
// 					<ul class="sup-procenter-banner-tab clearfix">
// 						<li class="sup-procenter-index super-tab-title on"><img src="${api+lists[id].img1}"/></li>
// 						<li class="sup-procenter-index super-tab-title"><img src="${api+lists[id].img2}"/></li>
// 						<li class="sup-procenter-index super-tab-title"><img src="${api+lists[id].img3}"/></li>
// 					</ul>
// 				</div>
// 				<!--右边部分-->
// 				<div class="sup-module-right fl sup-procenter-banner-content">
// 					<h3 class="color-main padding-10-t title">${lists[id].title}</h3>
// 					<div class="padding-15-tb sup-module-right-time">
// 						<span class="sup-module-right-time-text"><i class="iconfont icon-clock sign"></i>2019-10-22</span>
// 						<span class="sup-module-right-time-text"><i class="iconfont icon-user-04 sign"></i>200</span>
// 					</div>
// 					<p class="sup-module-right-text">
//                         ${lists[id].text}
// 					</p>
// 				</div>       
//             `
//             $(casedetail).html(html)           
//         } 
//     }		
// })


//产品详情推荐
$.ajax({
    type:'get',
    url:api+'productrecommend',
    dataType:'json',
    success:function(result){
        if(result.success==200)
        {
            var lists=result.data
            var casedetail=document.querySelector('.sup-procenter-lists')	
            var html =` `
            for(var i=0;i<lists.length;i++)
            {
                html +=`
                <li class="procenter-recommend-right-cont ">
                    <div class="procenter-recommend-right-picture">
                        <a href="sup-procenter-app-content.html?id=${lists[i].p_id}">
                            <img class="media-object sup-detail-caseshow" src="${api + lists[i].p_img}" />
                        </a>
                        <span class="sup-product-descript-line"></span>
                    </div>
                    <p class=" sup-recommend-right-text text-center">${lists[i].p_title}</p>
                </li>   												
                `
            }
            $(casedetail).html(html)           
        } 
    }		
})
