package com.example.employee.services;

import com.example.employee.models.Employee;

import java.util.List;

public interface IEmployeeService {
    Employee createEmployee(Employee employee);

    List<Employee> getAllEmployees();

    boolean deleteEmployee(Long id);

    Employee getEmployeeById(long id);

    Employee updateEmployee(long id, Employee employee);
}
