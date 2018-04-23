package com.mx.ito.sga.module.app.aspects;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;

import org.apache.log4j.Logger;

@Aspect
public class AdviceService {

    private static final Logger logger = Logger.getLogger(AdviceService.class);

    @Around("@annotation(ServiceAOP)")
    public Object aspect(ProceedingJoinPoint proceedingJoinPoint) throws Throwable {
        logger.info("Starting method" + proceedingJoinPoint.getSignature().getName());
        Object object = proceedingJoinPoint.proceed();
        logger.info("Ending method" + proceedingJoinPoint.getSignature().getName());
        return object;
    }
}
