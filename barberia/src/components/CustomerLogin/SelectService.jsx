import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useParams } from "react-router-dom";
import { HiCurrencyRupee } from "react-icons/hi";
import CartNav from './CartNav';


export default function SelectService() {

   


    const param = useParams()
    localStorage.setItem("shopno",param.shopno)
    const [data, setData] = useState([]);
    useEffect(() => {

        fetch('http://localhost:8080/api/v3/findByShopno/' + param.shopno)
            .then((response) => response.json())
            .then((result) => { setData(result[0]) })

    }, [])


    const [cart, setCart] = useState(0);
    const price=localStorage.setItem("cart",cart);


    const handleClick = (data) => {
        setCart(cart+data)

    }

    

    const handleReset=()=>{
        setCart(0)
    }
    return (
        <div>
            <CartNav/>
            <div className="container py-4">
                <div className="row justify-content-center">
                    <div className="card p-0 overflow-hidden h-100 shadow me-5">
                        <div className="card-body">
                            <h4 className="card-title">Haircut</h4>
                            <h5><HiCurrencyRupee />{data.haircut}</h5>
                            <button className="btn btn-success" onClick={() => handleClick(data.haircut)}>Add to Card</button>
                        </div>
                    </div>

                    <div className="card p-0 overflow-hidden h-100 shadow me-3 mb-3">
                        <div className="card-body">
                            <h4 className="card-title">Beard Shape</h4>
                            <h5><HiCurrencyRupee />{data.beardshape}</h5>
                            <button className="btn btn-success" onClick={() => handleClick(data.beardshape)}>Add to Card</button>
                        </div>
                    </div>
                    <div className="card p-0 overflow-hidden h-100 shadow me-3 mb-3">
                        <div className="card-body">
                            <h4 className="card-title">Body Massage</h4>
                            <h5><HiCurrencyRupee />{data.bodymassage}</h5>
                            <button className="btn btn-success" onClick={() => handleClick(data.bodymassage)}>Add to Card</button>
                        </div>
                    </div>
                    <div className="card p-0 overflow-hidden h-100 shadow me-3 mb-3">
                        <div className="card-body">
                            <h4 className="card-title">Hair Colour</h4>
                            <h5><HiCurrencyRupee />{data.haircolour}</h5>
                            <button className="btn btn-success" onClick={() => handleClick(data.haircolour)}>Add to Card</button>
                        </div>
                    </div>
                    <div className="card p-0 overflow-hidden h-100 shadow me-5 mb-5">
                        <div className="card-body">
                            <h4 className="card-title">Facial</h4>
                            <h5><HiCurrencyRupee />{data.facial}</h5>
                            <button className="btn btn-success" onClick={() => handleClick(data.facial)}>Add to Card</button>
                        </div>
                    </div>
                    <div className="card p-0 overflow-hidden h-100 shadow me-5 mb-5">
                        <div className="card-body">
                            <h4 className="card-title">Clean Shave</h4>
                            <h5><HiCurrencyRupee />{data.cleanshave}</h5>
                            <button className="btn btn-success" onClick={() => handleClick(data.cleanshave)}>Add to Card</button>
                        </div>
                    </div>
                    <div className="card p-0 overflow-hidden h-100 shadow me-5 mb-5">
                        <div className="card-body">
                            <h4 className="card-title">Faces Crub</h4>
                            <h5><HiCurrencyRupee />{data.facescrub}</h5>
                            <button className="btn btn-success" onClick={() => handleClick(data.facescrub)}>Add to Card</button>
                        </div>
                    </div>
                    <div className="card p-0 overflow-hidden h-100 shadow me-5 mb-5">
                        <div className="card-body">
                            <h4 className="card-title">Head Massage</h4>
                            <h5><HiCurrencyRupee />{data.headmassage}</h5>
                            <button className="btn btn-success" onClick={() => handleClick(data.headmassage)}>Add to Card</button>
                        </div>
                    </div>
                    <div className="card p-0 overflow-hidden h-100 shadow me-5 mb-5">
                        <div className="card-body">
                            <h4 className="card-title">Trim Beard</h4>
                            <h5><HiCurrencyRupee />{data.trimbeard}</h5>
                            <button className="btn btn-success" onClick={() => handleClick(data.trimbeard)}>Add to Card</button>
                        </div>
                    </div>
                </div>
            </div>
            <label className='fs-3 fw-bold'>Total Amount : </label>
            <h4 className='text-dark'><HiCurrencyRupee />{cart}</h4>
            <Link to={'/Order'} className='btn btn-success ms-3 me-3'>place Order</Link>
            <button className="btn btn-danger" onClick={handleReset}>Clear Cart</button>
        </div>
    )
}