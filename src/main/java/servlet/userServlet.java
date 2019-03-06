package servlet;


import entity.User;
import service.UserInfoService;
import service.impl.UserInfoServiceImpl;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * Created by Administrator on 2019/2/27/027.
 */
@WebServlet(name = "userServlet",urlPatterns = "/us")
public class userServlet extends HttpServlet {
    UserInfoService us=new UserInfoServiceImpl();
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
             request.setCharacterEncoding("utf-8");
           response.setCharacterEncoding("utf-8");
             response.setContentType("text/html;charset=UTF-8");
             String type=request.getParameter("type");
                 switch (type){
                     case "add":
                         insert1(request,response);
                         break;
                     case "Log":
                         Log(request,response);
                         break;
                     case "yan":
                         yan(request,response);
                         break;
                     case "upd":
                         upd(request,response);
                         break;
                     default:
                         System.out.println("类型出错");
                         break;
                 }
    }

    public void upd(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        PrintWriter out=response.getWriter();
        String isok="";
        String username=request.getParameter("username");
        String userpwd=request.getParameter("userpwd");
        String userid=request.getParameter("userid");
        User u=new User();
        u.setUserid(Integer.valueOf(userid));
        u.setUsername(username);
        u.setUserpwd(userpwd);
        /*System.out.println(userid+""+username+""+userpwd);*/
        int i=us.update(u);
        if (i!=0){
            isok="true";
            out.write(isok);
            out.flush();
            out.close();
        }else {
            isok="false";
            out.write(isok);
            out.flush();
            out.close();
        }
    }

    public void yan(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{

    }

    public  void  Log(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        User u=new User();
        String name=request.getParameter("name");
        String pass=request.getParameter("pass");
        u.setUsername(name);
        u.setUserpwd(pass);
        int i=us.Login(u);
        String id=String.valueOf(i);
        PrintWriter out=response.getWriter();
        out.write(id);
        out.flush();
        out.close();
    }

    public  void  insert1(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String isok="false";
        String name=request.getParameter("name");
        String pass=request.getParameter("pass");
        System.out.println(name+pass);
        User a=new User();
        a.setUsername(name);
        a.setUserpwd(pass);
        int i=us.addT(a);
        if (i!=0){
            isok="true";
        }
        PrintWriter out=response.getWriter();
        out.write(isok);
        out.flush();
        out.close();
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
         doPost(request,response);
    }
}
