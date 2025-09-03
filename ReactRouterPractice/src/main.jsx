import React from 'react'
import ReactDom from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/Header/About'
import App from './App'
import Services from './components/Header/Services'
import Contact from './components/Header/Contact'
import './index.css'
const router = createBrowserRouter([
  {
        path : "/",
        element : <App/>,
        children : [
          {
            path : "/about",
            element : <About/>
          },
          {
            path : "/contact",
            element : <Contact/>
          },
          {
            path :"/services",
            element : <Services/>
          }
        ]
  }
])

ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)