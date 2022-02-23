import React, { useEffect, useState} from "react"; 
import { Link, } from "react-router-dom"; 
import "./Navbar.css";

import logo from "./innoson logo-1.png";


function Navbar() {
    
    
        
    const [show, handleShow] = useState(false);

    useEffect(
        () => {
            window.addEventListener("scroll", () => {
                if (window.scrollY > 100) {
                    handleShow(true);
                } else handleShow(false);
            });
            return () => {
                window.removeEventListener("scroll");
            };
        },[]);
    
    
    
    return (


          
            
        <div>
            <div className={`navbar ${show && "r"}`}>
                <ul className='navbar-list'>
                    <div className="navbar-logo">
                        <li className="navbar-list-components"><img src={logo} className="logo" alt="logo"></img></li> 
                    </div>
                    <div className="navbar-list-components-container">
        
                      <li className="navbar-list-components">Company</li>  
                    
         <li className="navbar-list-components"><Link to="/Happenings"> Vehicles </Link></li>   
                    <li className="navbar-list-components">Innovation</li> 
                    <li className="navbar-list-components">Blog</li> 
                    <li className="navbar-list-components">History</li> 
          <Link to="/Footer">          <li className="navbar-list-components">lifeStyle</li> </Link>
    <li className="navbar-list-components">search</li> 
                        </div> 
                </ul>
            </div>
            
        </div>
    )
};

export default Navbar;