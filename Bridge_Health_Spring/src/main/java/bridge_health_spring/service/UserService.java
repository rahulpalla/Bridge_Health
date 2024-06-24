package bridge_health_spring.service;

import bridge_health_spring.model.UserModel;
import bridge_health_spring.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public String getUserFirstNameByEmail(String email) {
        UserModel user = userRepository.findUserByEmail(email);
        return user != null ? user.getFirstName() : null;
    }

    public String getUserLastNameByEmail(String email) {
        UserModel user = userRepository.findUserByEmail(email);
        return user != null ? user.getLastName() : null;
    }

    public boolean createUser(UserModel user) {
        if (userRepository.existsById(user.getEmail())) {
            return false; // User already exists
        }
        userRepository.save(user);
        return true;
    }
}
