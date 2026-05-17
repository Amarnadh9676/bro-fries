package com.crud.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.crud.Emp;
import com.crud.service.EmpService;

@RestController
@RequestMapping("/api/emp")

public class EmpController {
	@Autowired
	private EmpService service;
	
	@PostMapping("/add")
	public Emp add(@RequestBody Emp e) {
		return service.addEmp(e);
	}
}