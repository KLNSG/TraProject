package dao.impl;

import dao.BaseDao;
import dao.FlyinfoDao;
import entity.Flyinfo;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Administrator on 2019/3/4/004.
 */
public class FlyinfoDaoImpl extends BaseDao implements FlyinfoDao {
    @Override
    public List<Flyinfo> selectbytimeandcity(String start, String end) {
        List<Flyinfo> list=new ArrayList<>();
        con=getCon();
        try{
            String sql = "\n" +
                    "select airID,a.cityname as start,starttime,b.cityname as end,endtime,price from airplane inner join city as a on\n" +
                    " airplane.startcity=a.cityid inner join city as b on  airplane.endcity=b.cityid where Month(starttime)=Month(now()) and Day(starttime)>=Day(now()) ";
            if (start != "" && end != "") {
                sql += " and a.cityname=? and b.cityname=?";
            }
            pstat = con.prepareStatement(sql);
            if (start != "" && end != "") {
                pstat.setString(1, start);
                pstat.setString(2, end);
            }
            rs = pstat.executeQuery();
            while (rs.next()){
                Flyinfo f=new Flyinfo();
                f.setAirid(rs.getString("airID"));
                f.setStarttime(rs.getTimestamp("starttime"));
                f.setEndtime(rs.getTimestamp("endtime"));
                f.setPrice(rs.getInt("price"));
                list.add(f);
            }
        }catch (Exception e){
            e.printStackTrace();
        }
        return list;
    }

    @Override
    public List<Flyinfo> selectbycity(String start, String end) {
        List<Flyinfo> list=new ArrayList<>();
        con=getCon();
        try {
            String sql = "select airID,a.cityname as start,starttime,b.cityname as end,endtime,price from airplane inner join city as a on\n" +
                    " airplane.startcity=a.cityid inner join city as b on  airplane.endcity=b.cityid ";
            if (start != "" && end != "") {
                sql += "where a.cityname=? and b.cityname=?";
            }
            pstat = con.prepareStatement(sql);
            if (start != "" && end != "") {
                pstat.setString(1, start);
                pstat.setString(2, end);
            }
            rs = pstat.executeQuery();
            while (rs.next()){
                Flyinfo f=new Flyinfo();
                f.setAirid(rs.getString("airID"));
                f.setStarttime(rs.getTimestamp("starttime"));
                f.setScity(rs.getString("start"));
                f.setEcity(rs.getString("end"));
                f.setEndtime(rs.getTimestamp("endtime"));
                f.setPrice(rs.getInt("price"));
                list.add(f);
            }
        }catch (Exception e){
            e.printStackTrace();
        }
        return list;
    }

    @Override
    public List<Flyinfo> selectbytime(String start,String startcity, String endcity) {
        List<Flyinfo> list=new ArrayList<>();
        con=getCon();
        try {
            String sql = "select airID,a.cityname as start,starttime,b.cityname as end,endtime,price from airplane inner join city as a on\n" +
                    " airplane.startcity=a.cityid inner join city as b on  airplane.endcity=b.cityid where 1=1 ";
            if (start != "") {
                sql += " and starttime like ?";
            }
            if (startcity != "" && endcity != "") {
                sql += " and a.cityname=? and b.cityname=?";
            }
            pstat=con.prepareStatement(sql);
            if (start != "") {
                pstat.setString(1, "%"+start+"%");
            }
            if (startcity != "" && endcity != "") {
                pstat.setString(2, startcity);
                pstat.setString(3, endcity);
            }
            rs=pstat.executeQuery();
            while (rs.next()){
                Flyinfo f=new Flyinfo();
                f.setAirid(rs.getString("airID"));
                f.setStarttime(rs.getTimestamp("starttime"));
                f.setEndtime(rs.getTimestamp("endtime"));
                f.setPrice(rs.getInt("price"));
                list.add(f);
            }
        }catch (Exception e){
            e.printStackTrace();
        }
        return list;
    }

    @Override
    public int buyfly(int userid, String airid) {
        String sql="insert into Buy values(null,?,?)";
        Object[] pram={userid,airid};
        return ExecuteUpdate(sql,pram);
    }

    @Override
    public List<Flyinfo> selding(Integer id) {
        List<Flyinfo> list=new ArrayList<>();
        con=getCon();
        try {
            String sql = "select  buy.id as bu,airplane.airID as a,a.cityname as b,b.cityname as c,starttime  from user inner join buy on user.userid=buy.userid inner join airplane on airplane.airID=buy.airid inner join city as a on a.cityid=airplane.startcity inner join city as b on b.cityid=airplane.endcity ";
            if (id!=null && id!=0){
                sql+=" where user.userid=?";
            }
            pstat=con.prepareStatement(sql);
            if (id!=null && id!=0){
                pstat.setInt(1,id);
            }
            rs=pstat.executeQuery();
            while (rs.next()){
                Flyinfo f=new Flyinfo();
                f.setAirid(rs.getString("a"));
                f.setScity(rs.getString("b"));
                f.setEcity(rs.getString("c"));
                f.setDing(rs.getInt("bu"));
                f.setStarttime(rs.getTimestamp("starttime"));
                list.add(f);
            }
        }catch (Exception e){
            e.printStackTrace();
        }
        return list;
    }

    @Override
    public int delbuy(Integer id) {
        String sql="delete from buy where id=?";
        Object[] pram={id};
        return ExecuteUpdate(sql,pram);
    }

    @Override
    public int addflyinfo(Flyinfo flyinfo) {
        String sql="insert into airplane values(?,?,?,?,?,?)";
        Object[] pram={flyinfo.getAirid(),flyinfo.getStartcity(),flyinfo.getStime(),flyinfo.getEndcity(),flyinfo.getEtime(),flyinfo.getPrice()};
        return ExecuteUpdate(sql,pram);
    }
}
