package prjone.app.server.service.aspect;
import java.io.IOException;
import java.util.concurrent.atomic.AtomicLong;
import java.util.UUID;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.actuate.metrics.CounterService;
import org.springframework.boot.actuate.metrics.GaugeService;
import org.springframework.boot.actuate.metrics.Metric;
import org.springframework.boot.actuate.metrics.repository.MetricRepository;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import com.applifire.server.exception.repository.ApplifirePersistenceException;
import com.applifire.health.entity.scheduler.ArtMethodCallStack;
import com.applifire.health.entity.scheduler.MethodCallDetails;
import com.applifire.health.msgWriter.config.ExecutionTimer;
import com.applifire.health.msgWriter.config.HealthConstants;
import com.applifire.health.msgWriter.core.ApplifireHealth;
import com.applifire.log.core.ApplifireLogger;
import com.applifire.server.bean.ResponseBean;
import com.applifire.server.exception.biz.AppliFireConstraintViolationException;
import com.applifire.server.exception.biz.ApplifireIncorrectDataException;
import com.applifire.server.exception.security.ApplifireAccessDeniedException;
import com.applifire.server.helper.EntityValidatorHelper;
import com.applifire.server.helper.RuntimeLogInfoHelper;
import com.applifire.server.security.config.CookieValidation;
import com.applifire.server.security.config.SessionValidation;
import com.applifire.server.security.authentication.interfaces.UserAuthentication;

import com.applifire.shared.entity.web.entityInterface.CommonEntityInterface;
import com.applifire.shared.entity.web.entityInterface.CommonEntityInterface.RECORD_TYPE;

@Aspect
@Component
public class ServiceAspect {

	@Autowired
	private RuntimeLogInfoHelper runtimeLogInfoHelper;

	@Autowired
	private EntityValidatorHelper<Object> entityValidator;

	@Autowired
	private ApplifireLogger applifireLogger;

	@Autowired
	private SessionValidation sessionValidation;

	@Autowired
	private CookieValidation cookieValidation;

	@Autowired
	private ApplifireHealth applifireHealth;

	private HttpStatus httpStatusCode;

	@Autowired
	private CounterService counterService;

	@Autowired
	private GaugeService gaugeservice;

	@Autowired
	private ArtMethodCallStack methodCallStack;

	@Autowired
	private ExecutionTimer executionTimer;

	private AtomicLong autoRequestId = new AtomicLong(1);

	@Autowired
	private MetricRepository repository;

