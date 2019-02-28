$(function () {

    var color
    var color1
    var str

    function ajax_zhuce() {
        alert($("#name").val())
        $.ajax({
            "url": "us?type=add",
            "type": "Post",
            "data": {
                name: $("#name").val(),
                pass: $("#pass").val(),
                img: $("#photo").val()
            },
            "dataType": "text",
            success: list2
        })
        function list2(data){
            alert(data)
        }
    }


    $("#zhuce").click(function () {
        if ($("#zhuce").val()=="注册"){
            $(".none").show(100)
            $("#zhuce").val("保存")
        }
        else if ($("#zhuce").val()=="保存"){
            $(".none").hide(100)
            ajax_zhuce()
            $("#zhuce").val("注册")
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
        $(".f").hide(200)
        $("html,body").animate({
            scrollTop:"950px"
        },600)
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