import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react'
import '../components/Home.css';
import UserService from '../Services/UserService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SignUp = () => {

    const [message,setMessage]=useState("");
    const [user,setUser]=useState({
        uname:"",
        email:"",
        mobile:"",
        password:"",
        address:""
    })

    const handleChange=(e)=>{
        const value=e.target.value
        setUser({...user,[e.target.name]:value})
    }

    const saveUser=(e)=>{
        if(user.address.length===0){toast.error("Please enter address")}
        else if(user.password.length===0){ toast.error("Please enter password")}
        else if(user.email.length===0){toast.error("Please enter email")}
        else if(user.mobile.length===0){toast.error("Please enter mobile")}
        else if(user.uname.length===0){toast.error("Please enter name")}
        else{
       UserService.addUser(user)
       .then((response)=>{setMessage("Sign up seccuessfull")})
       .catch((error)=>{console.log(error)})
    }
}
    const handleReset=()=>{
        setUser({
            uname:"",
            email:"",
            mobile:"",
            password:"",
            address:""
        })
    }

    

  return (
    <div className='ur'>
        <Navbar/>
        <div className="container mt-5">
                <div className="row">
                    <div className="col-md-3 offset-md-10 mt-5">
                        <div className="card mt-5">
                            <div className="card-header text-center fs-3 text-success">Sign Up Here
                            {
                               message && <p className='text-success'>{message}</p> 
                            }
                            </div>
                                <div className="card-body">
                                <div className="mb-3">
                                    <label>Name</label>
                                    <input type="text" className='form-control' name='uname'
                                    value={user.uname}  onChange={(e)=>handleChange(e)}/>
                                </div>
                                <div className="mb-3">
                                    <label>Email</label>
                                    <input type="email" className='form-control' name='email' 
                                    value={user.email} onChange={(e)=>handleChange(e)}/>
                                </div>
                                <div className="mb-3">
                                    <label>Mobile Number</label>
                                    <input type="text" className='form-control' name='mobile' 
                                    value={user.mobile} onChange={(e)=>handleChange(e)}/>
                                </div>
                                <div className="mb-3">
                                    <label>Password</label>
                                    <input type="password" className='form-control' name='password'
                                    value={user.password} id="pa" onChange={(e)=>handleChange(e)}/>
                                </div>
                                <div className="mb-3">
                                    <label>Confirm Password</label>
                                    <input type="password" id="cpa" className='form-control' name='cpassword'/>
                                </div>
                                <div className="mb-3">
                                    <label>Address</label>
                                    <input type="text" className='form-control' name='address'
                                    value={user.address} onChange={(e)=>handleChange(e)}/>
                                </div>
                                <div className="text-center">
                                    <button className="btn btn-success me-2" onClick={saveUser}>Register</button>
                                    <button type='reset' className="btn btn-danger me-2" onClick={handleReset}>Reset</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer position="top-center"/>    
    </div>
    
  )
}

export default SignUp