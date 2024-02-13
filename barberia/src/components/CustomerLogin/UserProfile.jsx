import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { RiLogoutCircleRLine } from "react-icons/ri";
import UserService from '../../Services/UserService';
import { FaUserAlt } from "react-icons/fa";
import '../Shop/ShopProfile.css';
import { FcApproval } from "react-icons/fc";

const UserProfile = () => {
  const [profile,setProfile]=useState([]);
  const userid=localStorage.setItem("userid",profile.userid);
  localStorage.setItem("mobile",profile.mobile);
  const logOut=()=>{
    localStorage.clear();
    window.location.reload();
  }
  
  const getProfile=()=>{
    var email=localStorage.getItem('email');
    UserService.getUserByEmail(email)
    .then((response)=>{setProfile(response.data)})
    .catch((error)=>{
      console.log(error)
      
    })
  }

  
  useEffect(()=>{
    getProfile();
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
                <a class="nav-link  active" href="/UserProfile"><p className='text-dark fw-bold'><FaUserAlt/>&nbsp;&nbsp;{profile.uname} <FcApproval/></p></a>
              
              </li>
              <li class="nav-item">
                <a class="nav-link  active" href="/FrontPage"><p className='text-dark'>View Services </p></a>
              </li>
              <li class="nav-item">
                <a class="nav-link  active" href="/FrontPage"><p className='text-dark'>Back </p></a>
              </li> 
              <li class="nav-item">
                <a class="nav-link  active" href="/UpdateProfile"><p className='text-dark'>Update </p></a>
              </li>
              <li class="nav-item">
                <a class="nav-link  active" href="/"><p className='text-dark' onClick={logOut}>Logout&nbsp;&nbsp;<RiLogoutCircleRLine/></p></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>



      
      <div className="card mt-5 p-0 overflow-hidden h-100 shadow me-5">
        <div className="card-header text-success"><h1>Profile</h1></div>
      </div>
      <div className="container mt-5 p-0 overflow-hidden h-100 shadow me-5">
        <div className="row">
          <div className="col-sm-10">
            <div className="row">
              <div className="col-sm-6">
                <label> Name :</label>
                <h4>{profile.uname}</h4>
              </div>
              <div className="col-lg-6 input-area">
                <label>Email ID :</label>
                <h4>{profile.email}</h4>
              </div>
              <div className="col-lg-6 input-area">
                <label>Password :</label>
                <h4>{profile.password}</h4>
              </div>
              <div className="col-lg-6 input-area mt-4">
                <label>Mobile Number :</label>
                <h4>{profile.mobile}</h4>
              </div>
              <div className="col-lg-6 input-area">
                <label>Address :</label>
                <h4>{profile.address}</h4>
              </div>
            </div>
          </div>
        </div>
    </div>
    </div>
  )
}

export default UserProfile