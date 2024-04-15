package bridge_health_spring;
import bridge_health_spring.model.UserModel;
import bridge_health_spring.repository.UserRepository;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class TestDataInitializer implements CommandLineRunner {

    private final UserRepository userRepository;

    public TestDataInitializer(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        UserModel user1 = new UserModel();
        user1.setFirstName("John");
        user1.setLastName("Doe");
        user1.setEmail("john@example.com");
        userRepository.save(user1);

        UserModel user2 = new UserModel();
        user2.setFirstName("Jane");
        user2.setLastName("Smith");
        user2.setEmail("jane@example.com");
        userRepository.save(user2);
    }
}
