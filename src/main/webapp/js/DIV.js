$(function () {
    var color
    var color1
    var str     //按钮文字
    var userid=0//登录的用户ID
    var username
    var cityid=0
    var airid=0
    var buyid=0

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
    /*var jj=false
    $(".bb").click(function () {
        if($(this).val()=="确定"){
            jj=true
        }
    })*/
    function messageexit() {
        $("#message").animate({
            "opacity": "0",
            "width": "0px",
            "height": "0px"
        }, 500,function () {
            $("#message").css("display","none").css("z-index","-999")
        })
    }
    $(".bb").click(function () {
        if ($(this).parent().parent().css("opacity")!=0) {
            if ($(this).val() == "取消") {
                airid=0
                $("#mess").text()
                messageexit()
            }else if ($(this).val()=="确定"){
                if ($("#ce").text()!=null && $("#ce").text()!=""){
                    if ($("#ce").text().indexOf("购买")>0){
                        isbuy()
                        ajax_selcai("buy")
                        messageexit()
                    }else if ($("#ce").text().indexOf("取消")>0){
                        ajax_delFlyinfo(buyid)
                        messageexit()
                    }else {
                        switch ($("#ce").text()) {
                            case "您确定要退出吗":
                                exit()
                                messageexit()
                                break;
                            default :
                                mess("系统出错");
                        }
                    }
                }else {
                    mess("系统出错")
                }
            }
        }
    })
    function mess(s,t) {
        if (t=="alert") {
            $("#mess").text(s)
            $("#mess").css("z-index","500")
            $("#mess").animate({
                "top": "100px",
                "opacity": "1",
                "width": "100%",
            }, 500, function () {
                setTimeout(function () {
                    $("#mess").animate({
                        "opacity": "0",
                        "top": "0px"
                    }, 500,function () {
                        $("#mess").css("top","100px").css("width","0px")
                    })
                }, 2000)
            })
        }else  if(t=="con"){
            $("#ce").text(s)
            $("#message").css("display","block").css("z-index","999")
            $("#message").animate({
                "width": "400px",
                "height":"200px",
                "opacity": "1"
            },"slow")
        }
    }

    function ajax_adduserinfo() {
        $.ajax({
            "url": "us?type=adduserinfo",
            "type": "Post",
            "data": {
                userid:userid,
                username:username,
                age:$("#age").val(),
                sex:$("#sex").val(),
                phone:$("#phone").val(),
                cardid:$("#usercard").val(),
                address:$("#address").val(),
                email:$("#email").val()
            },
            "dataType": "text",
            success: ss
          })
        function ss(data) {
           if (data!=0){
               mess("添加成功","alert")
               $(".f").hide(500)
           }else if (data==0){
               mess("您已添加过信息了","alert")
           }else {
               mess("系统出错","alert")
           }
        }
    }

    ajax_Citybang()
    function ajax_Citybang() {
        $.ajax({
            "url": "city",
            "type": "Post",
            "data": "",
            "dataType": "JSON",
            success: x
        })
        function x(data) {
                for (var i=0;i<data.length;i++){
                    $s=$("<div style='cursor: default;' class='zuonei'> <h2><strong>"+data[i].city+"</strong></h2></div>")
                    $("#zuo").append($s)
                }
            for (var i=0;i<data.length;i++){
                $z=$("<div style='cursor: default;' class='zuonei'> <h2><strong>"+data[i].city+"</strong></h2></div>")
                $("#you").append($z)
            }
        }
    }

    function ajax_zhuce() {
        $.ajax({
            url: 'us?type=add',
            type: 'POST',
            cache: false,
            data: new FormData($('#uploadForm')[0]),
            processData: false,
            contentType: false,
            success: a
        }).done(function(res) {
        }).fail(function(res) {});
        function a(data) {
            if (data=="true"){
                mess("注册成功","alert")
            }
        }
    }

    function ajax_updateuserinfo() {
        $.ajax({
            "url": "us?type=updateuserinfo",
            "type": "Post",
            "data": {
                userid:userid,
                userage:$("#ag1").val(),
                usersex:$("#se1").val(),
                userphone:$("#ph1").val(),
                usercardid:$("#card1").val(),
                useraddress:$("#ad1").val(),
                email:$("#em1").val()
            },
            "dataType": "text",
            success:a
        })
        function a(data) {
                 if (data=="true"){
                     mess("修改成功","alert")
                 }else {
                     mess("修改失败","alert")
                 }
        }
    }

    function ajax_userka() {
        $.ajax({
            "url": "us?type=userka",
            "type": "Post",
            "data": {
                userid:userid
            },
            "dataType": "JSON",
            success:cc
        })
        function cc(data) {
         for (var i=0;i<data.length;i++){
             $(".img").attr("src",data[i].userimage)
             $("#name1").text(data[i].username)
         }
        }
    }

    $(".aa").click(function () {
        if (userid!=0&&userid!=null) {
            switch ($(this).text()) {
                case "目的地":
                    $("html,body").animate({
                        scrollTop: $("#service").offset().top
                    }, 600)
                    break;
                case "机票":
                    $("html,body").animate({
                        scrollTop: $("#events").offset().top
                    }, 600)
                    break;
                case "旅游百货":
                    $("html,body").animate({
                        scrollTop: $("#gallery").offset().top
                    }, 600)
                    break;
                case "我的订单":
                    $("html,body").animate({
                        scrollTop: $("#contact").offset().top
                    }, 600)
                    break;
                default:
                    mess("系统出错", "alert")
                    break;
            }
        }else {
            mess("登录后方可使用","alert")
        }
    })

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
                     mess("登陆成功","alert")
                     userid=data
                     username=$("#name").val()
                     $("html,body").css("overflow","visible")
                     ajax_userka()
                     $(".f").hide(200)
                     $("#Login").hide()
                     $("#My").text($("#name").val()).css("opacity","1").css("font-size","60px")
                     $("html,body").animate({
                         scrollTop:"950px"
                     },600)}
                 else {
                     mess("登录失败","alert")
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
                 mess("购买成功","alert")
             }else {
                 mess("系统出错","alert")
             }
        }
    }

    function isbuy() {
        if(userid!=null && userid!=0){
            ajax_buy(airid)
        }
        else {
            mess("请先登录","alert")
        }
    }
    $(document).on("click",".i",function () {
        airid=$(this).find("td:first").text()
        mess("是否购买航班"+$(this).find("td:first").text()+"的机票","con")
    })

    function ajax_selectbytime(nowday) {
        $.ajax({
            "url": "fly?type=selbytime",
            "type": "Post",
            "data": {
                nowday:nowday,
                start: $("#go").text(),
                end: $("#end").text()
            },
            "dataType": "JSON",
            success: list2
        })
        function list2(data){
            clearflyinfo()
            for(var i=0;i<data.length;i++){
                var $s=$("<tr class='i' style='cursor: default;;height: 40px;font-size: 30px'><td width='300px'>"+data[i].airid+"</td><td width='250px'>"+data[i].stime+"</td><td width='300px'>"+data[i].etime+"</td><td width='300px'>"+data[i].price+"</td></tr>");
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
                var $s=$("<tr class='i' style='cursor: default;height: 30px;font-size: 30px'><td>"+data[i].airid+"</td><td>"+data[i].stime+"</td><td>"+data[i].etime+"</td><td>"+data[i].price+"</td></tr>");
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
                var $s=$("<tr class='i' style='cursor: default;;height: 30px;font-size: 30px'><td width='300px'>"+data[i].airid+"</td><td width='250px'>"+data[i].stime+"</td><td width='300px'>"+data[i].etime+"</td><td width='300px'>"+data[i].price+"</td></tr>");
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
                mess("修改成功","alert")
                ajax_userka()
                $("#My").fadeOut(300,function () {
                    $("#My").text($("#sname").val());
                    $("#My").fadeIn(300)
                    $(".f").hide(500)
                })

            }else {
                mess("系统出错","alert")
            }
        }
    }

    $("#zhuce").click(function () {
        if ($("#zhuce").val()=="注册"){
            $(".none").show(100)
            $("#zhuce").val("保存")
        }
        else if ($("#zhuce").val()=="保存"){
            if($("#name").val()!=""&&$("#pass").val()!=""&&$("#repass")!=""&&$("#photo")!="") {
                if ($("#repass").val() == ($("#pass").val())) {
                    if ($("#photo").val()!="") {
                        ajax_zhuce()
                        $("#zhuce").val("注册")
                        $(".none").hide(100)
                    }else {
                        mess("请选择头像","alert")
                    }
                } else {
                    mess("请再次确认密码","alert")
                }
            }else {
                mess("请输入用户名和密码并选择图片","alert")
            }
        }
    })

    $(window).scroll(function() {
        $(".slideanim").each(function(){
            var pos = $(this).offset().top;
            var winTop = $(window).scrollTop();
            if (pos < winTop + 800) {
                $(this).addClass("slide");
            }
        });
    });

    function check() {
        if ($("#name").val()!="" &&($("#pass")).val()!=""){
            ajax_denglu()
        }else {
            mess("登录信息不能为空","alert")
        }
    }

    $("#denglu").click(function () {
        if ($("#zhuce").val()=="注册") {
            check()
        }else {
            $(".none").hide(100)
            $("#zhuce").val("注册")
        }
    })

    $("#Login").click(function () {
        $("#userLoginfont").text("用户登录")
        $("#userLoginfont").show()
        $("#xx").show()
        $("#OT").show()
        $("#TT").hide()
        $("#TTT").hide()
        $(".f").show()
        $(".f").addClass("slide")
        $(".text-center").addClass("slide");
        $(".deng").addClass("slide")
    })

    $(".btn").hover(function () {
        color=$(this).css("border-top-color")
        $(this).css("background-color",color).css("color","wheat");
    },function () {
        $(this).css({"border-color":color,"background-color":"transparent","color":color})
        $(this).css("background-color","transparent").css("color",color)
    })
    
   /* $(".zuonei").hover(function () {
         color=$(this).css("border-top-color")
         $(this).css("background-color",color).css("color","wheat");
    },function () {
        $(this).css("color","black")
    })*/

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

    $(document).on("click",".zuonei",function (){
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
            ajax_selcitymei()
            $("html,body").animate({
                scrollTop: "1800px"
            }, 600)
            $("#three").animate({
                opacity:'0'
            },100)
            $("#one").val("出发地")
            $("#two").val("目的地")
            setTimeout(function () {
                $("#one").animate({
                    opacity:'1'
                },100)
                $("#two").animate({
                    opacity:'1'
                },100)
                $(".mei").css("background","url('city/"+cityid+"_mei.jpg') no-repeat").css("background-position","center").css("background-size","100% 100%")
                $(".jian").css("background","url('city/"+cityid+"_jian.jpg') no-repeat").css("background-position","center").css("background-size","100% 100%")
                $(".te").css("background","url('city/"+cityid+"_te.jpg') no-repeat").css("background-position","center").css("background-size","100% 100%")
            },700)
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

    function exit() {
        userid=0
        username=""
        $(".img").attr("src","")
        $("#name1").text("无人登录")
        $("html,body").css("overflow","hidden")
        $("html,body").animate({
            scrollTop: $("#myCarousel").offset().top
        }, 600)
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
                }, 500,function () {
                    setTimeout(function () {
                        $("#My").text("")
                    },500)
                })
                $("#Login").show(250)
            }, 1600)
            $(".f").fadeOut(500)
        })
    }
    $("#exit").click(function () {
        if ($("#My").css("opacity")==1&&$("#exit").css("opacity")==1) {
            mess("您确定要退出吗","con")
        }
    })

    $("#user").click(function () {
        if ($("#My").css("opacity")==1&&$("#user").css("opacity")==1) {
            $("#userLoginfont").show()
            $("#xx").show()
            $("#userLoginfont").text("修改信息")
            $(".f").show()
            $("#OT").hide()
            $("#TTT").hide()
            $("#TT").show()
        }
    })

    $("#info").click(function () {
        if ($("#My").css("opacity")==1&&$("#user").css("opacity")==1){
            $("#userLoginfont").hide()
            $("#xx").hide()
            $(".f").show()
            $("#OT").hide()
            $("#TT").hide()
            $("#TTT").show()
        }
    })

    $("#save").click(function () {
        ajax_updateuser();
    })


     function ajax_userinfo(s) {
        $.ajax({
            "url": "us?type=selinfobyid",
            "type": "Post",
            "data": {
                userid:userid
            },
            "dataType": "JSON",
            success:mm
         })
         function mm(data) {
                for (var i = 0; i < data.length; i++) {
                    if (data[i].username==null){
                        mess("资料为空","alert")
                        return false
                    }else {
                        if (s=="sel") {
                            $("#na").text(data[i].username)
                            $("#ag").text(data[i].userage)
                            $("#se").text(data[i].usersex)
                            $("#ph").text(data[i].userphone)
                            $("#card").text(data[i].usercardid)
                            $("#ad").text(data[i].useraddress)
                            $("#em").text(data[i].email)
                            userimg()
                        }else if(s=="upd"){
                            $("#ag1").val(data[i].userage)
                            $("#se1").val(data[i].usersex)
                            $("#ph1").val(data[i].userphone)
                            $("#card1").val(data[i].usercardid)
                            $("#ad1").val(data[i].useraddress)
                            $("#em1").val(data[i].email)
                        }else if (s=="sell"){
                            $("#na").text(data[i].username)
                            $("#ag").text(data[i].userage)
                            $("#se").text(data[i].usersex)
                            $("#ph").text(data[i].userphone)
                            $("#card").text(data[i].usercardid)
                            $("#ad").text(data[i].useraddress)
                            $("#em").text(data[i].email)
                        }
                    }
                }
        }
    }
    function userimg() {
        if ($("#userimg").css("margin-left") == "380px") {
            $("#caidan").animate({
                "opacity": 0
            }, 500)
            $(".myding,.up").animate({
                "width": "1200px"
            }, 500)
            $("#userimg").animate({
                "marginLeft": "180px"
            }, "slow", function () {
                $("#userimg").addClass("xuanzhong")
                setTimeout(function () {
                    $("#Myinfoshow").css("display", "block")
                }, 500)
            })
        } else {
            $(".userinfotxt").fadeOut(300, function () {
                $("#Myinfoshow").find("label:gt(0)").fadeIn(300)
                $(".updatebtn").val("编辑资料")
            })
            $("#caidan").animate({
                "opacity": 1
            }, 500)
            $(".myding,.up").animate({
                "width": "700px"
            }, 500)
            $("#Myinfoshow").css("display", "none")
            setTimeout(function () {
                $("#userimg").removeClass("xuanzhong")
                $("#userimg").animate({
                    "marginLeft": "380px"
                }, "slow")
            }, 400)
        }
    }
    $("#userimg").click(function () {
        if ($("#userimg").css("opacity")== 1) {
            ajax_userinfo("sel")
        }
    })

    $(".cai").hover(function () {
        color=$(this).css("border-top-color")
        $(this).css("background-color",color).css("color","wheat");
    },function () {
        $(this).css({"border-color":color,"background-color":"transparent","color":color})
        $(this).css("background-color","transparent").css("color",color)
    })

    $("#saveinfo").click(function () {
        ajax_adduserinfo()
    })

    function ajax_selcai(s) {
            $.ajax({
            "url": "fly?type=selcai",
            "type": "Post",
            "data": {
                userid:userid
            },
            "dataType": "JSON",
                success:a
        })
        function a(data) {
            clearcai();//////清空所有数据
            if (data==""){
                mess("您暂时没有下订单", "alert")
                back()
            }else {
                for (var i = 0; i < data.length; i++) {
                    if (data[i].airid == null) {
                        mess("您暂时没有下订单", "alert")
                        return false
                    } else {
                        if (s=="sel") {
                            caidan();
                        }
                        var $s = $("<div style='margin-top: " + (i * 80) + "px' class='airinfo'><label>" + data[i].airid + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label><label>" + data[i].scity + "&nbsp;&nbsp;-->&nbsp;&nbsp;</label><label>" + data[i].ecity + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label><label>" + data[i].stime + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label><input style='float: right' class='del' id='" + data[i].ding + "' type='button' value='取消'></div>")
                        $("#filghtinfo").append($s);
                    }
                }
            }
        }
        }
    $("#air").click(function () {
        if ($("#caidan").css("opacity")== 1) {
            ajax_selcai("sel")
        }
    })
    function caidan() {
            $(".myding,.up").animate({
                "width": "900px"
            }, 500)
            $("#caidan").animate({
                "opacity": "0",
                "marginLeft": "0px"
            }, 300)
            $("#userimg").animate({
                "opacity": 0,
                "marginLeft": "400px"
            }, 300)
        $("#back").attr("value","返回")
            $("#back").animate({
                "width":"100px"
            },500)
            $("#filghtinfo").show()
    }

    
    function clearcai() {
        var trs=$("#filghtinfo").find("div");
        for (var i=0;i<trs.length;i++){
            trs[i].remove();
        }
    }
    function ajax_delFlyinfo(id) {
        $.ajax({
            "url": "fly?type=del",
            "type": "Post",
            "data": {
                buyid:id
            },
            "dataType": "text",
            success:a
        })
        function a(data) {
            if (data!="0"){
                mess("删除成功","alert")
                /*$("#"+id).parent().remove()*/
                clearcai()
                ajax_selcai("sel")
            }else {
                mess("删除失败","alert")
            }
        }
    }
    $(document).on("click",".del",function (){
        buyid=$(this).attr("id")
        mess("是否取消航班","con")
    })

    $("#back").click(function () {
        back()
    })
function back() {
    $(".myding,.up").animate({
        "width": "700px"
    }, 500)
    $("#caidan").animate({
        "opacity": 1,
        "marginLeft": "20px"
    }, 300)
    $("#userimg").animate({
        "opacity": 1,
        "marginLeft": "380px"
    }, 300)
    $("#back").attr("value","")
    $("#back").animate({
        "width":"0px"
    },500)
    $("#filghtinfo").hide()
}

    $(".updatebtn").click(function () {
        if ($(this).val() == "编辑资料") {
            ajax_userinfo("upd")
            $("#Myinfoshow").find("label:gt(0)").fadeOut(300, function () {
                $(".userinfotxt").fadeIn(300)
                $(".updatebtn").val("确定修改")
            })
        } else {
           ajax_updateuserinfo()
            $(".userinfotxt").fadeOut(300, function () {
                $("#Myinfoshow").find("label:gt(0)").fadeIn(300)
                $(".updatebtn").val("编辑资料")
            })
            ajax_userinfo("sell")
        }
    })

    $(".mei").hover(function () {
        if ($(this).css("height")=="360px"||$(this).css("height")=="370px") {
            $(".mei").animate({
                "marginTop": "115px",
                "height": "370px",
                "marginLeft": "95px",
                "width": "270px"
            }, 200)
            $("#nei_mei").animate({
                "opacity": "1",
                "marginTop": "270px"
            }, 200)
        }
    },function () {
        if ($(this).css("height")=="360px"||$(this).css("height")=="370px") {
            $("#nei_mei").animate({
                "opacity": "0",
                "marginTop": "360px"
            }, 200)
            $(".mei").animate({
                "marginTop": "120px",
                "height": "360px",
                "marginLeft": "100px",
                "width": "260px"
            }, 200)
        }
    })
    $(".jian").hover(function () {
        if ($(this).css("height")=="360px"||$(this).css("height")=="370px") {
            $(".jian").animate({
                "marginTop": "115px",
                "height": "370px",
                "marginLeft": "455px",
                "width": "270px"
            }, 200)
            $("#nei_jian").animate({
                "opacity": "1",
                "marginTop": "270px"
            }, 200)
        }
    },function () {
        if ($(this).css("height")=="360px"||$(this).css("height")=="370px") {
            $("#nei_jian").animate({
                "opacity": "0",
                "marginTop": "360px"
            }, 200)
            $(".jian").animate({
                "marginTop": "120px",
                "height": "360px",
                "marginLeft": "460px",
                "width": "260px"
            }, 200)
        }
    })
    $(".te").hover(function () {
        if ($(this).css("height")=="360px"||$(this).css("height")=="370px") {
            $(".te").animate({
                "marginTop": "115px",
                "height": "370px",
                "marginLeft": "815px",
                "width": "270px"
            }, 200)
            $("#nei_te").animate({
                "opacity": "1",
                "marginTop": "270px"
            }, 200)
        }
    },function () {
        if ($(this).css("height")=="360px"||$(this).css("height")=="370px") {
            $("#nei_te").animate({
                "opacity": "0",
                "marginTop": "360px"
            }, 200)
            $(".te").animate({
                "marginTop": "120px",
                "height": "360px",
                "marginLeft": "820px",
                "width": "260px"
            }, 200)
        }
    })

    $(".city").click(function () {
        if (cityid!=0) {
            if ($(this).css("height")=="360px"||$(this).css("height")=="370px") {
                cityclick($(this))
                var str = $(this).find("label").text()
                setTimeout(function () {
                    switch (str) {
                        case "美食":
                            meishi()
                            setTimeout(function () {
                                ajax_selmeiwen()
                                $(".meishiimg").attr("src", "city/" + cityid + "_mei1.jpg")
                            }, 500)
                            break;
                        case "建筑":
                            meishi()
                            setTimeout(function () {
                                ajax_seljianwen()
                                $(".meishiimg").attr("src", "city/" + cityid + "_jian1.jpg")
                            }, 500)
                            break;
                        case "特色":
                            $("#video").css("z-index","120")
                            $("#video").animate({
                                "opacity":"1"
                            },300,function () {
                                $("#video").find("video").remove()
                                $("#video").append($("<video style='width: 700px;height:400px' autoplay='autoplay' controls='controls'><source src='city/"+cityid+".mp4' type='video/mp4'></video>"))
                            })
                            break;
                        default:
                            mess("系统错误", "alert")
                            break
                    }
                }, 500)
            }else {
                $("#video").find("video").remove()
                $(".wenzi").animate({
                    "opacity":"0"
                },300)
                $(".fengsu").find("img").animate({
                    "opacity":"0"
                },300)
                $("#video").animate({
                    "opacity":"0"
                },300)
                setTimeout(function () {
                    $(".wenzi").css("z-index","-1")
                    $(".fengsu").find("img").css("z-index","-1")
                    $("#video").css("z-index","-1")
                    goback2()
                },400)
            }
        }else {
            mess("请先选择目的地","alert")
        }
    })

    function ajax_seljianwen() {
        $.ajax({
            "url":"city",
            "type":"Post",
            "data":{
             type:"seljianwen",
                cityid:cityid
            },"dataType":"JSON",
            success:k
        })
        function k(data) {
            var trs=$("#wz").find("label");
            for (var j=0;j<trs.length;j++){
                trs[j].remove()
            }
            var tsr=$("#wj").find("h3");
            for (var j=0;j<trs.length;j++){
                tsr[j].remove()
            }
            for (var i=0;i<data.length;i++){
                $s=$("<label style='font-size: 45px'>"+data[i].jname+"</label>")
                $z=$("<h3>"+data[i].jjie+"</h3>")
                $("#wz").append($s)
                $("#wj").append($z)
            }
        }
    }

    function goback2() {
        $(".city").css("z-index","auto")
        $(".city").animate({
            "marginTop":"120px",
            "height":"360px",
            "width":"260px"
        })
        $(".mei").animate({
            "marginLeft":"100px"
        })
        $(".jian").animate({
            "marginLeft":"460px"
        })
        $(".te").animate({
            "marginLeft":"820px"
        })
        $(".nei").animate({
            "opacity":"0",
            "marginTop":"360px",
            "width":"270"
        },200)
    }

    function ajax_selmeiwen() {
        $.ajax({
            "url":"city",
            "type":"Post",
            "data":{
                type:"selmeiwen",
                cityid:cityid
            },"dataType":"JSON",
            success:p
        })
        function p(data) {
            var trs=$("#wz").find("label");
            for (var j=0;j<trs.length;j++){
                trs[j].remove()
            }
            var tsr=$("#wj").find("h3");
            for (var j=0;j<trs.length;j++){
                tsr[j].remove()
            }
            for (var i=0;i<data.length;i++){
                $s=$("<label style='font-size: 45px'>"+data[i].mname+"</label>")
                $z=$("<h3>"+data[i].mjie+"</h3>")
                $("#wz").append($s)
                $("#wj").append($z)
            }
        }
    }

    function meishi() {
        $(".wenzi").css("z-index","550")
        $(".meishiimg").css("z-index","550")
        $(".wenzi").animate({
            "opacity":"1"
        },500)
        $(".meishiimg").animate({
            "opacity":"1"
        },500)
    }
    
    function ajax_selcitymei() {
        $.ajax({
            "url":"city?type=selid",
            "type":"Post",
            "data":{
                city:$("#two").val()
            },"dataType":"text",
            success:c
        })
        function c(data) {
            if (data!="0"){
                cityid=data
            }
        }
    }
    
    function cityclick(data) {
        data.css("z-index","10")
        $(".city").animate({
            "height":"100px",
            "width":"260"
        },200,function () {
            $(".city").animate({
                "marginLeft":"450px",
                "marginTop":"0px"
            },300)
        })
        $(".nei").animate({
            "opacity":"1",
            "marginTop":"0px",
            "width":"260"
        },200)
    }
})
