package com.barberia.model;

import javax.persistence.*;

@Entity (name = "Registershop")
@Table(name = "Registershop")
public class RegisterShop {
	
	@Id
	private int shopno;
	private String rname;
	private String shopname;
	private long mobile;
	private String password;
	private String city;
	private String address;
	@Column(unique = true )
	private String email;
	
	
	@OneToOne(cascade = CascadeType.ALL)
	private UserRegister userRegister;
	
	
	
	
	public RegisterShop() {
		super();
	}







	public RegisterShop(int shopno, String rname, String shopname, long mobile, String password, String city,
			String address, String email) {
		super();
		this.shopno = shopno;
		this.rname = rname;
		this.shopname = shopname;
		this.mobile = mobile;
		this.password = password;
		this.city = city;
		this.address = address;
		this.email = email;
	}







	public int getShopno() {
		return shopno;
	}







	public void setShopno(int shopno) {
		this.shopno = shopno;
	}







	public String getRname() {
		return rname;
	}







	public void setRname(String rname) {
		this.rname = rname;
	}







	public String getShopname() {
		return shopname;
	}







	public void setShopname(String shopname) {
		this.shopname = shopname;
	}







	public long getMobile() {
		return mobile;
	}







	public void setMobile(long mobile) {
		this.mobile = mobile;
	}







	public String getPassword() {
		return password;
	}







	public void setPassword(String password) {
		this.password = password;
	}







	public String getCity() {
		return city;
	}







	public void setCity(String city) {
		this.city = city;
	}







	public String getAddress() {
		return address;
	}







	public void setAddress(String address) {
		this.address = address;
	}







	public String getEmail() {
		return email;
	}







	public void setEmail(String email) {
		this.email = email;
	}


	

}
