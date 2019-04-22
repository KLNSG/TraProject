package service;

import entity.Flyinfo;
import entity.UserInfo;

import java.util.List;

/**
 * Created by Administrator on 2019/3/4/004.
 */
public interface FlyinfoService {

    List<Flyinfo> selectbytimeandcity(String start,String end);

    List<Flyinfo> selectbycity(String start,String end);

    List<Flyinfo> selectbytime(String start,String startcity, String endcity);

    int buyfly(int userid,String airid);

    List<Flyinfo> selcai(Integer id);

    int delbuy(Integer id);

    int addflyinfo(Flyinfo flyinfo);
}
