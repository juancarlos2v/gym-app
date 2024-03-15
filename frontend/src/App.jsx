import './App.css'
import { Routes, Route } from "react-router-dom"
import LoginAdmin from '@pages/LoginAdmin'
import Dashboard from '@pages/Dashboard'
import "@styles/normalize.css"
import "@styles/global.css"
import Home from '@pages/Home'


function App() {

  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/dashboard/login' element={<LoginAdmin />} />
        <Route exact path='/dashboard' element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App
