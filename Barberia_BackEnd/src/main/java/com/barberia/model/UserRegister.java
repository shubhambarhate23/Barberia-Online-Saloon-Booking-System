package com.barberia.model;


import javax.persistence.*;

@Entity(name = "UserRegister")
@Table(name = "UserRegister")
public class UserRegister {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int userid;
	private String uname;
	private String email;
	private long mobile;
	private String password;
	private String address;
	
	@OneToOne(cascade = CascadeType.ALL)
	private Admin admin;

	@OneToOne(cascade = CascadeType.ALL)
	private RegisterShop registerShop;
	
	
	
	public UserRegister() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
	public UserRegister(int userid, String uname, String email, long mobile, String password, String address) {
		super();
		this.userid = userid;
		this.uname = uname;
		this.email = email;
		this.mobile = mobile;
		this.password = password;
		this.address = address;
	}
	public int getUserid() {
		return userid;
	}
	public void setUserid(int userid) {
		this.userid = userid;
	}
	public String getUname() {
		return uname;
	}
	public void setUname(String uname) {
		this.uname = uname;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
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
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
}