	@Around(value = "allOperation()||applifireServiceOperation()")
	@Order(1)
	public Object aroundAdvice1(ProceedingJoinPoint proceedingJoinPoint) throws Throwable {
		System.out.println("In aroundAdvice Order 1 : Calling method : " + proceedingJoinPoint.getSignature().getName());
		HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();
		HttpSession session = request.getSession();
		long nextAutoNum = autoRequestId.getAndIncrement();
        methodCallStack.setRequestId(UUID.randomUUID().toString().toUpperCase());
        MethodCallDetails methodCallDetails = new MethodCallDetails(methodCallStack.getRequestId(), HealthConstants.CLASS_TYPE.SERVICE, request.getRemoteHost(), request.getMethod(), proceedingJoinPoint.getTarget().getClass().toString(), proceedingJoinPoint.getSignature().getName(), loggedInUserId(request),getSessionId(request));
        String entityName = incrementUricounter(proceedingJoinPoint.getSignature().getDeclaringType().getSimpleName(), proceedingJoinPoint.getSignature().getName());
        ResponseEntity<ResponseBean> responseEntity = new ResponseEntity<>(HttpStatus.OK);
		/*
		 * Needs to get user id from request header and pass it to entityAudit
		 * and RuntimeLogInfo
		 */
		/* create logging info object (Needs to call from login service only */
		runtimeLogInfoHelper.createRuntimeLogUserInfo(1, loggedInUserId(request), request.getRemoteHost());
		/* validate request */
		try {
			validateRequest(session, request);
			if (!sessionValidation.checkIgnoreURL(request)) {
				//runtimeLogInfoHelper.setUserAccessCode(Integer.parseInt(session.getAttribute("userAccessCode").toString()));
			}

			Object obj = proceedingJoinPoint.proceed();
//comment by maya
			/*if (obj instanceof ResponseEntity<?>) {
				responseEntity = (ResponseEntity<ResponseBean>) obj;
				httpStatusCode = responseEntity.getStatusCode();
			} else {
				httpStatusCode = HttpStatus.OK;
				return obj;
			}*/
			responseEntity = (ResponseEntity<ResponseBean>) obj;
			httpStatusCode = responseEntity.getStatusCode();
			methodCallDetails.setPostCallDetails(HealthConstants.METHOD_NORMAL_EXECUTION, responseEntity.getStatusCode().name());

		} catch (ApplifireAccessDeniedException e) {

			ResponseBean responseBean = new ResponseBean();
			applifireLogger.logger.log(runtimeLogInfoHelper.getRuntimeLogInfo(), 4005, proceedingJoinPoint.getSignature().getDeclaringTypeName(), proceedingJoinPoint
					.getSignature().getName(), request.getRemoteHost(), e);
			responseBean.add("success", false);
			responseBean.add("message", " Access Denied:" + e.getMessage());
			methodCallDetails.setPostCallDetails(HealthConstants.METHOD_EXCEPTION, e.getExceptionId(), responseEntity.getStatusCode().name());
			return new ResponseEntity<ResponseBean>(responseBean, responseEntity.getStatusCode());
		}
		
		catch (ApplifirePersistenceException e) {

			ResponseBean responseBean = new ResponseBean();
			applifireLogger.logger.log(runtimeLogInfoHelper.getRuntimeLogInfo(), e.getExceptionId(), proceedingJoinPoint.getSignature().getDeclaringTypeName(), proceedingJoinPoint
					.getSignature().getName(), request.getRemoteHost(), e);
			responseBean.add("success", false);
			responseBean.add("message", " Can not perform Operation on entity:" + e.getMessage());
			methodCallDetails.setPostCallDetails(HealthConstants.METHOD_EXCEPTION, e.getExceptionId(), responseEntity.getStatusCode().name());
			return new ResponseEntity<ResponseBean>(responseBean, responseEntity.getStatusCode());
		}
		catch (Exception e) {
			applifireLogger.logger.log(runtimeLogInfoHelper.getRuntimeLogInfo(), 4005, proceedingJoinPoint.getSignature().getDeclaringTypeName(), proceedingJoinPoint
					.getSignature().getName(), request.getRemoteHost(), e);
			ResponseBean responseBean = new ResponseBean();
			responseBean.add("success", false);
			responseBean.add("message", " Access Denied:" + e.getMessage());
			methodCallDetails.setPostCallDetails(HealthConstants.METHOD_EXCEPTION, HealthConstants.DEFAULT_EXCEPTION_ID, responseEntity.getStatusCode().name());
			return new ResponseEntity<ResponseBean>(responseBean, responseEntity.getStatusCode());
		} finally {
			// httpStatusCode = responseEntity.getStatusCode();
			// requestDetails.postRequestValue(httpStatusCode.name());

			methodCallStack.addServiceMethodCallDetails(methodCallDetails);
			applifireHealth.apphealth.writeHealthLog((ArtMethodCallStack) methodCallStack.clone());
			Integer existingValue = 0;
			Metric metric = repository.findOne("gauge." + "total.Time " + entityName + "");
			if (metric != null) {
				existingValue = metric.getValue().intValue();
			}
			gaugeservice.submit("total.Time " + entityName + "", executionTimer.getSystemTime + existingValue);
		}

		return responseEntity;
	}

	@Around(value = "saveOperation()")
	@Order(2)
	public Object aroundAdvice2Save(ProceedingJoinPoint proceedingJoinPoint) throws Throwable {
		System.out.println("In aroundAdvice Order 2 Save: Calling method : " + proceedingJoinPoint.getSignature().getName());
		boolean isValidEntity = true;
		Object returnObject = new Object();
		if (proceedingJoinPoint.getArgs().length > 0) {
			Object methodInputParam = proceedingJoinPoint.getArgs()[0];
			if (methodInputParam != null && methodInputParam instanceof CommonEntityInterface) {
				CommonEntityInterface entity = (CommonEntityInterface) methodInputParam;
				prepareEntityAuditInfo((CommonEntityInterface) proceedingJoinPoint.getArgs()[0], CommonEntityInterface.RECORD_TYPE.ADD);
				preparedSystemInformation((CommonEntityInterface) proceedingJoinPoint.getArgs()[0], CommonEntityInterface.RECORD_TYPE.ADD);
				try {
					/* validates the entity */
					isValidEntity = validateEntity(entity);
					System.out.println("Entity is valid :" + isValidEntity);
				} catch (AppliFireConstraintViolationException e) {
					applifireLogger.logger.log(runtimeLogInfoHelper.getRuntimeLogInfo(), 2008, e);
					ResponseBean exceptionbean = e.prepareExceptionBean(applifireLogger, runtimeLogInfoHelper.getRuntimeLogInfo(), "Constraints violated by input "
							+ methodInputParam.getClass().getSimpleName());
					return new ResponseEntity<ResponseBean>(exceptionbean, e.getHttpStatus());
				}
			}
		}
		if (isValidEntity) {
			applifireLogger.logger.log(runtimeLogInfoHelper.getRuntimeLogInfo(), 1000, proceedingJoinPoint.getSignature().getDeclaringTypeName(), proceedingJoinPoint
					.getSignature().getName(), proceedingJoinPoint.getArgs()[0].getClass().getSimpleName(), proceedingJoinPoint.getArgs()[0].toString());
			returnObject = proceedingJoinPoint.proceed();
			applifireLogger.logger.log(runtimeLogInfoHelper.getRuntimeLogInfo(), 1001, proceedingJoinPoint.getSignature().getDeclaringTypeName(), proceedingJoinPoint
					.getSignature().getName(), proceedingJoinPoint.getArgs()[0].toString());
			return returnObject;
		}
		return returnObject;
	}

