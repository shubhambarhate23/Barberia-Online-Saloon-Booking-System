import React from 'react'
import '../components/Footer.css'
import { AiOutlineShop,AiOutlineUser } from "react-icons/ai";

export default function Footer() {
  return (
    <div>
        <script>
        <link rel="stylesheet" href="style.css"/>
  <link rel="stylesheet" type="/Footecss.css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"/>
        </script>
		
<footer className="footer-distributed">

			<div className="footer-left">

				<h3>Bar<span>Beria</span></h3>

				<p className="footer-links">
					<AiOutlineShop size={25}/>
					<a href="/" className="link-1">Home</a>
					
					
					<a href="/AdminLogin"><AiOutlineUser size={25}/> Admin</a>
				
					<a href="/Slogin">Service Provider</a>
				
					<a href="/Login">Customer</a>
					
					<a href="/AboutUs">About</a>
			
				</p>

				<p className="footer-company-name">Company Name © 2015</p>
			</div>

			<div className="footer-center">

				<div>
					<i className="fa fa-map-marker"></i>
					<p><span></span> Maharashtra,INDIA</p>
				</div>

				<div>
					<i className="fa fa-phone"></i>
					<p>+91 123456789</p>
				</div>

				<div>
					<i className="fa fa-envelope"></i>
					<p><a href="mailto:support@fixitright.com">support@barberia.com</a></p>
				</div>

			</div>

			<div className="footer-right">

				<p className="footer-company-about">
					<span>About the company</span>
					A website that make it easy for you to get a barber easly by connecting the service to provider 
required directly in simple way.
				</p>

				{/* <div className="footer-icons">
					<a href="#"><i className="fa fa-facebook"></i></a>
					<a href="#"><i className="fa fa-twitter"></i></a>
					<a href="#"><i className="fa fa-linkedin"></i></a>
					<a href="#"><i className="fa fa-github"></i></a>
				</div> */}

			</div>

		</footer>
    </div>
  )
}
