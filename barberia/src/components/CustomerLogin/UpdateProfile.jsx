import React,{useState,useEffect} from 'react'
import { useForm } from 'react-hook-form'
import { FaUserAlt } from "react-icons/fa";
import { FcApproval } from "react-icons/fc";
import UserService from '../../Services/UserService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function UpdateProfile() {

    const{register,handleSubmit}=useForm()
    const sendData=(e)=>{
          UserService.updateUser(e)
          //console.log(e)
         toast.success("Data Updated Succesfully")
    }

    const updateService=()=>{
      var email=localStorage.getItem('email');
      UserService.getUserByEmail(email).then(
          (Response)=>{
             // console.log(Response.data)
              setData(Response.data)
          },
          (Error)=>{
              console.log(Error);
          }
      ) ; 
    };
    
    const[data,setData]=useState([]);
    console.log(data)
    useEffect (()=>{
      updateService();
    },[]);
    
  return (
    <div className='profile'>
    <nav class="navbar navbar-expand-sm bg-* ">
   <div class="container-fluid">
     <a class="navbar-brand text-dark " href="/">Barberia</a>
     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span class="navbar-toggler-icon"></span>
     </button>
     <div class="collapse navbar-collapse" id="navbarSupportedContent">
       <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
         <li class="nav-item">
           <a class="nav-link  active" href="/Login"></a>
         </li> <li class="nav-item">
         <li class="nav-item">
           <a class="nav-link  active" href="/UserProfile"><p className='text-dark fw-bold'><FaUserAlt/>&nbsp;&nbsp;{data.uname} <FcApproval/></p></a>
         </li>
           <a class="nav-link  active" href="/UserProfile"></a>
         </li> <li class="nav-item">
           <a class="nav-link  active" href="/UserProfile"><p className='text-dark'>Back </p></a>
         </li>
         
       </ul>
     </div>
   </div>
 </nav>


 <div>
<hr/>
<div className="container">


<form className='p-0 overflow-hidden h-100 shadow me-5' onSubmit={handleSubmit(sendData)}>
<label className='mt-5'><b>User ID</b></label>
<input type="text" {...register('userid')} value={data.userid} readOnly/><br/><br/>
<label className='mt-3'><b>Name</b></label>
<input type="text" {...register('uname')} value={data.uname} readOnly/><br/><br/>

<label className='mt-3'><b>Email ID</b></label>
<input type="text" {...register('email')} value={data.email} readOnly/><br/><br/>
<label className='mt-3'><b>Password</b></label>
<input type="text" {...register('password')} placeHolder={data.password} /><br/><br/>

<label className='mt-3'><b>Mobile Number</b></label>
<input type="text" {...register('mobile')} value={data.mobile} readOnly/><br/><br/>

<label className='mt-3'><b>Address</b></label>
<input type="text" {...register('address')} value={data.address} readOnly/><br/><br/>



<hr/>

<input type="submit" className='btn btn-warning mt-5 mb-5' value={"Update"}/>



</form>
</div>
</div>
<hr/>
<hr className='mt-3'/>
<ToastContainer position="top-center"/>
</div>
  )
}




