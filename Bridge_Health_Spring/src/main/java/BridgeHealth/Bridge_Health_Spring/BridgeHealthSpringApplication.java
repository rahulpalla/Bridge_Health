package BridgeHealth.Bridge_Health_Spring;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})
public class BridgeHealthSpringApplication {


	public static void main(String[] args) {
		SpringApplication.run(BridgeHealthSpringApplication.class, args);
		System.out.println("BRIDGE HEALTH SAYS HELLO WORLD");
	}

}
