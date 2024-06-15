import { useState } from 'react'
import './App.css'
import Header from './Pages/Header/Header'
import Testimonials from './Pages/Testimonials/Testimonials'
import Gallery from './Pages/Gallery/Gallery'

function App() {


  return (
   <div className='app-container'>
    <Header/>
    <Testimonials/>
    <Gallery/>
   </div>
  )
}

export default App
