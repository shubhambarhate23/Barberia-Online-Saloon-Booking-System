import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { RiLogoutCircleRLine } from "react-icons/ri";
import AdminService from '../Services/AdminService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import '../components/About.css'
const GetAll = () => {

    const [list, setList] = useState([]);
    const [search, setSearch] = useState("");
    
    useEffect(() => {
        toast.success("Log in successfull")
        init();
    }, [])

    const init = () => {
        const fetchData = async () => {
            const response = await AdminService.getAllRegisterShop()
            try {
                setList(response.data);
            } catch (error) { console.log(error) }
        }
        fetchData();
    }
    const logOut=()=>{
        localStorage.clear();
        window.location.reload();
      }

      const deleteShop=(shopno)=>{
        console.log(shopno)
        axios.get("http://localhost:8080/api/v5/deleteshop/"+shopno)
        .then(response=>{toast.success("Deleted Successfully.")
        init();
    })
        .catch(error=>{toast.error("Unable to delete")})
    }
    return (
        <div className='bg'>


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
                <a class="nav-link  active" href="/"><p className='text-dark' onClick={logOut}>Logout&nbsp;&nbsp;<RiLogoutCircleRLine/></p></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>








        <a href='/getAllUser' className="btn btn-success">Get All Registered Users</a>
            
            <div className="container">
                <h1 className="text-center text-info mt-3">Registerd Shop List</h1>
                <h3 className='text-success'>Enter City And search a Shop Name</h3>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-sm-6 offset-sm-4">
                             <div class="input-group mb-6">
                                <span class="input-group-text" id="inputGroup-sizing-default">Enter City</span>
                                    <input type="text" class="form-control" placeholder='Enter City...'
                                    onChange={(event) => { setSearch(event.target.value) }}/>
                                 </div>
                             </div>
                         </div>
                     </div>
                <table class="table table-striped table-hover mt-5">
                    <thead class="table-dark">
                        <tr>
                            <th scope="col">Shop Name</th>
                            <th scope="col">Shop Owner Name</th>
                            <th scope="col">Mobile</th>
                            <th scope="col">Email</th>
                            <th scope="col">City</th>
                            <th scope="col">Address</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {
                            list.filter((val) => {
                                if (search === "") { return val }
                                else if (val.city.toLowerCase().includes(search.toLowerCase())) { return val }
                            }).map(x =>
                                <tr key={x.shopno}>
                                    <td>{x.shopname}</td>
                                    <td>{x.rname}</td>
                                    <td>{x.mobile}</td>
                                    <td>{x.email}</td>
                                    <td>{x.city}</td>
                                    <td>{x.address}</td>
                                    <td>
                                        <button className="btn btn-danger ms-2" onClick={()=>deleteShop(x.shopno)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            
            </div>
            <ToastContainer position="top-center"/>
        </div>
    )
}






export default GetAll