package com.fullstack.controller;

import com.fullstack.dto.LoginRequest;
import com.fullstack.entity.Employee;
import com.fullstack.service.IEmployeeService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")

@RestController
@RequiredArgsConstructor
@RequestMapping("/employees")
@Slf4j
public class EmployeeController {

    private final IEmployeeService employeeService;

    @PostMapping("/save")
    public ResponseEntity<Employee> save(@RequestBody @Valid Employee employee)
    {
        log.info("@@@@@@@@@@@@@@@@Trying to SignUp for employee"+employee.getEmpName());
        return new ResponseEntity<>(employeeService.signUp(employee), HttpStatus.CREATED);
    }

    @PostMapping("signin")
    public ResponseEntity<Boolean> signIn(@RequestBody LoginRequest loginRequest)
    {
        return new ResponseEntity<>(employeeService.signIn(loginRequest.empEmailId(),loginRequest.empPassword()),HttpStatus.CREATED);
    }




}
