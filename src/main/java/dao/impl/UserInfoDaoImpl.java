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
    public List<User> select(Integer id) {
        List<User> list=new ArrayList<>();
        con=getCon();
        String sql="select * from user";
        if (id!=null&&id!=0){
            sql+=" where userid=?";
        }
        try {
            pstat = con.prepareStatement(sql);
            if (id!=null&&id!=0){
                pstat.setInt(1,id);
            }
            rs=pstat.executeQuery();
            while (rs.next()){
                User u=new User();
                u.setUserid(rs.getInt("userid"));
                u.setUsername(rs.getString("username"));
                u.setUserimage(rs.getString("userimage"));
                list.add(u);
            }
        }catch (Exception e){
            e.printStackTrace();
        }
        return list;
    }

    @Override
    public int updateuser(User user) {
        String sql="update user set username=?,userpwd=? where userid=?";
        /*System.out.println(user.getUserid()+""+user.getUsername()+""+user.getUserpwd());*/
        Object[] pram={user.getUsername(),user.getUserpwd(),user.getUserid()};
        return ExecuteUpdate(sql,pram);
    }

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
    public int addT(User user,Integer id) {
        String sql="";
        Object[] pram;
        if (id==null) {
            sql = "insert into user(userid,username,userpwd,userimage)values(null,?,?,?)";
            pram =new Object[] {user.getUsername(), user.getUserpwd(), user.getUserimage()};
        }else {
            sql = "insert into user(userid,username,userpwd,userimage)values(?,?,?,?)";
            pram = new Object[] {id,user.getUsername(), user.getUserpwd(), user.getUserimage()};
        }
        return ExecuteUpdate(sql,pram);
    }



    @Override
    public List<UserInfo> selectAll(Integer id) {
        List<UserInfo> list=new ArrayList<>();
        Connection conn = getCon();
        String sql="select * from userinfo";
        if (id!=null && id!=0){
            sql+=" where userid=?";
        }
        try {
            pstat=conn.prepareStatement(sql);
            if (id!=null && id!=0){
                pstat.setInt(1,id);
            }
            rs=pstat.executeQuery();
            while (rs.next()){
                UserInfo userinfo=new UserInfo();
                userinfo.setUserid(rs.getInt("userid"));
                userinfo.setUsername(rs.getString("username"));
                userinfo.setUserage(rs.getInt("useage"));
                userinfo.setUsersex(rs.getString("usersex"));
                userinfo.setUserphone(rs.getString("userphone"));
                userinfo.setUsercardid(rs.getString("usercardid"));
                userinfo.setUseraddress(rs.getString("useraddress"));
                userinfo.setEmail(rs.getString("email"));
                list.add(userinfo);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return list;
    }

    @Override
    public int add(UserInfo userinfo) {
        String sql="insert into userinfo values(?,?,?,?,?,?,?,?)";
        Object[] objects={userinfo.getUserid(),userinfo.getUsername(),
                           userinfo.getUserage(),userinfo.getUsersex(),
                            userinfo.getUserphone(),userinfo.getUsercardid(),
                            userinfo.getUseraddress(),userinfo.getEmail()};
        return ExecuteUpdate(sql,objects);
    }

    @Override
    public int update(UserInfo userinfo) {
        String sql="update userinfo set useage=?,usersex=?,userphone=?,usercardid=?,useraddress=?,email=? where userid=?";
        Object[] objects={userinfo.getUserage(),userinfo.getUsersex(),userinfo.getUserphone(),userinfo.getUsercardid(),userinfo.getUseraddress(),userinfo.getEmail(),userinfo.getUserid()};
        return ExecuteUpdate(sql,objects);
    }

    @Override
    public int del(Integer id) {
        String sql="delete from userinfo where userid=?";
        Object[] pram={id};
        return ExecuteUpdate(sql,pram);
    }

    @Override
    public int deluser(Integer id) {
        String sql="delete from user where userid=?";
        Object[] pram={id};
        return ExecuteUpdate(sql,pram);
    }


}
