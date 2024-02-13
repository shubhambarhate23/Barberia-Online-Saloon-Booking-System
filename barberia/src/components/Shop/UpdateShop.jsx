import React, { useEffect, useState } from 'react'
import { FaUserAlt } from "react-icons/fa";
import { FcApproval } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';
import RegisterService from '../../Services/RegisterService';
import '../Shop/ShopProfile.css'

const UpdateShop = () => {

    const navigate=useNavigate();

    const [profile,setProfile]=useState({
        rname: "",
        shopname: "",
        email: "",
        mobile: "",
        password: "",
        city: "",
        address: "",
        shopno: "",
    });
    useEffect(()=>{
       const email=localStorage.getItem('email')
       RegisterService.getShopByEmail(email)
       .then((response)=>{setProfile(response.data);
        })
        .catch((error)=>{console.log(error);
        })
    },[])
   

    const handleChange=(e)=>{
        const value=e.target.value;
        setProfile({...profile,[e.target.name]:value});
    }

    const updateShopProfile=()=>{
        
       
        RegisterService.updateShopProfile(profile)
        .then((response)=>{navigate("/ShopProfile")})
        .catch((error)=>{console.log(error)})
    }
     

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
                <a class="nav-link  active" href="/UserProfile"><p className='text-dark fw-bold'><FaUserAlt/>&nbsp;&nbsp;{profile.rname} <FcApproval/></p></a>
              </li> <li class="nav-item">
                <a class="nav-link  active" href="/ShopProfile"><p className='text-dark'>Back </p></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="card mt-5 p-0 overflow-hidden h-100 shadow me-5">
        <div className="card-header text-success"><h1>Update</h1></div>
      </div>
      <div className="container mt-5 p-0 overflow-hidden h-100 shadow me-5">
        <div className="row">
          <div className="col-sm-10">
            <div className="row">
              <div className="col-sm-6">
              <label>Shop Owner Name</label>
             <input type="text" className='form-control' name='rname'
              value={profile.rname}  onChange={(e)=>handleChange(e)} readOnly/>
              </div>
              <div className="col-lg-6 input-area">
              <label>Name</label>
             <input type="text" className='form-control' name='shopname'
              value={profile.shopname}  onChange={(e)=>handleChange(e)} readOnly/>
              </div>
              <div className="col-lg-6 input-area">
              <label>Email</label>
             <input type="text" className='form-control' name='email'
              value={profile.email} onChange={(e)=>handleChange(e)} readOnly/>
              </div>
              <div className="col-lg-6 input-area">
              <label>Shop Number</label>
             <input type="text" className='form-control' name='shopno'
              value={profile.shopno} onChange={(e)=>handleChange(e)} readOnly/>
              </div>
              <div className="col-lg-6 input-area mt-4">
              <label>City</label>
             <input type="text" className='form-control' name='city'
              value={profile.city} onChange={(e)=>handleChange(e)} readOnly/>
              </div>
              <div className="col-lg-6 input-area py-4">
              <label>Address</label>
             <input type="text" className='form-control' name='address'
              value={profile.address} onChange={(e)=>handleChange(e)} readOnly/>
              </div>
              <div className="col-lg-6 input-area">
              <label>Mobile Number</label>
             <input type="text" className='form-control' name='mobole'
              value={profile.mobile} onChange={(e)=>handleChange(e)} readOnly/>
              </div>
              <div className="col-lg-6 input-area">
              <label>Password</label>
             <input type="text" className='form-control' name='password'
              value={profile.password} onChange={(e)=>handleChange(e)}/>
              </div>
              <div className="col-lg-6 input-area">
                <button className="btn btn-warning" onClick={updateShopProfile}>Update Profile</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdateShop
