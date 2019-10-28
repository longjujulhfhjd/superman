//新闻列表
$.ajax({
    type:'get',
    url:api+'news',
    dataType:'json',
    success:function(result){
        console.log(result.data)
        if(result.success==200)
        {
            var item=result.data
            console.log(result.data)
            var news=document.querySelector('.news-lists')	
            var html =` `
            console.log(item.length)
            for(var i=0;i<item.length;i++)
            {
                html +=`
                <div class="sup-news-information-left clearfix margin-30-t">
                    <!--图片部分开始-->
                    <div class="news-img fl padding-20-r">
                        <a href="" title="${item[i].title}"><img src="${item[i].img}"/></a>
                    </div>
                    <!--图片部分结束-->
                    <!--文本部分开始-->
                    <div class="news-text fl">
                        <h3 class="news-text-title">
                            <a href="" class="text">${item[i].title}</a>
                        </h3>
                        <ul class="clearfix">
                            <li>
                                <span class="sup-module-right-time-text"><i class="iconfont icon-clock sign"></i>${item[i].time}</span>
                            </li>
                            <li>
                                <span class="sup-module-right-time-text"><i class="iconfont icon-user-04 sign padding-10-lr"></i>${item[i].author}</span>
                            </li>
                            <li>
                                <span class="sup-module-right-time-text"><i class="iconfont icon-eye sign padding-10-lr"></i>${item[i].eye}</span>
                            </li>
                        </ul>
                        <!--段落-->
                        <p class="ellipsis-two">
                            ${item[i].text}
                        </p>
                        <em>
                            <span>标签：</span>
                            <a href="" class="cicrle">微服务</a>
                            <a href="" class="cicrle">微服务</a>
                            <a href="" class="cicrle">微服务</a>
                            <a href="" class="cicrle">微服务</a>
                        </em>
                        <a href="" class="sup-click-box">
                            <span class="sup-click-box-text">READ MORE</span>
                        </a>
                    </div>
                    <!--文本部分结束-->
                </div>
                `
            }
            $(news).html(html)
            
        } 
    }		
    })
