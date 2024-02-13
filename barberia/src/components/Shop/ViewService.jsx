import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from "react-router-dom";
import './ShopProfile.css';

export default function ViewService() {
  
   


    const { shopno } = useParams()
    const [data, setData] = useState([]);
    localStorage.setItem("asid",data.asid)
    useEffect(() => {

        fetch('http://localhost:8080/api/v3/findByShopno/' + shopno)
            .then((response) => response.json())
            .then((result) => { setData(result[0]) })

    }, [])
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
                <a class="nav-link  active" href={'/UpdateService/'+data.asid}><p className='text-dark'>Update Services</p></a>
              </li>
              <li class="nav-item">
                <a class="nav-link  active" href='/ShopProfile'><p className='text-dark'>Back</p></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>










              <div className="card mt-3 p-0 overflow-hidden h-100 shadow me-5">
        <div className="card-header text-success"><h1>Services</h1></div>
      </div>
      <div className="container mt-3 p-0 overflow-hidden h-100 shadow me-5">
        <div className="row">
          <div className="col-sm-10">
            <div className="row">
              <div className="col-sm-6">
                <label>Haircut :</label>
                <h4>{data.haircut}</h4>
              </div>
              <div className="col-lg-6 input-area">
                <label>Hair colour :</label>
                <h4>{data.haircolour}</h4>
              </div>
              <div className="col-lg-6 input-area">
                <label>Clean Shave :</label>
                <h4>{data.cleanshave}</h4>
              </div>
              <div className="col-lg-6 input-area">
                <label>Beard Shape :</label>
                <h4>{data.beardshape}</h4>
              </div>
              <div className="col-lg-6 input-area mt-4">
                <label>Trim Beard :</label>
                <h4>{data.trimbeard}</h4>
              </div>
              <div className="col-lg-6 input-area py-4">
                <label>Facial :</label>
                <h4>{data.facial}</h4>
              </div>
              <div className="col-lg-6 input-area">
                <label>Face Scrub :</label>
                <h4>{data.facescrub}</h4>
              </div>
              <div className="col-lg-6 input-area">
                <label>Body Massage :</label>
                <h4>{data.bodymassage}</h4>
              </div>
              <div className="col-lg-6 input-area">
                <label>Head massage :</label>
                <h4>{data.headmassage}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>


        </div>
    )
}