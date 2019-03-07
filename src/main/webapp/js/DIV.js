$(function () {
    var color
    var color1
    var str     //按钮文字
    var userid  //登录的用户ID

    var cells = document.getElementById('time').getElementsByTagName('button');
    var clen = cells.length;
    var now=new Date();
    var nowmoth=(now.getMonth()+1)+'月';
    var nowday=now.getDate()+'日';
    var currentFirstDate;
    var formatDate = function(date){
        var month = (date.getMonth()+1)+'月';
        var day = date.getDate()+'日';
        var week = ['星期天','星期一','星期二','星期三','星期四','星期五','星期六'][date.getDay()];
        if (nowmoth==month&&nowday==day){
            return '<font color="red"><h2><strong>'+month+day+'</h2></strong>'+'<br/>'+'<h4>'+week+'</h4></font>';
        }
        return '<h2><strong>'+month+day+'</font></h2></strong>'+'<br/>'+'<h4>'+week+'</h4>';
    };
    var addDate= function(date,n){
        date.setDate(date.getDate()+n);
        return date;
    };
    var setDate = function(date){
        var week = date.getDay()-1;
        date = addDate(date,week*-1);
        currentFirstDate = new Date(date);
        for(var i = 0;i<clen;i++){
            cells[i].innerHTML = formatDate(i==0 ? date : addDate(date,1));
        }
    };
    setDate(new Date())
    /*function giveup() {
        /!* var now=new Date()
         var Moth=now.getMonth()+1
         var Day=now.getDate()
         function gettime(i) {
         var now=new Date()
         var week=now.getDay()+i
         var s=""
         switch (week){
         case 1:
         s="星期一";
         break;
         case 2:
         s="星期二";
         break;
         case 3:
         s="星期三";
         break;
         case 4:
         s="星期四";
         break;
         case 5:
         s="星期五";
         break;
         case 6:
         s="星期六";
         break;
         case 7:
         s="星期日";
         break;
         case  8:
         s="星期一"
         break;
         }
         return s
         }*!/
        /!* function time_ajax() {
         $.ajax({
         "url":"time",
         "type":"Post",
         "data": {
         Moth:Moth,
         Day:Day
         },
         "dataType": "text",
         success:a1
         })
         function a1(data) {
         if (data[18]==1&&data[17]==0){
         var q=data[0]-1+data[1]+data[2]+data[3]+data[4]
         var w=data[5]-1+data[6]+data[7]+data[8]+data[9]
         var e=data[10]-1+data[11]+data[12]+data[13]+data[14]
         }else {
         var q=data[0]+data[1]+data[2]+data[3]+data[4]
         var w=data[5]+data[6]+data[7]+data[8]+data[9]
         var e=data[10]+data[11]+data[12]+data[13]+data[14]
         }
         var r=data[15]+data[16]+data[17]+data[18]+data[19]
         var t=data[20]+data[21]+data[22]+data[23]+data[24]
         var y=data[25]+data[26]+data[27]+data[28]+data[29]
         var u=data[30]+data[31]+data[32]+data[33]+data[34]
         $("#on").html(q).append(gettime(-3))
         $("#tw").html(w).append(gettime(-2))
         $("#th").html(e).append(gettime(-1))
         $("#four").html(r).append(gettime(0))
         $("#five").html(t).append(gettime(1))
         $("#six").html(y).append(gettime(2))
         $("#seven").html(u).append(gettime(3))
         }
         }

         function time_ajax1(moth,day) {
         $.ajax({
         "url":"time",
         "type":"Post",
         "data": {
         Moth:moth,
         Day:day
         },
         "dataType": "text",
         success:a1
         })
         function a1(data) {
         if (data[18]==1&&data[17]==0){
         var q=data[0]-1+data[1]+data[2]+data[3]+data[4]
         var w=data[5]-1+data[6]+data[7]+data[8]+data[9]
         var e=data[10]-1+data[11]+data[12]+data[13]+data[14]
         }else {
         var q=data[0]+data[1]+data[2]+data[3]+data[4]
         var w=data[5]+data[6]+data[7]+data[8]+data[9]
         var e=data[10]+data[11]+data[12]+data[13]+data[14]
         }
         var r=data[15]+data[16]+data[17]+data[18]+data[19]
         var t=data[20]+data[21]+data[22]+data[23]+data[24]
         var y=data[25]+data[26]+data[27]+data[28]+data[29]
         var u=data[30]+data[31]+data[32]+data[33]+data[34]
         $("#on").html(q).append(gettime(-3))
         $("#tw").html(w).append(gettime(-2))
         $("#th").html(e).append(gettime(-1))
         $("#four").html(r).append(gettime(0))
         $("#five").html(t).append(gettime(1))
         $("#six").html(y).append(gettime(2))
         $("#seven").html(u).append(gettime(3))
         }
         }

         function time_ajax2(moth,day) {
         $.ajax({
         "url":"time",
         "type":"Post",
         "data": {
         Moth:moth,
         Day:day
         },
         "dataType": "text",
         success:a1
         })
         function a1(data) {
         if (data[18]==1&&data[17]==0){
         var q=data[0]+1+data[1]+data[2]+data[3]+data[4]
         var w=data[5]+1+data[6]+data[7]+data[8]+data[9]
         var e=data[10]+1+data[11]+data[12]+data[13]+data[14]
         }else {
         var q=data[0]+data[1]+data[2]+data[3]+data[4]
         var w=data[5]+data[6]+data[7]+data[8]+data[9]
         var e=data[10]+data[11]+data[12]+data[13]+data[14]
         }
         var r=data[15]+data[16]+data[17]+data[18]+data[19]
         var t=data[20]+data[21]+data[22]+data[23]+data[24]
         var y=data[25]+data[26]+data[27]+data[28]+data[29]
         var u=data[30]+data[31]+data[32]+data[33]+data[34]
         $("#on").html(q).append(gettime(-3))
         $("#tw").html(w).append(gettime(-2))
         $("#th").html(e).append(gettime(-1))
         $("#four").html(r).append(gettime(0))
         $("#five").html(t).append(gettime(1))
         $("#six").html(y).append(gettime(2))
         $("#seven").html(u).append(gettime(3))
         }
         }*!/

        /!* for(var i=0;i<7;i++){*!/
        /!*time_ajax()*!/
        /!*}*!/

        /!*    setInterval()*!/

        /!*$(".user").blur(function () {
         ajax_yanzheng()
         })*!/


        /!*function ajax_yanzheng() {
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
         }*!/

        /!*var time= $("#four").text()
         var moth=time.substring(0,1)
         var day=time.substring(2,4)
         if (day-7<0){
         moth-=1
         if (moth==2){
         day=28+(day-7)
         }else if (moth==1||3||5||7||8||10||12){
         day=31+(day-7)
         }else{
         day=30+(day-7)
         }
         }
         else {
         day-=7
         }
         time_ajax1(moth,day)*!/

        /!*var time= $("#four").text()
         var moth=time.substring(0,1)
         var day=time.substring(2,4)
         time_ajax2(moth,Number(day)+Number(7))*!/
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

    function a() {
        
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
                     $("#Login").hide()
                     $("#My").text($("#name").val()).css("opacity","1").css("font-size","60px")
                     $("html,body").animate({
                         scrollTop:"950px"
                     },600)}
                 else {
                     alert("登录失败")
                 }
             }
         })
    }
    
    function ajax_buy(data) {
        $.ajax({
            "url": "fly?type=buy",
            "type": "Post",
            "data": {
                userid:userid,
                airid:data
            },
            "dataType": "text",
            success: list2
        })
        function list2(data){
             if(data=="true"){
                 alert("购买成功")
             }else {
                 alert("失败")
             }
        }
    }

    $(document).on("click",".i",function () {
        if (confirm("是否购买航班"+$(this).find("td:first").text()+"的机票")){
            if(userid!=null){
                var airid=$(this).find("td:first").text()
                ajax_buy(airid)
            }
            else {
                alert("请先登录")
            }
        }else {

        }
    })

    function ajax_selectbytime(nowday) {
        $.ajax({
            "url": "fly?type=selbytime",
            "type": "Post",
            "data": {
                nowday:nowday
            },
            "dataType": "JSON",
            success: list2
        })
        function list2(data){
            clearflyinfo()
            for(var i=0;i<data.length;i++){
                var $s=$("<tr class='i' style='height: 40px;font-size: 30px'><td width='300px'>"+data[i].airid+"</td><td width='250px'>"+data[i].stime+"</td><td width='300px'>"+data[i].etime+"</td><td width='300px'>"+data[i].price+"</td></tr>");
                $("#a").append($s)
            }
        }
    }

    $("#My").click(function () {
        if ($(this).text()!="" &&$(this).text()!=null) {
            $("#user").animate({
                "opacity": 1
            }, 500, function () {
                setTimeout(function () {
                    $("#info").animate({
                        "opacity": 1
                    }, 500)
                }, 200)
                setTimeout(function () {
                    $("#exit").animate({
                        "opacity": 1
                    }, 500)
                }, 900)
            })
        }
    })

    function clearflyinfo() {
        var trs=$("#a").find("tr");
        for (var j=0;j<trs.length;j++){
            trs[j].remove()
        }
    }

    function ajax_selectFlyinfo() {
        $.ajax({
            "url": "fly?type=sel",
            "type": "Post",
            "data": {
                start: $("#one").val(),
                end: $("#two").val(),
            },
            "dataType": "JSON",
            success: list2
        })
        function list2(data){
            clearflyinfo()
            for(var i=0;i<data.length;i++){
                var $s=$("<tr class='i' style='height: 30px;font-size: 30px'><td>"+data[i].airid+"</td><td>"+data[i].stime+"</td><td>"+data[i].etime+"</td><td>"+data[i].price+"</td></tr>");
                $("#flyinfo").append($s)
            }
        }
    }

    function ajax_selectFlyinfobytimeandcity() {
        $.ajax({
            "url": "fly?type=selbytimeandcity",
            "type": "Post",
            "data": {
                start: $("#one").val(),
                end: $("#two").val(),
            },
            "dataType": "JSON",
            success: list2
        })
        function list2(data){
            clearflyinfo()
            for(var i=0;i<data.length;i++){
                var $s=$("<tr class='i' style='height: 30px;font-size: 30px'><td width='300px'>"+data[i].airid+"</td><td width='250px'>"+data[i].stime+"</td><td width='300px'>"+data[i].etime+"</td><td width='300px'>"+data[i].price+"</td></tr>");
                $("#a").append($s)
            }
        }
    }

    function ajax_updateuser() {
        $.ajax({
            "url":"us?type=upd",
            "type":"POST",
            "data":{
                userid:userid,
                username:$("#sname").val(),
                userpwd:$("#spass").val()
            },"dataType":"text",
            success:li
        })
        function li(data) {
            if (data=="true"){
                alert("修改成功")
                $("#My").fadeOut(250)
                $("#My").text($("#sname").val());
                $("#My").fadeIn(250)
            }else {
                alert("系统出错")
            }
        }
    }

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
        $("#userLoginfont").text("用户登录")
        $("#OT").show()
        $("#TT").hide()
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

    $("#last-week").hover(function () {
        $(this).css("color","red")
    },function () {
        $(this).css("color","#66afe9")
    }).click(function () {
        setDate(addDate(currentFirstDate,-7));
    })

    $("#next-week").hover(function () {
        $(this).css("color","red")
    },function () {
        $(this).css("color","#66afe9")
    }).click(function () {
        setDate(addDate(currentFirstDate,7));
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
        if ($("#three").css("opacity")==1) {
            ajax_selectFlyinfobytimeandcity()
            $("html,body").animate({
                scrollTop: "1800px"
            }, 600)
        }
    })

    $("#zhong").click(function () {
        if ($("#zhong").val()==">>>>"){
            $("#zhong").val("<<<<")
        }else if($("#zhong").val()=="<<<<"){
            $("#zhong").val(">>>>")
        }
    })

    $(".sp").hover(function () {
          $(this).children().animate({
            height:"100px"
          },50)
        $(this).children().css("color","orange").css("background-color","rgba(255,255,255,0.7)")
    },function () {
          $(this).children().animate({
              height:"90px"
          },50)
        $(this).children().css("color","wheat").css("background-color","rgba(0,0,0,0.7)")
    })

    $(".spbtn").click(function () {
        var nowday=$(this).text()
       ajax_selectbytime(nowday)
    })

    $("#exit").click(function () {
        if ($("#My").css("opacity")==1) {
            if (confirm("您确定要退出吗")) {
                userid=0
                $("#exit").animate({
                    "opacity": 0
                }, 500, function () {
                    setTimeout(function () {
                        $("#info").animate({
                            "opacity": 0
                        }, 500)
                    }, 200)
                    setTimeout(function () {
                        $("#user").animate({
                            "opacity": 0
                        }, 500)
                    }, 900)
                    setTimeout(function () {
                        $("#My").animate({
                            "opacity": 0
                        }, 500)
                        $("#Login").show(250)
                    }, 1600)
                    $(".f").fadeOut(500)
                })
            } else {

            }
        }
    })

    $("#user").click(function () {
        if ($("#My").css("opacity")==1) {
            $("#userLoginfont").text("修改信息")
            $(".f").show()
            $("#OT").hide()
            $("#TT").show()
        }
    })

    $("#save").click(function () {
        ajax_updateuser();
    })
})