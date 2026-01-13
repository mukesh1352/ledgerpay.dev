package com.ledgerpay.ledgerpay_backend.Service;

import org.springframework.stereotype.Service;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.ledgerpay.ledgerpay_backend.Repository.UserRepository;
import com.ledgerpay.ledgerpay_backend.dto.SignupRequest;
import com.ledgerpay.ledgerpay_backend.dto.SigninRequest;
import com.ledgerpay.ledgerpay_backend.dto.AuthResponse;
import com.ledgerpay.ledgerpay_backend.dto.UserResponse;
import com.ledgerpay.ledgerpay_backend.model.User;
import com.ledgerpay.ledgerpay_backend.Security.JwtUtil;

@Service
public class UserService {

    private final UserRepository userrepo;
    private final BCryptPasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;

    public UserService(UserRepository userrepo,
                       BCryptPasswordEncoder passwordEncoder,
                       JwtUtil jwtUtil) {
        this.userrepo = userrepo;
        this.passwordEncoder = passwordEncoder;
        this.jwtUtil = jwtUtil;
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

    public AuthResponse signin(SigninRequest request) {

        User user = userrepo.findByUsername(request.getUsername())
            .orElseThrow(() -> new RuntimeException("User not found"));

        if (!passwordEncoder.matches(
                request.getPassword(),
                user.getPassword())) {
            throw new RuntimeException("Invalid password");
        }

        String token = jwtUtil.generateToken(user.getUsername());

        return new AuthResponse(token);
    }
}
