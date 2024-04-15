package bridge_health_spring.model;

import lombok.Getter;
import lombok.Setter;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;


@Entity
@Getter
@Setter
public class UserModel {

    @Id
    private String email;
    // @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
    private String username;
    private String password;
    private String clientId;
    private String clientSecret;
    private String firstName;
    private String lastName;

    // Default constructor
    public UserModel() {}

    // Constructor with fields
    public UserModel(String username, String email, String password) {
        System.out.println("MADE USER DAWG");
        this.username = username;
        this.email = email;
        this.password = password;
    }

    


    // toString method for logging or debugging
    @Override
    public String toString() {
        return "UserModel{" +
                //"id=" + id +
                ", username='" + username + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
