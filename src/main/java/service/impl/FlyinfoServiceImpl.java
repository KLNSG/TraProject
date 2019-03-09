package service.impl;

import dao.FlyinfoDao;
import dao.impl.FlyinfoDaoImpl;
import entity.Flyinfo;
import service.FlyinfoService;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Administrator on 2019/3/4/004.
 */
public class FlyinfoServiceImpl implements FlyinfoService {
    FlyinfoDao f=new FlyinfoDaoImpl();

    @Override
    public List<Flyinfo> selectbytimeandcity(String start, String end) {
        String starttime="";
        String endtime="";
        List<Flyinfo> list=new ArrayList<>();
        list=f.selectbytimeandcity(start,end);
        for (Flyinfo f:list) {
            starttime=String.valueOf(f.getStarttime());
            /*System.out.println(starttime);*/
            starttime=starttime.substring(11,16);
            endtime=String.valueOf(f.getEndtime());
            endtime=endtime.substring(11,16);
            if ((endtime.substring(0,1)).equals("0")){
                endtime+="(次日)";
            }
            f.setStime(starttime);
            f.setEtime(endtime);
        }
        return list;
    }

    @Override
    public List<Flyinfo> selectbycity(String start, String end) {
        String starttime="";
        String endtime="";
        List<Flyinfo> list=new ArrayList<>();
        list=f.selectbycity(start,end);
        for (Flyinfo f:list) {
            starttime=String.valueOf(f.getStarttime());
            /*System.out.println(starttime);*/
            starttime=starttime.substring(11,16);
            endtime=String.valueOf(f.getEndtime());
            endtime=endtime.substring(11,16);
            if ((endtime.substring(0,1)).equals("0")){
                endtime+="(次日)";
            }
            f.setStime(starttime);
            f.setEtime(endtime);
        }
        return list;
    }

    @Override
    public List<Flyinfo> selectbytime(String start) {
        String str="";
        String starttime="";
        String endtime="";
        String Moth="";
        String Day="";
        Moth=start.substring(0,1);
        Day=start.substring(2,3);
        if (Integer.valueOf(Moth)<10){
            Moth="0"+Moth;
        }
        if (Integer.valueOf(Day)<10){
            Day="0"+Day;
        }
        str=Moth+"-"+Day;
        List<Flyinfo> list=new ArrayList<>();
        list=f.selectbytime(str);
        for (Flyinfo f:list) {
            starttime=String.valueOf(f.getStarttime());
            starttime=starttime.substring(11,16);
            endtime=String.valueOf(f.getEndtime());
            endtime=endtime.substring(11,16);
            if ((endtime.substring(0,1)).equals("0")){
                endtime+="(次日)";
            }
            f.setStime(starttime);
            f.setEtime(endtime);
        }
        return list;
    }

    @Override
    public int buyfly(int userid, String airid) {
        return f.buyfly(userid,airid);
    }

    @Override
    public List<Flyinfo> selcai(Integer id) {
        String now="";
        String  moth="";
        String day="";
        String time="";
        List<Flyinfo> list= f.selding(id);
        for (Flyinfo s:list) {
            now=String.valueOf(s.getStarttime());
            moth=now.substring(5,7);
            day=now.substring(8,10);
            time=now.substring(11,16);
            System.out.println(time);
            if (Integer.valueOf(moth)<10){
                moth=moth.substring(1,2);
            }
            if (Integer.valueOf(day)<10){
                day=day.substring(1,2);
            }
            s.setStime(moth+"月"+day+"日   "+time);
        }
        return list;
    }

    @Override
    public int delbuy(Integer id) {
        return f.delbuy(id);
    }
}
