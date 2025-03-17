package com.jeancharlesexe.fullstackproject.v1.service;

import com.jeancharlesexe.fullstackproject.v1.model.User;
import com.jeancharlesexe.fullstackproject.v1.repository.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public List<User> findAll() {
        List<User> users = userRepository.findAll();

        if(users.isEmpty()){
            throw new EntityNotFoundException("Users not found");
        }

        return userRepository.findAll();
    }

    public User findById(Integer id) {
        if(id == null){
            throw new IllegalArgumentException("Id cannot be null");
        }

        User userFound = userRepository.findById(id).get();
        if(userFound == null){
            throw new EntityNotFoundException("User not found");
        }
        
        return userRepository.findById(id).get();
    }

    public User create(User user) {
        return userRepository.save(user);
    }

    public void delete(Integer id) {
        userRepository.deleteById(id);
    }

    public User update(User user) {
        return userRepository.save(user);
    }

}
