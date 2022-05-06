package com.restapi.service;

import java.util.List;

import com.restapi.models.User;
import com.restapi.repo.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final UserRepository userRepo;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepo = userRepository;
    }


    /**
     * This method save a new User.
     * @param newUser the Entity User who is going to be saved in Database
     * @return {@code ResponseEntity<User>}
     */
    public ResponseEntity<User> addUser(User newUser) {
        User user = this.userRepo.save(newUser);

        return new ResponseEntity<User>(user, HttpStatus.OK);
    }


    /**
     * Get all user in database
     * @return {@code List<User>} 
 1    */
    public ResponseEntity<List<User>> getAllUser() {
        List<User> users = this.userRepo.findAll();

        return new ResponseEntity<List<User>>(users, HttpStatus.OK);
    }

    public ResponseEntity<User> getLoginUser(String email, String mdp) {
        User user = this.userRepo.findUserByEmailAndMdp(email, mdp);
        user = user != null ? user : null; 

        return new ResponseEntity<User>(user, HttpStatus.OK);
    }

}
