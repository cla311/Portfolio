package com.cla311.portfolio;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.web.servlet.error.
		ErrorMvcAutoConfiguration;
import org.springframework.boot.SpringApplication;

@SpringBootApplication(exclude = { ErrorMvcAutoConfiguration.class }) public
class PortfolioApplication {
	public static void main(String[] args) {
		SpringApplication.run(PortfolioApplication.class, args);
	}
}
