import React from 'react'
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from '../Pages/Contact';
import Services from '../Pages/Services';

function Views() {
  return (
    <div>
         <BrowserRouter>
          <Routes>
         
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>} />
            <Route path="/services" element={<Services/>} />
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Views