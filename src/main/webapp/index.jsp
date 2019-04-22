<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2019/2/23/023
  Time: 11:09
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE HTML>
<html>
<head>
    <title>Home</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="keywords" content="" />
    <!-- css files -->
    <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" media="all" />
    <%--<link href="css/font-awesome.min.css" rel="stylesheet" type="text/css" media="all" />--%>
    <link href="css/style.css" rel="stylesheet" type="text/css" media="all"/>
    <!-- /css files -->
    <!-- font files -->
    <%--<link href='http://fonts.useso.com/css?family=Roboto:400,100,300,500,700,900' rel='stylesheet' type='text/css'>
    <link href='http://fonts.useso.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>--%>
    <!-- /font files -->
    <!-- js files -->
    <%--<script src="js/modernizr.custom.js"></script>--%>
    <script src="js/jquery-1.12.4.js"></script>
    <script type="text/javascript" src="js/DIV.js"></script>
    <script type="text/javascript" src="js/Admin.js"></script>
    <!-- /js files -->
</head>
<body id="myPage" data-spy="scroll" data-target=".navbar" data-offset="60">
<div id="admin" style="z-index: -10;opacity: 0;position: absolute;width: 100%;height: 120%;background-color: black">
    <div id="up" style="margin-top: 270px;background-color: white;height: 2px;width: 0"></div>
    <div id="cen" style="opacity: 0;color : rgba(255,255,255,0.9);padding: 35px 0px;width: 250px;height: 150px;margin: 0px auto;font-size: 50px">管理者页面</div>
    <div id="do" style="margin-left: 100%;background-color: white;height: 2px;width: 70%"></div>
    <div id="addbtn" class="addbtn"></div>
    <div id="addfly" class="addfly"></div>
    <div id="userlie" class="userlie"></div>
    <div id="goback" class="goback"></div>
    <div id="userlietab" style="display: none;background-color: rgba(255,255,255,0.7);width: 70%;margin-left: 15%;margin-top: 150px;height: 550px;">
        <div id="shang" style="overflow-x: auto;overflow-y: scroll;height: 470px;width: 100%;">
            <table id="allinfo" style="opacity: 0;font-weight: 200;font-size: 20px;position: fixed;height: 470px;text-align: center">
                <tr><td colspan="2"></td></tr>
                <tr><td>年龄:</td><td><input onkeyup="this.value=(this.value.replace(/\D/g,''))" id="agee" style="width: 120px" type="text"></td></tr>
                <tr><td>性别:</td><td><input id="sexx" style="width: 120px" type="text"></td></tr>
                <tr><td>电话:</td><td><input id="phonee" style="width: 120px" type="text"></td></tr>
                <tr><td>身份证号:</td><td><input id="cardd" style="width: 120px" type="text"></td></tr>
                <tr><td>地址:</td><td><input id="addresss" style="width: 120px" type="text"></td></tr>
                <tr><td>邮箱:</td><td><input id="emaill" style="width: 120px" type="email"></td></tr>
                <tr><td colspan="2"><input id="commit" type="button" value="完善信息"></td></tr>
            </table>
            <table id="title" style="height: 70px;width: 150%;text-align: center">
                <tr>
                    <td style="font-weight: 400;height: 40px;font-size: 30px" colspan="8">用户信息表</td>
                </tr>
                <tr style="height: 30px;font-size: 25px">
                    <td style="width: 6%">编号</td>
                    <td style="width: 8%">用户名</td>
                    <td style="width: 6%">年龄</td>
                    <td style="width: 6%">性别</td>
                    <td style="width: 12%">电话</td>
                    <td style="width: 12%">身份证号</td>
                    <td style="width: 12%">地址</td>
                    <td style="width: 12%">邮箱</td>
                </tr>
            </table>
            <table id="usertab" style="height: 40px;width: 150%;text-align: center">
                <tr></tr>
            </table>
        </div>
        <div style="padding: 15px 0px;text-align: center;width: 100%;height: 80px;background-color: darkturquoise">
            <input class="usebtn" id="addinfo" type="button" value="增加">
            <input class="usebtn" id="delinfo" type="button" value="删除">
            <input class="usebtn" id="selbyname" type="button" value="查询">
            <input class="usebtn" id="bb" type="button" value="返回">
        </div>
    </div>
    <div id="addflyinfo" style="display: none;background-color: rgba(255,255,255,0.7);width: 70%;margin-left: 15%;margin-top: 150px;height: 570px;">
        <div style="overflow-x: auto;overflow-y: scroll;height: 70px;width: 70%"><table style="width: 70%;font-weight: 200;font-size: 20px;position: fixed;height: 70px;text-align: center"><tr><td colspan="6" style="font-size: 45px">航班信息</td></tr><tr><td>航班号</td><td>出发地</td><td>出发时间</td><td>目的地</td><td>抵达时间</td><td>价格</td></tr></table></div>
        <div style="overflow: scroll;width: 100%;margin-top: 20px;height: 400px;/*border: solid red 1px*/">
            <table id="flyinfo1" style="text-align: center;width: 100%;height: 400px">
                <tr></tr>
            </table>
        </div>
        <div id="scanner" style="/*border: 1px red solid;*/height: 80px">
            <input id="flyid" style="font-size: 20px;margin-left: 1%;width: 15%;height: 50px;margin-top: 15px" type="text">
            <select id="ss" name="select" style="font-size: 20px;margin-left: 4%;width: 7%;height: 50px;margin-top: 15px">
            </select>
            <input id="stime" style="font-size: 20px;margin-left: 5%;width: 18%;height: 50px;margin-top: 15px" type="text">
            <select id="ee" name="select2" style="font-size: 20px;margin-left: 6%;width: 7%;height: 50px;margin-top: 15px"></select>
            <input id="etime" style="font-size: 20px;margin-left: 6%;width: 18%;height: 50px;margin-top: 15px" type="text">
            <input id="price" style="font-size: 20px;margin-left: 1%;width: 10%;height: 50px;margin-top: 15px" type="text">
        </div>
        <div style="width: 100%;text-align: center"><input id="addfly1" style="width: 120px;height: 60px;font-size: 35px;margin-top: 10px;" value="增加" type="button"><input id="callback" style="margin-top: 10px;width: 120px;height: 60px;font-size: 35px;margin-left: 40px" value="返回" type="button"></div>
    </div>
    <div id="city" style="overflow-y: scroll;display: none;background-color: rgba(255,255,255,0.7);width: 60%;margin-left: 20%;margin-top: 150px;height: 570px;">

    </div><input id="callback1" style="display: none;margin-top: 10px;width: 120px;height: 60px;font-size: 35px;margin-left:45%" value="返回" type="button">
