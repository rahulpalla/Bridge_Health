package bridge_health_spring.model;

import lombok.Getter;
import lombok.Setter;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Getter
@Setter
@Table(name = "user_table")
public class UserModel {

    @Id
    // @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
    // private String username;
    private String email;
    private String password;
    private String firstName;
    private String lastName;
    // private String clientId;
    // private String clientSecret;

    // Default constructor
    
    public UserModel() {}

    // Constructor with fields
    public UserModel(String email, String password) {
        // System.out.println("MADE USER DAWG");
        this.email = email;
        this.password = password;
    }

    


    // toString method for logging or debugging
    @Override
    public String toString() {
        return "UserModel{" +
                //"id=" + id +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
