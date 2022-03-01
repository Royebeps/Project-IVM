import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
// import Footer from "./Component/Footer";
import Display from "./Component/CarSection";
import reportWebVitals from './reportWebVitals';

export default function Parts() {

  return(<BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/CarSection" element={<Display />} />
      {/* <Route path=""> */}
        
    {/* </Route> */}
    </Routes>
    
    </BrowserRouter>)
};

ReactDOM.render(
   <Parts/>,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


