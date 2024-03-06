import React from 'react'
import SideBar from '../SideBar/SideBar'
import axios from 'axios';
const usuariosOffline = [
  {
    "nombre": "Carlos",
    "apellido": "Gómez",
    "dni": "12345678",
    "inscripcion": true,
    "telefono": "555-1234",
    "contrasena": "clave123",
    "imagen": "imagen_carlos.jpg"
  },
  {
    "nombre": "Ana",
    "apellido": "Rodríguez",
    "dni": "98765432",
    "inscripcion": false,
    "telefono": "555-5678",
    "contrasena": "ana456",
    "imagen": "imagen_ana.jpg"
  },
  {
    "nombre": "Miguel",
    "apellido": "López",
    "dni": "56789012",
    "inscripcion": true,
    "telefono": "555-9876",
    "contrasena": "miguelPass",
    "imagen": "imagen_miguel.jpg"
  },
  {
    "nombre": "Laura",
    "apellido": "Fernández",
    "dni": "34567890",
    "inscripcion": false,
    "telefono": "555-4321",
    "contrasena": "laura789",
    "imagen": "imagen_laura.jpg"
  },
  {
    "nombre": "Alejandro",
    "apellido": "Martínez",
    "dni": "23456789",
    "inscripcion": true,
    "telefono": "555-8765",
    "contrasena": "alex123",
    "imagen": "imagen_alejandro.jpg"
  }
]

const baseURL = "http://localhost:8080";
const Users = () => {

  const [usuarios, setUsuarios] = React.useState([]);

  React.useEffect(() => {
    axios.get(`${baseURL}/api/usuarios`).then((response) => {
      setUsuarios(response.data);
      console.log(response.data)
    }).catch(error => {
      console.log(error)
      setUsuarios(usuariosOffline)
    });
  }, []);

  return (
    <div>
      <SideBar></SideBar>
      <div className='flex justify-between ml-80 mt-14 items-center'>
        <h1 className=' text-xl'><strong>Lista de Clientes:</strong></h1>
        <div className='mr-20'>
          <span className=' text-gray-500'><strong>Filtrar por: </strong></span>
          <select className=' rounded-full' name="" id="">
            <option value=""></option>
            <option value=""></option>
          </select>
        </div>
        <button className=' text-white bg-red-600 py-2 rounded-full px-2 mr-10'>Registrar Cliente</button>
      </div>
      <div className='ml-80 mt-14'>
        <table className=' w-[91%] flex flex-col'>
          <thead>
            <tr className=' flex justify-around bg-red-500 py-4 px-4 rounded-lg'>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>DNI</th>
              <th>Membresia</th>
              <th>imagen</th>
              <th>Cuota</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((user, index) => {
              return (
                <tr key={index} className='flex justify-around mt-10 bg-red-400 rounded-md py-4 items-center'>
                  <td>{user.nombre}</td>
                  <td>{user.apellido}</td>
                  <td>{user.dni}</td>
                  <td>{user.inscripcion ? "Si" : "No"}</td>
                  <td><img src={user.imagen} alt="imagen usuario" className="w-10 h-10 rounded-full" /></td>
                  <td>{user.telefono}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users