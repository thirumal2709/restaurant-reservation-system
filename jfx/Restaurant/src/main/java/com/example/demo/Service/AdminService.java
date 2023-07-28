package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Database.AdminRepo;
import com.example.demo.model.Admin;

@Service
public class AdminService {
	@Autowired
	private AdminRepo adm;
	public Admin saveDetails(Admin a) {

		return adm.save(a);
			
	}
	public List<Admin> getAllDetails()
	{
		return adm.findAll();
	}
	public void deleteDepartmentById(long Admin_id)
	{
		adm.deleteById(Admin_id);
	}
	public Admin update(int  adm_id,Admin a) {
	return adm.save(a);	
	}

}
