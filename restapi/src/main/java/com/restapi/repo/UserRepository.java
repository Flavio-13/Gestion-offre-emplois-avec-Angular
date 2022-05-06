package com.restapi.repo;

import com.restapi.models.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
 
    @Query("SELECT u FROM User u  WHERE u.emailUser=?1 AND u.mdpUser=?2")
    User findUserByEmailAndMdp(String email, String mdp);
    
}
