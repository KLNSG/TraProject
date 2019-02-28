package service;

import entity.User;
import entity.UserInfo;

import java.util.List;

/**
 * Created by lenovo on 2019-02-27.
 */
public interface UserInfoService {
    List<UserInfo> selectAll();
    int add(UserInfo userinfo);
    int addT(User user);
    int Login(User user);
    int update(UserInfo userinfo);
}
