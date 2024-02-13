package com.barberia.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.barberia.model.RegisterShop;

@Repository
public interface BarberiaRepository extends JpaRepository<RegisterShop, Integer> {
	RegisterShop findByEmailAndPassword(String email, String password);
	
	@Query("from Registershop p where p.password=:password")
	List<RegisterShop> getShop(String password);
	
//	@Query("SELECT u from Registershop u where u.email=email")
//	List<RegisterShop> findByEmail(@Param("email") String email);
	
	public RegisterShop findByEmail(String email);
}
