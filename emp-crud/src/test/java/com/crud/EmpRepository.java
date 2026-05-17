package com.crud;

import org.springframework.data.jpa.repository.JpaRepository;

import com.crud.entity.Emp;

public interface EmpRepository extends JpaRepository<Emp, Long> {

	
}