</div>
<div id="mess" class="mess"></div>
<div id="message">
    <div id="messtop">操作确认</div>
    <div id="ce" style="color: black;padding: 15px 15px;text-align: center;height: 100px;width: 400px"></div>
    <div id="messbott">
        <input class="bb" value="确定" type="button">
        <input style="margin-left: 30px;" value="取消" class="bb" type="button">
    </div>
</div>
<div class="navbar-wrapper">
    <div class="container">
        <nav class="navbar navbar-inverse navbar-static-top cl-effect-20">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a style="font-size: 45px" class="navbar-brand" href="index.html">旅行家</a>
                </div>
                <div id="navbar" class="navbar-collapse collapse navbar-right">
                    <ul class="nav navbar-nav">
                        <%--<li><a href="#"><span data-hover="首页">首页</span></a></li>--%>
                        <li><a style="cursor: pointer;" id="Login"><span data-hover="登录">登录</span></a></li>
                        <li><a class="aa"><span data-hover="目的地">目的地</span></a></li>
                        <li><a class="aa"><span data-hover="机票">机票</span></a></li>
                        <%--<li><a href="#gallery"><span data-hover="火车票">火车票</span></a></li>--%>
                        <li><a class="aa"><span data-hover="旅游百货">旅游百货</span></a></li>
                        <li><a class="aa"><span data-hover="我的订单">我的订单</span></a></li>
                            <li id="q">
                                <a id="My" <%--href="#"--%>></a>
                                <div id="user" class="ub">修改密码</div>
                                <div id="info" class="ub">完善资料</div>
                                <div id="exit" class="ub">退出账号</div>
                            </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</div>
<!-- Banner Section -->
<!-- Carousel
    ================================================== -->
<div id="myCarousel" class="carousel slide" data-ride="carousel">
    <!-- Indicators -->
    <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner" role="listbox">
        <div class="item active">
            <img class="first-slide" src="images/shou.jpg" alt="First slide">
        </div>
        <div class="item">
            <img class="second-slide" src="images/shou2.jpg" alt="Second slide">
        </div>
        <div class="item">
            <img class="third-slide" src="images/shou3.jpg" alt="Third slide">
        </div>
    </div>
    <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    </a>
</div><!-- /.carousel -->
<!-- /Banner Section -->
<!-- About Section -->

