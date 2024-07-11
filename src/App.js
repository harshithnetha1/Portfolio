import React from 'react'
import Preloader from './Preloader'
import Home from './Home'
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Work from './Work';



export default function App() {
  return (
   <>
   <Preloader/>
   <HashRouter>
   <Routes>
   <Route path="/" element={<Home/>}/>
    <Route path="/work" element={<Work/>}/>
   </Routes>

   </HashRouter>
   
   
  
   
   </>
  )
}
