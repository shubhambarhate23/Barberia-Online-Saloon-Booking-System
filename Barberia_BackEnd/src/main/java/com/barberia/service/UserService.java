package com.barberia.service;

import java.util.List;

import com.barberia.model.UserRegister;

public interface UserService {
	
	public UserRegister addUser(UserRegister userRegister);
	
	public UserRegister login(UserRegister userRegister);
	
	public UserRegister findUserById(int userid);
	
	public List<UserRegister>getAllUser();
	
	public UserRegister updateUserProfile(UserRegister userRegister);
			
	public UserRegister findByEmail(String email);
}
