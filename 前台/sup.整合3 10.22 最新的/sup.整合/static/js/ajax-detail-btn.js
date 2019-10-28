//详情页的上一页与下一页按钮
$.ajax({
    type:'get',
    url:api+'casedetailbtn',
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
            $('.case-prev').click(function(){
                if(id>1){
                    id -= 1		
                    console.log(id)	
                    
                }else {
                    $(".case-prev-con").html('没有了')
                }
            })
            $('.case-next').click(function(){
                if(id<12){
                    id += 1	
                    console.log(id)	
                }else {
                    $(".case-prev-con").html('没有了')
                }
            })
            var id = getQueryVariable("id")
            console.log(id)
            var casedetail=document.querySelector('.sup-caseshow-detail-leftimg')	
            var html =`<img src="http://192.168.97.236:3006/sup-caseshow${id}.png"/> `
            $(casedetail).html(html)           
        } 
    }		
})
