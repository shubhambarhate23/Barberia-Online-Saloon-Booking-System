import React from 'react'
import '../CustomerLogin/FrontPage.css';
import { useState } from 'react';
import { useEffect } from 'react';
import RegisterService from '../../Services/RegisterService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const FrontPage = () => {

    const [list, setList] = useState([]);
    const [search, setSearch] = useState("");
    
    useEffect(() => {
        toast.success("Log in successfull")
        init();
    }, [])

    const init = () => {
        const fetchData = async () => {
            const response = await RegisterService.getAllRegisterShop();
            try {
                setList(response.data);
            } catch (error) { console.log(error) }
        }
        fetchData();
    }

    return (
        <div>


<nav class="navbar navbar-expand-sm bg-* ">
        <div class="container-fluid">
          <a class="navbar-brand text-dark " href="/">Barberia</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
              <li class="nav-item">
              <a class="nav-link  active" href="/"></a>
              </li>
              <li class="nav-item">
                <a class="nav-link  active" href='/ViewUserOrder'><p className='text-dark fw-bold'>View Order</p></a>
              </li>
              <li class="nav-item">
                <a class="nav-link  active" href='/UserProfile'><p className='text-dark fw-bold'>Back</p></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>









            
            <div className="container">
                <h1 className="text-center text-info mt-3">Select Shop</h1>
                <h3 className='text-success'>Enter City And select a Shop Name</h3>
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
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {
                            list.filter((val) => {
                                if (search === "") { return val }
                                else if (val.city.toLowerCase().includes(search.toLowerCase())) { return val }
                            }).map(x =>
                                <tr key={x.shopno}>
                                    {/* <td><Link to={"SelectService/"+x.shopno}>{x.shopname}</Link></td> */}
                                    <td><a href={'SelectService/'+x.shopno}>{x.shopname}</a></td>
                                    <td>{x.rname}</td>
                                    <td>{x.mobile}</td>
                                    <td>{x.email}</td>
                                    <td>{x.city}</td>
                                    <td>{x.address}</td>
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






export default FrontPage