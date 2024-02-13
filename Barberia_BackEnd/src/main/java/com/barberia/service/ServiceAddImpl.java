package com.barberia.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.barberia.model.AddServices;
import com.barberia.repository.AddServiceRepository;


@Service
public class ServiceAddImpl implements ServiceAdd {

	@Autowired
	private AddServiceRepository addServiceRepository;
	
	@Override
	public AddServices addService(AddServices addServices) {
		return addServiceRepository.save(addServices);
	}

	@Override
	public List<AddServices> getAllService() {
		return addServiceRepository.findAll();
	}

	@Override
	public AddServices getServiceById(int shopno) {
		return addServiceRepository.findById(shopno).get();
	}

	@Override
	public List<AddServices> findByShopno(int shopno) {
		return addServiceRepository.findByShopno(shopno);
	}

	@Override
	public AddServices updatePrice(AddServices addServices) {

	     Optional<AddServices> addService=addServiceRepository.findById(addServices.getAsid());
	     AddServices as= addService.get();
	     
	    as.setAsid(addServices.getAsid());
	    as.setBeardshape(addServices.getBeardshape());
		as.setBodymassage(addServices.getBodymassage());
		as.setCleanshave(addServices.getCleanshave());
		as.setFacescrub(addServices.getFacescrub());
		as.setFacial(addServices.getFacial());
		as.setHaircolour(addServices.getHaircolour());
		as.setHaircut(addServices.getHaircut());
		as.setHeadmassage(addServices.getHeadmassage());
		as.setTrimbeard(addServices.getTrimbeard());
		as.setShopno(addServices.getShopno());
		as=addServiceRepository.save(as);
		return as;
	}

	
	

	
	
	
	
	
	
	
	
	

}
