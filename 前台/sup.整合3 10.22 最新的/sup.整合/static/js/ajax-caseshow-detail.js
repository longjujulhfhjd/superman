// 案例展示详情页ajax请求

//案例推荐列表
$.ajax({
    type:'get',
    url:api+'casedetail',
    dataType:'json',
    success:function(result){
        if(result.status==200)
        {
            var lists=result.data
            var casedetail=document.querySelector('.media-list')	
            var html =` `
            for(var i=0;i<lists.length;i++)
            {
                html +=`
                    <li class="media sup-caseshow-detail-lists">
                        <div class="media-left">
                            <a href="sup-caseshow-detail.html?id=${lists[i].id}">
                                <img class="media-object sup-detail-caseshow" src="${api+lists[i].img}" />
                            </a>
                        </div>
                        <div class="media-body font-14">
                            <p title="${lists[i].title}" class="media-heading padding-10-t" >${lists[i].title}</p>
                            <p class="media-heading  padding-10-t">
                                <p class="sup-detail-time ">
                                    <span>${lists[i].time}<span>																									
                                </p>
                            </p>
                        </div>
                    </li>													
                `
            }
            $(casedetail).html(html)           
        } 
    }		
})
//中间大图
$.ajax({
    type:'get',
    url:api+'casedetail',
    dataType:'json',
    success:function(result){
        console.log(result.data)
        if(result.status==200)
        {
            var lists=result.data
            function getQueryVariable(variable)
            {
                var query = window.location.search.substring(1);
                console.log(query)
                var vars = query.split("&");
                for (var i=0;i<vars.length;i++) {
                    var pair = vars[i].split("=");
                    
                    if(pair[0] == variable){return pair[1];}
                }
                return(false);
            }
            var id = getQueryVariable("id")
            console.log(id)
            var casedetail=document.querySelector('.sup-caseshow-detail-leftimg')	
            var html =`<img src="http://192.168.97.236:3006/sup-caseshow${id}.png"/> `
            $(casedetail).html(html)           
        } 
    }		
})
// 翻页按钮
$.ajax({
    type:'get',
    url:api+'casedetail',
    dataType:'json',
    success:function(result){
        console.log(result.data)
        if(result.status==200)
        {
            var lists=result.data
            function getQueryVariable(variable)
            {
                var query = window.location.search.substring(1);
                console.log(query)
                var vars = query.split("&");
                for (var i=0;i<vars.length;i++) {
                    var pair = vars[i].split("=");
                    
                    if(pair[0] == variable){return pair[1];}
                }
                return(false);
            }
            var id = parseInt(getQueryVariable("id")) 
            console.log(id)
            $('.case-prev').click(function(){
                if(id>1){
                    id -= 1		
                    let casepre=document.querySelector('.case-prev')	
                    var html =`
                    <a href="sup-caseshow-detail.html?id=${id}">
                        上一页:<span class="case-prev-con">${lists[id].title}</span>
                    </a>
                        `
                    $(casepre).html(html)  
                
                }else {
                    $(".case-prev-con").html('没有了')
                }
            })
            $('.case-next').click(function(){
                if(id<13){
                    id += 1	
                    let casenext=document.querySelector('.case-next')	
                    var html =` 
                            <a href="sup-caseshow-detail.html?id=${id}">
                                下一页:<span class="case-next-con">${lists[id].title}</span>
                            </a>                                                   
                        `
                    $(casenext).html(html)  	
                }else {
                    $(".case-next-con").html('没有了')
                }
            })      
        } 
    }		
})
//点击放大的图片渲染
$.ajax({
    type:'get',
    url:api+'casedetail',
    dataType:'json',
    success:function(result){
        console.log(result.data)
        if(result.status==200)
        {
            var lists=result.data
            var casedetail=document.querySelector('.case-bigimg-list')	
            var html =` `
            for(var i=0;i<lists.length;i++)
            {
                html +=`
                <li>
                    <a><img src="${api+lists[i].img}"></a>
                </li>												
                `
            }
            $(casedetail).html(html)           
        } 
    }		
})
//点击缩略图片渲染
$.ajax({
    type:'get',
    url:api+'casedetail',
    dataType:'json',
    success:function(result){
        console.log(result.data)
        if(result.status==200)
        {
            var lists=result.data
            var casedetail=document.querySelector('.case-smallimg-list')	          
            for(var i=0;i<lists.length;i++)
            {
               
                html +=`
                <li><img src="${api+lists[i].img}"></li>								
                `
            }
            $(casedetail).html(html)           
        } 
    }		
})