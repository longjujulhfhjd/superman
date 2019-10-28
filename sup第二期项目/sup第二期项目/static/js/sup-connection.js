
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
    $(".sup-connection-forms").validate({
        rules: {
             name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telnum: {
                required: true
            },
            address: {
                required: true
            },
            massage: {
                required: true
            }
        },
        messages: {//定义错误信息
            name: {
                required:'姓名不能为空'
            },
            email: {
                required: '邮箱不能为空'
            },
            telnum: {
                required:'电话不能为空'
            },
            address: {
                required: '地址不能为空'
            },
            massage: {
                required: '留言不能为空'
            }
           
        }

    })
 


 // 提交留言
    $(".connect-bto").click(function(){
        if($(".sup-connection-forms").valid())
        {       
            let name = $("[name=name]").val();
            let email = $("[name=email]").val();
            let telnum = $("[name=telnum]").val();
            let address = $("[name=address]").val();
            let massage = $("[name=massage]").val();
           //发送留言请求
           $.ajax({
               url: api+ 'massage',
               type: 'post',
               data:{
                name,
                email,
                telnum ,
                address, 
                massage
               },
               dataType:'json',//数据类型都为json
                success:function(res){
                    if(res.status == 200) {
                        $.tooltip({
                            type:'success',
                            content: '提交留言成功'
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
   
})