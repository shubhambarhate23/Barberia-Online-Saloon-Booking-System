import React from 'react'
import { useState } from 'react'
import AddService from '../../Services/AddService'
import { Link } from 'react-router-dom'
import '../Shop/ShopProfile.css'
const ShopService = () => {

    const [service, setService] = useState({
        haircut: "",
        haircolour:"", 
        cleanshave:"",
        trimbeard:"",
        beardshape:"",
        facescrub:"",
        facial:"",
        headmassage:"",
        bodymassage:"",
    })

    const handleChange=(e)=>{
        const value=e.target.value;
        setService({...service,[e.target.name]:value})
    }

    const saveService=(e)=>{
        AddService.addService(service)
        .then((respone)=>{
            //console.log(respone)
        })
        .catch((error)=>{console.log(error)})
    }


    
    return (
        <div className='profile'>
            <div className="card mt-5 p-0 overflow-hidden h-100 shadow me-5">
<div className="card-header text-success"><h1>Price</h1></div>
</div>
<div className="container mt-5 p-0 overflow-hidden h-100 shadow me-5">
<div className="row">
  <div className="col-sm-10">
    <div className="row">
      <div className="col-sm-6">
      <label>Hair Cut</label>
      <input type="text" placeholder='Enter rate' name="haircut"
      value={service.haircut} onChange={(e)=>handleChange(e)} />
      </div>
      <div className="col-lg-6 input-area">
      <label>Haircolour</label>
      <input type="text" placeholder='Enter rate' name="haircolour"
      value={service.haircolour} onChange={(e)=>handleChange(e)} />
      </div>
      <div className="col-lg-6 input-area">
      <label>Clean Shave</label>
      <input type="text" placeholder='Enter rate' name="cleanshave" 
      value={service.cleanshave} onChange={(e)=>handleChange(e)}/>
      </div>
      <div className="col-lg-6 input-area">
      <label>Trim Beard</label>
      <input type="text" placeholder='Enter rate' name="trimbeard" 
    value={service.trimbeard} onChange={(e)=>handleChange(e)}/>
      </div>
      <div className="col-lg-6 input-area mt-4">
      <label>Beard Shape</label>
      <input type="text" placeholder='Enter rate' name="beardshape"
      value={service.beardshape} onChange={(e)=>handleChange(e)}/>
      </div>
      <div className="col-lg-6 input-area">
      <label>Face Scrub</label>
      <input type="text" placeholder='Enter rate' name="facescrub" 
    value={service.facescrub} onChange={(e)=>handleChange(e)}/>
      </div>
      <div className="col-lg-6 input-area">
      <label>Faceial</label>
      <input type="text" placeholder='Enter rate' name="facial" 
      value={service.facial} onChange={(e)=>handleChange(e)}/>
      </div>
      <div className="col-lg-6 input-area">
      <label>Head Massage</label>
      <input type="text" placeholder='Enter rate' name="headmassage" 
      value={service.headmassage} onChange={(e)=>handleChange(e)}/>
      </div>
      <div className="col-lg-6 input-area">
      <label>Body Massage</label>
      <input type="text" placeholder='Enter rate' name="bodymassage" 
      value={service.bodymassage} onChange={(e)=>handleChange(e)}/>
      </div>
      <div className="col-lg-6 input-area">
      <label>Shop Number</label>
      <input type="text" placeholder='Shop number' name="shopno" 
      value={sessionStorage.getItem.value} onChange={(e)=>handleChange(e)}/>
      </div>
      <div className="col-lg-6 input-area">
      <Link className="btn btn-success me-2" onClick={saveService} to={'/ApprovalService'} >Register</Link>
      </div>
    </div>
  </div>
</div>
</div>





        </div>
    )
}

export default ShopService


















// <div className="container py-5">
// <div className="row">
//     <div className="col-sm-6 offset-sm-3">
//         <div className="card">
//             <div className="card-header text-success">Add Services</div>
//             <div className="card-body">
//                 <h3>Hair</h3>
//                 <label>Hair Cut</label>
//                 <input type="text" placeholder='Enter rate' name="haircut"
//                 value={service.haircut} onChange={(e)=>handleChange(e)} />
//                 <label>Hair Color</label>
//                 <input type="text" placeholder='Enter rate' name="haircolour"
//                 value={service.haircolour} onChange={(e)=>handleChange(e)} />
//                 <h3>Beard</h3>
//                 <label>Clean Shave</label>
//                 <input type="text" placeholder='Enter rate' name="cleanshave" 
//                 value={service.cleanshave} onChange={(e)=>handleChange(e)}/>
//                 <label>Beard trim</label>
//                 <input type="text" placeholder='Enter rate' name="trimbeard" 
//                 value={service.trimbeard} onChange={(e)=>handleChange(e)}/>
//                 <label>Beard shape</label>
//                 <input type="text" placeholder='Enter rate' name="beardshape"
//                 value={service.beardshape} onChange={(e)=>handleChange(e)}/>
//                 <h3>Face</h3>
//                 <label>Face scrub</label>
//                 <input type="text" placeholder='Enter rate' name="facescrub"
//                 value={service.facescrub} onChange={(e)=>handleChange(e)}/>
//                 <label>Facial</label>
//                 <input type="text" placeholder='Enter rate' name="facial" 
//                 value={service.facial} onChange={(e)=>handleChange(e)}/>
//                 <h3>Massage</h3>
//                 <label>Head massage</label>
//                 <input type="text" placeholder='Enter rate' name="headmassage" 
//                 value={service.headmassage} onChange={(e)=>handleChange(e)}/>
//                 <label>Body massage</label>
//                 <input type="text" placeholder='Enter rate' name="bodymassage" 
//                 value={service.bodymassage} onChange={(e)=>handleChange(e)}/>
//                 <label>Shop number</label>
//                 <input type="text" placeholder='Shop number' name="shopno" 
//                  value={sessionStorage.getItem.value} onChange={(e)=>handleChange(e)}/>
//                 <Link className="btn btn-success me-2" onClick={saveService} to={'/ApprovalService'} >Register</Link>
//             </div>
//         </div>
//     </div>
// </div>
// </div>