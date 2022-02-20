import React from "react";
// import { BrowserRouter, Route, Routes, Link, Outlet } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Header from "./Component/Header";
import Introduction from "./Component/Introduction";
import "./app.css"
import Happenings from "./Component/Happenings";
import Location from "./Component/Location";
import Footer from "./Component/Footer";
import Request from "./Component/Request";
import SearchBar from "./Component/SearchBox";

// import Display from "./Component/CarSection";



function App() {
  
  return (
<div>
     
  {/* <Display/> */}
      <Navbar />

       {/* <Outlet/> */}
      <Header />
      <SearchBar/>
      <Introduction />
      <Happenings fetchUrl={ Request.fetchCar}/>
      <Location />
      <Footer/>  
       
       </div> 

    )
  
} 

export default App;