package servlet;


import com.alibaba.fastjson.JSON;
import entity.User;
import entity.UserInfo;
import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;
import service.UserInfoService;
import service.impl.UserInfoServiceImpl;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;
import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by Administrator on 2019/2/27/027.
 */
@WebServlet(name = "userServlet",urlPatterns = "/us")
public class userServlet extends HttpServlet {
    UserInfoService us=new UserInfoServiceImpl();
    String id="";
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
             request.setCharacterEncoding("utf-8");
           response.setCharacterEncoding("utf-8");
             response.setContentType("text/html;charset=UTF-8");
             String type=request.getParameter("type");
                 switch (type){
                     case "add":
                         insert1(request,response);
                         break;
                     case "add2":
                         insert2(request,response);
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
                     case "selinfobyid":
                         seluserinfobyid(request,response);
                         break;
                     case "adduserinfo":
                         adduserinfo(request,response);
                         break;
                     case "userka":
                         userka(request,response);
                         break;
                     case "updateuserinfo":
                         upduserinfo(request,response);
                         break;
                     case "selinfo":
                         selinfo(request,response);
                         break;
                     case "delinfo":
                         del(request,response);
                         break;
                     case "deluser":
                         deluser(request,response);
                         break;
                     default:
                         System.out.println("类型出错");
                         break;
                 }
    }

    public void deluser(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        PrintWriter out=response.getWriter();
        String id=request.getParameter("delid");
        int i=us.deluser(Integer.valueOf(id));
        String isok="false";
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

    public void del(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String isok="";
        PrintWriter out=response.getWriter();
        String id=request.getParameter("delid");
        int i=us.del(Integer.valueOf(id));
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

    public void selinfo(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        List<UserInfo> ui=us.selectAll(null);
        List<User> u=us.select(null);
        int index=u.size()-ui.size();
        for (int i=0;i<index;i++){
                 ui.add(i,new UserInfo(0,"空",0,"空","空","空","空","空"));
        }
        for (int i=0;i<u.size();i++){
            for (int j=0;j<ui.size();j++) {
                if (u.get(i).getUserid() == ui.get(j).getUserid()) {
                    ui.add(i,ui.get(j));
                    ui.remove(j+1);
                }
            }
        }
        for (int i=0;i<u.size();i++){
            ui.get(i).setUserid(u.get(i).getUserid());
            ui.get(i).setUsername(u.get(i).getUsername());
        }
        String str=JSON.toJSONString(ui);
        PrintWriter out=response.getWriter();
        out.write(str);
        out.flush();
        out.close();
    }

    public void upduserinfo(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String isok="";
        PrintWriter out=response.getWriter();
        String userid=request.getParameter("userid");
         String userage=request.getParameter("userage");
        String usersex=request.getParameter("usersex");
        String userphone=request.getParameter("userphone");
        String usercardid=request.getParameter("usercardid");
        String useraddress=request.getParameter("useraddress");
        String email=request.getParameter("email");
        UserInfo s=new UserInfo();
        s.setUserid(Integer.valueOf(userid));
        s.setUserage(Integer.valueOf(userage));
        s.setUsersex(usersex);
        s.setUserphone(userphone);
        s.setUsercardid(usercardid);
        s.setUseraddress(useraddress);
        s.setEmail(email);
        int i=us.update(s);
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

    public void userka(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        PrintWriter out=response.getWriter();
        String userid=request.getParameter("userid");
        List<User> list=us.select(Integer.valueOf(userid));
        String str= JSON.toJSONString(list);
        out.write(str);
        out.flush();
        out.close();
    }

    public void seluserinfobyid(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        PrintWriter out=response.getWriter();
        String userid=request.getParameter("userid");
        if (Integer.valueOf(userid)==0) {
            UserInfo u=new UserInfo();
         List<UserInfo> list=new ArrayList<>();
         list.add(u);
            String str = JSON.toJSONString(list);
            out.write(str);
            out.flush();
            out.close();
        }else {
            if (us.yan(userid) == false) {
                List<UserInfo> list = us.selectAll(Integer.valueOf(userid));
                String str = JSON.toJSONString(list);
                out.write(str);
                out.flush();
                out.close();
            } else {
                String str = JSON.toJSONString("false");
                out.write(str);
                out.flush();
                out.close();
            }
        }
    }

    public void adduserinfo(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        PrintWriter out=response.getWriter();
        String userid=request.getParameter("userid");
        boolean isok=us.yan(userid);
        if (isok==false){
            out.write("0");
            out.flush();
            out.close();
        }else {
            id = userid;
            String username = request.getParameter("username");
            String age = request.getParameter("age");
            String sex = request.getParameter("sex");
            String phone = request.getParameter("phone");
            String cardid = request.getParameter("cardid");
            String address = request.getParameter("address");
            String email = request.getParameter("email");
            UserInfo userInfo = new UserInfo();
            userInfo.setUserid(Integer.valueOf(userid));
            userInfo.setUsername(username);
            userInfo.setUserage(Integer.valueOf(age));
            userInfo.setUsersex(sex);
            userInfo.setUserphone((phone.trim()));
            userInfo.setUsercardid(cardid);
            userInfo.setUseraddress(address);
            userInfo.setEmail(email);
            int i = us.add(userInfo);
            out.write(String.valueOf(i));
            out.flush();
            out.close();
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
        PrintWriter out=response.getWriter();
        Map a=getFilePath2(request);
             Object name=a.get("name");
             Object pwd=a.get("pass");
             Object filename=a.get("fileName");
             User user=new User();
             user.setUsername(String.valueOf(name));
        user.setUserpwd(String.valueOf(pwd));
        user.setUserimage(String.valueOf(filename));
        String  isok="";
        int i=us.addT(user,null);
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

    public void insert2(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        PrintWriter out=response.getWriter();
        String userid=request.getParameter("userid");
        String name=request.getParameter("name");
        String pwd=request.getParameter("pwd");
        User user=new User();
        user.setUsername(String.valueOf(userid));
        user.setUserpwd(String.valueOf(pwd));
        String  isok="";
        int i=us.addT(user,Integer.valueOf(userid));
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

    private static Map getFilePath2(HttpServletRequest request) {
        // 上传配置
        //最终返回map对象遍历
        int memory_threshold = 1024 * 1024 * 3;  // 代表3MB
        int max_file_size = 1024 * 1024 * 40; // 代表40MB
        int max_request_size = 1024 * 1024 * 50; // 代表50MB

        // 配置上传参数
        DiskFileItemFactory factory = new DiskFileItemFactory();
        // 设置内存临界值 - 超过后将产生临时文件并存储于临时目录中
        //此为新类，不要追究
        factory.setSizeThreshold(memory_threshold);
        // 设置临时存储目录
        factory.setRepository(new File(System.getProperty("java.io.tmpdir")));
        ServletFileUpload upload = new ServletFileUpload(factory);
        // 设置最大文件上传值
        upload.setFileSizeMax(max_file_size);

        // 设置最大请求值 (包含文件和表单数据)
        upload.setSizeMax(max_request_size);

        upload.setHeaderEncoding("UTF-8");

        String uploadPath = request.getSession().getServletContext().getRealPath("Div")+"\\";
        String fileName = "";
        String filePath = "";
        // 如果目录不存在则创建
        File uploadDir  = new File(uploadPath);
        if (!uploadDir.exists()) {
            uploadDir.mkdirs();
        }
        Map paramMap = new HashMap();
        try {
            // 解析请求的内容提取文件数据
            @SuppressWarnings("unchecked")
            List<FileItem> formItems = upload.parseRequest(request);

            if (formItems != null && formItems.size() > 0) {
                // 迭代表单数据
                for (FileItem item : formItems) {
                    // 处理不在表单中的字段
                    if (!item.isFormField()) {
                        fileName = new File(item.getName()).getName();
                        filePath = uploadPath + fileName;
                        File storeFile = new File(filePath);
                        item.write(storeFile);
                        paramMap.put("fileName", fileName);
                        paramMap.put("filePath", filePath);
                    } else {
                        String value = item.getString("utf-8");
                        paramMap.put(item.getFieldName(), value);
                    }
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return paramMap;
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
         doPost(request,response);
    }
}
