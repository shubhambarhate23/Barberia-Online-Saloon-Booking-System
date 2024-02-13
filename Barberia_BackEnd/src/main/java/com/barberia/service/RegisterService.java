package com.barberia.service;

import java.util.List;

import com.barberia.model.RegisterShop;

public interface RegisterService {
	
	public RegisterShop addShop(RegisterShop registerShop);
	
	public List<RegisterShop> viewProfile();
	
	public RegisterShop getShopById(int shopno);
	
	public RegisterShop updateShopProfile(RegisterShop registerShop);
	
	public RegisterShop login(RegisterShop registerShop);
	
 
	public RegisterShop findByEmail(String email);
}
