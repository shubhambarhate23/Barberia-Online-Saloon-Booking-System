import React, { useEffect, useState } from 'react'
import { FaUserAlt } from "react-icons/fa";
import { FcApproval } from "react-icons/fc";
import { useNavigate} from 'react-router-dom';
import AddService from '../../Services/AddService';
import '../Shop/ShopProfile.css'

const UpdateService = () => {

  
    const navigate=useNavigate();

    const [profile,setProfile]=useState({
      haircut: "",
      haircolour:"", 
      cleanshave:"",
      trimbeard:"",
      beardshape:"",
      facescrub:"",
      facial:"",
      headmassage:"",
      bodymassage:"",
    });
    useEffect(()=>{
      const asid=localStorage.getItem('asid')
       fetch('http://localhost:8080/api/v3/findByAsid/'+asid)
       .then((response) => response.json())
 			.then((result) =>     { setProfile(result[0])   }) 
    },[])
   

    const handleChange=(e)=>{
        const value=e.target.value;
        setProfile({...profile,[e.target.name]:value});
    }

    const updatePrice=()=>{
        
        AddService.updateService(profile)
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
                <a class="nav-link  active" href="/UserProfile"></a>
              </li> <li class="nav-item">
                <a class="nav-link  active" href="/ShopProfile"><p className='text-dark'>Back</p></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="card mt-5 p-0 overflow-hidden h-100 shadow me-5">
        <div className="card-header text-success"><h1>Update</h1></div>
      </div>
      





  <div className="container mt-5 p-0 overflow-hidden h-100 shadow me-5" >
        <div className="row">
          <div className="col-sm-10">
            <div className="row">
              <div className="col-sm-6">
              <label>Haircut</label>
             <input type="text" className='form-control' name='haircut'
              placeholder={profile.haircut} onChange={(e)=>handleChange(e)}/>
              </div>
              <div className="col-lg-6 input-area">
              <label>Haircolour</label>
             <input type="text" className='form-control' name='haircolour'
              value={profile.haircolour}  onChange={(e)=>handleChange(e)}/>
              </div>
              <div className="col-lg-6 input-area">
              <label>Cleanshave</label>
             <input type="text" className='form-control' name='cleanshave'
              value={profile.cleanshave} onChange={(e)=>handleChange(e)}/>
              </div>
              <div className="col-lg-6 input-area">
              <label>Beardshape</label>
             <input type="text" className='form-control' name='beardshape'
              value={profile.beardshape} onChange={(e)=>handleChange(e)}/>
              </div>
              <div className="col-lg-6 input-area mt-4">
              <label>Trimbeard</label>
             <input type="text" className='form-control' name='trimbeard'
              value={profile.trimbeard} onChange={(e)=>handleChange(e)}/>
              </div>
              <div className="col-lg-6 input-area py-4">
              <label>Facial</label>
             <input type="text" className='form-control' name='facial'
              value={profile.facial} onChange={(e)=>handleChange(e)}/>
              </div>
              <div className="col-lg-6 input-area">
              <label>Facescrub</label>
             <input type="text" className='form-control' name='facescrub'
              value={profile.facescrub} onChange={(e)=>handleChange(e)}/>
              </div>
              <div className="col-lg-6 input-area">
              <label>Bodymassage</label>
             <input type="text" className='form-control' name='bodymassage'
              value={profile.bodymassage} onChange={(e)=>handleChange(e)}/>
              </div>
              <div className="col-lg-6 input-area">
              <label>Headmassage</label>
             <input type="text" className='form-control' name='headmassage'
              value={profile.headmassage} onChange={(e)=>handleChange(e)}/>
              </div>
              <div className="col-lg-6 input-area">
                <button className="btn btn-warning" onClick={updatePrice}>Update Service</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdateService

