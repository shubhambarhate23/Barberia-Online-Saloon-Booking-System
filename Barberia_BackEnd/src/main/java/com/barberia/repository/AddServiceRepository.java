package com.barberia.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.barberia.model.AddServices;

@Repository
public interface AddServiceRepository extends JpaRepository<AddServices,Integer> {
		
	@Query("SELECT u from addservices u where u.shopno=?1")
	List<AddServices> findByShopno(@Param("shopno") int shopno);
	
	@Query("SELECT u from addservices u where u.asid=?1")
	List<AddServices> getByAsid(@Param("asid") int asid);
	
}










//"SELECT u from addservices u where u.shopno =:shopno"
