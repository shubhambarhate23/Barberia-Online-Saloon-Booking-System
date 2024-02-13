package com.barberia.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.barberia.model.RegisterShop;
import com.barberia.repository.BarberiaRepository;

@Service
public class RegisterServiceImpl implements RegisterService {

	
	
	@Autowired
	private BarberiaRepository barberiaRepository;
	
	@Override
	public RegisterShop addShop(RegisterShop registerShop) {
		return barberiaRepository.save(registerShop);
	}

	@Override
	public List<RegisterShop> viewProfile() {
		return barberiaRepository.findAll();
	}

	@Override
	public RegisterShop getShopById(int shopno) {
		return barberiaRepository.findById(shopno).get();
	}


	@Override
	public RegisterShop login(RegisterShop registerShop) {
		return barberiaRepository.findByEmailAndPassword(registerShop.getEmail(), registerShop.getPassword()) ;
	}


	

	@Override
	public RegisterShop findByEmail(String email) {
		return barberiaRepository.findByEmail(email);
	}

	@Override
	public RegisterShop updateShopProfile(RegisterShop registerShop) {
		Optional<RegisterShop> addShop=barberiaRepository.findById(registerShop.getShopno());
		RegisterShop rs= addShop.get();
	    rs.setPassword(registerShop.getPassword());
	    rs.setMobile(registerShop.getMobile());
	    rs=barberiaRepository.save(rs);
		return rs;
	}	
}
