package com.example.interway;

import com.example.interway.model.Product;
import com.example.interway.repository.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataInitializer {

	@Bean
	CommandLineRunner loadData(ProductRepository repo) {
		return args -> {
			repo.save(new Product(null, "Laptop", "High-end laptop", 1200.0, 5, "Electronics"));
			repo.save(new Product(null, "Headphones", "Noise cancelling headphones", 200.0, 10, "Audio"));
		};
	}
}
