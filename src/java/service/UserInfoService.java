package service;

import entity.UserInfo;

import java.util.List;

/**
 * Created by lenovo on 2019-02-27.
 */
public interface UserInfoService {
    List<UserInfo> selectAll();
    int add(UserInfo userinfo);
    int update(UserInfo userinfo);
}
