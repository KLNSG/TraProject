package dao.impl;

import dao.BaseDao;
import entity.City;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Administrator on 2019/3/9/009.
 */
public class CityDaoImpl extends BaseDao{
    public List<City> selectAll(){
        con=getCon();
        List<City> list=new ArrayList<>();
        String sql="select cityid,cityname from city";
        try {
            pstat = con.prepareStatement(sql);
            rs = pstat.executeQuery();
            while (rs.next()) {
                City c = new City();
                c.setCityid(rs.getInt("cityid"));
                c.setCity(rs.getString("cityname"));
                list.add(c);
            }
        }catch (Exception e){
            e.printStackTrace();
        }
        return list;
    }

    public int addcity(String city){
        String sql="insert into city values(null,?)";
        Object[] pram={city};
        return ExecuteUpdate(sql,pram);
    }

    public int selcitymei(String city){
        con=getCon();
        int cityid=0;
        String sql="select cityid from city where cityname=?";
        try {
            pstat = con.prepareStatement(sql);
            pstat.setString(1,city);
            rs = pstat.executeQuery();
            while (rs.next()) {
               cityid=rs.getInt("cityid");
            }
        }catch (Exception e){
            e.printStackTrace();
        }
        return cityid;
    }

    public List<City> selmeiwen(Integer id){
        con=getCon();
        List<City> list=new ArrayList<>();
        String sql="select mname,mjie from citymei where mid=?";
        try {
            pstat = con.prepareStatement(sql);
            pstat.setInt(1,id);
            rs = pstat.executeQuery();
            while (rs.next()) {
                City c = new City();
                c.setMname(rs.getString("mname"));
                c.setMjie(rs.getString("mjie"));
                list.add(c);
            }
        }catch (Exception e){
            e.printStackTrace();
        }
        return list;
    }

    public List<City> seljianwen(Integer id){
        con=getCon();
        List<City> list=new ArrayList<>();
        String sql="select jname,jjie from cityjian where jid=?";
        try {
            pstat = con.prepareStatement(sql);
            pstat.setInt(1,id);
            rs = pstat.executeQuery();
            while (rs.next()) {
                City c = new City();
                c.setJname(rs.getString("jname"));
                c.setJjie(rs.getString("jjie"));
                list.add(c);
            }
        }catch (Exception e){
            e.printStackTrace();
        }
        return list;
    }
}
