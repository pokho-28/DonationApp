package com.college.fundRaising.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.college.fundRaising.entity.User;
import com.college.fundRaising.service.UserService;

@RestController
public class UserController {
	
	@Autowired
	private UserService userService;
	
	
	@PostMapping("/user")
	public String saveUser(@RequestBody User user) {
		
		userService.saveUser(user);
		
		return "Saved";
	}
}
