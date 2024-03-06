import styles from "@styles/list.module.css"
import axios from 'axios';
import { useState, useEffect } from "react";
import { useListContext } from "../../Context/ListContext";
import NewMemberModal from "../NewMemberModal";
const usuariosOffline = [
    {
        dni: "12345678",
        nombre: "Carlos",
        apellido: "Gómez",
        email: "gomez@gmail.com",
        inscripcion: true,
    },
    {
        dni: "7574845",
        nombre: "Ana",
        apellido: "Rodríguez",
        email: "rodriguez@gmail.com",
        inscripcion: false,
    },
    {
        dni: "90378345",
        nombre: "Aylen",
        apellido: "Jonta",
        email: "lopez@gmail.com",
        inscripcion: true,
    },
    {
        dni: "34567890",
        nombre: "Laura",
        apellido: "Fernández",
        email: "fer@gmail.com",
        inscripcion: false,
    },
    {
        dni: "23456789",
        nombre: "Pablo",
        apellido: "Suarez",
        email: "martinez@gmail.com",
        inscripcion: true,
    },
    {
        dni: "90378345",
        nombre: "Miguel",
        apellido: "López",
        email: "lopez@gmail.com",
        inscripcion: true,
    },
    {
        dni: "34567890",
        nombre: "Gabriel",
        apellido: "Ruiz",
        email: "fer@gmail.com",
        inscripcion: false,
    },
    {
        dni: "23456789",
        nombre: "Alejandro",
        apellido: "Martínez",
        email: "martinez@gmail.com",
        inscripcion: true,
    }
]

const classesOffline = [
    {
        "nombre": "Pilates",
        "entrenador": "Tomas Merlo",
        "fechaYhora": "04-04-2024 09:30",
        "turno": "Mañana",
        "precio": 6000,
        "activo": true,
        "cupo": 13
    },
    {
        "nombre": "Yoga",
        "entrenador": "Marcelo Garcez",
        "fechaYhora": "01-04-2024 19:00",
        "turno": "Noche",
        "precio": 4000,
        "activo": true,
        "cupo": 20
    },
    {
        "nombre": "Spinning",
        "entrenador": "Lucia Sancor",
        "fechaYhora": "01-04-2024 09:30",
        "turno": "Tarde",
        "precio": 9500,
        "activo": true,
        "cupo": 3

    },
    {
        "nombre": "Kickboxing",
        "entrenador": "Francisco Lopez",
        "fechaYhora": "06-04-2024 14:00",
        "turno": "Tarde",
        "precio": 3000,
        "activo": true,
        "cupo": 5
    }
]

const baseURL = "http://localhost:8080";

const List = () => {
    const { list } = useListContext()
    const [users, setUsers] = useState([]);
    const [classes, setClasses] = useState([]);
    const [dni, setDni] = useState('');
    const [className, setClassName] = useState('');
    const [modalU, setModalU] = useState(false);


    useEffect(() => {
        axios.get(`${baseURL}/api/usuarios`).then((response) => {
            setUsers(response.data);
            console.log(response.data)
        }).catch(error => {
            console.log(error)
            setUsers(usuariosOffline)
        });
    }, []);

    useEffect(() => {
        axios.get(`${baseURL}/api/clases`).then((response) => {
            setClasses(response.data);
        }).catch(error => {
            console.log(error)
            setClasses(classesOffline)
        });
    }, []);

    const findByDNI = () => {
        axios.get(`${baseURL}/api/${dni}`)
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                const userFinded = usuariosOffline.find(user => user.dni == dni)
                setUsers(userFinded);
                console.log(error)

            });
    }

    const findClassbyName = () => {
        axios.get(`${baseURL}/api/${className}`)
            .then(response => {
                setClasses(response.data)
            })
            .catch(error => {
                const classesFinded = classesOffline.filter(c =>
                    c.nombre.toLowerCase().includes(className.toLocaleLowerCase()) ||
                    c.entrenador.toLowerCase().includes(className.toLowerCase())
                );
                setClasses(classesFinded);
                console.log(error)
            });
    }

    const registerMember = () => {
        setModalU(true);
    }

    const newClass = () => {

    }

    return (
        <>
            <div>
                <div className={`${styles.titlesearch} d-flex`}>
                    <h3 className="col-7">Lista de {list === 'M' ? <span>miembros</span> : <span>clases</span>}</h3>
                    <div className={`${styles.buttons} col-5 d-flex justify-content-between`} >
                        {list == 'M' ?
                            <><input
                                type="text"
                                placeholder="DNI"
                                value={dni}
                                onChange={(e) => setDni(e.target.value)} /><button onClick={findByDNI}>Buscar</button><button onClick={registerMember}>Registrar</button></> :
                            <> <input
                                type="text"
                                placeholder="Nombre"
                                value={className}
                                onChange={(e) => setClassName(e.target.value)} />
                                <button onClick={findClassbyName}>Buscar</button>
                                <button onClick={newClass} >Registrar</button></>
                        }
                    </div>
                </div>
                {
                    list == "M" && <div className="pt-5">
                        <table className={`${styles.table}`}>
                            <thead>
                                <tr>
                                    <th>DNI</th>
                                    <th>Nombre</th>
                                    <th>Apellido</th>
                                    <th>E-mail</th>
                                    <th>Activo</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Array.isArray(users) ?
                                        (users.map((user, index) => {
                                            return (
                                                <tr key={index} className='flex justify-around mt-10 bg-red-400 rounded-md py-4 items-center'>
                                                    <td>{user.dni}</td>
                                                    <td>{user.nombre}</td>
                                                    <td>{user.apellido}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user.inscripcion ? "Si" : "No"}</td>
                                                </tr>
                                            );
                                        })) :
                                        <tr key={0} className='flex justify-around mt-10 bg-red-400 rounded-md py-4 items-center'>
                                            <td>{users.dni}</td>
                                            <td>{users.nombre}</td>
                                            <td>{users.apellido}</td>
                                            <td>{users.email}</td>
                                            <td>{users.inscripcion ? "Si" : "No"}</td>

                                        </tr>
                                }
                            </tbody>
                        </table>
                    </div>
                }
                {list == "C" && <div className="pt-5">
                    <table className={`${styles.table}`}>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Entrenador</th>
                                <th>Horario</th>
                                <th>Turno</th>
                                <th>Precio</th>
                                <th>Activo</th>
                                <th>Cupo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {classes.map((c, index) => {
                                return (
                                    <tr key={index} className='flex justify-around mt-10 bg-red-400 rounded-md py-4 items-center'>
                                        <td>{c.nombre}</td>
                                        <td>{c.entrenador}</td>
                                        <td>{c.fechaYhora}</td>
                                        <td>{c.turno}</td>
                                        <td>{`$${c.precio}`} </td>
                                        <td>{c.activo ? "Si" : "No"}</td>
                                        <td>{c.cupo}</td>
                                    </tr>
                                );
                            })}
                        </tbody>


                    </table>
                </div>}
            </div>
            {
                modalU ? <NewMemberModal value={{}} /> :
                    null
            }



        </>
    )
}

export default List