	@Around(value = "updateOperation()")
	@Order(2)
	public Object aroundAdvice2Update(ProceedingJoinPoint proceedingJoinPoint) throws Throwable {
		System.out.println("In aroundAdvice Order 2 Update: Calling method : " + proceedingJoinPoint.getSignature().getName());
		boolean isValidEntity = true;
		Object returnObject = new Object();
		if (proceedingJoinPoint.getArgs().length > 0) {
			Object methodInputParam = proceedingJoinPoint.getArgs()[0];
			if (methodInputParam != null && methodInputParam instanceof CommonEntityInterface) {
				CommonEntityInterface entity = (CommonEntityInterface) methodInputParam;
				prepareEntityAuditInfo((CommonEntityInterface) proceedingJoinPoint.getArgs()[0], CommonEntityInterface.RECORD_TYPE.UPDATE);
				preparedSystemInformation((CommonEntityInterface) proceedingJoinPoint.getArgs()[0], CommonEntityInterface.RECORD_TYPE.UPDATE);
				try {
					/* validates the entity */
					isValidEntity = validateEntity(entity);
					System.out.println("Entity is valid :" + isValidEntity);
				} catch (AppliFireConstraintViolationException e) {
					applifireLogger.logger.log(runtimeLogInfoHelper.getRuntimeLogInfo(), 2008, e);
					ResponseBean exceptionbean = e.prepareExceptionBean(applifireLogger, runtimeLogInfoHelper.getRuntimeLogInfo(), "Constraints violated by input "
							+ methodInputParam.getClass().getSimpleName());
					return new ResponseEntity<ResponseBean>(exceptionbean, e.getHttpStatus());
				}
			}
		}
		if (isValidEntity) {
			applifireLogger.logger.log(runtimeLogInfoHelper.getRuntimeLogInfo(), 1000, proceedingJoinPoint.getSignature().getDeclaringTypeName(), proceedingJoinPoint
					.getSignature().getName(), proceedingJoinPoint.getArgs()[0].getClass().getSimpleName(), proceedingJoinPoint.getArgs()[0].toString());
			returnObject = proceedingJoinPoint.proceed();
			applifireLogger.logger.log(runtimeLogInfoHelper.getRuntimeLogInfo(), 1001, proceedingJoinPoint.getSignature().getDeclaringTypeName(), proceedingJoinPoint
					.getSignature().getName(), proceedingJoinPoint.getArgs()[0].toString());
			return returnObject;
		}
		return returnObject;
	}

	@Around(value = "deleteOperation()")
	@Order(2)
	public Object aroundAdvice2Delete(ProceedingJoinPoint proceedingJoinPoint) throws Throwable {
		System.out.println("In aroundAdvice Order 2 Delete: Calling method : " + proceedingJoinPoint.getSignature().getName());
		Object returnObject = new Object();
		if (proceedingJoinPoint.getArgs().length > 0) {
			applifireLogger.logger.log(runtimeLogInfoHelper.getRuntimeLogInfo(), 1000, proceedingJoinPoint.getSignature().getDeclaringTypeName(), proceedingJoinPoint
					.getSignature().getName(), proceedingJoinPoint.getArgs()[0].getClass().getSimpleName(), proceedingJoinPoint.getArgs()[0].toString());
			returnObject = proceedingJoinPoint.proceed();
			applifireLogger.logger.log(runtimeLogInfoHelper.getRuntimeLogInfo(), 1001, proceedingJoinPoint.getSignature().getDeclaringTypeName(), proceedingJoinPoint
					.getSignature().getName(), proceedingJoinPoint.getArgs()[0].toString());
			return returnObject;
		}
		return returnObject;
	}

