import React from "react";
import Navbar from "./Navbar";
import "./CarSection.css";
//  import { BrowserRouter, Route, Routes, Link, Outlet } from "react-router-dom";

function Display() {
    const cars = [{
        name: "",
        description: ""
    }, {
        name: "",
        description: ""
    }, {
        name: "",
        description: ""}, {  name: "",
            description: ""
        }, {
            name: "",
            description: ""
        },{  name: "",
    description:""}]
 
    return (
        <div>
{/* 
            <BrowserRouter>
                <Routes> */}
{/* <Route path="/CarSection" element={<CarSection />} /> */}

            <Navbar />
            {/* <Outlet/> */}

                {/* </Routes>
            </BrowserRouter>
             */}
            <li>year</li>
            <li>year yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy</li>
            <li>year</li>
            <li>year</li>
            <li>year</li>
            
        </div>
    )
}
export default Display;
