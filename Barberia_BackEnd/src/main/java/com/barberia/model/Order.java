package com.barberia.model;

import java.sql.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity(name = "order")
@Table(name = "order")
public class Order {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int orderid;
	private int price;
	private String email;
	private String address;
	private String name;
	private String city;
	private long mobile;
	private Date date;
	@Column(name = "shopno")
	private int shop_no;
	@Column(name = "userid")
	private int user_id;
	
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="shopno",insertable =false,updatable = false)
	private RegisterShop shopno;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "userid", insertable = false,updatable = false)
	private UserRegister userid;

	public Order() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Order(int orderid, int price, String email, String address, String name, String city, long mobile, Date date,
			int shop_no, int user_id, RegisterShop shopno, UserRegister userid) {
		super();
		this.orderid = orderid;
		this.price = price;
		this.email = email;
		this.address = address;
		this.name = name;
		this.city = city;
		this.mobile = mobile;
		this.date = date;
		this.shop_no = shop_no;
		this.user_id = user_id;
		this.shopno = shopno;
		this.userid = userid;
	}

	public int getOrderid() {
		return orderid;
	}

	public void setOrderid(int orderid) {
		this.orderid = orderid;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public long getMobile() {
		return mobile;
	}

	public void setMobile(long mobile) {
		this.mobile = mobile;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public int getShop_no() {
		return shop_no;
	}

	public void setShop_no(int shop_no) {
		this.shop_no = shop_no;
	}

	public int getUser_id() {
		return user_id;
	}

	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}

	public RegisterShop getShopno() {
		return shopno;
	}

	public void setShopno(RegisterShop shopno) {
		this.shopno = shopno;
	}

	public UserRegister getUserid() {
		return userid;
	}

	public void setUserid(UserRegister userid) {
		this.userid = userid;
	}

}
