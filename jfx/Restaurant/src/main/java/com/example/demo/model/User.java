package com.example.demo.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Table(name="Userc")
@Entity
public class User {
@Id
@Column(name="user_id")
@GeneratedValue
private long user_id;
@Column(name="USERNAME")
private String username;
@Column(name="PHONENUMBER")
private long phonenumber;
@Column(name="EMAILID")
private String emailid;
@Column(name="Password")
private String password;
public long getUser_id() {

	return user_id;
}
public void setUserId(long user_id) {
	this.user_id = user_id;
}
public String getUserName() {
	return username;
}
public void setFirstName(String username) {
	this.username = username;
}

public long getPhoneNumber() {
	return phonenumber;
}
public void setPhoneNumber(long phonenumber) {
	this.phonenumber=phonenumber;
}
public String getEmailId() {
	return emailid;
}
public void setEmailId(String emailid) {
	this.emailid=emailid;
}
public String getPass() {
	return password ;
}
public void setPassword(String password) {
	this.password=password;
}
public User(long user_id,String username,long phonenumber,String emailid,String password) {
	super();
	this.user_id = user_id;
	this.username = username;
	this.phonenumber=phonenumber;
	this.emailid=emailid;
	this.password = password;
}
public User()
{
	}
}

