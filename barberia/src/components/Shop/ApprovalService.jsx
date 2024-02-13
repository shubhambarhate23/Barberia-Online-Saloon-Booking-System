import React from 'react'
import '../About.css'

const ApprovalService = () => {
  return (
    <div>
        <div className="about">
          <h1 className='text-light'>Barberia</h1>
       </div>
        {/* <h2 className='text-success'>Request has been rised please wait for admin confirmation</h2><br></br> */}
        <h3>Thank You for register your shop</h3>
        <a className='btn btn-primary'href="/Slogin">Shop Login</a>
    </div>
  )
}

export default ApprovalService