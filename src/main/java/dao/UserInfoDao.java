package dao;

import entity.User;
import entity.UserInfo;

import java.util.List;

/**
 * Created by lenovo on 2019-02-27.
 */
public interface UserInfoDao {
    //查询
    List<User> select(Integer id);

    int updateuser(User user);

    int Login(User user);

    int addT(User user,Integer id);

    List<UserInfo> selectAll(Integer id);

    //增加
    int add(UserInfo userinfo);

    //修改
    int update(UserInfo userinfo);

    int del(Integer id);

    int deluser(Integer id);

}
