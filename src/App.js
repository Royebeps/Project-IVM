import React from "react";
import Navbar from "./Component/Navbar";
import Header from "./Component/Header";
import Introduction from "./Component/Introduction";
import "./app.css"
import Happenings from "./Component/Happenings";
import Location from "./Component/Location";
import Footer from "./Component/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Introduction />
      <Happenings />
      <Location />
      <Footer/>
    </div>
  )
} 

export default App;