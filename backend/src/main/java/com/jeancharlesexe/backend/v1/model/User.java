package com.jeancharlesexe.backend.v1.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Table(name="users")
@Getter @Setter @AllArgsConstructor @NoArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @NotBlank(message = "Username cannot be blank")
    @Size(min = 3, max = 50, message = "Username must be between 3 and 50 characters")
    private String username;

    @NotBlank(message = "Email cannot be blank")
    @Size(min = 3, max = 100, message = "Email must be between 3 and 100 characters")
    @Email(message = "Email cannot be invalid")
    private String email;

    @NotBlank(message = "Password cannot be blank")
    @Size(min = 16, max = 100, message = "Password must be between 16 and 100 characteres")
    private String password;

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
