package service.impl;

import dao.UserInfoDao;
import dao.impl.UserInfoDaoImpl;
import entity.User;
import entity.UserInfo;
import service.UserInfoService;
import servlet.PathInfo;

import java.util.List;

/**
 * Created by lenovo on 2019-02-27.
 */
public class UserInfoServiceImpl implements UserInfoService {
    UserInfoDao userinfodao=new UserInfoDaoImpl();
    @Override
    public List<UserInfo> selectAll(Integer id) {
        return userinfodao.selectAll(id);
    }

    @Override
    public int add(UserInfo userinfo) {
        return userinfodao.add(userinfo);
    }



    @Override
    public int addT(User user) {
        return userinfodao.addT(user);
    }

    @Override
    public int Login(User user) {
        return userinfodao.Login(user);
    }

    @Override
    public int update(UserInfo userinfo) {
        return userinfodao.update(userinfo);
    }

    @Override
    public int update(User user) {
        return userinfodao.updateuser(user);
    }

    @Override
    public boolean yan(String id) {
        int userid=0;
        List<UserInfo> list=userinfodao.selectAll(Integer.valueOf(id));
        for (UserInfo u:list) {
            userid=u.getUserid();
        }
        if (userid!=0){
            return false;
        }else {
            return true;
        }
    }

    @Override
    public List<User> select(Integer id) {
        List<User> list=userinfodao.select(id);
        for (User u:list) {
            u.setUserimage("Div\\"+u.getUserimage());
        }
        return list;
    }
}
