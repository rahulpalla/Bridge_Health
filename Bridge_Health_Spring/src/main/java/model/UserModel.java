package model;

import lombok.Getter;
import lombok.Setter;

//@Entity
@Getter
@Setter
public class UserModel {

   // @Id
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;

    private String username;
    private String email;
    private String password;
    private String clientId;
    private String clientSecret;

    // Default constructor
    public UserModel() {}

    // Constructor with fields
    public UserModel(String username, String email, String password) {
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
