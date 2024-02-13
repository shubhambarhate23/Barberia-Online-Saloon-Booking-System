package com.barberia.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.barberia.model.Admin;

@Repository
public interface AdminRepository extends JpaRepository<Admin,Integer> {
	
	@Query("from admin p where p.password=:password")
	List<Admin> getAdminByPassword(String password);
}
