import React from 'react'

import Carousel from './carousel'
import Services from './services'
import About from "./about"
import Ourteam from './ourteam'
import Contact from './contact'
import Form from './form'
import Axis from './axs'
import {Routes,Route} from 'react-router-dom'

const main = () => {
  return (
    <>
    <div>
   
   
   
    <Routes>
    
    <Route path="/" element={<Carousel/>}/>
       <Route path="services" element={<Services/>}/>
       <Route path="about" element={<About/>}/>
       <Route path="ourteam" element={<Ourteam/>}/>
       <Route path="contact" element={<Contact/>}/>
       <Route path="axs" element={<Axis/>}/>
       <Route path="form" element={<Form/>}/>

 </Routes>

    </div>
    </>
  
  )
}

export default main