import './App.css'
import { Routes, Route } from "react-router-dom"
import Index from '@pages/Index'
import Dashboard from '@pages/Dashboard'
import "@styles/normalize.css"
import "@styles/global.css"


function App() {

  return (
    <>
      <Routes>
        <Route exact path='/' element={<Index />} />
        <Route exact path='/dashboard' element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App
