package com.example.demo.Service;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Database.RestaurantRepo;
import com.example.demo.model.Restaurant;
@Service
public class RestaurantService {
	@Autowired
	   private RestaurantRepo rev;
	public Restaurant saveDetails(Restaurant r) {

		return rev.save(r);
			
	}
	public List<Restaurant> getAllDetails()
	{
		return rev.findAll();
	}
	public void deleteDepartmentById(long Rest_id)
	{
		rev.deleteById(Rest_id);
	}
	public Restaurant update(long Rest_id,Restaurant r) {
	return rev.save(r);	
	}


}
