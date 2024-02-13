package com.barberia.service;

import java.util.List;

import com.barberia.model.Order;

public interface OrderService {
	
	public Order addOrder(Order order);

	public List<Order> getAllOrder();

	Iterable<Order> viewOrderUr(int user_id);

	Iterable<Order> viewOrderSr(int shop_no);
	
	
}
