// 产品中心app1
$.ajax({
    type:'get',
    url:api+'app1',
    dataType:'json',
    success:function(result){
        console.log(result.data)
        if(result.success==200)
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
            var goods=document.querySelector('.sup-procenter-lists1')	
            console.log(goods)
            var html =` `
            for(var i=0;i<lists.length;i++)
            {
                html +=`
                <li class="text-center sup-product-corver-father">                           
                    <img src="${api+lists[i].p_img}"/>
                    <span class="sup-product-descript-line"></span>
                    <span class="sup-product-descript margin-20-t">${lists[i].p_title}</span>
                    <a href="sup-procenter-app-content.html?id=${id}">
                        <div class="sup-product-corver">
                            <div class="sup-product-corver-box">
                                <p class="sup-product-corve-circle"><span >+</span></p>
                            </div>
                        </a> 
                    </div>
                </li>
                `
            }
            $(goods).html(html)
            
        } 
    }		
})

// // 产品中心app2
$.ajax({
    type:'get',
    url:api+'app2',
    dataType:'json',
    success:function(result){
        console.log(result.data)
        if(result.success==200)
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
            var goods=document.querySelector('.sup-procenter-lists2')	
            console.log(goods)
            var html =` `
            for(var i=0;i<lists.length;i++)
            {
                html +=`
                <li class="text-center sup-product-corver-father">                           
                    <img src="${api+lists[i].p_img}"/>
                    <span class="sup-product-descript-line"></span>
                    <span class="sup-product-descript margin-20-t">${lists[i].p_title}</span>
                    <a href="sup-procenter-app-content.html?id=${id}">
                        <div class="sup-product-corver">
                            <div class="sup-product-corver-box">
                                <p class="sup-product-corve-circle"><span >+</span></p>
                            </div>
                        </a> 
                    </div>
                </li>
                `
            }
            $(goods).html(html)
            
        } 
    }		
})

// 产品中心appbuild
$.ajax({
    type:'get',
    url:api+'build',
    dataType:'json',
    success:function(result){
        console.log(result.data)
        if(result.success==200)
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
            var goods=document.querySelector('.sup-procenter-lists3')	
            console.log(goods)
            var html =` `
            for(var i=0;i<lists.length;i++)
            {
                html +=`
                <li class="text-center sup-product-corver-father">                           
                    <img src="${api+lists[i].p_img}"/>
                    <span class="sup-product-descript-line"></span>
                    <span class="sup-product-descript margin-20-t">${lists[i].p_title}</span>
                    <a href="sup-procenter-app-content.html?id=${id}">
                        <div class="sup-product-corver">
                            <div class="sup-product-corver-box">
                                <p class="sup-product-corve-circle"><span >+</span></p>
                            </div>
                        </a> 
                    </div>
                </li>
                `
            }
            $(goods).html(html)
            
        } 
    }		
})
   
// 产品中心sign
$.ajax({
    type:'get',
    url:api+'sign',
    dataType:'json',
    success:function(result){
        console.log(result.data)
        if(result.success==200)
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
            var goods=document.querySelector('.sup-procenter-lists4')	
            console.log(goods)
            var html =` `
            for(var i=0;i<lists.length;i++)
            {
                html +=`
                <li class="text-center sup-product-corver-father">                           
                    <img src="${api+lists[i].p_img}"/>
                    <span class="sup-product-descript-line"></span>
                    <span class="sup-product-descript margin-20-t">${lists[i].p_title}</span>
                    <a href="sup-procenter-app-content.html?id=${id}">
                        <div class="sup-product-corver">
                            <div class="sup-product-corver-box">
                                <p class="sup-product-corve-circle"><span >+</span></p>
                            </div>
                        </a> 
                    </div>
                </li>
                `
            }
            $(goods).html(html)
            
        } 
    }		
})
   


