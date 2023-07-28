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
import com.example.demo.Service.RestaurantService;
import com.example.demo.model.Restaurant;

@RestController
public class RestaurantController {
	@Autowired
	private RestaurantService resservice;

	@GetMapping("/getres")
	public List<Restaurant> getDetails(){
		return resservice.getAllDetails();
		
	}
	@PostMapping("/addres")
	public Restaurant postDetails(@RequestBody  Restaurant r) {
		return resservice.saveDetails(r);
	}
	@DeleteMapping("/delete/{Rest_id}")
	public String delete(@PathVariable long Rest_id) {
		 resservice.deleteDepartmentById(Rest_id);
		 return "Deleted";
	}
	@PutMapping("/updateres/{Rest_id}")
	public Restaurant update(@PathVariable long Rest_id,@RequestBody Restaurant r) {
	return resservice.update(Rest_id,r);
	}


}
