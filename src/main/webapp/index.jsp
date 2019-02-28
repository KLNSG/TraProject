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
    <link href="css/font-awesome.min.css" rel="stylesheet" type="text/css" media="all" />
    <link href="css/style.css" rel="stylesheet" type="text/css" media="all"/>
    <!-- /css files -->
    <!-- font files -->
    <%--<link href='http://fonts.useso.com/css?family=Roboto:400,100,300,500,700,900' rel='stylesheet' type='text/css'>
    <link href='http://fonts.useso.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>--%>
    <!-- /font files -->
    <!-- js files -->
    <script src="js/modernizr.custom.js"></script>
    <script src="js/jquery-1.12.4.js"></script>
    <script type="text/javascript" src="js/DIV.js"></script>
    <script type="text/javascript" src="js/DIV2.js"></script>
    <!-- /js files -->
</head>
<body id="myPage" data-spy="scroll" data-target=".navbar" data-offset="60">
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
                    <a class="navbar-brand" href="index.html">旅行家</a>
                </div>
                <div id="navbar" class="navbar-collapse collapse navbar-right">
                    <ul class="nav navbar-nav">
                        <%--<li><a href="#"><span data-hover="首页">首页</span></a></li>--%>
                        <li><a href="#" id="Login"><span data-hover="登录">登录</span></a></li>
                        <li><a href="#service"><span data-hover="目的地">目的地</span></a></li>
                        <li><a href="#events"><span data-hover="机票">机票</span></a></li>
                        <li><a href="#gallery"><span data-hover="火车票">火车票</span></a></li>
                        <li><a href="#testimonials"><span data-hover="旅游百货">旅游百货</span></a></li>
                        <li><a href="#contact"><span data-hover="我的订单">我的订单</span></a></li>
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
    <h3 class="text-center">用户登录</h3>
    <p class="text-center">背上行囊去远方，无论成功与否，至少不会迷茫</p>
    <div class="deng about-info">
        <form>
            <table id="OT">
                <tr>
                    <td><h1>用户名:</h1></td>
                    <td><input id="name" class="user" type="text"></td>
                </tr>
                <tr>
                    <td class="block"><h1>密码:</h1></td>
                    <td><input id="pass" class="user" type="password"></td>
                </tr>
                <tr class="none">
                    <td><h1>确认密码:</h1></td>
                    <td><input id="repass" class="user" type="password"></td>
                </tr>
                <%--<tr class="none">
                    <td><h1>选择头像:</h1></td>
                    <td><input id="photo" style="font-size: 20px" class="user" type="file"></td>
                </tr>--%>
                <tr>
                    <td>
                        <input id="denglu" class="btn" type="button" value="登录">
                    </td>
                    <td>
                        <input id="zhuce" class="btn" type="button" value="注册">
                    </td>
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
                    <td style="width: 200px;height: 500px">
                        <input id="one" class="start" type="button" value="出发地">
                        <div class="TT" id="zuo">
                            <div class="zuonei">
                                <h2><strong>北京</strong></h2>
                            </div>
                        </div>
                    </td>
                    <td>
                        <input id="three" style="margin-left: 150px" class="start" type="button" value="GO!">
                    </td>
                    <td>
                        <input id="two" style="margin-left:50px" class="start" type="button" value="目的地">
                        <div class="TT" id="you">
                            <div class="zuonei">
                                <h2><strong>南京</strong></h2>
                            </div>
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
    <div class="fly1 slideanim" style="border: 1px red solid">
        <div id="top"></div>
    <div class="event-info">
                    <table class="fly2" style="border: solid 1px red">
                        <tr style="color: rgba(255,255,255,0.7);height: 50px">
                            <td></td>
                            <td colspan="2"><h1><strong><span id="go">出发地</span><input id="zhong" style="border: hidden;background-color: transparent" type="button" value=">>>>"><span id="end">目的地</span></strong></h1></td>
                            <td></td>
                        </tr>
                        <tr style="color: rgba(255,255,255,0.7);height: 50px">
                            <td><h1><strong>航班信息</strong></h1></td>
                            <td><h1><strong>出发时间</strong></h1></td>
                            <td><h1><strong>抵达时间</strong></h1></td>
                            <td><h1><strong>价格/选择</strong></h1></td>
                        </tr>
                        <tr>

                        </tr>
                    </table>
    </div>
    </div>
