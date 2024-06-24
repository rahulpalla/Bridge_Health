package bridge_health_spring.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import bridge_health_spring.model.UserModel;
import bridge_health_spring.service.UserService;

@RestController
@RequestMapping("/users") // Optional base path for all user-related endpoints
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/name")
    public ResponseEntity<String> getUserFirstAndLastNameByEmail(@RequestParam String email) {
        String firstName = userService.getUserFirstNameByEmail(email);
        String lastName = userService.getUserLastNameByEmail(email);
        if (firstName != null && lastName != null) {
            return ResponseEntity.ok(firstName + " " + lastName);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found for email: " + email);
        }
    }

    @PostMapping("/create")
    public ResponseEntity<String> createUser(@RequestBody UserModel user) {
        boolean isCreated = userService.createUser(user);
        if (isCreated) {
            return ResponseEntity.status(HttpStatus.CREATED).body("User created successfully.");
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User already exists or invalid data.");
        }
    }
}
