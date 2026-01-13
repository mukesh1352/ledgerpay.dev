package com.ledgerpay.ledgerpay_backend.Controller;

import org.springframework.web.bind.annotation.*;

import com.ledgerpay.ledgerpay_backend.Service.UserService;
import com.ledgerpay.ledgerpay_backend.dto.SignupRequest;
import com.ledgerpay.ledgerpay_backend.dto.SigninRequest;
import com.ledgerpay.ledgerpay_backend.dto.UserResponse;
import com.ledgerpay.ledgerpay_backend.dto.AuthResponse;

@RestController
@RequestMapping("/api/user")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/signup")
    public UserResponse signup(@RequestBody SignupRequest request) {
        return userService.signup(request);
    }

    @PostMapping("/signin")
    public AuthResponse signin(@RequestBody SigninRequest request) {
        return userService.signin(request);
    }
}
