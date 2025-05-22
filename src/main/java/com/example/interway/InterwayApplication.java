package com.example.interway;

import com.example.interway.model.Product;
import com.example.interway.repository.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@SpringBootApplication
public class InterwayApplication {
	public static void main(String[] args) {
		SpringApplication.run(InterwayApplication.class, args);
	}
}
