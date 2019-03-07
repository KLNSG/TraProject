package dao;

import entity.User;
import entity.UserInfo;

import java.util.List;

/**
 * Created by lenovo on 2019-02-27.
 */
public interface UserInfoDao {
    //查询

    int updateuser(User user);

    int Login(User user);

    int addT(User user);

    List<UserInfo> selectAll();


    //增加
    int add(UserInfo userinfo);

    //修改
    int update(UserInfo userinfo);

}