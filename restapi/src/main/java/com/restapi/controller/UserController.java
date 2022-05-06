package com.restapi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

import com.restapi.models.LoginUser;
import com.restapi.models.User;
import com.restapi.service.UserService;

@Controller
@RequestMapping(path = "/user")
public class UserController {
    
    private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    
    @PostMapping("/add")
    public ResponseEntity<User> saveUser(@RequestBody User newUser) {

        return this.userService.addUser(newUser);
    }

    @GetMapping("/all")
    public ResponseEntity<List<User>> getAllUser() {
        
        return this.userService.getAllUser();
    }

    @CrossOrigin("http://localhost:4200")
    @PostMapping("/login")
    public ResponseEntity<User> getUserLogin(@RequestBody LoginUser loginUser) {
        String email = loginUser.getEmailUser();
        String mdp = loginUser.getMdpUser();

        return this.userService.getLoginUser(email, mdp); 
    }
    
}
