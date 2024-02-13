import React, { useEffect } from 'react'
import { useState } from 'react'
import './ShopProfile.css';
import { FcApproval } from "react-icons/fc";
import { FaUserAlt } from "react-icons/fa";
import RegisterService from '../../Services/RegisterService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ShopProfile() {

  const [profile,setProfile]=useState([]);
  localStorage.setItem("shopno",profile.shopno)
  const logOut=()=>{
    localStorage.clear();
    window.location.reload();
  }


    const getProfile=()=>{
      var email=localStorage.getItem('email');
      RegisterService.getShopByEmail(email)
      .then((response)=>{setProfile(response.data)})
      .catch((error)=>{
        console.log(error)
        
      })
    }
  
    
    useEffect(()=>{
      toast.success("Log in successfull")
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
              </li>
              <li class="nav-item">
                <a class="nav-link  active" href="/UserProfile"><p className='text-dark fw-bold'><FaUserAlt/>&nbsp;&nbsp;{profile.rname} <FcApproval/></p></a>
              </li>
              <li class="nav-item">
                <a class="nav-link  active" href='/ViewOrder'><p className='text-dark'>View Order's</p></a>
              </li>
              <li class="nav-item">
                <a class="nav-link  active" href='/UpdateShop'><p className='text-dark'>Update Profile</p></a>
              </li>
              <li class="nav-item">
                <a class="nav-link  active" href={'/ViewService/'+profile.shopno}><p className='text-dark'>View Services</p></a>
              </li>
              <li class="nav-item">
                <a class="nav-link  active" href="/"><p className='text-dark' onClick={logOut}>Logout</p></a>
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
                <label>Show Owner Name :</label>
                <h4>{profile.rname}</h4>
              </div>
              <div className="col-lg-6 input-area">
                <label>Shop Name :</label>
                <h4>{profile.shopname}</h4>
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
              <div className="col-lg-6 input-area py-4">
                <label>City :</label>
                <h4>{profile.city}</h4>
              </div>
              <div className="col-lg-6 input-area">
                <label>Address :</label>
                <h4>{profile.address}</h4>
              </div>
              <div className="col-lg-6 input-area">
                <label>Shop Number :</label>
                <h4>{profile.shopno}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer position="top-center"/>
        </div>
    )
}