
// 为你推荐
$.ajax({
    type:'get',
    url:api+'recommend',
    dataType:'json',
    success:function(result){
        console.log(result.data)
        if(result.success==200)
        {
            var lists=result.data
            var recommend=document.querySelector('.news-recommend-lists')	
            var html =` `
            for(var i=0;i<lists.length;i++)
            {
                html +=`
                <div class="new-recommend-content clearfix padding-15-t">
                    <a href="sup-industry-information.html" title="${lists[i].title}" class="recommend-img-box fl">
                        <img src="${api + lists[i].img}" class="news-img"/>
                    </a>
                    <div class="fl margin-10-t padding-15-l">
                        <a class="ellipsis-two news-recommend-text" title="${lists[i].title}">${lists[i].title}</a>
                        <p class=""><span class="cicrle">${lists[i].TIME}</span></p>
                    </div>
                </div>
                `
            }
            $(recommend).html(html)
            
        } 
    }		
    })

