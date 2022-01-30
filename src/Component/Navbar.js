import React from "react";
import "./Navbar.css";

import logo from "./innoson logo-1.png";

function Navbar() {
    
    
        
    //      let rows = ["cars", "money", "stuff"];
    // let list = "";
    // for (let x of rows){
    //     list += x;
    // } 
    
    
    
    return (
        <div>
            <div  className="navbar">
                <ul className='navbar-list'>
                    <div className="navbar-logo">
                        <li className="navbar-list-components"><img src={logo} className="logo" alt="logo"></img></li> 
                    </div>
                    <div className="navbar-list-components-container">
                    {/* <li className="navbar-list-components">{className={'navbar-list-components'} ,{list}}  </li> */}
                      <li className="navbar-list-components">Company</li>  
                    <li className="navbar-list-components"> Vehicles </li> 
                    <li className="navbar-list-components">Innovation</li> 
                    <li className="navbar-list-components">Blog</li> 
                    <li className="navbar-list-components">History</li> 
                    <li className="navbar-list-components">lifeStyle</li> 
    <li className="navbar-list-components">search</li> 
                        </div> 
                </ul>
            </div>
        </div>
    )
};

export default Navbar;