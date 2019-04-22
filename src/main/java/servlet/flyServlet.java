package servlet;

import com.alibaba.fastjson.JSON;
import entity.Flyinfo;
import entity.UserInfo;
import service.FlyinfoService;
import service.impl.FlyinfoServiceImpl;
import sun.rmi.log.LogInputStream;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by Administrator on 2019/3/4/004.
 */
@WebServlet(name = "flyServlet",urlPatterns = "/fly")
public class flyServlet extends HttpServlet {
    FlyinfoService fly=new FlyinfoServiceImpl();
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("utf-8");
        response.setCharacterEncoding("utf-8");
        response.setContentType("text/html;charset=UTF-8");
        String type=request.getParameter("type");
        if (type==null||type.equals("sel")){
            sel(request,response);
        }else {
            switch (type) {
                case "selbytime":
                    selbytime(request,response);
                    break;
                case "buy":
                    buy(request,response);
                    break;
                case "selbytimeandcity":
                    selbytimeandcity(request,response);
                    break;
                case "selcai":
                    selcai(request,response);
                    break;
                case "del":
                    del(request,response);
                    break;
                case "sel":
                    sel(request,response);
                    break;
                case "add":
                    add(request,response);
                    break;
                default:
                    System.out.println("类型出错");
                    break;
            }
        }
    }

    public void selcai(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        PrintWriter out=response.getWriter();
        String id=request.getParameter("userid");
        /*if (Integer.valueOf(id)==0){
            Flyinfo f=new Flyinfo();
            List<Flyinfo> list=new ArrayList<>();
            list.add(f);
            String str = JSON.toJSONString(list);
            out.write(str);
            out.flush();
            out.close();
        }else {*/
        if (Integer.valueOf(id)!=0) {
            List<Flyinfo> list = fly.selcai(Integer.valueOf(id));
               String str = JSON.toJSONString(list);
               out.write(str);
               out.flush();
               out.close();
        }else {
            List<Flyinfo> list=new ArrayList<>();
            Flyinfo f=new Flyinfo();
            list.add(f);
            String str =JSON.toJSONString(list);
            out.write(str);
            out.flush();
            out.close();
        }
        /*}*/
    }

    public void selbytimeandcity(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        PrintWriter out=response.getWriter();
        String start=request.getParameter("start");
        String end=request.getParameter("end");
        List<Flyinfo> list=new ArrayList<>();
        list=fly.selectbytimeandcity(start,end);
        String str= JSON.toJSONString(list);
        out.write(str);
        out.flush();
        out.close();
    }

    public void buy(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        PrintWriter out=response.getWriter();
        String str="";
        Integer userid=Integer.valueOf(request.getParameter("userid"));
            String airid=request.getParameter("airid");
            if (airid=="0" ||userid==0){
                str = "false";
                out.write(str);
                out.flush();
                out.close();
            }else {
                int i = fly.buyfly(userid, airid);
                if (i != 0) {
                    str = "true";
                    out.write(str);
                    out.flush();
                    out.close();
                } else {
                    str = "false";
                    out.write(str);
                    out.flush();
                    out.close();
                }
            }
    }

    public void selbytime(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
          PrintWriter out=response.getWriter();
          String nowday=request.getParameter("nowday");
        String start=request.getParameter("start");
        String end=request.getParameter("end");
          List<Flyinfo> list=new ArrayList<>();
          nowday=nowday.substring(0,4);
          list=fly.selectbytime(nowday,start,end);
          String str= JSON.toJSONString(list);
          out.write(str);
          out.flush();
          out.close();
    }

    public void sel(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        PrintWriter out=response.getWriter();
        List<Flyinfo> list=new ArrayList<>();
           list=fly.selectbycity("","");
           String str= JSON.toJSONString(list);
           out.write(str);
           out.flush();
           out.close();
    }

    public void del(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String buyid=request.getParameter("buyid");
        PrintWriter out = response.getWriter();
        if (buyid=="0"){
            out.write(String.valueOf(0));
            out.flush();
            out.close();
        }else {
            int i = fly.delbuy(Integer.valueOf(buyid));
            out.write(String.valueOf(i));
            out.flush();
            out.close();
        }
    }

    public void add(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        PrintWriter out=response.getWriter();
        String airid=request.getParameter("airid");
        String scity=request.getParameter("scity");
        String stime=request.getParameter("stime");
        String ecity=request.getParameter("ecity");
        String etime=request.getParameter("etime");
        String price=request.getParameter("price");
        Flyinfo flyinfo=new Flyinfo(airid,Integer.valueOf(scity),stime,Integer.valueOf(ecity),etime,Integer.valueOf(price));
        int i=fly.addflyinfo(flyinfo);
        out.write(String.valueOf(i));
        out.flush();
        out.close();
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
             doPost(request,response);
    }
}
