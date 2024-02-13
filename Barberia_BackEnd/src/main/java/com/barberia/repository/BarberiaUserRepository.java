package com.barberia.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.barberia.model.AddServices;
import com.barberia.model.UserRegister;
@Repository
public interface BarberiaUserRepository extends JpaRepository<UserRegister, Integer>{
	UserRegister findByEmailAndPassword(String email, String password);
	
	
	@Query("from UserRegister p where p.password=:password")
	List<UserRegister> getUser(String password);
	
	
	public UserRegister findByEmail(String email);
	
	@Query("SELECT u from UserRegister u where u.userid=?1")
	List<AddServices> getByUserid(@Param("userid") int userid);
}
