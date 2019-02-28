package entity;

import java.io.Serializable;

/**
 * Created by lenovo on 2019-02-27.
 */
public class User implements Serializable{
    private Integer userid;
    private String username;
    private String userpwd;
    private String userimage;

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

    public String getUserpwd() {
        return userpwd;
    }

    public void setUserpwd(String userpwd) {
        this.userpwd = userpwd;
    }

    public String getUserimage() {
        return userimage;
    }

    public void setUserimage(String userimage) {
        this.userimage = userimage;
    }

    public User() {
    }

    public User(Integer userid, String username, String userpwd, String userimage) {
        this.userid = userid;
        this.username = username;
        this.userpwd = userpwd;
        this.userimage = userimage;
    }


}
