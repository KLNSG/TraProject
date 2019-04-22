package service;

import entity.User;
import entity.UserInfo;

import java.util.List;

/**
 * Created by lenovo on 2019-02-27.
 */
public interface UserInfoService {
    List<UserInfo> selectAll(Integer id);
    int add(UserInfo userinfo);
    int addT(User user,Integer id);
    int Login(User user);
    int update(UserInfo userinfo);
    int update(User user);
    boolean yan(String id);
    List<User> select(Integer id);
    int del(Integer id);
    int deluser(Integer id);
}
