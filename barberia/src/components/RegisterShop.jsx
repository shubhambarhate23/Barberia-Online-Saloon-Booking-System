import React from 'react'
import { useState } from 'react'
import RegisterService from '../Services/RegisterService'
import Navbar from './Navbar'
import '../components/Home.css';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterShop = () => {

    const [message, setMessage] = useState("");
    const navigate=useNavigate();
    const [register, setRegister] = useState({
        rname: "",
        shopname: "",
        email: "",
        mobile: "",
        password: "",
        city: "",
        address: "",
        shopno: "",

    })

    const handleChange = (e) => {
        const value = e.target.value
        setRegister({ ...register, [e.target.name]: value })
    }

    const handleReset=()=>{
        setRegister({
            rname: "",
            shopname: "",
            email: "",
            mobile: "",
            password: "",
            city: "",
            address: "",
            shopno: "",
        })
    }

    const registerShop = (e) => {
        if(register.rname.length===0){toast.error("Please enter name")}
        else if(register.shopname.length===0){ toast.error("Please enter shop name")}
        else if(register.email.length===0){toast.error("Please enter email")}
        else if(register.mobile.length===0){toast.error("Please enter mobile")}
        else if(register.password.length===0){toast.error("Please enter password")}
        else if(register.city.length===0){toast.error("Please enter city")}
        else if(register.shopno.length===0){toast.error("Please enter shop number")}
        else{
        RegisterService.addShop(register)
            .then(response => {
                 setMessage("Register Successfull.")
                //  localStorage.setItem("id",response.data.id)
                sessionStorage.setItem("id",response.data.value)
                 navigate("/ShopService")
                })
            .catch(error => { console.log(error) })
    }
}
    return (
        <div className='base'>
            <Navbar />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-3 offset-md-10 mt-5">
                        <div className="card mt-5">
                            <div className="card-header text-center fs-3 text-success">Register Shop
                                {
                                    message && <p className='text-success'>{message}</p>
                                }
                            </div>
                            <div className="card-body">
                                <div className="mb-3">
                                    <label>Name</label>
                                    <input type="text" className='form-control' name='rname'
                                        value={register.rname} onChange={(e) => handleChange(e)} />
                                </div>
                                <div className="mb-3">
                                    <label>Shop Name</label>
                                    <input type="text" className='form-control' name='shopname'
                                        value={register.shopname} onChange={(e) => handleChange(e)} />
                                </div>
                                <div className="mb-3">
                                    <label>Email</label>
                                    <input type="email" className='form-control' name='email'
                                        value={register.email} onChange={(e) => handleChange(e)} />
                                </div>
                                <div className="mb-3" h>
                                    <label>Mobile Number</label>
                                    <input type="text" className='form-control' name='mobile'
                                        value={register.mobile} onChange={(e) => handleChange(e)} />
                                </div>
                                <div className="mb-3">
                                    <label>Password</label>
                                    <input type="password" className='form-control' name='password'
                                        value={register.password} onChange={(e) => handleChange(e)} />
                                </div>
                                <div className="mb-3">
                                    <label>Confirm Password</label>
                                    <input type="password" className='form-control' name='cpassword' />
                                </div>
                                <div className="mb-3">
                                    <label>City</label>
                                    <select class="form-select" id="city" name="city" value={register.city} onChange={(e) => handleChange(e)}>
                                        <option value="">Select City</option>
                                        <option value="Pune">Pune</option>
                                        <option value="Mumbai">Mumbai</option>
                                        <option value="Delhi">Delhi</option>
                                        <option value="Hyderabad">Hyderabad</option>
                                        <option value="Bangalore">Bangalore</option>
                                        <option value="Kolkata">Kolkata</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label>Address</label>
                                    <input type="text" className='form-control' name='address'
                                        value={register.address} onChange={(e) => handleChange(e)} />
                                </div>
                                <div className="mb-3">
                                    <label>Shop Number</label>
                                    <input type="text" className='form-control' name='shopno'                       
                                        value={register.shopno} onChange={(e) => handleChange(e)} />
                                </div>
                                <div className="text-center">
                                    <button className='btn btn-success me-2' onClick={registerShop}>Register</button>
                                    <button type='reset' className="btn btn-danger me-2" onClick={handleReset} >Reset</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer position="top-center"/>
        </div>
    )
}

export default RegisterShop