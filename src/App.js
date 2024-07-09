import React from 'react'
import Preloader from './Preloader'
import Home from './Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Work from './Work';



export default function App() {
  return (
   <>
   <Preloader/>
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<Home/>}/>
    <Route path="/work" element={<Work/>}/>
   </Routes>
   </BrowserRouter>
   
  
   
   </>
  )
}