<div class="f">
    <section class="about-us" id="about">
    <h3 id="userLoginfont" class="text-center">用户登录</h3>
    <p id="xx" class="text-center">背上行囊去远方，无论成功与否，至少不会迷茫</p>
    <div class="deng about-info">
        <form id="uploadForm" method="post" enctype="multipart/form-data">
            <table id="OT">
                <tr>
                    <td><h1>用户名:</h1></td>
                    <td><input name="name" id="name" class="user" type="text"></td>
                </tr>
                <tr>
                    <td class="block"><h1>密码:</h1></td>
                    <td><input name="pass" id="pass" class="user" type="password"></td>
                </tr>
                <tr class="none">
                    <td><h1>确认密码:</h1></td>
                    <td><input name="repass" id="repass" class="user" type="password"></td>
                </tr>
                <tr class="none">
                    <td><h1>选择头像:</h1></td>
                    <td><input name="photo" id="photo" style="font-size: 20px" class="user" type="file"></td>
                </tr>
                <tr>
                    <td>
                        <input id="denglu" class="btn" type="button" value="登录">
                    </td>
                    <td>
                        <input id="zhuce" class="btn" type="button" value="注册">
                    </td>
                </tr>
            </table>
            <table id="TT">
                <tr>
                    <td><h1>修改用户名:</h1></td>
                    <td><input id="sname" class="user" type="text"></td>
                </tr>
                <tr>
                    <td class="block"><h1>修改密码:</h1></td>
                    <td><input id="spass" class="user" type="password"></td>
                </tr>
                <tr>
                    <td colspan="2"><input id="save" value="保存" class="btn" type="button"></td>
                </tr>
            </table>
            <table id="TTT">
                <tr>
                    <td><h1>年龄:</h1></td>
                    <td><input onkeyup="this.value=(this.value.replace(/\D/g,''))" id="age" class="user" type="text"></td>
                </tr>
                <tr>
                    <td><h1>性别:</h1></td>
                    <td><input id="sex" class="user" type="text"></td>
                </tr>
                <tr>
                    <td><h1>电话:</h1></td>
                    <td><input id="phone" class="user" type="text"></td>
                </tr>
                <tr>
                    <td><h1>身份证号:</h1></td>
                    <td><input id="usercard" class="user" type="text"></td>
                </tr>
                <tr>
                    <td><h1>联系地址:</h1></td>
                    <td><input id="address" class="user" type="text"></td>
                </tr>
                <tr>
                    <td><h1>邮箱</h1></td>
                    <td><input id="email" class="user" type="email"></td>
                </tr>
                <tr>
                    <td colspan="2"><input id="saveinfo" value="保存" style="font-size: 35px;border-color: black;color: black;background-color: transparent;width: 120px;height: 60px;" type="button"></td>
                </tr>
            </table>
        </form>
    </div>
    </section>
</div>


<!-- /About Section -->
<!-- Services Section -->
<section class="our-services slideanim" id="service">
    <h3 class="text-center slideanim">我们的目的地</h3>
    <p class="text-center slideanim">一个真正的旅行家必是一个流浪者，追寻某种社会里遗失的宝藏</p>
    <div class="slideanim TT" id="wai">
        <form>
            <table <%--style="margin: auto"--%>>
                <tr>
                    <td style="cursor: default;;width: 200px;height: 500px">
                        <input id="one" class="start" type="button" value="出发地">
                        <div class="TT" id="zuo">
                            <%--<div class="zuonei">
                                <h2><strong>北京</strong></h2>
                            </div>--%>
                        </div>
                    </td>
                    <td>
                        <input id="three" style="margin-left: 80px" class="start" type="button" value="GO!">
                    </td>
                    <td>
                        <input id="two" style="margin-left:50px" class="start" type="button" value="目的地">
                        <div class="TT" id="you">
                            <%--<div class="zuonei">
                                <h2><strong>南京</strong></h2>
                            </div>--%>
                        </div>
                    </td>
                </tr>
            </table>
        </form>
    </div>
