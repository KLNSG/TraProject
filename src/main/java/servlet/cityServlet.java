package servlet;

import com.alibaba.fastjson.JSON;
import dao.impl.CityDaoImpl;
import entity.City;
import service.impl.CityServiceImpl;

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
 * Created by Administrator on 2019/3/9/009.
 */
@WebServlet(name = "cityServlet",urlPatterns = "/city")
public class cityServlet extends HttpServlet {
    CityServiceImpl c=new CityServiceImpl();
    CityDaoImpl b=new CityDaoImpl();
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("utf-8");
        response.setCharacterEncoding("utf-8");
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out=response.getWriter();
        String type=request.getParameter("type");
        System.out.println(type);
        if (type==null) {
            List<City> list = c.selectAll();
            String str = JSON.toJSONString(list);
            out.write(str);
            out.flush();
            out.close();
        }else if(type.equals("add")){
            String city=request.getParameter("city");
            int i=c.addcity(city);
            out.write(String.valueOf(i));
            out.flush();
            out.close();
        }else if (type.equals("selid")){
            String city=request.getParameter("city");
            int i=b.selcitymei(city);
            out.write(String.valueOf(i));
            out.flush();
            out.close();
        }
        else if (type.equals("selmeiwen")){
            List<City> list=new ArrayList<>();
            String cityid=request.getParameter("cityid");
            list=b.selmeiwen(Integer.valueOf(cityid));
            String str=JSON.toJSONString(list);
            out.write(str);
            out.flush();
            out.close();
        }else if (type.equals("seljianwen")){
            List<City> list=new ArrayList<>();
            String cityid=request.getParameter("cityid");
            list=b.seljianwen(Integer.valueOf(cityid));
            String str=JSON.toJSONString(list);
            out.write(str);
            out.flush();
            out.close();
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
           doPost(request,response);
    }
}
