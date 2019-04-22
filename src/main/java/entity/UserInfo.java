package entity;

import java.io.Serializable;

/**
 * Created by lenovo on 2019-02-27.
 */
public class UserInfo implements Serializable{
    public UserInfo() {
    }

    public UserInfo(Integer userid, String username, Integer userage, String usersex, String userphone, String usercardid, String useraddress, String email) {
        this.userid = userid;
        this.username = username;
        this.userage = userage;
        this.usersex = usersex;
        this.userphone = userphone;
        this.usercardid = usercardid;
        this.useraddress = useraddress;
        this.email = email;
    }

    private Integer userid;
    private String username;
    private Integer userage;
    private String usersex;
    private String userphone;
    private String usercardid;
    private String useraddress;
    private String email;

    public Integer getUserid() {
        return userid;
    }

    public void setUserid(Integer userid) {
        this.userid = userid;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Integer getUserage() {
        return userage;
    }

    public void setUserage(Integer userage) {
        this.userage = userage;
    }

    public String getUsersex() {
        return usersex;
    }

    public void setUsersex(String usersex) {
            this.usersex = usersex;
    }

    public String getUserphone() {
        return userphone;
    }

    public void setUserphone(String userphone) {
        this.userphone = userphone;
    }

    public String getUsercardid() {
        return usercardid;
    }

    public void setUsercardid(String usercardid) {
        this.usercardid = usercardid;
    }

    public String getUseraddress() {
        return useraddress;
    }

    public void setUseraddress(String useraddress) {
        this.useraddress = useraddress;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public String toString() {
        return "UserInfo{" +
                "userid=" + userid +
                ", username='" + username + '\'' +
                ", userage=" + userage +
                ", usersex='" + usersex + '\'' +
                ", userphone='" + userphone + '\'' +
                ", usercardid='" + usercardid + '\'' +
                ", useraddress='" + useraddress + '\'' +
                ", email='" + email + '\'' +
                '}';
    }
}
