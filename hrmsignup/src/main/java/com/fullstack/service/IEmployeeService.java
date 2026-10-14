package com.fullstack.service;

import com.fullstack.entity.Employee;
import org.springframework.http.HttpStatusCode;

public interface IEmployeeService {

    Employee signUp(Employee employee);


    Boolean signIn(String empEmailId, String empPassword);
}
