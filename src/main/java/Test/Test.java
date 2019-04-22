package Test;

import dao.impl.FlyinfoDaoImpl;
import dao.impl.UserInfoDaoImpl;
import entity.Flyinfo;
import entity.User;
import service.impl.FlyinfoServiceImpl;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;

/**
/* * Created by Administrator on 2019/2/28/028.
 */
public class Test {
    public static void main(String[] args) {
        Scanner input=new Scanner(System.in);
        System.out.println("请输入总数");
        int k=input.nextInt();
        System.out.println("请输入要抽取的数");
        int n=input.nextInt();
        int[] numbers=new int[n];
        for (int i=0;i<numbers.length;i++){
            numbers[i]=i+1;
        }
        int[] result=new int[k];
        for (int i=0;i<result.length;i++){
            int r=(int)(Math.random()*n);
            result[i]=numbers[r];
            numbers[r]=numbers[n];
            n--;
        }
        Arrays.sort(result);
        System.out.println("结果为：");
        for (int r:result) {
            System.out.println(r);
        }
    }
}
