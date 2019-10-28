// 案例展示
$.ajax({
    type:'get',
    url:api+'case',
    dataType:'json',
    success:function(result){
        console.log(result.data)
        if(result.status==200)
        {
            var lists=result.data
            var goods=document.querySelector('.sup-caseshow-lists')	
            console.log(goods)
            var html =` `
            for(var i=0;i<lists.length;i++)
            {
                html +=`
                    <a href="sup-caseshow-detail.html?id=${lists[i].id}" class="sup-caseshow-list">
                       <img src="${api+lists[i].img}" />
                    </a>
                `
            }
            $(goods).html(html)
            
        } 
    }		
})

