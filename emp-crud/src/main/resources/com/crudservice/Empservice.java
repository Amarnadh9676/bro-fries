package com.crud.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.crud.entity.Emp;
import com.crud.repository.EmpRepository;

@Service

public class EmpService {
	
	@Autowired
	private EmpRepository repo;
	
	//adding data into db
	public Emp addEmp(Emp e) {
		return repo.save(e);
	}

}