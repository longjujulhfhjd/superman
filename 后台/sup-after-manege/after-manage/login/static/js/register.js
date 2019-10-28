// 文档加载完成
$(function(){
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
    // 验证表单
    $(".from-validate").validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            code: {
                required: true
            },
            password: {
                required: true,
                rangelength: [6,18]
            },
            repassword: {
                equalTo: $("[name=password]")
            }
        },
        messages: {//定义错误信息
            email:{
                required:'邮箱不能为空'
            },
            code:{
                required:'验证码不能为空'
            },
            password:{
                required:'密码不能为空'
            },
            repassword:{
                 required:'前后密码不匹配'						
            }
        }

    })
    // 获取验证码
    $("#getCode").click(function(){
        let email = $("[name=email]").val();
        let reg =/^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/
        if(email && reg.test(email)) {
            // 发送请求并且获取验证码
            $.ajax({
                url:api+ 'getcode',
                type: 'get',
                data: {
                    email: email
                },
                dataType: 'json',
                success: function(res){
                    console.log(res)
                    // 成功提示成功
                    // 失败提示失败
                    if(res.status == 200) {
                        $.tooltip({
                            type: 'success',
                            content: '验证码发送成功'
                        }) 
                    }else{
                        $.tooltip({
                            type: 'error',
                            content: res.message
                        }) 
                    }
                }
            })
            // 倒计时开始
        }else{
            // 提示邮箱不正确
            $.tooltip({
                type: 'error',
                content: '请输入正确的邮箱'
            })
        }


    })


    // 注册
    $(".btn-register").click(function(){
        if($(".from-validate").valid()) {
            if($(this).hasClass('disabled')){ return false}
            $(this).addClass('disabled')
            let email = $("[name=email]").val();
            let code = $("[name=code]").val();
            let psd = $("[name=password]").val();
            psd = $.md5(psd)
           //发送请求注册
           $.ajax({
               url: api+ 'register',
               type: 'post',
               data:{
                  email,
                  code,
                  psd
               },
               datatype: 'jsonp',
               success:function(res){
                   $(".btn-register").removeClass('disabled')
                    if(res.status == 200) {
                        $.tooltip({
                            type:'success',
                            content: '注册成功'
                        })
                    }else {
                        $.tooltip({
                            type: 'error',
                            content: res.message
                        })
                    }
               }
           })


            
        }

    })
    var cookia=$.cookie('cookiename')
		if(cookia){
			countdown(cookia)			
		}
		
		$('.yangzhengma-con').click(function(){
			var _this=this;
			if($(this).hasClass('disabled'))
			return;
			countdown(60)			
		})
		function countdown(count){
		    $('.yangzhengma-con').addClass('disabled')
			$('.yangzhengma-con').html(count+'s后重新获取')
		var timer=setInterval(function(){
				  count--;
				//设置cookie
				$.cookie('cookiename',count)	     
				 $('.yangzhengma-con').html(count+'s后重新获取')
				  if(count<1){
				  	clearInterval(timer)
				$('.yangzhengma-con').removeClass('disabled').html('重新获取验证码')

				  }
			},1000)	
		}
})