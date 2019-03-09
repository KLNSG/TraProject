package entity;

import java.sql.Date;
import java.sql.Timestamp;

/**
 * Created by Administrator on 2019/3/4/004.
 */
public class Flyinfo {
    public String airid;
    public Integer startcity;
    public String scity;
    public Timestamp starttime;
    public String stime;
    public Integer endcity;
    public String ecity;
    public Timestamp endtime;
    public String etime;
    public Integer price;
    public Integer ding;

    public Integer getDing() {
        return ding;
    }

    public void setDing(Integer ding) {
        this.ding = ding;
    }

    public String getScity() {
        return scity;
    }

    public void setScity(String scity) {
        this.scity = scity;
    }

    public String getEcity() {
        return ecity;
    }

    public void setEcity(String ecity) {
        this.ecity = ecity;
    }

    public String getStime() {
        return stime;
    }

    public void setStime(String stime) {
        this.stime = stime;
    }

    public String getEtime() {
        return etime;
    }

    public void setEtime(String etime) {
        this.etime = etime;
    }

    @Override
    public String toString() {
        return "Flyinfo{" +
                "airid='" + airid + '\'' +
                ", startcity=" + startcity +
                ", starttime=" + starttime +
                ", endcity=" + endcity +
                ", endtime=" + endtime +
                ", price=" + price +
                '}';
    }

    public String getAirid() {
        return airid;
    }

    public void setAirid(String airid) {
        this.airid = airid;
    }

    public Integer getStartcity() {
        return startcity;
    }

    public void setStartcity(Integer startcity) {
        this.startcity = startcity;
    }

    public Timestamp getStarttime() {
        return starttime;
    }

    public void setStarttime(Timestamp starttime) {
        this.starttime = starttime;
    }

    public Integer getEndcity() {
        return endcity;
    }

    public void setEndcity(Integer endcity) {
        this.endcity = endcity;
    }

    public Timestamp getEndtime() {
        return endtime;
    }

    public void setEndtime(Timestamp endtime) {
        this.endtime = endtime;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }
}
