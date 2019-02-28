package dao;

import java.io.InputStream;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.Properties;

/**
 * Created by Administrator on 2019/2/26/026.
 */
public class BaseDao {
    private static String driver="";
    private static String url="";
    private static String username="";
    private static String pwd="";

    public Connection con=null;
    public PreparedStatement pstat=null;
    public ResultSet rs=null;

    static {
        try{
            Properties pro=new Properties();
            InputStream in= BaseDao.class.getClassLoader().getResourceAsStream("BaseDao.properties");
            pro.load(in);
            driver=pro.getProperty("driver");
            url=pro.getProperty("url");
            username=pro.getProperty("username");
            pwd=pro.getProperty("pwd");
            Class.forName(driver);
        }catch (Exception e){
            System.out.println(e.toString());
        }
    }

    public Connection getCon(){
        try{
            if (con==null){
                con= DriverManager.getConnection(url,username,pwd);
            }
        }catch (Exception e){
            System.out.println(e.toString());
        }finally {
            return  con;
        }
    }

    public void CloseAll(){
        try {
            if (con != null) {
                con.close();
            }
            if (pstat != null) {
                pstat.close();
            }
            if (rs != null) {
                rs.close();
            }
        }catch (Exception e){
            System.out.println(e.toString());
        }
    }

    public int ExecuteUpdate(String sql,Object[] pram){
        con=getCon();
        int num=0;
        try {
            pstat = con.prepareStatement(sql);
            for (int i=0;i<pram.length;i++) {
                pstat.setObject(i+1,pram[i]);
            }
            num=pstat.executeUpdate();
        }catch (Exception e){
            System.out.println(e.toString());
        }finally {
            return num;
        }
    }

   /* public static void main(String[] args) {
    *//*    con=getCon();*//*
        System.out.println();
    }*/
}
