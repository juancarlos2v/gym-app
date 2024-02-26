import './App.css'
import {Routes, Route} from "react-router-dom"
import Users from './Component/Users/Users'
import CreateUser from './Component/CreateUser/CreateUser'


function App() {

  return (
    <>
      <Routes>
        <Route exact path='/' element={<CreateUser/>}/>
        <Route exact path='/users' element= {<Users/>}/>
      </Routes>
    </>
      //  <Route exact path="/sideBar" element={<SideBar/>}/>
  )
}

export default App
