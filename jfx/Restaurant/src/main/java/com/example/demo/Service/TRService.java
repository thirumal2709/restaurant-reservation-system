package com.example.demo.Service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Database.TrRepo;

import com.example.demo.model.TableReservation;

@Service
public class TRService {
	@Autowired
	   private TrRepo tre;
	public TableReservation saveDetails(TableReservation tr) {

		return tre.save(tr);
			
	}
	public List<TableReservation> getAllDetails()
	{
		return tre.findAll();
	}
	public void deleteDepartmentById(long Table_id)
	{
		tre.deleteById(Table_id);
	}
	public TableReservation update(long Table_id,TableReservation tr) {
	return tre.save(tr);	
	}


}
