$(function () {
    var delid=0
    var delname
    function vanish() {
        $("html").animate({
            scrollTop:0
        },8600,function () {
            $("#admin").css("z-index","102")
            $("#admin").animate({
                "opacity":"1"
            },2800,function () {
                init()
            })
        })
        $(".footer").animate({
            "height":"0px",
            "opacity":"0"
        },1000,function () {
            $("#contact").animate({
                "width":"0px",
                "height":"0px",
                "opacity":"0"
            },1400,function () {
                $("#gallery").animate({
                    "width":"0px",
                    "height":"0px",
                    "opacity":"0"
                },1500,function () {
                    $("#events").animate({
                        "width":"0px",
                        "height":"0px",
                        "opacity":"0"
                    },1550,function () {
                        $("#service").animate({
                            "width":"0px",
                            "height":"0px",
                            "opacity":"0"
                        },1600)
                    })
                })
            })
        })

    }
    function init() {
        $("html,body").css("overflow","hidden")
        $("#up").show()
        $("#cen").show()
        $("#do").show()
        $("#up").animate({
            "width":"70%"
        },"slow",function () {
            $("#cen").animate({
                "opacity":"1"
            },"slow",function () {
                setTimeout(function () {
                    $("#cen").animate({
                        "opacity":"0"
                    },"slow",function () {
                        $("#up").animate({
                            "width":"0"
                        },"slow")
                        $("#do").animate({
                            "marginLeft":"100%"
                        },"slow",function () {
                            $("#up").hide()
                            $("#cen").hide()
                            $("#do").hide()
                            $("#up").css("")
                            setTimeout(function () {
                                move()
                            },200)
                        })
                    })
                },1000)
            })
        })
        $("#do").animate({
            "marginLeft":"30%"
        },"slow")
    }
    function move() {
        $("#addbtn").animate({
            "opacity": 0.8,
            "marginLeft": "43%",
            "width": "240px"
        }, "normal", function () {
            $("#addbtn").animate({
                "height": "75px"
            }, "normal", function () {
                $("#addbtn").text("增加城市")
                $("#addfly").animate({
                    "opacity": 0.8,
                    "marginLeft": "43%",
                    "width": "240px"
                }, "normal", function () {
                    $("#addfly").animate({
                        "height": "75px"
                    }, "normal", function () {
                        $("#addfly").text("增加机票")
                        $("#userlie").animate({
                            "opacity": 0.8,
                            "marginLeft": "43%",
                            "width": "240px"
                        }, "normal", function () {
                            $("#userlie").animate({
                                "height": "75px"
                            }, "normal", function () {
                                $("#userlie").text("用户列表")
                                $("#goback").animate({
                                    "opacity": 0.8,
                                    "marginLeft": "43%",
                                    "width": "240px"
                                }, "normal", function () {
                                    $("#goback").animate({
                                        "height": "75px"
                                    }, "normal", function (){
                                      $("#goback").text("返回")
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    }

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

    $("#aboutwe").click(function () {
        /*alert("无法进入")
        if(false) {*/
      if($("#name1").text()=="卡列宁") {
          if (prompt("请输入管理员密码")=="123456") {
               vanish()
          }else {
              mess("密码错误","alert")
          }
      }else {
          mess("您不是管理员","alert")
      }

    })

    $("#goback").click(function () {
        $("#admin").animate({
            "opacity":0,
            "marginLeft":"100%"
        },"slow",function () {
            $("#admin").css("z-index","-10")
            $("#admin").css("marginLeft","0px")
            $("html,body").css("overflow","visible")
            $("#addbtn").css("width","0px").css("height","2px").css("opacity","0").css("marginLeft","30%")
            $("#addfly").css("width","0px").css("height","2px").css("opacity","0").css("marginLeft","30%")
            $("#userlie").css("width","0px").css("height","2px").css("opacity","0").css("marginLeft","30%")
            $("#goback").css("width","0px").css("height","2px").css("opacity","0").css("marginLeft","30%")
            $("#service").css("width","100%").css("height","100%").css("opacity","1")
            $("#events").css("width","100%").css("height","100%").css("opacity","1")
            $("#gallery").css("width","100%").css("height","100%").css("opacity","1")
            $("#contact").css("width","100%").css("height","100%").css("opacity","1")
            $(".footer").css("width","100%").css("height","100%").css("opacity","1")
        })
    })

    /*$("#aboutwe").trigger("click")*/

    $("#userlie").click(function () {
        $("#addbtn").hide()
        $("#addfly").hide()
        $("#userlie").hide()
        $("#goback").hide()
        $("#userlietab").show()
        clearuserlie()
        ajax_user()
    })

    $("#delinfo").click(function () {
        if ($(this).attr("type")=="button") {
            if (delid != 0) {
                if ($("#addinfo").val()=="增加") {
                    if (confirm("是否连账号一并删除?")) {
                        ajax_deluser()
                        ajax_delinfo()
                        delid = 0
                    } else {
                        ajax_delinfo()
                        delid = 0
                    }
                }else {
                    alert("请先完成其他操作")
                }
            } else {
                alert("请选中一条数据")
            }
        }else if ($(this).attr("type")=="text"){

        }
    })

    $(document).on('click','.m',function () {
        if ($("#addinfo").val()=="增加") {
            $(this).siblings("tr").css("background", "transparent")
            $(this).siblings("tr").css("color", "rgba(0,0,0,0.6)")
            $(this).css("background", "red")
            $(this).css("color", "rgba(255,255,255,0.6)")
            delid = $(this).find("td:first").text()
            if ($(this).find("td:eq(2)").text() == 0 && $(this).find("td:eq(3)").text() == "空") {
                delname = $(this).find("td:eq(1)").text()
                $("#title").animate({
                    "marginLeft": "220px"
                }, "slow", function () {
                    $("#allinfo").animate({
                        "opacity": "1"
                    }, "slow")
                })
                $("#usertab").animate({
                    "marginLeft": "220px"
                }, "slow")
            } else {
                delname = null
                $("#allinfo").animate({
                    "opacity": "0"
                }, "slow", function () {
                    $("#title").animate({
                        "marginLeft": "0px"
                    }, "slow")
                    $("#usertab").animate({
                        "marginLeft": "0px"
                    }, "slow")
                })
            }
        }else{
            alert("请先完成其他操作")
        }
    })

    function ajax_adduserinfo1(id,name,age,sex,phone,cardid,address,email) {
        $.ajax({
            "url": "us?type=adduserinfo",
            "type": "Post",
            "data": {
                userid:id,
                username:name,
                age:age,
                sex:sex,
                phone:phone,
                cardid:cardid,
                address:address,
                email:email
            },
            "dataType": "text",
            success: ss
        })
        function ss(data) {
            if (data!=0){
                alert("添加成功")
                clearuserlie()
                ajax_user()
            }else if (data==0){
                alert("您已添加过信息了")
            }else {
                alert("系统出错")
            }
        }
    }

    $("#commit").click(function () {
        if (delname!="" && delname!=null){
            var isok=true
            var i=document.getElementById("allinfo").getElementsByTagName("input");
            for(var j=0;j<i.length;j++){
                if (i[j].type=="text"){
                    if (i[j].value=="" || i[j].value==null){
                        isok=false
                    }
                }
            }
            if (isok==true){
                $("#allinfo").animate({
                    "opacity":"0"
                },"slow",function () {
                    $("#title").animate({
                        "marginLeft":"0px"
                    },"slow")
                    $("#usertab").animate({
                        "marginLeft":"0px"
                    },"slow")
                    $("#allinfo").find("input[type='text']").val("")
                })
                ajax_adduserinfo1(delid,delname,$("#agee").val(),$("#sexx").val(),$("#phonee").val(),$("#cardd").val(),$("#addresss").val(),$("#emaill").val())
            }else {
                alert("请输入完整信息")
            }
        }
    })

    function ajax_deluser() {
        $.ajax({
            "url": "us?type=deluser",
            "type": "Post",
            "data": {
                delid: delid
            }, "dataType": "text",
            success: a
        })
        function a(data) {
            if (data == "true") {
                alert("删除成功")
            } else {
                alert("删除失败")
            }
        }
    }

    function ajax_delinfo() {
        $.ajax({
            "url": "us?type=delinfo",
            "type": "Post",
            "data": {
                delid: delid
            }, "dataType": "text",
            success: a
        })
        function a(data) {
            if (data == "true") {
                alert("删除成功")
                clearuserlie()
                ajax_user()
            } else {
                alert("删除失败")
                clearuserlie()
                ajax_user()
            }
        }
    }

    function ajax_user() {
        $.ajax({
            "url": "us?type=selinfo",
            "type": "Post",
            "dataType": "JSON",
            success:mm
        })
        function mm(data) {
           for(var i=0;i<data.length;i++){
               var $s=$("<tr class='m' style='height: 30px;font-size: 25px'><td style='width: 8%'>"+data[i].userid+"</td><td style='width: 11%'>"+data[i].username+"</td><td style='width: 8%'>"+data[i].userage+"</td><td style='width: 8%'>"+data[i].usersex+"</td><td width: 14%>"+data[i].userphone+"</td><td width: 14%>"+data[i].usercardid+"</td><td width: 14%>"+data[i].useraddress+"</td><td width: 14%>"+data[i].email+"</td></tr>")
               $("#usertab").append($s)
           }
        }
    }

    function ajax_flyinfo() {
        $.ajax({
            "url":"fly?type=sel",
            "type":"Post",
            "dataType":"Json",
            success:s
        })
        function s(data) {
            for(var i=0;i<data.length;i++){
                var $s=$("<tr class='s' style='height: 30px;font-size: 25px'><td style='width: 180px'>"+data[i].airid+"</td><td style='width: 210px'>"+data[i].scity+"</td><td style='width: 210px'>"+data[i].stime+"</td><td style='width: 250px'>"+data[i].ecity+"</td><td style='width: 200px'>"+data[i].etime+"</td><td>&nbsp;&nbsp;&nbsp;"+data[i].price+"</td></tr>")
                $("#flyinfo1").append($s)
            }
        }
    }

    function ajax_adduserinfo(addid,name,age,sex,phone,card,address,email) {
        $.ajax({
            "url": "us?type=adduserinfo",
            "type": "Post",
            "data": {
                userid:addid,
                username:name,
                age:age,
                sex:sex,
                phone:phone,
                cardid:card,
                address:address,
                email:email
            },
            "dataType": "text",
            success: ss
        })
        function ss(data) {
            if (data!=0){
                var pwd=prompt("请输入该账号的密码")
                ajax_adduser(addid,name,pwd)
            }else if (data==0){
                alert("您已添加过信息了")
            }else {
                alert("系统出错")
            }
        }
    }

    function ajax_adduser(userid,name,pwd) {
        $.ajax({
            "url": "us?type=add2",
            "type": "Post",
            "data": {
                userid:userid,
                name:name,
                pwd:pwd
            }, "dataType": "text",
            success: a
        })
        function a(data) {
            if (data=="true"){
                clearuserlie()
                ajax_user()
            }
        }
    }
    function clearuserlie() {
        var trs=$("#usertab").find("tr");
        for (var j=0;j<trs.length;j++){
            trs[j].remove()
        }
    }


    $("#addinfo").click(function () {
            if ($(this).val() == "增加") {
                delid=0
                $("#usertab").find("tr").css("background", "transparent")
                $("#usertab").find("tr").css("color", "rgba(0,0,0,0.6)")
                $("#usertab").append("<tr style='height: 30px;font-size: 25px'><td style='width:8%'>" + (parseInt($("#usertab").find("tr:last").find("td:first").text()) + 1) + "</td><td style='width:11%'><input style='width: 100%' type='text'></td><td style='width: 8%'><input style='width: 90%' type='text'></td><td style='width: 8%'><input style='width: 90%' type='text'></td><td width: 14%><input style='width: 90%' type='text'></td><td width: 14%><input style='width: 90%' type='text'></td><td width: 14%><input style='width: 90%' type='text'></td><td><input style='width: 90%' type='text'></td></tr>")
                $(this).val("保存")
            } else if ($(this).val() == "保存") {
                var isok=true
                var i=document.getElementById("usertab").getElementsByTagName("input");
                for(var j=0;j<i.length;j++){
                    if (i[j].type=="text"){
                        if (i[j].value=="" || i[j].value==null){
                            isok=false
                        }
                    }
                }
                if (isok==true) {
                    $(this).val("增加")
                    var addid = $("#usertab").find("tr:last").find("td:eq(0)").text()
                    var name = $("#usertab").find("tr:last").find("input:eq(0)").val()
                    var age = $("#usertab").find("tr:last").find("input:eq(1)").val()
                    var sex = $("#usertab").find("tr:last").find("input:eq(2)").val()
                    var phone = $("#usertab").find("tr:last").find("input:eq(3)").val()
                    var card = $("#usertab").find("tr:last").find("input:eq(4)").val()
                    var address = $("#usertab").find("tr:last").find("input:eq(5)").val()
                    var email = $("#usertab").find("tr:last").find("input:eq(6)").val()
                    ajax_adduserinfo(addid, name, age, sex, phone, card, address, email)
                }else {
                    alert("请填写完整信息")
                }
            }
        })

    $("#bb").click(function () {
        if ($("#delinfo").attr("type")=="button"){
        $("#userlietab").hide(300,function () {
            $("#allinfo").css("opacity","0")
            $("#title").css("margin-left","0px")
            $("#usertab").css("margin-left","0px")
            $("#allinfo").find("input[type='text']").val("")
            $("#addbtn").show()
            $("#addfly").show()
            $("#userlie").show()
            $("#goback").show()
            $("#addinfo").val("增加")
        })
        }else {
            $("#delinfo").attr("type", "button")
            $("#delinfo").val("删除")
            $("#selbyname").val("查询")
            $("#delinfo").animate({
                "width": "120px"
            }, "slow",function () {
                $("#addinfo").show()
            })
        }
    })

    var i
    $("#addbtn").hover(function () {
        $("#addbtn").animate({
            "opacity": 0.3
        }, 500, function () {
            $("#addbtn").animate({
                "opacity": 0.8
            }, 500)
        })
            i=setInterval(function () {
                $("#addbtn").animate({
                    "opacity": 0.3
                }, 500, function () {
                    $("#addbtn").animate({
                        "opacity": 0.8
                    }, 500)
                })
            },1000)
    },function () {
       clearInterval(i)
    })
    $("#addfly").hover(function () {
        $("#addfly").animate({
            "opacity": 0.3
        }, 500, function () {
            $("#addfly").animate({
                "opacity": 0.8
            }, 500)
        })
        i=setInterval(function () {
            $("#addfly").animate({
                "opacity": 0.3
            }, 500, function () {
                $("#addfly").animate({
                    "opacity": 0.8
                }, 500)
            })
        },1000)
    },function () {
        clearInterval(i)
    })
    $("#userlie").hover(function () {
        $("#userlie").animate({
            "opacity": 0.3
        }, 500, function () {
            $("#userlie").animate({
                "opacity": 0.8
            }, 500)
        })
        i=setInterval(function () {
            $("#userlie").animate({
                "opacity": 0.3
            }, 500, function () {
                $("#userlie").animate({
                    "opacity": 0.8
                }, 500)
            })
        },1000)
    },function () {
        clearInterval(i)
    })

    $("#selbyname").click(function () {
        if ($(this).val()=="查询") {
            $("#addinfo").hide(300,function () {
                $("#delinfo").animate({
                    "width": "200px"
                }, "slow", function () {
                    $("#delinfo").attr("type", "text")
                    $("#delinfo").val("")
                })
            })
            $("#selbyname").val("搜索")
        }else {
            alert($("#delinfo").val())
        }
    })

    $("#addfly").click(function () {
        $("#addbtn").hide()
        $("#addfly").hide()
        $("#userlie").hide()
        $("#goback").hide()
          $("#addflyinfo").show()
        clearflyinfo()
        ajax_flyinfo()
        ajax_Citybang()
    })

    $("#callback").click(function () {
        $("#addflyinfo").hide()
        $("#addbtn").show()
        $("#addfly").show()
        $("#userlie").show()
        $("#goback").show()
    })

    function clearflyinfo() {
        var trs=$("#flyinfo1").find("tr");
        var tsr=$("#ss").find("option");
        var str=$("#ee").find("option");
        for (var j=0;j<trs.length;j++){
            trs[j].remove()
        }
        for(var j=0;j<tsr.length;j++){
            tsr[j].remove()
            str[j].remove()
        }
    }

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
                $z=$("<option value='"+data[i].cityid+"'>"+data[i].city+"</option>")
                $("#ss").append($z)
            }
            for (var i=0;i<data.length;i++){
                $z=$("<option value='"+data[i].cityid+"'>"+data[i].city+"</option>")
                $("#ee").append($z)
            }
        }
    }

    function ajax_addflyinfo(airid,scity,stime,ecity,etime,price) {
        $.ajax({
            "url":"fly?type=add",
            "type":"Post",
            "data":{
                airid:airid,
                scity:scity,
                stime:stime,
                ecity:ecity,
                etime:etime,
                price:price
            },
            "dataType":"text",
            success:m
        })
        function m(data) {
            if (parseInt(data)!=0){
                alert("成功")
            }
        }
    }
    
    $("#addfly1").click(function () {
        var i=document.getElementById("scanner").getElementsByTagName("input");
        for(var j=0;j<i.length;j++){
            if (i[j].type=="text"){
                if (i[j].value=="" || i[j].value==""){
                    alert("请输入完整信息")
                   return false
                }
            }
        }
        ajax_addflyinfo($("#flyid").val(),$("#ss").val(),$("#stime").val(),$("#ee").val(),$("#etime").val(),$("#price").val())
    })

    $("#addbtn").click(function () {
        $("#addbtn").hide()
        $("#addfly").hide()
        $("#userlie").hide()
        $("#goback").hide()
        $("#city").show()
        $("#callback1").show()
        ajax_city()
        setTimeout(function () {
            $("#city").append("<input id='v' style='margin-left: 50px;width: 120px;font-size: 45px;height: 60px' type='text'>")
        },200)
    })

    function ajax_city() {
        $.ajax({
            "url":"city",
            "type":"Post",
            "dataType":"JSON",
            success:b
        })
        function b(data) {
            for (var i=0;i<data.length;i++) {
                var $s = $("<label style='font-size: 55px;margin-top: 10px;margin-left: 50px'>" + data[i].city + "</label>")
                $("#city").append($s)
            }
        }
    }
    
    $(document).on('blur','#v',function () {
        ajax_addcity($(this).val())
        setTimeout(function () {
            $("#city").append("<input id='v' style='margin-left: 50px;width: 120px;font-size: 45px;height: 60px' type='text'>")
        },200)
    })

    $("#callback1").click(function () {
        $("#addbtn").show()
        $("#addfly").show()
        $("#userlie").show()
        $("#goback").show()
        $("#city").hide()
        $("#callback1").hide()
    })

    function clearcity() {
        var trs=$("#city").find("label");
        var tsr=$("#city").find("input");
        for (var j=0;j<trs.length;j++){
            trs[j].remove()
        }
        for(var i=0;i<tsr.length;i++){
            tsr[i].remove()
        }
    }

    function ajax_addcity(city) {
        $.ajax({
            "url":"city",
            "type":"Post",
            "data":{
                type:"add",
                city:city
            },
            "dataType":"text",
            success:h
        })
        function h(data) {
            if (parseInt(data)!=0) {
                clearcity()
                ajax_city()
            }
        }
    }
})