package service.impl;

import dao.UserInfoDao;
import dao.impl.UserInfoDaoImpl;
import entity.UserInfo;
import service.UserInfoService;

import java.util.List;

/**
 * Created by lenovo on 2019-02-27.
 */
public class UserInfoServiceImpl implements UserInfoService {
    UserInfoDao userinfodao=new UserInfoDaoImpl();
    @Override
    public List<UserInfo> selectAll() {
        return userinfodao.selectAll();
    }

    @Override
    public int add(UserInfo userinfo) {
        return userinfodao.add(userinfo);
    }

    @Override
    public int update(UserInfo userinfo) {
        return userinfodao.update(userinfo);
    }
}
