package prjone.app.server.repository.aspect;
import java.net.InetAddress;
import java.net.UnknownHostException;

import org.applifire.log.test.RuntimeLogInfoImpl;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.applifire.health.entity.scheduler.ArtMethodCallStack;
import com.applifire.health.entity.scheduler.MethodCallDetails;
import com.applifire.health.msgWriter.config.HealthConstants;
import com.applifire.health.msgWriter.core.ApplifireHealth;
import com.applifire.log.core.ApplifireLogger;
import com.applifire.log.core.RuntimeLogUserInfo;
import com.applifire.server.exception.repository.ApplifirePersistenceException;
import com.applifire.server.helper.ResourceFactoryManagerHelper;
import com.applifire.server.helper.RuntimeLogInfoHelper;

@Aspect
@Component
public class RepositoryAspect {

	@Autowired
	private ResourceFactoryManagerHelper emfResource;

	@Autowired
	private RuntimeLogInfoHelper runtimeLogInfoHelper;

	@Autowired
	private ApplifireLogger applifireLogger;

	@Autowired
	private ArtMethodCallStack requestDetails;

	@Autowired
	private ApplifireHealth applifireHealth;

	@Around(value = "saveOperation()||deleteOperation()||updateOperation()||findOperation()||getOperation()||allOperation()")
	public Object aroundfindAll(ProceedingJoinPoint joinPoint) throws Throwable {
		System.out.println("In around repository aspect");
        MethodCallDetails methodCallDetails = new MethodCallDetails(requestDetails.getRequestId(), HealthConstants.CLASS_TYPE.REPOSITORY, joinPoint.getTarget().getClass().toString(), joinPoint.getSignature().getName());

		Object object = null;
		try {
			object = handleRepositoryCall(joinPoint, runtimeLogInfoHelper.getRuntimeLogInfo());
			methodCallDetails.setPostCallDetails(HealthConstants.METHOD_NORMAL_EXECUTION);
		} catch (ApplifirePersistenceException e) {
			methodCallDetails.setPostCallDetails(HealthConstants.METHOD_EXCEPTION, e.getExceptionId());
			e.printStackTrace();
			throw e;
		} catch (Exception e) {
			methodCallDetails.setPostCallDetails(HealthConstants.METHOD_EXCEPTION, HealthConstants.DEFAULT_EXCEPTION_ID);
			e.printStackTrace();
			throw e;
		} finally {
			requestDetails.addRepositoryMethodCallDetails(methodCallDetails);
		}
		return object;
	}

	@Around(value = "applifireRepositoryOperation()")
	public Object aroundApplifire(ProceedingJoinPoint joinPoint) throws Throwable {
		System.out.println("In around applifire repository aspect");
		RuntimeLogUserInfo localRuntimeLogInfo = createLocalRuntimeLogInfo();
		return handleRepositoryCall(joinPoint, localRuntimeLogInfo);
	}

	private Object handleRepositoryCall(ProceedingJoinPoint joinPoint, RuntimeLogUserInfo runtimeLogInfoHelper) throws Throwable {
		try {
			if (joinPoint.getArgs().length > 0) {
				if (joinPoint.getArgs()[0] != null) {
					applifireLogger.logger.log(runtimeLogInfoHelper, 2000, joinPoint.getSignature().getDeclaringTypeName(), joinPoint.getSignature().getName(), joinPoint.getArgs()[0]);
					Object returnObject = joinPoint.proceed();
					applifireLogger.logger.log(runtimeLogInfoHelper, 2001, joinPoint.getSignature().getDeclaringTypeName(), joinPoint.getSignature().getName());
					return returnObject;
				}
			} else {
				applifireLogger.logger.log(runtimeLogInfoHelper, 2000, joinPoint.getSignature().getDeclaringTypeName(), joinPoint.getSignature().getName(), "none");
				Object returnObject = joinPoint.proceed();
				applifireLogger.logger.log(runtimeLogInfoHelper, 2001, joinPoint.getSignature().getDeclaringTypeName(), joinPoint.getSignature().getName());
				return returnObject;
			}
			return null;
		} catch (ApplifirePersistenceException e) {
			e.printStackTrace();
			applifireLogger.logger.log(runtimeLogInfoHelper, e.getExceptionId(), joinPoint.getSignature().getDeclaringTypeName(), joinPoint.getSignature().getName(), e,
					"fetching", "Entity");
			throw e;
		} catch (Exception e) {
			e.printStackTrace();
			applifireLogger.logger
					.log(runtimeLogInfoHelper, 2007, joinPoint.getSignature().getDeclaringTypeName(), joinPoint.getSignature().getName(), e, "fetching", "Entity");
			throw e;
		}
	}

	private RuntimeLogUserInfo createLocalRuntimeLogInfo() {
		String ipAddress = "localhost";
		try {
			InetAddress ip = InetAddress.getLocalHost();
			ipAddress = ip.getHostAddress();
		} catch (UnknownHostException e) {
			e.printStackTrace();
		}
		return new RuntimeLogInfoImpl(1, "DEFAULT", ipAddress);
	}

	protected void saveOperation() {
	}

	protected void updateOperation() {
	}

	protected void deleteOperation() {
	}

	protected void findOperation() {
	}

	protected void getOperation() {
	}
	
	protected void allOperation() {
	}

	@Pointcut("execution(* com.applifire..repository..*(..))")
	protected void applifireRepositoryOperation() {
	}
}
