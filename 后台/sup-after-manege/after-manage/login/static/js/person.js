//token只能判断是否临时登录

//验证登录如果没有登录，也就是说没有token，跳回登录界面
$(function () {
    let token=window.localStorage.getItem("token")
    if(!token){
        window.location.href='login.html'
        return false
    }
    //验证登录
    $.ajax({
        url:api+'verifylogin',
        type:'get',
        data:{
            token
        },
        dataType:'json',
        success:function(res) {
            //登录状态为512时，登录失败，其他情况登录成功
            if(res.status==512){
                window.localStorage.removeItem('token')
                window.localStorage.removeItem('info')
                window.location.href='login.html'
            }else if(res.status!=200){
                $.tooltip({
                    type: 'error',
                    content: res.message
                }) 

            }           
        }

    })
    //退出登录发送请求 需要用户名 需要判断用户是否存在
    $('.loginout').click(function(){
        let info=window.localStorage.getItem('info')
        console.log(info.email)
        //需要对象形式
        info=JSON.parse(info)
        $.ajax({
            url:api+'loginout',
            type:'post',
            dataType:'json',
            data:{
                email:info.email
            },
            success:function(res){
                if(res.status==200){
                    window.localStorage.removeItem('token')
                    window.localStorage.removeItem('info')
                    window.location.href='login.html'
                }else{
                    $.tooltip({
                        type: 'error',
                        content: res.message
                    })  
                }
            }


        })
    })
})