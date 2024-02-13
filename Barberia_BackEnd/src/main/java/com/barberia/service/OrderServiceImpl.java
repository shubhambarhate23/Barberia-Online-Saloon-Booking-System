package com.barberia.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.barberia.model.Order;
import com.barberia.repository.OrderRepository;

@Service
public class OrderServiceImpl implements OrderService{
	
	@Autowired
	private OrderRepository orderRepository;

	@Override
	public Order addOrder(Order order) {
		return orderRepository.save(order);
	}

	@Override
	public List<Order> getAllOrder() {
		return orderRepository.findAll();
	}
	
	@Override
    public Iterable<Order> viewOrderUr(int user_id) {
        // TODO Auto-generated method stub
        return orderRepository.getOrderUr(user_id);
    }
    
    @Override
    public Iterable<Order> viewOrderSr(int shop_no) {
        // TODO Auto-generated method stub
        return orderRepository.getOrderSr(shop_no);
    }
	
	
	
	
}
