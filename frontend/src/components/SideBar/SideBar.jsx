import React from 'react'
import user from "../../assets/user-regular-24.png"
import gym from "../../assets/dumbbell-regular-24.png"
import logOut from "../../assets/log-out-regular-24.png"
const SideBar = () => {
  return (
    <div className=" fixed top-0 left-0 w-[280px] h-screen bg-black z-1000 ">
        <div className=' h-64 flex justify-center items-center'>
          <img src="data:image/png;base64,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" alt="" />
        </div>
        <div className=' flex flex-col items-center '>
        <input className=' rounded-lg' type="text" placeholder='Nª de Clientes' />
        <button className=' mt-7 bg-red-600 px-[80px] rounded-xl pt-1 pb-1 text-white'>Buscar</button>
        </div>
        <div className='flex flex-col items-center mt-10 '>
          <div className='flex items-center mb-4' >
          <img className='mr-[4px]' src={user} alt="" />
          <h1 className='  text-white'>Clientes</h1>
          </div>
          <div className='flex items-center mb-4 mr-2'>
          <img className='mr-1' src={gym} alt="" />
          <h1 className='text-white'>Clases</h1>
          </div>
          <div className='flex items-center mt-36'>
          <img src={logOut} alt="" />
          <h1 className='  text-white'>Cerrar Session</h1>
          </div>
        </div>
    </div>
  )
}

export default SideBar