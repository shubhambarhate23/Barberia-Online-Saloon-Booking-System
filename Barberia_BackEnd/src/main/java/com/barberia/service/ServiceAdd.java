package com.barberia.service;

import java.util.List;
import com.barberia.model.AddServices;

public interface ServiceAdd {
	public AddServices addService(AddServices addServices);
	
	public List<AddServices>getAllService();
	
	public AddServices getServiceById(int shopno);
	
	public List<AddServices>findByShopno(int shopno);
	
	public AddServices updatePrice(AddServices addServices);

}
