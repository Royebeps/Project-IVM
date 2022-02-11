import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Footer from "./Component/Footer";
import Happenings from "./Component/Happenings";
import reportWebVitals from './reportWebVitals';



ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
      <Route path="/Happenings" element={<Happenings />} />
      <Route path="/Footer" element={<Footer />} />
      </Route>
    </Routes>
    
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


