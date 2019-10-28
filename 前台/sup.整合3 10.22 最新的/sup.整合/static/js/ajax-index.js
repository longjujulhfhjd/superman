//首页案例分析
$.ajax({
    type:'get',
    url:api+'indexcase',
    dataType:'json',
    success:function(result){
        if(result.status==200)
        {
            var item=result.data
            var news=document.querySelector('.sup-index-caseshow-lists')	
            console.log(news)
            var html =` `
            for(var i=0;i<item.length;i++)
            {
                function getQueryVariable(variable)
                {
                    var query = window.location.search.substring(1);
                    var vars = query.split("&");
                    for (var i=0;i<vars.length;i++) {
                        var pair = vars[i].split("=");
                        if(pair[0] == variable){return pair[1];}
                    }
                    return(false);
                }
                var id = getQueryVariable("id")
                console.log(id)
              
                html +=`	
                    <li class="sup-index-caseshow-list sup-caseshow-cover-father">
                        <a href="sup-caseshow-detail.html?id=${item[i].id}" class="sup-caseshow-list">
                            <img title="${item[i].title}" class="sup-index-caseshow-img" src="${api+item[i].img}" />
                        </a>                        
                        <a class="sup-caseshow-cover" href="http://192.168.97.236:3006/sup-caseshow${id}.png">
                            <p class="sup-caseshow-cover-circle"><span class="iconfont icon-sousuo"></span></p>
                        </a>
                        <div class="sup-caseshow-covercon color-white font-18">
                            ${item[i].title}
                        </div>
                    </li>
                `
            }
            $(news).html(html)
            
        } 
    }		
})

// 搜索获取输入框
$(".search-btn").click(function(){
    console.log(1111)
    let text = $(".search-text").val();
    if(text) {
        // 发送请求并且获取验证码
        $.ajax({
            url: api + 'search',
            type: 'post',
            data: {
                text
            },
            dataType: 'json',
            success: function(result){          
                if(result.success==200)
                {
                    var item=result.data
                    var seart=document.querySelector('.result-end')	
                   
                    var html =` `

                    for(var i=0;i<item.length;i++)
                    {                          
                        html += `   <li>
                                        <h3><a href="${item[i].href}">${item[i].title}</a></h3>
                                        <h5><a href="${item[i].href}">${item[i].href}</a></h5>
                                    </li>
                                `                   
                    }
                    $(seart).html(html)
                    
                } 
            }
        })
    }else{
        // 提示邮箱不正确
        $.tooltip({
            type: 'error',
            content: '查询无果'
        })
    }


})
//查询渲染
// $.ajax({
//     type:'get',
//     url:api+'search',
//     dataType:'json',
//     success:function(result){
//         if(result.status==200)
//         {
//             var item=result.data
//             var news=document.querySelector('.news-lists')	
//             var caseshow=document.querySelector('.case_img-lists')	
//             var app1=document.querySelector('.p_app1-lists')	
           
//             var html1 =` `
            
//             var html2 =` `
            
//             var html3 =` `
//             for(var i=0;i<item.length;i++)
//             {                          
//                 html1 +=` <li>
//                             <h3><a href="">${item.n_title}</a></h3>
//                             <h5><a href=""></a></h5>
//                         </li>`
//                 html2 +=`<li>
//                             <h3><a href="">${item.c_title}</a></h3>
//                             <h5><a href=""></a></h5>
//                         </li> `
//                 html2 +=`<li>
//                             <h3><a href="">${item.p_title}</a></h3>
//                             <h5><a href=""></a></h5>
//                         </li> `
//             }
//             $(news).html(html1)
//             $(caseshow).html(html2)
//             $(app1).html(html3)
            
//         } 
//     }		
// })



