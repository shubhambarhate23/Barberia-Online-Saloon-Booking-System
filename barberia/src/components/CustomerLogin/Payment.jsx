import React from 'react'
import '../../components/About.css';
import { FaPhoneVolume } from "react-icons/fa";
import { FcPhone } from "react-icons/fc";
import { GoMail } from "react-icons/go";
import { Link } from 'react-router-dom';

const Payment = () => {
    return (
        <div>
            <div className="about">
                <h1 className='text-light'>Barberia</h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-7 offset-2 mt-4">
                        <h3 className='text-success'>
                            Payment should be Cash On Delevery<br></br>
                            Thank You to get our service <br />
                            Visit Again <br />
                            <Link className='btn btn-warning me-2' to={'/FrontPage'}>Get More Services</Link>
                            <Link className='btn btn-dark me-2' to={'/FrontPage'}>Back</Link>
                            <Link className='btn btn-info' to={'/ViewUserOrder'}>View Order</Link>
                        </h3>
                    </div>
                </div>
            </div>
            <div className="contact bg-dark mt-3">
                <h1 className='text-light'>Contact Us</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-2 offset-sm-5"><hr className='text-light'></hr></div>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-10">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <h4 className='text-light'><FaPhoneVolume />1-555-2222-1207</h4>
                                        </div>
                                        <div className="col-sm-4">
                                            <h4 className='text-light'><FcPhone />"Lisbon","CT","6351</h4>
                                        </div>
                                        <div className="col-sm-4">
                                            <h4 className='text-light'><GoMail />Info@nameyourvictory.com</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment