package servlet;


import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Created by Administrator on 2019/2/27/027.
 */
@WebServlet(name = "userServlet",urlPatterns = "/us")
public class userServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
             response.setCharacterEncoding("utf-8");
             response.setContentType("text/html;charset=UTF-8");
             String type=request.getParameter("type");
             System.out.println(type);
             if (type==null||type=="sel"){
                 sel(request,response);
             }else if (type!=null){
                 switch (type){
                     case "add":
                         insert1(request,response);
                         break;
                 }
             }
    }

    public  void  sel(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    public  void  insert1(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String img=request.getParameter("img");
        System.out.println(img);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
         doPost(request,response);
    }
}
