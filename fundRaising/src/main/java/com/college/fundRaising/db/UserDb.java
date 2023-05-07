package com.college.fundRaising.db;

import org.springframework.data.jpa.repository.JpaRepository;

import com.college.fundRaising.entity.User;

public interface UserDb extends JpaRepository<User, Integer>{

}
