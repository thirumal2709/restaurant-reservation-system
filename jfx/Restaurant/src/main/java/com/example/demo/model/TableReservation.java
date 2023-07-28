package com.example.demo.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Table(name="TableReservation")
@Entity
public class TableReservation {
@Id
@Column(name="Table_id")
@GeneratedValue
private long Table_id;
@Column(name="TABLENAME")
private String Tablename;
@Column(name="RESTAURANTNAME")
private String Restaurantname;
 long getTable_id() {

	return Table_id;
}
public void setStudid(long Table_id) {
	this.Table_id = Table_id;
}
public String getTableName() {
	return Tablename;
}
public void setTableName(String Tablename) {
	this.Tablename = Tablename;
}

public String getRestaurantName() {
	return Restaurantname;
}
public void setRestaurantName(String Restaurantname) {
	this.Restaurantname=Restaurantname;
}

public TableReservation(long Table_id,String Tablename,String Restaurantname) {
	super();
	this.Table_id = Table_id;
	this.Tablename = Tablename;
	this.Restaurantname = Restaurantname;
	
}
public TableReservation()
{
	}
}
