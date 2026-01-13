package com.ledgerpay.ledgerpay_backend.Service;

import org.springframework.stereotype.Service;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.ledgerpay.ledgerpay_backend.Repository.UserRepository;
import com.ledgerpay.ledgerpay_backend.dto.SignupRequest;
import com.ledgerpay.ledgerpay_backend.dto.SigninRequest;
import com.ledgerpay.ledgerpay_backend.dto.UserResponse;
import com.ledgerpay.ledgerpay_backend.model.User;

@Service
public class UserService {

    private final UserRepository userrepo;
    private final BCryptPasswordEncoder passwordEncoder;

    public UserService(UserRepository userrepo,
                       BCryptPasswordEncoder passwordEncoder) {
        this.userrepo = userrepo;
        this.passwordEncoder = passwordEncoder;
    }

    public UserResponse signup(SignupRequest request) {

        if (userrepo.existsByUsername(request.getUsername())) {
            throw new RuntimeException("Username already exists");
        }

        String hashedPassword =
                passwordEncoder.encode(request.getPassword());

        User user = new User(
            request.getUsername(),
            hashedPassword,
            0
        );

        User savedUser = userrepo.save(user);
        return new UserResponse(
            savedUser.getUsername(),
            savedUser.getBalance()
        );
    }

    public UserResponse signin(SigninRequest request) {

        User user = userrepo.findByUsername(request.getUsername())
            .orElseThrow(() -> new RuntimeException("User not found"));

        if (!passwordEncoder.matches(
                request.getPassword(),
                user.getPassword())) {
            throw new RuntimeException("Invalid password");
        }
        return new UserResponse(
            user.getUsername(),
            user.getBalance()
        );
    }
}