	private boolean validateEntity(CommonEntityInterface entity) throws AppliFireConstraintViolationException, ApplifireIncorrectDataException {
		boolean isValidEntity = true;
		/* set entity validator */
		entity.setEntityValidator(this.entityValidator);
		/* validates the entity */
		isValidEntity = entity.isValid();
		System.out.println("Entity is valid :" + isValidEntity);
		return isValidEntity;
	}

	@Around(value = "findOperation()||getOperation()")
	@Order(2)
	protected Object aroundAdvicefindOperation(ProceedingJoinPoint proceedingJoinPoint) throws Throwable {
		System.out.println("In aroundOperation Order 2 find*: Calling method : " + proceedingJoinPoint.getSignature().getName());
		Object returnObject = new Object();
		if (proceedingJoinPoint.getArgs().length > 0) {
			Object methodInputParam = proceedingJoinPoint.getArgs()[0];
			if (methodInputParam != null) {
				applifireLogger.logger.log(runtimeLogInfoHelper.getRuntimeLogInfo(), 1000, proceedingJoinPoint.getSignature().getDeclaringTypeName(), proceedingJoinPoint
						.getSignature().getName(), methodInputParam.getClass().getSimpleName(), methodInputParam.toString());
				returnObject = proceedingJoinPoint.proceed();
				applifireLogger.logger.log(runtimeLogInfoHelper.getRuntimeLogInfo(), 1001, proceedingJoinPoint.getSignature().getDeclaringTypeName(), proceedingJoinPoint
						.getSignature().getName(), methodInputParam.toString());
			}
		} else {
			applifireLogger.logger.log(runtimeLogInfoHelper.getRuntimeLogInfo(), 1000, proceedingJoinPoint.getSignature().getDeclaringTypeName(), proceedingJoinPoint
					.getSignature().getName(), "none", "none");
			returnObject = proceedingJoinPoint.proceed();
			applifireLogger.logger.log(runtimeLogInfoHelper.getRuntimeLogInfo(), 1001, proceedingJoinPoint.getSignature().getDeclaringTypeName(), proceedingJoinPoint
					.getSignature().getName(), "none");
		}
		return returnObject;
	}

	private boolean validateRequest(HttpSession session, HttpServletRequest request) throws ApplifireAccessDeniedException {
		if (!sessionValidation.checkIgnoreURL(request)) {
			sessionValidation.validateSession(session, request);
			cookieValidation.validateSessionCookie(session, request);
		}
		return true;
	}

	@AfterReturning(value = "allOperation() ")
	public void afterReturning(JoinPoint join) throws IOException {
		counterService.increment("counter.HttpStatus." + httpStatusCode.name() + "." + join.getSignature().getDeclaringType().getSimpleName() + "."
				+ join.getSignature().getName() + ".calls");
		counterService.increment("counter.numberof.calls");
	}

	public String incrementUricounter(String className, String methodName) {
		// meter.printMeter(meter);
		counterService.increment(className + "." + methodName);
		Metric metric = repository.findOne("gauge." + className + "." + methodName + "");
		if (metric != null) {
			gaugeservice.submit(className + "." + methodName, (Double) metric.getValue() + 1);
		} else {
			gaugeservice.submit(className + "." + methodName, 1);
		}
		return className + "." + methodName;
	}
	
	public String loggedInUserId(HttpServletRequest request)
    {
    	HttpSession session=request.getSession();
    	if(session.getAttribute("usidHash")!=null){
		Object loggedInObject = session.getAttribute(session.getAttribute("usidHash").toString());
		UserAuthentication user = (UserAuthentication) loggedInObject;
		return user.getUserId();
    	}
    	else
    	{
    		return "";
    	}
    }
	
	public String getSessionId(HttpServletRequest request)
    {
    	 HttpSession session = request.getSession();
    	 System.out.println(session.getAttribute("usidHash"));
    	 if (session.getAttribute("usidHash") != null) {
             return (String) session.getAttribute("usidHash").toString();
            
         } else {
             return "";
         }
    }

	private void prepareEntityAuditInfo(CommonEntityInterface entity, RECORD_TYPE recordType) {
		entity.setLoggedInUserInfo(1, "xyz", recordType);
	}

	private void preparedSystemInformation(CommonEntityInterface entity, RECORD_TYPE recordType) {
		entity.setSystemInformation(recordType);
	}

	protected void saveOperation() {
	}

	protected void deleteOperation() {
	}

	protected void updateOperation() {
	}

	protected void allOperation() {
	}

	protected void findOperation() {
	}

	protected void getOperation() {
	}

	@Pointcut("execution(* com.applifire..service..*(..))")
	protected void applifireServiceOperation() {
	}
}
