package dao.impl;

import dao.BaseDao;
import dao.UserInfoDao;
import entity.User;
import entity.UserInfo;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by lenovo on 2019-02-27.
 */
public class UserInfoDaoImpl extends BaseDao implements UserInfoDao {
    @Override
    public int Login(User user) {
        con=getCon();
        int i=0;
        String sql="select userid from user where username=? and userpwd=?";
        try {
            pstat = con.prepareStatement(sql);
            pstat.setString(1, user.getUsername());
            pstat.setString(2, user.getUserpwd());
            rs=pstat.executeQuery();
            while (rs.next()){
                i=rs.getInt("userid");
            }
        }catch (Exception e){
            e.printStackTrace();
        }finally {
            return i;
        }
    }

    @Override
    public int addT(User user) {
        String sql="insert into user(userid,username,userpwd)values(null,?,?)";
        Object[] pram={user.getUsername(),user.getUserpwd()};
        return ExecuteUpdate(sql,pram);
    }

    @Override
    public List<UserInfo> selectAll() {
        List<UserInfo> list=new ArrayList<>();
        Connection conn = getCon();
        String sql="select * from userinfo";
        try {
            pstat=conn.prepareStatement(sql);
            rs=pstat.executeQuery();
            while (rs.next()){
                UserInfo userinfo=new UserInfo();
                userinfo.setUserid(rs.getInt("uid"));
                userinfo.setUsername(rs.getString("uname"));
                userinfo.setUserage(rs.getInt("uage"));
                userinfo.setUsersex(rs.getString("usex"));
                userinfo.setUserphone(rs.getInt("uphone"));
                userinfo.setUsercardid(rs.getInt("ucardid"));
                userinfo.setUseraddress(rs.getString("uaddress"));
                userinfo.setEmail(rs.getString("uemail"));
                list.add(userinfo);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return list;
    }

    @Override
    public int add(UserInfo userinfo) {
        String sql="insert into userinfo values(null,?,?,?,?,?,?,?)";
        Object[] objects={userinfo.getUsername()};
        return ExecuteUpdate(sql,objects);
    }

    @Override
    public int update(UserInfo userinfo) {
        String sql="update userinfo set username=?,userage=?,usersex=?,userphone=?,usercardid=?,useraddress=?,email=?";
        Object[] objects={userinfo.getUsername()};
        return ExecuteUpdate(sql,objects);
    }


}
