package com.college.fundRaising.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.college.fundRaising.db.UserDb;
import com.college.fundRaising.entity.User;

@Service
public class UserService {
	
	@Autowired
	private UserDb userDb;
	
	public void saveUser(User user) {
		userDb.save(user);
	}
}
