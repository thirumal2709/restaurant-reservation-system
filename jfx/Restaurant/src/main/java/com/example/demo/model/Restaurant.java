package com.example.demo.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Table(name="Restaurant")
@Entity
public class Restaurant {
@Id
@Column(name="Rest_id")
@GeneratedValue
private long Rest_id;
@Column(name="NAME")
private String name;
@Column (name="Address")
private String Address;
@Column(name="PHONENUMBER")
private long phonenumber;

public long getRest_id() {

	return Rest_id;
}
public void setRestid(long Rest_id) {
	this.Rest_id = Rest_id;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}

public long getPhoneNumber() {
	return phonenumber;
}
public void setPhoneNumber(long phonenumber) {
	this.phonenumber=phonenumber;
}
public String getAddress() {
	return Address;
}
public void setAddress(String Address) {
	this.Address=Address;
}

public Restaurant(long Rest_id,String name,long phonenumber,String Address) {
	super();
	this.Rest_id = Rest_id;
	this.name = name;
	this.phonenumber=phonenumber;
	this.Address=Address;
	
}
public Restaurant()
{
	}
}

