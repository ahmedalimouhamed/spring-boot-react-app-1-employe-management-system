import React, { useState } from 'react'
import EmployeeService from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

export const AddEmployee = () => {

  const [employee, setEmployee] = useState({
    id: "",
    firstName: "",
    lastName: "",
    emailId: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setEmployee({...employee, [e.target.name]: value})
  }

  const saveEmployee = (e) => {
    e.preventDefault();
    console.log(employee);
    EmployeeService.saveEmployee(employee).then(response => {
      console.log(response);
      navigate("/employeeList");
    }).catch(error => {
      console.log(error);
    })
  }

  const clear = (e) => {
    e.preventDefault();
    setEmployee({
      id: "",
      firstName: "",
      lastName: "",
      emailId: ""
    })
  }

  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
          <h1>Add New Employee:</h1>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label for="firstName" className='block text-gray-600 text-sm font-normal'>First Name</label>
          <input name="firstName" id="firstName" type="text" value={employee.firstName} onChange={(e) => handleChange(e)} className="h-10 w-96 border mt-2 p-2" />
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label for="lastName" className='block text-gray-600 text-sm font-normal'>Last Name</label>
          <input name="lastName" id="lastName" type="text" value={employee.lastName} onChange={(e) => handleChange(e)} className="h-10 w-96 border mt-2 p-2" />
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label for="email" className='block text-gray-600 text-sm font-normal'>Email</label>
          <input name="emailId" id="email" type="email" value={employee.emailId} onChange={(e) => handleChange(e)} className="h-10 w-96 border mt-2 p-2" />
        </div>
        <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
          <button onClick={saveEmployee} className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6">Save</button>
          <button onClick={clear} className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6">Clear</button>
        </div>
      </div>
    </div>
  )
}