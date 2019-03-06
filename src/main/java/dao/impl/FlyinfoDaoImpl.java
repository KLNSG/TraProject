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
    public List<Flyinfo> selectbytime(String start) {
        List<Flyinfo> list=new ArrayList<>();
        con=getCon();
        try {
            String sql = "select airID,a.cityname as start,starttime,b.cityname as end,endtime,price from airplane inner join city as a on\n" +
                    " airplane.startcity=a.cityid inner join city as b on  airplane.endcity=b.cityid";
            if (start != "") {
                sql += " where starttime like ?";
            }
            pstat=con.prepareStatement(sql);
            if (start != "") {
                pstat.setString(1, "%"+start+"%");
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
}
