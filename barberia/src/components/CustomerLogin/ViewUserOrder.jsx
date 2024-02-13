import React from 'react'
import '../CustomerLogin/FrontPage.css';
import { useState } from 'react';
import { useEffect } from 'react';
import RegisterService from '../../Services/RegisterService';



const ViewUserOrder = () => {

    const [list, setList] = useState([]);
    const userid=localStorage.getItem("userid")
    //console.log(userid)
    useEffect(() => {
        init();
    }, [])

    const init = () => {
        const fetchData = async () => {
          //  console.log(userid)
            const response = await RegisterService.getAllOrderByUr(userid)
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
                <a class="nav-link  active" href='/UserProfile'><p className='text-dark fw-bold'>Back</p></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>








            
            <div className="container">
                <h1 className="text-center text-info mt-3">View Orders</h1>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-sm-6 offset-sm-4">
                             </div>
                         </div>
                     </div>
                <table class="table table-striped table-hover mt-5">
                    <thead class="table-dark">
                        <tr>
                            <th scope="col">Customer Name</th>
                            <th scope="col">Customer Email</th>
                            <th scope="col">Customer Mobile Number</th>
                            <th scope="col">Customer City</th>
                            <th scope="col">Customer Address</th>
                            <th scope="col">Date</th>
                            <th scope="col">Price</th>
                            <th scope="col">Shop Name</th>
                            <th scope="col">Shop Number</th>
                            <th scope="col">User ID</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {
                            list.map(x =>
                                <tr key={x.orderid}>
                                    <td>{x.name}</td>
                                    <td>{x.email}</td>
                                    <td>{x.mobile}</td>
                                    <td>{x.city}</td>
                                    <td>{x.address}</td>
                                    <td>{x.date}</td>
                                    <td>{x.price}</td>
                                    <td>{x.shopno.shopname}</td>
                                    <td>{x.shop_no}</td>
                                    <td>{x.user_id}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}






export default ViewUserOrder