package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Service.AdminService;
import com.example.demo.model.Admin;

@RestController
@CrossOrigin("*")
@RequestMapping("/admin")
public class AdminController{
	@Autowired
	private AdminService admservice;

	@GetMapping("/getadm")
	public List<Admin> getDetails(){
		return admservice.getAllDetails();
		
	}
	@PostMapping("/addadm")
	public Admin postDetails(@RequestBody Admin a) {
		return admservice.saveDetails(a);
	}
	@DeleteMapping("/delete/{Admin_id}")
	public String delete(@PathVariable int Admin_id) {
		 admservice.deleteDepartmentById(Admin_id);
		 return "Deleted";
	}
	@PutMapping("/updateadm/{Admin_id}")
	public Admin update(@PathVariable int Admin_id,@RequestBody Admin a) {
	return admservice.update(Admin_id,a);
	}
            
}
