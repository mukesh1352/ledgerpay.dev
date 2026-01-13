package com.ledgerpay.ledgerpay_backend.dto;

public class UserResponse {
    private String username;
    private int balance;
    public UserResponse(String username,int balance){
        this.username = username;
        this.balance  = balance;
    }
    public String getUsername(){
        return username;
    }
    public int getbalance(){
        return balance;
    }
}
