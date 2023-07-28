package com.example.demo.Database;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.model.Restaurant;

public interface RestaurantRepo extends JpaRepository<Restaurant,Long> {

}
