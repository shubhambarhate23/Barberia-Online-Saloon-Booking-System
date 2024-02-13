package com.barberia.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.barberia.model.Order;
import com.barberia.service.OrderServiceImpl;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api/v4/")
public class OrderController {

	@Autowired
	private OrderServiceImpl orderServiceImpl;
	
	@PostMapping("/addOrder")
	public ResponseEntity<Order>addOrder(@RequestBody Order order){
		return new ResponseEntity<Order>(orderServiceImpl.addOrder(order),HttpStatus.CREATED);
	}
	
	@GetMapping("/getAllOrder")
	public ResponseEntity<List<Order>>getAllOrder(){
		return new ResponseEntity<List<Order>>(orderServiceImpl.getAllOrder(),HttpStatus.OK);
	}
	
	
	
	@GetMapping("/orderur/{user_id}")
    public Iterable<Order> getFeedbackCr(@PathVariable("user_id") int userid )
    {
        return orderServiceImpl.viewOrderUr(userid);
    }
    
    @GetMapping("/ordersr/{shop_no}")
    public Iterable<Order> getFeedbackSr(@PathVariable("shop_no") int shopno )
    {
        return orderServiceImpl.viewOrderSr(shopno);
    }
	
    
	
	
	
	
	
	
}
