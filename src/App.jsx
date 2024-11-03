import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/home/Header'
import Home from "./components/home/Home"
import Service from './components/Service/Service'
import Contect from './components/contect/Contect'
import Footer from './components/Footer/Footer'
import About from './components/About/About'
import Error from './Error/Error'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Home />
        <Service />
        <About />
        <Contect />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
