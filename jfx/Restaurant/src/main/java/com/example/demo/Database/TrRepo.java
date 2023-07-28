package com.example.demo.Database;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.TableReservation;

public interface TrRepo extends JpaRepository<TableReservation,Long>{

}
