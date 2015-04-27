package prjone.app.server.businessservice.aspect;                                                                                                                                

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.applifire.server.exception.biz.AppliFireConstraintViolationException;
import com.applifire.server.helper.EntityValidatorHelper;
import com.applifire.server.helper.ResourceFactoryManagerHelper;

@Aspect
@Component
public class BusinessAspect {

    @Autowired
    private EntityValidatorHelper<Object> entityValidator;

    @Autowired
    private ResourceFactoryManagerHelper emfResource;


    public void beforeSaveAdvice(JoinPoint joinPoint) throws AppliFireConstraintViolationException {
        Object obj[] = joinPoint.getArgs();
      //  boolean isValidEntity = entityValidator.validateEntity(obj[0]);
      //  System.out.println("Entity is valid :" + isValidEntity);
    }

 
    public void afterAllMethodCalls(JoinPoint joinPoint) {
        System.out.println("closing em from biz aop");
        emfResource.closeResource();
    }
}

