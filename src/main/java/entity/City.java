package entity;

/**
 * Created by Administrator on 2019/3/9/009.
 */
public class City {
    public Integer cityid;
    public String city;
    public String mname;
    public String mjie;
    public String jname;
    public String jjie;

    public String getJname() {
        return jname;
    }

    public void setJname(String jname) {
        this.jname = jname;
    }

    public String getJjie() {
        return jjie;
    }

    public void setJjie(String jjie) {
        this.jjie = jjie;
    }

    public String getMname() {
        return mname;
    }

    public void setMname(String mname) {
        this.mname = mname;
    }

    public String getMjie() {
        return mjie;
    }

    public void setMjie(String mjie) {
        this.mjie = mjie;
    }

    public City() {
    }

    public City(Integer cityid, String city) {
        this.cityid = cityid;
        this.city = city;
    }

    public Integer getCityid() {
        return cityid;
    }

    public void setCityid(Integer cityid) {
        this.cityid = cityid;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }
}
