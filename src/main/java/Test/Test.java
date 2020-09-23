package Test;

import dao.impl.FlyinfoDaoImpl;
import dao.impl.UserInfoDaoImpl;
import entity.Flyinfo;
import entity.User;
import service.impl.FlyinfoServiceImpl;

import java.util.*;

/**
/* * Created by Administrator on 2019/2/28/028.
 */
public class Test {
    static class Student{
        private String name;
        private Integer age;
        private Integer status;

        public Student(String name, int age, int status) {
            this.name = name;
            this.age = age;
            this.status = status;
        }
        public String getName() {
            return name;
        }
        public void setName(String name) {
            this.name = name;
        }
        public Integer getAge() {
            return age;
        }
        public void setAge(Integer age) {
            this.age = age;
        }
        public Integer getStatus() {
            return status;
        }
        public void setStatus(Integer status) {
            this.status = status;
        }
    }

    public static void main(String[] args) {
        List<Integer> s=new ArrayList<>();
        s.add(1);
        s.add(2);
        s.add(3);
        Iterator<Integer> iterator = s.iterator();
        while (iterator.hasNext()){
            Integer next = iterator.next();
            if (next.equals(1)){
                s.remove(next);
            }
        }
        System.out.println(s);
    }

    private static Boolean getStaff(List<Student> datas){
        Integer flag = null;
        boolean first=true;
        for (Student student : datas){
            if (first){
                flag=student.getStatus();
                first=false;
            }else {
                boolean equals = student.getStatus().equals(flag);
                flag=student.getStatus();
                if (!equals) return null;
            }
        }
        return flag==1?true:false;
    }
}
