package servlet;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Calendar;

/**
 * Created by Administrator on 2019/3/1/001.
 */
@WebServlet(name = "timeServlet",urlPatterns = "/time")
public class timeServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("utf-8");
        response.setCharacterEncoding("utf-8");
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out=response.getWriter();
        String Moth=request.getParameter("Moth");
         String Day=request.getParameter("Day");
        System.out.println(Moth);
        System.out.println(Day);
        Calendar c=Calendar.getInstance();
        c.set(Integer.parseInt("2019"),Integer.parseInt(Moth)-1,Integer.parseInt(Day));
        int dow=c.get(Calendar.DAY_OF_WEEK);
        c.add(Calendar.DATE,dow-9);
        for (int i=0;i<7;i++){
            out.write(Moth+"月"+getDay(c.get(Calendar.DATE))+"日");
            c.add(Calendar.DATE,1);
        }
        out.flush();
        out.close();
    }

    public String getDay(int i){
        String j="";
        if (i<10){
            j="0"+i;
            return j;
        }
        else {
            return String.valueOf(i);
        }

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
