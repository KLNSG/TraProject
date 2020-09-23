/*
package service;

import com.kcloud.pd.jx.module.admin.medal.TaskConfig.Util.SpringContextUtils;
import org.springframework.scheduling.TaskScheduler;
import org.springframework.scheduling.concurrent.ThreadPoolTaskScheduler;
import org.springframework.stereotype.Component;
import org.springframework.util.ReflectionUtils;

import java.lang.reflect.Method;
import java.util.Objects;

*/
/**
 *工作类
 * @author Lvxin
 **//*

@Component("job")
public class Job implements Runnable {
    private String beanName;

    private String methodName;

    private Object[] params;

    public Job() {
    }

    public Job(String beanName, String methodName) {
        this(beanName, methodName, null);
    }

    public Job(String beanName, String methodName, Object...params ) {
        this.beanName = beanName;
        this.methodName = methodName;
        this.params = params;
    }

    @Override
    public void run() {
        try {
            Object target = SpringContextUtils.getBean(beanName);
            Method method = null;
            if (null != params && params.length > 0) {
                Class<?>[] paramCls = new Class[params.length];
                for (int i = 0; i < params.length; i++) {
                    paramCls[i] = params[i].getClass();
                }
                method = target.getClass().getDeclaredMethod(methodName, paramCls);
            } else {
                method = target.getClass().getDeclaredMethod(methodName);
            }
            ReflectionUtils.makeAccessible(method);
            if (null != params && params.length > 0) {
                method.invoke(target, params);
            } else {
                method.invoke(target);
            }
        } catch (Exception ex) {
            ex.fillInStackTrace();
        }
    }

    @Override
    public boolean equals(Object o) {
        if (this == o){ return true;}
        if (o == null || getClass() != o.getClass()) {return false;}
        Job that = (Job) o;
        if (params == null) {
            return beanName.equals(that.beanName) &&
                    methodName.equals(that.methodName) &&
                    that.params == null;
        }

        return beanName.equals(that.beanName) &&
                methodName.equals(that.methodName) &&
                params.equals(that.params);
    }

    @Override
    public int hashCode() {
        if (params == null) {
            return Objects.hash(beanName, methodName);
        }
        return Objects.hash(beanName, methodName, params);
    }
}
*/
