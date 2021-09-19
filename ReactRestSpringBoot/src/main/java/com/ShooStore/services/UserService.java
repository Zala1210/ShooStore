package com.ShooStore.services;

import com.ShooStore.dao.ShoeDao;
import com.ShooStore.dao.UserDao;
import com.ShooStore.models.Shoe;
import com.ShooStore.models.RandomString;
import com.ShooStore.models.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.SecureRandom;
import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserDao userDao;

    public List<User> getAllUsers(){

        List<User> users = new ArrayList<>();
        //lambda exp
        userDao.findAll().forEach(users::add);

        return users;
    }

    public User getUserById(Integer id) {

        return userDao.findById(id).orElse(new User());

    }

    public User getUserByUsername(String username) {


        List<User> list = getAllUsers();
        for(User user : list){

            System.out.println(username);
            if(user.getUsername().equals(username)) {
                System.out.println(user.getUsername());
                return user;
            }
        }

        return null;
    }
    public User login(String username, String password) {


        List<User> list = getAllUsers();
        for(User user : list){
            if(user.getUsername().equals(username) && user.getPassword().equals(password)) {
                String easy = RandomString.digits + "ACEFGHJKLMNPQRUVWXYabcdefhijkprstuvwx";
                RandomString tickets = new RandomString(23, new SecureRandom(), easy);
                String token = tickets.nextString();
                user.setToken(token);
                if(user.getGroup_id() == 1){
                    user.setAdmin(true);
                }

                System.out.println(user.toString());
                userDao.save(user);
                return user;
            }
        }

        return null;
    }
    public User save(User user) {
        userDao.save(user);
        return user;

    }
}
