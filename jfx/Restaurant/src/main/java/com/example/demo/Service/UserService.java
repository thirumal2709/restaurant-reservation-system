package com.example.demo.Service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Database.UserRepo;
import com.example.demo.model.User;
@Service
public class UserService {
	@Autowired
	   private UserRepo use;
	public User saveDetails(User a) {

		return use.save(a);
			
	}
	public List<User> getAllDetails()
	{
		return use.findAll();
	}
	public void deleteDepartmentById(long User_id)
	{
		use.deleteById(User_id);
	}
	public User update(long User_id,User a) {
	return use.save(a);	
	}
}
