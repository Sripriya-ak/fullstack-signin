package com.fullstack.entity;


import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Range;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="employees")
public class Employee {
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Long empId;

   @Size(min=2,message="Employee Name at least 2 character")
   private String empName;

   @NotBlank(message="Employee Address should not be null and blank")
   private String empAddress;

   private double empSalary;

   @Range(min=1000000000L,max=9999999999L,message = "Contact Number must be 10 degits")
   private long empContactNumber;

   private LocalDate empDob;

   @Email(message="Email id should be valid")
   private String empEmailId;

   @Size(min=4,message="Password should be at least 4 character")
   private String empPassword;
}
