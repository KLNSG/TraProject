$(function () {



    var color
    var color1
    var str
    var userid
/*    setInterval()*/

    /*function ajax_yanzheng() {
        $.ajax({
            "url": "us?type=add",
            "type": "Post",
            "data": {
                name: $("#name").val(),
                pass: $("#pass").val(),
            },
            "dataType": "text",
            success: list2
        })
    }*/

    function ajax_zhuce() {
        $.ajax({
            "url": "us?type=add",
            "type": "Post",
            "data": {
                name: $("#name").val(),
                pass: $("#pass").val(),
            },
            "dataType": "text",
            success: list2
        })
        function list2(data){
            if (data=="true"){
               alert("注册成功")
            }
        }
    }

    function ajax_denglu() {
         $.ajax({
             "url": "us?type=Log",
             "type": "Post",
             "data": {
                 name: $("#name").val(),
                 pass: $("#pass").val(),
             },
             "dataType": "text",
             success: function (data) {
                 if (data!="0"){
                     alert("登陆成功")
                     userid=data
                     $(".f").hide(200)
                     $("html,body").animate({
                         scrollTop:"950px"
                     },600)}
                 else {
                     alert("登录失败")
                 }
             }
         })
    }

    /*$(".user").blur(function () {
        ajax_yanzheng()
    })*/

    $("#zhuce").click(function () {
        if ($("#zhuce").val()=="注册"){
            $(".none").show(100)
            $("#zhuce").val("保存")
        }
        else if ($("#zhuce").val()=="保存"){
            if ($("#repass").val()==($("#pass").val())){
                ajax_zhuce()
                $("#zhuce").val("注册")
                $(".none").hide(100)
            }else {
                alert("请再次确认密码")
            }


        }
    })

    $(window).scroll(function() {
        $(".slideanim").each(function(){
            var pos = $(this).offset().top;
            var winTop = $(window).scrollTop();
            if (pos < winTop + 600) {
                $(this).addClass("slide");
            }
        });
    });

    $("#denglu").click(function () {
        ajax_denglu()
    })

    $("#Login").click(function () {
        $(".f").show()
        $(".f").addClass("slide")
        $(".text-center").addClass("slide");
        $(".deng").addClass("slide")
    })

    $(".btn,.zuonei").hover(function () {
        color=$(this).css("border-top-color")
        $(this).css("background-color",color).css("color","wheat");
    },function () {
        $(this).css({"border-color":color,"background-color":"transparent","color":color})
        $(this).css("background-color","transparent").css("color",color)
    })
    
    $(".zuonei").hover(function () {
         color=$(this).css("border-top-color")
         $(this).css("background-color",color).css("color","wheat");
    },function () {
        $(this).css("color","black")
    })

    $(".start").hover(function () {
        color=$(this).css("border-top-color")
        $(this).css("background-color",color).css("color","wheat");
    },function () {
        $(this).css({"border-color":color,"background-color":"transparent","color":color})
        $(this).css("background-color","transparent").css("color",color)
    })

    $(".start").click(function () {
        alert(userid)
        if($(this).val()=="出发地"){
            $(this).fadeOut(250)
            setTimeout(function () {
                $("#zuo").show(250)
            },500)
        }
        else if($(this).val()=="目的地"){
            $(this).fadeOut(250)
            setTimeout(function () {
                $("#you").show(250)
            },500)

        }
    })

    $(".zuonei").click(function () {
        str=$(this).text().trim()
        /*alert($(this).text().trim())
        alert($(this).parent().attr("id"))*/
        if($(this).parent().attr("id")=="zuo"){
            $("#one").val(str)
            document.getElementById("go").innerHTML=str
            $(this).parent().fadeOut(250)
            setTimeout(function () {
                $("#one").show(250)
            },500)
        }
        else if($(this).parent().attr("id")=="you"){
            $("#two").val(str)
            document.getElementById("end").innerHTML=str
            $(this).parent().fadeOut(250)
            setTimeout(function () {
                $("#two").show(250)
            },500)
        }
        var a=setInterval(function () {
            if ($("#one").val()!="出发地" && $("#two").val()!="目的地"){
                setTimeout(function () {
                    $("#one").animate({
                        opacity:'0'
                    },100)
                    $("#two").animate({
                        opacity:'0'
                    },100)
                    setTimeout(function () {
                        $("#three").animate({
                            opacity:'1'
                        },100)
                    },700)
                },700)
                clearInterval(a)
            }
        },500)
    })

    $("#three").click(function () {
        $("html,body").animate({
            scrollTop:"1800px"
        },600)
    })

    $("#zhong").click(function () {
        if ($("#zhong").val()==">>>>"){
            $("#zhong").val("<<<<")
        }else if($("#zhong").val()=="<<<<"){
            $("#zhong").val(">>>>")
        }

    })
})