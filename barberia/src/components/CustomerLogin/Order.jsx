import React from 'react'
import { useNavigate } from 'react-router-dom';
import RegisterService from '../../Services/RegisterService';
import '../About.css';
import { useForm } from 'react-hook-form';

const Order = () => {

    const email=localStorage.getItem("email")
    const shop_no=localStorage.getItem("shopno")
    const cart=localStorage.getItem("cart")
    const user_id=localStorage.getItem("userid")
    const mobile=localStorage.getItem("mobile")
    const navigate=useNavigate();
    
    
    const{register,handleSubmit}=useForm()
   
        const sendData=(e)=>{
            RegisterService.placeOrder(e)
            .then((response)=>{
                navigate("/Payment")
            })
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
              <a class="nav-link  active" href="/UpdateProfile"><p className='text-dark'> </p></a>
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
          <form className='p-0 overflow-hidden h-100 shadow me-5' onSubmit={handleSubmit(sendData)}>
            <div className="col-sm-6">
              <label>Enter Name :</label>
              <input type="text" {...register('name')} /><br/><br/>
            </div>
            <div className="col-lg-6 input-area">
              <label>City :</label>
              <input type="text" {...register('city')}/><br/><br/>
            </div>
            <div className="col-lg-6 input-area">
              <label>Address :</label>
              <input type="text" {...register('address')} /><br/><br/>
            </div>
            <div className="col-lg-6 input-area">
              <label>Date :</label>
              <input type="date" {...register('date')} /><br/><br/>
            </div>
            <div className="col-lg-6 input-area mt-4">
              <label>Email ID :</label>
              <input type="text" {...register('email')} value={email} /><br/><br/>
            </div>
            <div className="col-lg-6 input-area mt-4">
              <label>Mobile Number :</label>
              <input type="text" {...register('mobile')} value={mobile} /><br/><br/>
            </div>
            <div className="col-lg-6 input-area">
              <label>Shop Number :</label>
              <input type="text" {...register('shop_no')} value={shop_no} /><br/><br/>
            </div>
            <div className="col-lg-6 input-area">
              <label>User Number :</label>
              <input type="text" {...register('user_id')} value={user_id} /><br/><br/>
            </div>
            <div className="col-lg-6 input-area">
              <label>Price :</label>
              <input type="text" {...register('price')} value={cart} /><br/><br/>
            </div>
            <div className="text-center">
            <input type="submit" className='btn btn-warning mt-5 mb-5' value={"Place Order"}/>
            </div>
            </form>
          </div>
        </div>
      </div>
  </div>
  </div>
  )
}

export default Order