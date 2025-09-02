import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
function App() {
 

  return (
    <>
      <Header/>
      <div className='text-center text-red-400 text-2xl rounded-2xl bg-amber-50'>React Router Practice</div>
      <Home/>
      <Footer/>


    </>
  )
}

export default App
