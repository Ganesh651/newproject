import React from 'react'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import About from "./About.jsx"
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Projects from "./Projects.jsx"
import Contacts from "./Footer.jsx"
import NOtfound from './NOtfound.jsx'

function App() {
  return (
    <div>

         <BrowserRouter>
         <Navbar/>
              <Routes>
                  
                  <Route path="/" element={<About/>}/>
                  <Route path="/details" element={<Projects/>}/>
                  <Route path="/contactdetails" element={<Contacts/>} />
                  <Route path="*" element={<NOtfound/>}/>
                  
              </Routes> 

            
         </BrowserRouter>







    </div>
  )
}

export default App