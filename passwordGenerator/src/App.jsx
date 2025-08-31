import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="h-screen flex justify-center items-center bg-gray-100">
      <h1 className="text-10xl font-bold text-red-500">
        🚀 Tailwind + Vite + React working!
      </h1>
    </div>
    </>
  )
}

export default App
