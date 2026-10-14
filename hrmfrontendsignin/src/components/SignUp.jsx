import axios from 'axios';
import React from 'react'
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

    let navigate=useNavigate();

   const[employees,setEmployees]=useState({

         empName: "",
         empAddress: "",
         empSalary: "",
         empContactNumber: "",
         empDob: "",
         empEmailId: "",
         empPassword: ""

});

  const{empName,empAddress,empSalary,empContactNumber,empDob,empEmailId,empPassword}=employees;

  const onSubmitChange=(e)=>{
    setEmployees({...employees,[e.target.name]: e.target.value});
  }


  const onSubmit=async(e)=>{

    e.preventDefault();
    await axios.post("http://localhost:8080/employees/save",employees);

    alert("Data SignUp Successfully");

    navigate('/signin');
  }



  return (
    <div>

        <form onSubmit={(e)=>onSubmit(e)}>
      <div>

       Name<input  type='text' name='empName' value={empName} onChange={(e)=> onSubmitChange(e)}/>
      </div>

      <div>

       Address<input  type='text' name='empAddress' value={empAddress} onChange={(e)=> onSubmitChange(e)}/>
      </div>

      <div>

       Salary<input  type='number' name='empSalary' value={empSalary} onChange={(e)=> onSubmitChange(e)}/>
      </div>
      
      <div>

       ContactNumber<input  type='number' name='empContactNumber' value={empContactNumber} onChange={(e)=> onSubmitChange(e)}/>
      </div>

      <div>

       DOB<input  type='date' name='empDob' value={empDob} onChange={(e)=> onSubmitChange(e)}/>
      </div>

      <div>

       EmailId<input  type='email' name='empEmailId' value={empEmailId} onChange={(e)=> onSubmitChange(e)}/>
      </div>

      <div>

       Password<input  type='password' name='empPassword' value={empPassword} onChange={(e)=> onSubmitChange(e)}/>
      </div>       

       <button type='submit' className='btn btn-success'>SignUp</button>

       <button type='submit' className='btn btn-danger'>Cancel</button>

       </form>

    </div>
  )
}

export default SignUp
