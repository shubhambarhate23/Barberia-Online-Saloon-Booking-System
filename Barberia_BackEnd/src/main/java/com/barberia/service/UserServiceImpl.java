package com.barberia.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.barberia.model.UserRegister;
import com.barberia.repository.BarberiaUserRepository;

@Service
public class UserServiceImpl implements UserService {

	
	@Autowired
	private BarberiaUserRepository barberiaUserRepository;

	
	@Override
	public UserRegister addUser(UserRegister userRegister) {		
		return barberiaUserRepository.save(userRegister);
	}

	
	@Override
	public UserRegister login(UserRegister userRegister) {
		return barberiaUserRepository.findByEmailAndPassword(userRegister.getEmail(), userRegister.getPassword());
	}


	@Override
	public UserRegister findUserById(int userid) {
		return barberiaUserRepository.findById(userid).get();
	}


	@Override
	public List<UserRegister> getAllUser() {
		return barberiaUserRepository.findAll();
	}


	@Override
	public UserRegister findByEmail(String email) {
		return barberiaUserRepository.findByEmail(email);
	}


	@Override
	public UserRegister updateUserProfile(UserRegister userRegister) {
		Optional <UserRegister> update=barberiaUserRepository.findById(userRegister.getUserid());
		UserRegister ur=update.get();
		ur.setUserid(userRegister.getUserid());
		ur.setUname(userRegister.getUname());
		ur.setAddress(userRegister.getAddress());
		ur.setEmail(userRegister.getEmail());
		ur.setMobile(userRegister.getMobile());
		ur.setPassword(userRegister.getPassword());
		ur=barberiaUserRepository.save(ur);
		return ur;
	}
	
}