</section>
<!-- /Services Section -->
<!-- Events -->
<section class="our-events slideanim" id="events">
    <h3 class="text-center slideanim">机票购买</h3>
    <p class="text-center slideanim">想呼吸着每座城市的空气，想感受着每座城市的气息，想看尽每座城市的风景</p>
    <div class="fly1 slideanim" <%--style="border: 1px red solid"--%>>
        <div id="top">
            <table id="time" style="text-align: center;/*border: 1px solid white ;*/width: 1200px;height: 110px">
                <tr>
                    <td style="text-align: left;width: 60px"><input style="border: hidden;font-size: 45px;color: #66afe9;background-color: rgba(0,0,0,0.7);width: 60px;height: 90px" id="last-week" type="button" value="<"></td>
                    <td class="sp"><button class="spbtn"></button></td>
                    <td class="sp"><button class="spbtn"></button></td>
                    <td class="sp"><button class="spbtn"></button></td>
                    <td class="sp"><button class="spbtn"></button></td>
                    <td class="sp"><button class="spbtn"></button></td>
                    <td class="sp"><button class="spbtn"></button></td>
                    <td class="sp"><button class="spbtn"></button></td>
                    <td style="text-align: right;width: 60px"><input style="border: hidden;font-size: 45px;color: #66afe9;background-color: rgba(0,0,0,0.7);width: 60px;height: 90px" id="next-week" type="button" value=">"></td>
                </tr>
            </table>
        </div>
    <div class="event-info">
                    <table style="cursor: default;" id="flyinfo" class="fly2" <%--style="border: solid 1px red"--%>>
                        <tr style="cursor: default;;color: rgba(255,255,255,0.7);height: 50px">
                            <td></td>
                            <td colspan="2"><h1><strong><span id="go">出发地</span><input id="zhong" style="border: hidden;background-color: transparent" type="button" value=">>>>"><span id="end">目的地</span></strong></h1></td>
                            <td></td>
                        </tr>
                        <tr style="cursor: default;;color: rgba(255,255,255,0.7);height: 50px">
                            <td><h1><strong>航班信息</strong></h1></td>
                            <td><h1><strong>出发时间</strong></h1></td>
                            <td><h1><strong>抵达时间</strong></h1></td>
                            <td><h1><strong>价格/选择</strong></h1></td>
                        </tr>
                    </table>
        <div style="height: 500px;width: 1200px;overflow: auto">
        <table id="a" class="fly3">
            <tr></tr>
        </table>
        </div>
    </div>
    </div>
</section>
<!-- /Events -->
<!-- Gallery Section -->
<%--<section class="our-testimonials slideanim" id="testimonials">
    <h3 class="text-center slideanim">火车票购买</h3>
    <p class="text-center slideanim">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    <div class="fly1 slideanim" &lt;%&ndash;style="border: 1px red solid"&ndash;%&gt;>

    </div>
</section>--%>
<!-- /Gallery Section -->
<!-- Testimonials -->
<section style="height: 900px;padding: 180px 0px" class="our-gallery" id="gallery">
    <div class="fengsu">
        <div class="city mei"><div id="nei_mei" class="nei"><label>美食</label></div></div>
        <div class="city jian"><div id="nei_jian" class="nei"><label>建筑</label></div></div>
        <div class="city te"><div id="nei_te" class="nei"><label>特色</label></div></div>
        <div class="wenzi" style="margin-left: 170px">
            <div id="wz" class="meiwen"></div>
            <div id="wj" style="margin-top: 20px;text-align: left;margin-left: 20px;width: 350px"></div>
        </div>
        <img class="meishiimg" src="" alt="暂无目的地">
        <div style="z-index: -2;opacity: 0;margin-top:110px;position: absolute;margin-left: 150px;border: 1px red solid;height: 400px;width: 900px" id="video">

        </div>
    </div>
</section>
<!-- Testimonials -->
<!-- Contact Section -->
<section class="our-contacts slideanim" id="contact">
    <div class="myding">
        <input id="back" style="font-size: 35px;color: #c9e2b3;border: none;background-color: blueviolet;height: 50px;width: 0px;margin-top: 70px;position: absolute;" type="button" value="">
        <div class="up">
            <input class="ding" type="button" value="全部订单">|<input class="ding" type="button" value="个人中心"></div>
        <div id="Myinfo" class="down">
            <div style="overflow: auto" id="filghtinfo" class="down">
                <%--<div class="airinfo"><label>航班号&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label><label>出发地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label><label>目的地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label><label>出发时间&nbsp;&nbsp;</label></div>--%>
            </div>
            <div id="caidan">
                <input id="air" class="cai" type="button" value="飞机订单"><br/>
                <input class="cai" type="button" value="二维码"><br/>
                <input id="aboutwe" class="cai" type="button" value="关于我们">
            </div>
            <div id="userimg">
        <img src="" class="img" alt="该用户无头像" >
                <label id="name1">无人登陆</label>
            </div>
            <table id="Myinfoshow">
                <tr><td>昵称：</td><td><label id="na"></label></td></tr>
                <tr><td>年龄：</td><td><input onkeyup="this.value=(this.value.replace(/\D/g,''))" id="ag1" class="userinfotxt" type="text"><label id="ag"></label></td></tr>
                <tr><td>性别：</td><td><input id="se1" class="userinfotxt" type="text"><label id="se"></label></td></tr>
                <tr><td>电话：</td><td><input id="ph1" class="userinfotxt" type="text"><label id="ph"></label></td></tr>
                <tr><td>身份证号：</td><td><input id="card1" class="userinfotxt" type="text"><label id="card"></label></td></tr>
                <tr><td>联系地址：</td><td><input id="ad1" class="userinfotxt" type="text"><label id="ad"></label></td></tr>
                <tr><td>邮箱：</td><td><input id="em1" class="userinfotxt" type="email"><label id="em"></label></td></tr>
                <tr style="text-align: right">
                    <td colspan="2"><input value="编辑资料" class="updatebtn" type="button"></td>
                </tr>
            </table>
        </div>
    </div>
    <a href="#0" class="cd-top"></a>
