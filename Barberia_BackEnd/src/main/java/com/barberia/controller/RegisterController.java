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

import com.barberia.model.AddServices;
import com.barberia.model.RegisterShop;
import com.barberia.repository.BarberiaRepository;
import com.barberia.service.RegisterService;


@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api/v1/")
public class RegisterController {

	@Autowired
	private RegisterService registerService;
	
		
	@Autowired
	private BarberiaRepository barberiaRepository;
	
	
	AddServices addServices=new AddServices();
	
	@PostMapping("/addShop")
	public ResponseEntity<RegisterShop>addRegisterShop(@RequestBody RegisterShop registerShop){
		return new ResponseEntity<RegisterShop>(registerService.addShop(registerShop),HttpStatus.CREATED);
	}
	
	@GetMapping("/allShop")
	public ResponseEntity<List<RegisterShop>>viewProfile(){
		return new ResponseEntity<List<RegisterShop>>(registerService.viewProfile(),HttpStatus.OK);
	}
	
	@GetMapping("/getShopById/{shopno}")
	public ResponseEntity<RegisterShop>getShopById(@PathVariable int shopno){
		return new ResponseEntity<RegisterShop>(registerService.getShopById(shopno),HttpStatus.OK);
	}
	
	
	
	
	
	
	@GetMapping(value = "shoplogin/{pwd}", headers = "Accept=application/json")  
	 public List<RegisterShop> getShop(@PathVariable String pwd)
	 {
		List<RegisterShop> p=barberiaRepository.getShop(pwd);
		return p;
	 }
	
	@GetMapping("findShopByEmail/{email}")
	public RegisterShop findByEmail(@PathVariable String email) {
		return registerService.findByEmail(email);
	}
	
	@PutMapping("/updateShopProfile/{shopno}")
	public RegisterShop updateDetails(@RequestBody RegisterShop registerShop)
	{
				return registerService.updateShopProfile(registerShop);
	}
	
}
