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
import com.barberia.repository.AddServiceRepository;

import com.barberia.service.ServiceAddImpl;



@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api/v3/")
public class AddServicesController {
	
	@Autowired
	private ServiceAddImpl serviceAddImpl;
	
	@Autowired
	private AddServiceRepository addServiceRepository;

	
	
	@PostMapping("/addService")
	public ResponseEntity<AddServices>addService(@RequestBody AddServices addServices){
		return new ResponseEntity<AddServices>(serviceAddImpl.addService(addServices),HttpStatus.CREATED);
	}
	
	@GetMapping("/findByAsid/{asid}")
	public ResponseEntity<?> findByAsid(@PathVariable int asid){
		 try {
				return ResponseEntity.ok( addServiceRepository.getByAsid(asid));
			}catch(RuntimeException e) {
				return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
			}
		
	}
	

	@GetMapping("/findByShopno/{shopno}")
	public ResponseEntity<?> findById(@PathVariable int shopno){
		 try {
				return ResponseEntity.ok( addServiceRepository.findByShopno(shopno));
			}catch(RuntimeException e) {
				return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
			}
		
	}
	

	@GetMapping("/allService")
	public ResponseEntity<List<AddServices>>viewAllService(){
		return new ResponseEntity<List<AddServices>>(serviceAddImpl.getAllService(),HttpStatus.OK);
	}
	
	@PutMapping("/updateDetails/{asid}")
	public AddServices updateDetails(@RequestBody AddServices addServices)
	{
				return serviceAddImpl.updatePrice(addServices);
	}
	
}
