import styles from "@styles/list.module.css"
import axios from 'axios';
import { useState, useEffect } from "react";
const usuariosOffline = [
    {
        "dni": "12345678",
        "nombre": "Carlos",
        "apellido": "Gómez",
        "email": "gomez@gmail.com",
        "telefono": "555-1234",
        "inscripcion": true,
    },
    {
        "dni": "7574845",
        "nombre": "Ana",
        "apellido": "Rodríguez",
        "email": "rodriguez@gmail.com",
        "telefono": "555-5678",
        "inscripcion": false,
    },
    {
        "dni": "90378345",
        "nombre": "Miguel",
        "apellido": "López",
        "telefono": "555-9876",
        "inscripcion": true,
    },
    {
        "dni": "34567890",
        "nombre": "Laura",
        "apellido": "Fernández",
        "email": "fer@gmail.com",
        "telefono": "555-4321",
        "inscripcion": false,
    },
    {
        "dni": "23456789",
        "nombre": "Alejandro",
        "apellido": "Martínez",
        "email": "martinez@gmail.com",
        "telefono": "555-8765",
        "inscripcion": true,
    },
    {
        "dni": "90378345",
        "nombre": "Miguel",
        "apellido": "López",
        "telefono": "555-9876",
        "inscripcion": true,
    },
    {
        "dni": "34567890",
        "nombre": "Laura",
        "apellido": "Fernández",
        "email": "fer@gmail.com",
        "telefono": "555-4321",
        "inscripcion": false,
    },
    {
        "dni": "23456789",
        "nombre": "Alejandro",
        "apellido": "Martínez",
        "email": "martinez@gmail.com",
        "telefono": "555-8765",
        "inscripcion": true,
    }
]

const baseURL = "http://localhost:8080";

const List = () => {

    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        axios.get(`${baseURL}/api/usuarios`).then((response) => {
            setUsuarios(response.data);
            console.log(response.data)
        }).catch(error => {
            console.log(error)
            setUsuarios(usuariosOffline)
        });
    }, []);

    return (
        <>
            <div>
                <div className={`${styles.titlesearch} d-flex`}>
                    <h3 className="col-7">Lista de miembros</h3>
                    <div className={`${styles.buttons} col-5 d-flex justify-content-between`} >
                        <input type="text" placeholder="Buscar" name="" id="" />
                        <button>Filtrar</button>
                        <button>Registrar</button>
                    </div>
                </div>
                <div className="pt-5">
                    <table className={`${styles.table}`}>
                        <thead>
                            <tr>
                                <th>DNI</th>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>E-mail</th>
                                <th>Telefono</th>
                                <th>Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usuarios.map((user, index) => {
                                return (
                                    <tr key={index} className='flex justify-around mt-10 bg-red-400 rounded-md py-4 items-center'>
                                        <td>{user.dni}</td>
                                        <td>{user.nombre}</td>
                                        <td>{user.apellido}</td>
                                        <td>{user.email}</td>
                                        <td>{user.telefono}</td>
                                        <td>{user.inscripcion ? "Si" : "No"}</td>
                                        {/* <td><img src={user.imagen} alt="imagen usuario" className="w-10 h-10 rounded-full" /></td>
                                    <td>{user.telefono}</td> */}
                                    </tr>
                                );
                            })}
                        </tbody>


                    </table>
                </div>
            </div>
        </>
    )
}

export default List
