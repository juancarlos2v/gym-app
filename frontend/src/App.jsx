import './App.css'
import { Routes, Route } from "react-router-dom"
import LoginAdmin from '@pages/LoginAdmin'
import Dashboard from '@pages/Dashboard'
import "@styles/normalize.css"
import "@styles/global.css"


function App() {

  return (
    <>
      <Routes>
        <Route exact path='/admin/login' element={<LoginAdmin />} />
        <Route exact path='/dashboard' element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App
