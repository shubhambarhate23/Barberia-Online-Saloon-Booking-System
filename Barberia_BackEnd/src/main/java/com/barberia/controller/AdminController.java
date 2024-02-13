package com.barberia.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.barberia.model.Admin;
import com.barberia.model.RegisterShop;
import com.barberia.model.UserRegister;
import com.barberia.repository.AdminRepository;
import com.barberia.service.AdminServiceImpl;
import com.barberia.service.RegisterServiceImpl;
import com.barberia.service.UserServiceImpl;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api/v5/")
public class AdminController {
	
	@Autowired
	private UserServiceImpl userServiceImpl;
	
	@Autowired
	private RegisterServiceImpl registerServiceImpl;
	
	@Autowired
	private AdminServiceImpl adminServiceImpl;
	
	@Autowired
	private AdminRepository adminRepository;
	
	@GetMapping("/allRegisterUser")
	public ResponseEntity<List<UserRegister>>viewAllUser(){
		return new ResponseEntity<List<UserRegister>>(userServiceImpl.getAllUser(),HttpStatus.OK);
	}
	
	@GetMapping("/allRegisterShop")
	public ResponseEntity<List<RegisterShop>>viewProfile(){
		return new ResponseEntity<List<RegisterShop>>(registerServiceImpl.viewProfile(),HttpStatus.OK);
	}
	
	
	@GetMapping("/getAllAdmin")
	public ResponseEntity<List<Admin>>getAllAdmin(){
		return new ResponseEntity<List<Admin>>(adminServiceImpl.getAllAdmin(),HttpStatus.OK);
	}
	
	@GetMapping(value = "adminlogin/{pwd}", headers = "Accept=application/json")  
	 public List<Admin> getAdmin(@PathVariable String pwd)
	 {
		List<Admin> p=adminRepository.getAdminByPassword(pwd);
		return p;
	 }
	
	@GetMapping("/deleteuser/{userid}")
	public ResponseEntity<String> deleteUser(@PathVariable int userid){
		adminServiceImpl.deleteUsr(userid);
		return new ResponseEntity<String>("Delete Successfully",HttpStatus.OK);
	}
	
	@GetMapping("/deleteshop/{shopno}")
	public ResponseEntity<String> deleteSjop(@PathVariable int shopno){
		adminServiceImpl.deleteService(shopno);
		return new ResponseEntity<String>("Delete Successfully",HttpStatus.OK);
	}
	
}
