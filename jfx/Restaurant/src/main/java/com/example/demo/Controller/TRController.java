package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Service.TRService;

import com.example.demo.model.TableReservation;

@RestController
public class TRController {
	@Autowired
	private TRService trservice;

	@GetMapping("/gettr")
	public List<TableReservation> getDetails(){
		return trservice.getAllDetails();
		
	}
	@PostMapping("/addtr")
	public TableReservation postDetails(@RequestBody TableReservation tr) {
		return trservice.saveDetails(tr);
	}
	@DeleteMapping("/delete/{Table_id}")
	public String delete(@PathVariable long Table_id) {
		 trservice.deleteDepartmentById(Table_id);
		 return "Deleted";
	}
	@PutMapping("/updatetr/{Table_id}")
	public TableReservation update(@PathVariable long Table_id,@RequestBody TableReservation tr) {
	return trservice.update(Table_id,tr);
	}


}