</section>
<!-- /Events -->
<!-- Gallery Section -->
<section class="our-testimonials slideanim" id="testimonials">
    <h3 class="text-center slideanim">火车票购买</h3>
    <p class="text-center slideanim">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    <div class="fly1 slideanim" style="border: 1px red solid">
        <div class="event-info">
            <table class="fly2" style="border: solid 1px red">
                <tr style="color: rgba(255,255,255,0.7);height: 50px">
                    <td></td>
                    <td colspan="2"><h1><strong><span id="go1">出发地</span><input id="zhong1" style="border: hidden;background-color: transparent" type="button" value=">>>>"><span id="end">目的地</span></strong></h1></td>
                    <td></td>
                </tr>
                <tr style="color: rgba(255,255,255,0.7);height: 50px">
                    <td><h1><strong>航班信息</strong></h1></td>
                    <td><h1><strong>出发时间</strong></h1></td>
                    <td><h1><strong>抵达时间</strong></h1></td>
                    <td><h1><strong>价格/选择</strong></h1></td>
                </tr>
                <tr>

                </tr>
            </table>
        </div>
    </div>
</section>
<!-- /Gallery Section -->
<!-- Testimonials -->
<section class="our-gallery" id="gallery">
    <h3 class="text-center slideanim">旅游景点</h3>
    <p class="text-center slideanim">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    <div class="container">
        <img src="images/gallery-img1.jpg" data-darkbox="images/gallery-img1-1.jpg" data-darkbox-description="<b>Lorem Ipsum</b><br>Lorem ipsum dolor sit amet" class="img-responsive slideanim">
        <img src="images/gallery-img2.jpg" data-darkbox="images/gallery-img2-2.jpg" data-darkbox-description="<b>Lorem Ipsum</b><br>Lorem ipsum dolor sit amet" class="img-responsive slideanim">
        <img src="images/gallery-img3.jpg" data-darkbox="images/gallery-img3-3.jpg" data-darkbox-description="<b>Lorem Ipsum</b><br>Lorem ipsum dolor sit amet" class="img-responsive slideanim">
        <img src="images/gallery-img4.jpg" data-darkbox="images/gallery-img4-4.jpg" data-darkbox-description="<b>Lorem Ipsum</b><br>Lorem ipsum dolor sit amet" class="img-responsive slideanim">
        <img src="images/gallery-img5.jpg" data-darkbox="images/gallery-img5-5.jpg" data-darkbox-description="<b>Lorem Ipsum</b><br>Lorem ipsum dolor sit amet" class="img-responsive slideanim">
        <img src="images/gallery-img6.jpg" data-darkbox="images/gallery-img6-6.jpg" data-darkbox-description="<b>Lorem Ipsum</b><br>Lorem ipsum dolor sit amet" class="img-responsive slideanim">
        <img src="images/gallery-img7.jpg" data-darkbox="images/gallery-img7-7.jpg" data-darkbox-description="<b>Lorem Ipsum</b><br>Lorem ipsum dolor sit amet" class="img-responsive slideanim">
        <img src="images/gallery-img8.jpg" data-darkbox="images/gallery-img8-8.jpg" data-darkbox-description="<b>Lorem Ipsum</b><br>Lorem ipsum dolor sit amet" class="img-responsive slideanim">
    </div>
</section>
<!-- Testimonials -->
<!-- Contact Section -->
<section class="our-contacts slideanim" id="contact">
    <div class="TT myding">
        <div class="TT up"><input class="ding" type="button" value="全部订单">|<input class="ding" type="button" value="个人中心"></div>
        <div class="TT down">11</div>
        <div></div>
    </div>
</section>
<!-- /Contact Section -->
<!-- Footer Section -->
<section class="footer">
    <h2 class="text-center">THANKS FOR VISITING US</h2>
    <hr>
    <div class="container">
        <div class="row">
            <div class="col-md-4 footer-left">
                <h4>Contact Information</h4>
                <div class="contact-info">
                    <div class="address">
                        <i class="glyphicon glyphicon-globe"></i>
                        <p class="p3">77 Jack Street</p>
                        <p class="p4">Chicago, USA</p>
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
                <h4>Newsletter</h4>
                <p>Register to our newsletter and be updated with the latests information regarding our services, offers and much more.</p>
                <form class="form-horizontal" role="form">
                    <div class="form-group">
                        <label for="inputEmail1" class="col-lg-4 control-label"></label>
                        <div class="col-lg-10">
                            <input type="email" class="form-control" id="inputEmail1" placeholder="Email" required>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="text1" class="col-lg-4 control-label"></label>
                        <div class="col-lg-10">
                            <input type="text" class="form-control" id="text1" placeholder="Your Name" required>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-lg-10">
                            <button type="submit" class="btn-outline">Sign in</button>
                        </div>
                    </div>
                </form><!-- form -->
            </div><!-- col -->
            <div class="col-md-4 footer-right">
                <h4>Support Us</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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
<a href="#0" class="cd-top">Top</a>
<!-- /Back To Top -->

<!-- js files -->
<script src="js/jquery.min.js"></script>
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

