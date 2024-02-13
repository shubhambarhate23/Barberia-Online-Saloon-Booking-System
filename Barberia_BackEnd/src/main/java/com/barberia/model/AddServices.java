package com.barberia.model;

import javax.persistence.*;

@Entity(name = "addservices")
@Table(name = "addservices")
public class AddServices {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int asid;
	private int haircut;
	private int haircolour;
	private int cleanshave;
	private int trimbeard;
	private int beardshape;
	private int facescrub;
	private int facial;
	private int headmassage;
	private int bodymassage;
	@Column(name="shopno")
	private int shopno;
	
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "shopno",insertable = false,updatable = false)
	private RegisterShop registerShop;
		
	
	

	
	public AddServices() {
		super();
		// TODO Auto-generated constructor stub
	}





	public AddServices(int asid, int haircut, int haircolour, int cleanshave, int trimbeard, int beardshape,
			int facescrub, int facial, int headmassage, int bodymassage, int shopno, RegisterShop registerShop) {
		super();
		this.asid = asid;
		this.haircut = haircut;
		this.haircolour = haircolour;
		this.cleanshave = cleanshave;
		this.trimbeard = trimbeard;
		this.beardshape = beardshape;
		this.facescrub = facescrub;
		this.facial = facial;
		this.headmassage = headmassage;
		this.bodymassage = bodymassage;
		this.shopno = shopno;
		this.registerShop = registerShop;
	}





	public int getAsid() {
		return asid;
	}





	public void setAsid(int asid) {
		this.asid = asid;
	}





	public int getHaircut() {
		return haircut;
	}





	public void setHaircut(int haircut) {
		this.haircut = haircut;
	}





	public int getHaircolour() {
		return haircolour;
	}





	public void setHaircolour(int haircolour) {
		this.haircolour = haircolour;
	}





	public int getCleanshave() {
		return cleanshave;
	}





	public void setCleanshave(int cleanshave) {
		this.cleanshave = cleanshave;
	}





	public int getTrimbeard() {
		return trimbeard;
	}





	public void setTrimbeard(int trimbeard) {
		this.trimbeard = trimbeard;
	}





	public int getBeardshape() {
		return beardshape;
	}





	public void setBeardshape(int beardshape) {
		this.beardshape = beardshape;
	}





	public int getFacescrub() {
		return facescrub;
	}





	public void setFacescrub(int facescrub) {
		this.facescrub = facescrub;
	}





	public int getFacial() {
		return facial;
	}





	public void setFacial(int facial) {
		this.facial = facial;
	}





	public int getHeadmassage() {
		return headmassage;
	}





	public void setHeadmassage(int headmassage) {
		this.headmassage = headmassage;
	}





	public int getBodymassage() {
		return bodymassage;
	}





	public void setBodymassage(int bodymassage) {
		this.bodymassage = bodymassage;
	}





	public int getShopno() {
		return shopno;
	}





	public void setShopno(int shopno) {
		this.shopno = shopno;
	}





	public RegisterShop getRegisterShop() {
		return registerShop;
	}





	public void setRegisterShop(RegisterShop registerShop) {
		this.registerShop = registerShop;
	}
	
}