</section>
<!-- /Contact Section -->
<!-- Footer Section -->
<section class="footer">
    <h2 class="text-center">感谢各位的观看</h2>
    <hr>
    <div class="container">
        <div class="row">
            <div class="col-md-4 footer-left">
                <h4>我们的联系方式</h4>
                <div class="contact-info">
                    <div class="address">
                        <i class="glyphicon glyphicon-globe"></i>
                        <p class="p3">77 Jack Street</p>
                        <p class="p4">北京公主坟, 中国</p>
                    </div>
                    <div class="phone">
                        <i class="glyphicon glyphicon-phone-alt"></i>
                        <p class="p3">+1 515 151515</p>
                        <p class="p4">+00 1010101010</p>
                    </div>
                    <div class="email-info">
                        <i class="glyphicon glyphicon-envelope"></i>
                        <p class="p3"><a href="mailto:email1@example.com">email1@example.com</a></p>
                        <p class="p4"><a href="mailto:email2@example.com">email2@example.com</a></p>
                    </div>
                </div>
            </div><!-- col -->
            <div class="col-md-4 footer-center">
                <h4>个人感想</h4>
                <p>虽然完全不知道为什么要做这个东西出来，但总而言之把代码砌出来了，做的不好看官不要嫌弃</p>
                <form class="form-horizontal" role="form">
                    <div class="form-group">
                        <label for="inputEmail1" class="col-lg-4 control-label"></label>
                        <div class="col-lg-10">
                            <input type="email" class="form-control" id="inputEmail1" placeholder="没有用上的文本框" required>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="text1" class="col-lg-4 control-label"></label>
                        <div class="col-lg-10">
                            <input type="text" class="form-control" id="text1" placeholder="还舍不得删" required>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-lg-10">
                            <button type="submit" class="btn-outline">于是就留下了</button>
                        </div>
                    </div>
                </form><!-- form -->
            </div><!-- col -->
            <div class="col-md-4 footer-right">
                <h4>关于我们</h4>
                <p>吕欣：</p>
                <p>李辉：</p>
                <p>李依波：</p>
                <p>马超：</p>
                <ul class="social-icons2">
                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                    <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                </ul>
            </div><!-- col -->
        </div><!-- row -->
    </div><!-- container -->
    <hr>
    <div class="copyright">
        <p>Copyright &copy; 2016.Company name All rights reserved.<a target="_blank" href="http:// www.genban.org/"> www.genban.org</a></p>
    </div>
</section>
<!-- /Footer Section -->
<!-- Back To Top -->

<!-- /Back To Top -->

<!-- js files -->
<%--<script src="js/jquery.min.js"></script>--%>
<script src="js/bootstrap.min.js"></script>
<script src="js/SmoothScroll.min.js"></script>
<!-- js for gallery -->
<script src="js/darkbox.js"></script>
<!-- /js for gallery -->
<!-- js for back to top -->
<script src="js/main.js"></script>
<!-- /js for back to top -->
<!-- js for nav-smooth scroll -->
<script>
    $(document).ready(function(){
        // Add smooth scrolling to all links in navbar + footer link
        $(".navbar a, footer a[href='#myPage']").on('click', function(event) {

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        });
    })
</script>
<!-- /js for nav-smooth scroll -->
<!-- js for slide animations -->
<script>
    /*$(window).scroll(function() {
        $(".slideanim").each(function(){
            var pos = $(this).offset().top;

            var winTop = $(window).scrollTop();
            if (pos < winTop + 600) {
                $(this).addClass("slide");
            }
        });
    });*/
</script>
<!-- /js for slide animations -->
<!-- /js files -->
</body>
</html>

