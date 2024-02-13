package com.barberia.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.barberia.model.Admin;
import com.barberia.model.RegisterShop;
import com.barberia.model.UserRegister;
import com.barberia.repository.AdminRepository;
import com.barberia.repository.BarberiaRepository;
import com.barberia.repository.BarberiaUserRepository;

@Service
public class AdminServiceImpl implements AdminService{
	
	@Autowired
	private AdminRepository adminRepository;
	
	@Autowired
	private BarberiaUserRepository barberiaUserRepository;
	
	
	@Autowired
	private BarberiaRepository barberiaRepository;
	
	
	@Override
	public List<Admin> getAllAdmin() {
		return adminRepository.findAll();
	}

	@Override
	public void deleteUsr(int userid) {
		UserRegister user=barberiaUserRepository.findById(userid).get();
		if(user!=null) {
			barberiaUserRepository.delete(user);
		}
	}

	@Override
	public void deleteService(int shopno) {
		RegisterShop shop=barberiaRepository.findById(shopno).get();
		if(shop!=null) {
			barberiaRepository.delete(shop);
		}
	}

	
	
	
}
