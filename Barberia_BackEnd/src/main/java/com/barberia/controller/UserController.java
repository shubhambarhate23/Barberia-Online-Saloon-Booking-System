package com.barberia.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.barberia.model.UserRegister;
import com.barberia.repository.BarberiaUserRepository;
import com.barberia.service.UserServiceImpl;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api/v2/")
public class UserController {
	
	@Autowired
	private UserServiceImpl userServiceImpl;
	
	
	@Autowired
	private BarberiaUserRepository barberiaUserRepository;
	
	
	
	@PostMapping("/addUser")
	public ResponseEntity<UserRegister>addUser(@RequestBody UserRegister userRegister){
		return new ResponseEntity<UserRegister>(userServiceImpl.addUser(userRegister),HttpStatus.CREATED);
	}
	

	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody UserRegister userRegister)
	{

		 try {
				return ResponseEntity.ok(userServiceImpl.login(userRegister));
			}catch(RuntimeException e) {
				return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
			}
		
	}

	
	
	@GetMapping("/allUser")
	public ResponseEntity<List<UserRegister>>viewAllUser(){
		return new ResponseEntity<List<UserRegister>>(userServiceImpl.getAllUser(),HttpStatus.OK);
	}
	
	@GetMapping("/getUserById/{userid}")
	public ResponseEntity<UserRegister>getUserById(@PathVariable int userid){
		return new ResponseEntity<UserRegister>(userServiceImpl.findUserById(userid),HttpStatus.OK);
	}
	
	
	@GetMapping(value = "userlogin/{pwd}", headers = "Accept=application/json")  
	 public List<UserRegister> getUser(@PathVariable String pwd)
	 {
		List<UserRegister> p=barberiaUserRepository.getUser(pwd);
		return p;
	 }
		
	@GetMapping("/findByEmail/{email}")
	public UserRegister findByEmail(@PathVariable String email) {
		return userServiceImpl.findByEmail(email);
	}
	
	@PutMapping("/updateUserProfile/{userid}")
	public UserRegister updateDetails(@RequestBody UserRegister userRegister)
	{
				return userServiceImpl.updateUserProfile(userRegister);
	}
	
}
