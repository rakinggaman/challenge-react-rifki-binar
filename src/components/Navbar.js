
import navimg from "../img/Rifcar Logo.png"
import {
    Link
  } from "react-router-dom";
import { useState } from "react";
  

const Navbar = () => {
const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');
// menuToggle.addEventListener('click', function() {
//     nav.classList.toggle('slide');
// });
const [showNavbar, setShowNavbar] = useState(true);
    return (
        <div className="navheader">
           <nav className="container ">

            <div className="logo ms-0">
               
                <Link to="/" > 

                <img src={navimg} alt="navimg" className="logo-image w-50 "/></Link>
            </div>
            <ul className= {`col-md-4 d-flex ms-lg-auto mx-auto ${showNavbar ? 'slide':null}`}>
                
                <li><a href="#our">Our Service</a></li>
                <li><a href="#whyus">Why Us</a></li>
                <li><a href="#testimonial">Testimonial</a></li>
                <li><a href="#faq">FAQ</a></li>
            </ul>
            <div className="menu-toggle ms-5">
                <input type="checkbox" name="" id="" onClick={()=>setShowNavbar(!showNavbar)}/>
                
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
        </div>
        
    )
}

export default Navbar