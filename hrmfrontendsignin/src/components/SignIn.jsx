import axios from 'axios';
import React from 'react'
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {

    let navigate=useNavigate();

   const[employees,setEmployees]=useState({         
         empEmailId: "",
         empPassword: ""

});

  const{empEmailId,empPassword}=employees;

  const onSubmitChange=(e)=>{
    setEmployees({...employees,[e.target.name]: e.target.value});
  }


  const onSubmit=async(e)=>{

    e.preventDefault();
   

   try {
    const result = await axios.post("http://localhost:8080/employees/signin", employees);
    if (result.data) {
      navigate('/show');
    }
  } catch (err) {
    alert("Invalid Credentials..Please try one more time");
    navigate('/');
  }

   

  }



  return (
    <div>

        <form onSubmit={(e)=>onSubmit(e)}>
      

      <div>

       EmailId<input  type='email' name='empEmailId' value={empEmailId} onChange={(e)=> onSubmitChange(e)}/>
      </div>

      <div>

       Password<input  type='password' name='empPassword' value={empPassword} onChange={(e)=> onSubmitChange(e)}/>
      </div>       

       <button type='submit' className='btn btn-success'>SignIn</button>

       <button type='submit' className='btn btn-danger'>Cancel</button>

       </form>

    </div>
  )
}

export default SignIn
