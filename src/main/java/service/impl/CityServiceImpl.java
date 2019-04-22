package service.impl;

import dao.impl.CityDaoImpl;
import entity.City;

import java.util.List;

/**
 * Created by Administrator on 2019/3/9/009.
 */
public class CityServiceImpl {
    CityDaoImpl cdi=new CityDaoImpl();
    public List<City> selectAll(){
        return cdi.selectAll();
    }
    public int addcity(String city){
        return cdi.addcity(city);
    }
}
