package com.ledgerpay.ledgerpay_backend.Service;
import org.springframework.stereotype.Service;
import com.ledgerpay.ledgerpay_backend.Repository.UserRepository;
import com.ledgerpay.ledgerpay_backend.dto.SignupRequest;
import com.ledgerpay.ledgerpay_backend.dto.SigninRequest;
import com.ledgerpay.ledgerpay_backend.model.User;

@Service
public class UserService {

    private final UserRepository userrepo;
    UserService(UserRepository userrepo){
        this.userrepo = userrepo;
    }
    public User Signup(SignupRequest request){
         if (userrepo.existByUsername(request.getUsername())) {
            throw new RuntimeException("Username already exists");
        }
        User user = new User(
            request.getUsername(),
            request.getPassword(),
            0
        );
        User savedUser = userrepo.save(user);
        return savedUser;
    }
    public User Signin(SigninRequest request){
        User user = userrepo.findByUsername(request.getUsername()).orElseThrow(()->new RuntimeException("User not found.."));
        if(!user.getPassword().equals(request.getPassword())){
            throw new RuntimeException("Invalid password");
        }
        return user;
    }
}
