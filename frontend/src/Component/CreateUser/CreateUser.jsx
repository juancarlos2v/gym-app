import React from 'react'
import SideBar from '../SideBar/SideBar'
import captur from "../../assets/camera-regular-36.png"  
import img1 from "../../assets/react.svg"
const CreateUser = () => {
  return (
    <div>
        <SideBar></SideBar>
        <form action="" className='flex justify-around ml-[20%]'>
            <div className='flex flex-col mt-20 items-stretch'>
            <img className='mt-[-40px] rounded-full' src={img1} alt="" />
            <button className=' flex items-center bg-red-500 rounded-md mt-10 py-2 px-10'><img src={captur} className='mr-2' alt="" /><strong className='text-white'>Seleccionar Archivo</strong></button>
            <label className='mt-10 pb-2'><strong>Nombre</strong></label>
            <input className='rounded-xl' type="text" />
            
            <label className=' mt-8 pb-2'><strong>Direccion</strong></label>
            <input className='rounded-xl' type="text" />

            <label className='mt-8 pb-2'><strong>Tipo de Membresia</strong></label>
            <select className='rounded-xl'>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
            </select>
            </div>

            <div className='flex flex-col items-start justify-center mt-[-11%]'>
            <label className='mt-14 pb-2'>DNI</label>
            <input className='rounded-xl' type="text"/>

            <label className='mt-8 pb-2'>Contraseña</label>
            <input className='rounded-xl' type="password"/>

            <label className='mt-8 pb-2'>Fecha de Nacimiento</label>
            <input className='rounded-xl' type="text"/>

            <label className='mt-8 pb-2'>Telefono</label>
            <input className='rounded-xl' type="text"/>

            <label className='mt-8 pb-2'>Vencimiento de Membresia</label>
            <input className='rounded-xl' type="text"/>
            <div className='flex justify-around w-52 mt-14'>
            <button className=' bg-red-500 rounded-md py-3 px-3'>cancelar</button>
            <button className=' bg-green-400 rounded-md py-3 px-3'>enviar</button>
            </div>
            </div>
        </form>
    </div>
  )
}

export default CreateUser