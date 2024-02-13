package com.barberia.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.barberia.model.Order;

@Repository
public interface OrderRepository extends JpaRepository<Order,Integer>{
				
	@Query("from order p where p.user_id=:user_id")
	Iterable<Order>getOrderUr(int user_id);
	
	@Query("from order p where p.shop_no=:shop_no")
	Iterable<Order>getOrderSr(int shop_no);
}
