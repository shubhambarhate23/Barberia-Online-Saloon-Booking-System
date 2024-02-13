package com.barberia.service;

import java.util.List;

import com.barberia.model.Admin;

public interface AdminService {
	
	public List<Admin>getAllAdmin();
	
	public void deleteUsr(int userid);
	
	public void deleteService(int shopno);
	
}	
