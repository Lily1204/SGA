package com.mx.ito.sga.module.app;

import com.mx.ito.sga.module.app.aspects.AdviceService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class Application {

    @Bean
    public AdviceService getAdviceService() {
        return new AdviceService();
    }

    public static void main(String args[]) {
        SpringApplication.run(Application.class, args);
    }
}
