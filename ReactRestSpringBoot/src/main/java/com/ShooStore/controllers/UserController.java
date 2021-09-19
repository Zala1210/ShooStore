package com.ShooStore.controllers;

import com.ShooStore.services.ShoeService;
import com.ShooStore.services.UserService;
import com.ShooStore.models.Shoe;
import com.ShooStore.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.io.IOException;
import java.net.URI;
import java.util.List;

@RestController
@RequestMapping(value = "/users")
@CrossOrigin(origins="http://localhost:3000")
public class UserController {


    @Autowired
    private UserService userService;
    @CrossOrigin(origins="http://localhost:3000")
    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public List<User> getUsersShoes() throws IOException {

        return userService.getAllUsers();
    }

    @CrossOrigin(origins="http://localhost:3000")
    @PostMapping(value = "/username")
    public User getUserByUsername(@RequestBody String username) throws IOException {
        if(username.endsWith("=")){
            username = username.substring(0, username.length() - 1);
        }
        return userService.getUserByUsername(username);

    }
    @CrossOrigin(origins="http://localhost:3000")
    @PostMapping(value = "/login")
    public User login(@RequestBody String credentials) throws IOException {

        String result[] = credentials.trim().split("\\s*,\\s*");
        String usernameResult1[] = result[0].trim().split("\\s*:\\s*");
        String passwordResult1[] = result[1].trim().split("\\s*:\\s*");

        String username = usernameResult1[1].substring(1,usernameResult1[1].length()-1);
        String password  =  passwordResult1[1].substring(1,passwordResult1[1].length()-1);
        System.out.println(username+ " " + password);
        return userService.login(username,password);

    }
    @CrossOrigin(origins="http://localhost:3000")
    @PostMapping(value = "/add")
    public ResponseEntity<Object> register(@RequestBody User user) throws IOException {
        System.out.println(user.toString());
        User savedUser = userService.save(user);
        URI location =
                ServletUriComponentsBuilder.fromCurrentRequest().path("/id").buildAndExpand(savedUser.getId()).toUri();
        return ResponseEntity.created(location).build();

    }
}
