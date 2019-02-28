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
             System.out.println(type);
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
                     default:
                         System.out.println("类型出错");
                         break;
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
        System.out.println(id);
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
        System.out.println(i);
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
