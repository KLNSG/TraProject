package Test;

import dao.impl.FlyinfoDaoImpl;
import dao.impl.UserInfoDaoImpl;
import entity.Flyinfo;
import entity.User;
import service.impl.FlyinfoServiceImpl;

import java.util.ArrayList;
import java.util.List;

/**
/* * Created by Administrator on 2019/2/28/028.
 */
public class Test {
    public static void main(String[] args) {
       /* String name="文庄";
        String pwd="123456";*/
        List<Flyinfo> list=new ArrayList<>();
        FlyinfoServiceImpl f=new FlyinfoServiceImpl();
        list=f.selcai(1);
        /*for (Flyinfo d:list) {
            System.out.println(d.getStarttime());
        }*/
    }
}
