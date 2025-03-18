package com.jeancharlesexe.backend.v1.service;

import com.jeancharlesexe.backend.v1.model.User;
import com.jeancharlesexe.backend.v1.repository.UserRepository;
import jakarta.persistence.EntityExistsException;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public List<User> findAll() {
        List<User> users = userRepository.findAll();

        if(users.isEmpty()){
            throw new EntityNotFoundException("Users not found");
        }

        try{
            return userRepository.findAll();
        }catch(Exception e){
            throw new RuntimeException("Error finding users: "+e);
        }
    }

    public User findById(Integer id) {
        if(id == null){
            throw new IllegalArgumentException("Id cannot be null");
        }

        Optional<User> optionalUser = userRepository.findById(id);
        if(!optionalUser.isPresent()){
            throw new EntityNotFoundException("User not found");
        }

        try{
            return userRepository.findById(id).get();
        }catch(Exception e){
            throw new RuntimeException("Error finding user: "+e);
        }
    }


    public User create(User user) {
        if (user.getUsername() == null || user.getUsername().isEmpty()) {
            throw new IllegalArgumentException("Username cannot be null or empty");
        }
        if (user.getEmail() == null || user.getEmail().isEmpty()) {
            throw new IllegalArgumentException("Email cannot be null or empty");
        }
        if (user.getPassword() == null || user.getPassword().isEmpty()) {
            throw new IllegalArgumentException("Password cannot be null or empty");
        }

        if(userRepository.existsUserByEmail(user.getEmail())){
            throw new EntityExistsException("Conflict with existing user. Email has been taken");
        }

        try{
            user.setCreatedAt(LocalDateTime.now());
            user.setUpdatedAt(LocalDateTime.now());
            return userRepository.save(user);
        }catch(Exception e){
            throw new RuntimeException("Error creating user: "+e);
        }
    }

    public void delete(Integer id) {
        if(id == null){
            throw new IllegalArgumentException("Id cannot be null");
        }

        if(!userRepository.existsUserById(id)){
            throw new EntityNotFoundException("User not found");
        }

        try{
            userRepository.deleteById(id);
        }catch(Exception e){
            throw new RuntimeException("Error deleting user: "+e);
        }
    }

    public User update(User user) {
        if (user == null) {
            throw new IllegalArgumentException("User data cannot be null");
        }

        Optional<User> optionalUser = userRepository.findById(user.getId());
        if (!optionalUser.isPresent()) {
            throw new EntityNotFoundException("User not found");
        }

        User userFound = optionalUser.get();

        User probableUserConflict = userRepository.findUserByEmail(user.getEmail());
        if (probableUserConflict != null && !probableUserConflict.getId().equals(userFound.getId())) {
            throw new EntityExistsException("Conflict with existing user. Email has been taken");
        }

        try{
            userFound.setUsername(user.getUsername());
            userFound.setEmail(user.getEmail());
            userFound.setPassword(user.getPassword());
            userFound.setUpdatedAt(LocalDateTime.now());
            return userRepository.save(userFound);
        }catch(Exception e){
            throw new RuntimeException("Error updating user: "+e);
        }
    }

}
