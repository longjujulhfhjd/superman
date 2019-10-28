



$(function () {

    //1.验证邮箱和密码
     $.extend($.validator,{
        messages: {
                    required: "该字段不能为空.",
                    remote: "Please fix this field.",
                    email: "请输入正确的邮箱.",//邮箱
                    url: "请输入正确的地址.",
                    date: "Please enter a valid date.",
                    dateISO: "Please enter a valid date (ISO).",
                    number: "Please enter a valid number.",
                    digits: "Please enter only digits.",//只能输入数字
                    equalTo: "前后密码不匹配",//密码比较
                    maxlength: $.validator.format( "Please enter no more than {0} characters." ),
                    minlength: $.validator.format( "Please enter at least {0} characters." ),
                    rangelength: $.validator.format( "请输入6-18位字符." ),
                    range: $.validator.format( "Please enter a value between {0} and {1}." ),
                    max: $.validator.format( "Please enter a value less than or equal to {0}." ),
                    min: $.validator.format( "Please enter a value greater than or equal to {0}." ),
                    step: $.validator.format( "Please enter a multiple of {0}." )
                },
    });
    $(".from-validate").validate({
        rules:{
            email:{
                required:true,
                email:true
            },
            password:{
                required:true,
                rangelength:[6,18]
            }
        }
    })
    //2.判断登录（根据token判断 token存在于localstorage里）
    let token=window.localStorage.getItem("token")
    if(token){
        window.location.href='person.html'
    }

    //3.点击登录按钮操作(要判断是否验证成功)
    $('.btn-login').click(function () {
        if( $(".from-validate").valid())//判断是否验证通过，用valid()方法
        {
            // 禁止重复提交

            //获取表单信息
            let email=$("[name=email]").val()
            let password=$("[name=password]").val()

            //将密码加密
            password=$.md5(password)

            //发送一个ajax的请求
            $.ajax({
                url:api+'login',
                type:'post',
                dataType:'json',
                data:{
                    email,
                    password
                },
                success:function(res){
                   
                  if(res.status==200){
                        //res的信息存入localstorage里  返回信息要一致
                        window.localStorage.setItem('token',res.data.token)
                        //返回的用户信息 localstorage数据为string类型
                        window.localStorage.setItem('info',JSON.stringify(res.data.info))                        
                         $.tooltip({
                            type:'success',
                            content:'登录成功 将在2S后跳转到登录界面',
                            interval:2000,
                            success:function(){
                                window.location.href='sup-case.html'   
                            }
                        })
                  }else{
                      $.tooltip({
                          type:'error',
                          content:res.message,
                          intervar:3000
                      })
                  }
                 
                }
            })
        }
    })
})




//4.用户中心操作













//登录流程
// 前端

