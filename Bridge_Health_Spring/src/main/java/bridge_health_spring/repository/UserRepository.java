package bridge_health_spring.repository;

import bridge_health_spring.model.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<UserModel, String> {

    @Query("SELECT u FROM UserModel u WHERE u.email = ?1")
    UserModel findUserByEmail(String email);

}