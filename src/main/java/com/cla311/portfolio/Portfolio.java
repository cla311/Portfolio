package com.cla311.portfolio;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.web.servlet.error.
		ErrorMvcAutoConfiguration;
import org.springframework.boot.SpringApplication;
import org.springframework.stereotype.Controller;

@Controller @SpringBootApplication(exclude =
{ ErrorMvcAutoConfiguration.class }) public class Portfolio {
	public static void main(String[] args) {
		SpringApplication.run(Portfolio.class, args);
	}
}
