import styles from "@styles/list.module.css"
import axios from 'axios';
import { useEffect, useState } from "react";
import { useListContext } from "@context/ListContext";
import MemberModal from "../MemberModal";
import InfoMember from "../InfoMember";
import ClassModal from "../ClassModal";
import InfoClasses from "../InfoClasses";
import WarningModal from "../WarningModal";

let usuariosOffline = [
    {
        id: "54839",
        nombre: "Carlos",
        apellido: "Gómez",
        dni: "12345678",
        fechaDeNacimiento: "default",
        email: "gomez@gmail.com",
        direccion: "default",
        telefono: 3489842,
        telefonoAxiliar: "default",
        membresia: 'GOLD',
        activo: true,
        fechaDeVencimiento: '13/09/1986',
        aptoFisico: true

    },
    {
        id: "5423839",
        dni: "7574845",
        nombre: "Ana",
        apellido: "Rodríguez",
        email: "rodriguez@gmail.com",
        direccion: "default",
        telefono: 367675675,
        telefonoAxiliar: 367675675,
        membresia: 'GOLD',
        expiracion: "default",
        activo: true,
        fechaDeVencimiento: '13/09/2025',
        fechaDeNacimiento: '13/09/1986',
        aptoFisico: true
    },
    {
        id: "54839",
        dni: "90378345",
        nombre: "Aylen",
        apellido: "Jonta",
        email: "lopez@gmail.com",
        direccion: "default",
        telefono: 453453,
        telefonoAxiliar: 767567657,
        membresia: 'GOLD',
        expiracion: "default",
        activo: true,
        fechaDeVencimiento: '13/09/2025',
        fechaDeNacimiento: '13/09/1986',
        aptoFisico: true
    },
    {
        id: "34232",
        dni: "34567890",
        nombre: "Laura",
        apellido: "Fernández",
        email: "fer@gmail.com",
        direccion: "default",
        telefono: 53453453453,
        telefonoAxiliar: 75656756,
        membresia: 'GOLD',
        expiracion: "default",
        activo: true,
        fechaDeVencimiento: '13/09/2025',
        fechaDeNacimiento: '13/09/1986',
        aptoFisico: true
    },
    {
        id: "83329",
        dni: "23456789",
        nombre: "Pablo",
        apellido: "Suarez",
        email: "martinez@gmail.com",
        direccion: "default",
        telefono: 5345344543,
        telefonoAxiliar: 75675675,
        membresia: 'GOLD',
        expiracion: "default",
        activo: true,
        fechaDeVencimiento: '13/09/2025',
        fechaDeNacimiento: '13/09/1986',
        aptoFisico: true
    },
    {
        id: "23456",
        dni: "90378345",
        nombre: "Miguel",
        apellido: "López",
        email: "lopez@gmail.com",
        direccion: "default",
        telefono: 234435,
        telefonoAxiliar: 75676534,
        membresia: 'GOLD',
        expiracion: "default",
        activo: true,
        fechaDeVencimiento: '13/09/2025',
        fechaDeNacimiento: '13/09/1986',
        aptoFisico: true
    },
    {
        id: "65464",
        dni: "34567890",
        nombre: "Gabriel",
        apellido: "Ruiz",
        email: "fer@gmail.com",
        direccion: "default",
        telefono: 5345355,
        telefonoAxiliar: 456464,
        membresia: 'GOLD',
        expiracion: "default",
        activo: true,
        fechaDeVencimiento: '13/09/2025',
        fechaDeNacimiento: '13/09/1986',
        aptoFisico: true
    },
    {
        id: "56464",
        dni: "23456789",
        nombre: "Alejandro",
        apellido: "Martínez",
        email: "martinez@gmail.com",
        direccion: "default",
        telefono: 53453,
        telefonoAxiliar: 64564546,
        membresia: 'GOLD',
        expiracion: '13/09/2025',
        activo: true,
        fechaDeVencimiento: '13/09/2025',
        fechaDeNacimiento: '13/09/1986',
        aptoFisico: true
    }
]

let classesOffline = [
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
    const [users, setUsers] = useState(usuariosOffline);
    const [userUpdate, setUserUpdate] = useState();
    const [classes, setClasses] = useState(classesOffline);
    const [dni, setDni] = useState('');
    const [className, setClassName] = useState('');
    const [modalU, setModalU] = useState(false);
    const [modalInfo, setModalInfo] = useState(false);
    const [modalInfoC, setModalInfoC] = useState(false);
    const [modalR, setModalR] = useState(false)
    const [classUpdate, setClassUpdate] = useState();
    const [modalWarning, setModalWarning] = useState(false);

    // useEffect(() => {
    //     axios.get(`${baseURL}/api/usuarios`).then((response) => {
    //         setUsers(response.data);
    //         console.log(response.data)
    //     }).catch(error => {
    //         console.log("Offline", error.data)

    //     });
    // }, []);

    // useEffect(() => {
    //     axios.get(`${baseURL}/api/clases`).then((response) => {
    //         setClasses(response.data);
    //     }).catch(error => {
    //         console.log("Offline", error.data)
    //         setClasses(classesOffline)
    //     });
    // }, []);

    useEffect(() => {

    }, [users])

    const findByDNI = () => {
        const userFinded = usuariosOffline.find(user => user.dni == dni)
        setUsers(userFinded);
    }

    const findClassbyName = () => {
        axios.get(`${baseURL}/clase/buscarEntrenador/${className}`)
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

    const modalMemberActive = (user) => {
        setUserUpdate(user);
        setModalU(true);
        console.log(user);

    }

    const modalInfoActive = (user) => {
        setUserUpdate(user);
        setModalInfo(true);

    }

    const modalClassActive = (classes) => {
        setClassUpdate(classes);
        setModalR(true);
        console.log(modalR)
        console.log(classes)
    }
    const modalInfoActiveC = (classes) => {
        setClassUpdate(classes);
        setModalInfoC(true)

    }

    //borrar
    const deleteEntity = (u) => {
        if ('membresia' in u) {
            const usuariosOffline = users.filter(item => item.id !== u.id);
            setUsers(usuariosOffline);
            setModalWarning(false);

        }
        else {
            const updateData = classes.filter(item => item.id !== u.id);
            setUsers(updateData);
            setModalWarning(false);
        }

    }

    //agregar
    const addEntity = (u) => {
        setUsers(users => [...users, u]);
        console.log(u)
    }

    const showWarning = (item) => {
        setUserUpdate(item);
        setModalWarning(true)
    }


    return (
        <>

            <div className={`${styles.contenido} flex-grow-1 overflow-auto mt-4`}>
                <div className={`${styles.titlesearch} d-flex ${styles.scrollable}`}>
                    <h3 className="col-7">Lista de {list === 'M' ? <span>miembros</span> : <span>clases</span>}</h3>
                    <div className={`${styles.buttons} d-flex`} >
                        {list == 'M' ?
                            <div className="d-flex align-items-end" >
                                <input
                                    className="d-flex justify-content-end "
                                    type="text"
                                    placeholder="DNI"
                                    value={dni}
                                    onChange={(e) => setDni(e.target.value)} />

                                <button
                                    className={`${styles.btnFinder}`}
                                    onClick={() => findByDNI()}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                                        <path d="M21 21l-6 -6" />
                                    </svg>
                                </button>
                                <button
                                    className={`${styles.btnFinder}`}
                                    onClick={() => modalMemberActive({})}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plus" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M12 5l0 14" />
                                        <path d="M5 12l14 0" />
                                    </svg>
                                </button>

                            </div> :
                            <div className="d-flex align-items-end" >
                                <input
                                    type="text"
                                    placeholder="Nombre"
                                    value={className}
                                    onChange={(e) => setClassName(e.target.value)} />
                                <button
                                    className={`${styles.btnFinder}`}
                                    onClick={() => findClassbyName}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                                        <path d="M21 21l-6 -6" />
                                    </svg>
                                </button>
                                <button
                                    className={`${styles.btnFinder}`}
                                    onClick={() => modalClassActive({})} >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plus" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M12 5l0 14" />
                                        <path d="M5 12l14 0" />
                                    </svg>
                                </button>
                            </div>
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
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Array.isArray(users) ?
                                        (users.map((user, index) => {
                                            return (
                                                <tr key={index} className='flex justify-around mt-10  rounded-md py-4 items-center'>
                                                    <td>{user.dni}</td>
                                                    <td>{user.nombre}</td>
                                                    <td>{user.apellido}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user.activo ? "Si" : "No"}</td>
                                                    <td className="d-flex justify-content-center">
                                                        <button
                                                            onClick={() => modalInfoActive(user)}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-info-circle" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#303030" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                                                                <path d="M12 9h.01" />
                                                                <path d="M11 12h1v4h1" />
                                                            </svg>
                                                        </button>
                                                        <button
                                                            onClick={() => modalMemberActive(user)}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-edit" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#303030" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
                                                                <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
                                                                <path d="M16 5l3 3" />
                                                            </svg>
                                                        </button>
                                                        <button onClick={() => showWarning(user)} >
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash-filled" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#303030" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                <path d="M20 6a1 1 0 0 1 .117 1.993l-.117 .007h-.081l-.919 11a3 3 0 0 1 -2.824 2.995l-.176 .005h-8c-1.598 0 -2.904 -1.249 -2.992 -2.75l-.005 -.167l-.923 -11.083h-.08a1 1 0 0 1 -.117 -1.993l.117 -.007h16z" strokeWidth="0" fill="#303030" />
                                                                <path d="M14 2a2 2 0 0 1 2 2a1 1 0 0 1 -1.993 .117l-.007 -.117h-4l-.007 .117a1 1 0 0 1 -1.993 -.117a2 2 0 0 1 1.85 -1.995l.15 -.005h4z" strokeWidth="0" fill="#303030" />
                                                            </svg>
                                                        </button>
                                                    </td>
                                                </tr>
                                            );
                                        })) :
                                        <tr key={0} className='flex justify-around mt-10 bg-red-400 rounded-md py-4 items-center'>
                                            <td>{users.dni}</td>
                                            <td>{users.nombre}</td>
                                            <td>{users.apellido}</td>
                                            <td>{users.email}</td>
                                            <td>{users.activo ? "Si" : "No"}</td>
                                            <td>
                                                <button onClick={() => modalInfoActive(users)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-info-circle" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#303030" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                                                        <path d="M12 9h.01" />
                                                        <path d="M11 12h1v4h1" />
                                                    </svg>
                                                </button>
                                                <button onClick={() => modalMemberActive(users)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-edit" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#303030" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
                                                        <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
                                                        <path d="M16 5l3 3" />
                                                    </svg>
                                                </button>
                                                <button onClick={() => showWarning(users)} >
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash-filled" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#303030" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path d="M20 6a1 1 0 0 1 .117 1.993l-.117 .007h-.081l-.919 11a3 3 0 0 1 -2.824 2.995l-.176 .005h-8c-1.598 0 -2.904 -1.249 -2.992 -2.75l-.005 -.167l-.923 -11.083h-.08a1 1 0 0 1 -.117 -1.993l.117 -.007h16z" strokeWidth="0" fill="#303030" />
                                                        <path d="M14 2a2 2 0 0 1 2 2a1 1 0 0 1 -1.993 .117l-.007 -.117h-4l-.007 .117a1 1 0 0 1 -1.993 -.117a2 2 0 0 1 1.85 -1.995l.15 -.005h4z" strokeWidth="0" fill="#303030" />
                                                    </svg>
                                                </button>
                                            </td>
                                        </tr>
                                }
                            </tbody>
                        </table>
                    </div>
                }
                {

                    list == "C" && <div className="pt-5">
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
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Array.isArray(classes) ?
                                        classes.map((c, index) => {
                                            return (
                                                <tr key={index} className='flex justify-around mt-10 bg-red-400 rounded-md py-4 items-center'>
                                                    <td>{c.nombre}</td>
                                                    <td>{c.entrenador}</td>
                                                    <td>{c.fechaYhora}</td>
                                                    <td>{c.turno}</td>
                                                    <td>{`$${c.precio}`} </td>
                                                    <td>{c.activo ? "Sí" : "No"}</td>
                                                    <td>{c.cupo}</td>
                                                    <td>
                                                        <button onClick={() => modalInfoActiveC(c)} >
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-info-circle" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#303030" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                                                                <path d="M12 9h.01" />
                                                                <path d="M11 12h1v4h1" />
                                                            </svg>
                                                        </button>
                                                        <button onClick={() => modalClassActive(c)}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-edit" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#303030" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
                                                                <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
                                                                <path d="M16 5l3 3" />
                                                            </svg>
                                                        </button>
                                                        <button onClick={() => showWarning(c)}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash-filled" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#303030" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                <path d="M20 6a1 1 0 0 1 .117 1.993l-.117 .007h-.081l-.919 11a3 3 0 0 1 -2.824 2.995l-.176 .005h-8c-1.598 0 -2.904 -1.249 -2.992 -2.75l-.005 -.167l-.923 -11.083h-.08a1 1 0 0 1 -.117 -1.993l.117 -.007h16z" strokeWidth="0" fill="#303030" />
                                                                <path d="M14 2a2 2 0 0 1 2 2a1 1 0 0 1 -1.993 .117l-.007 -.117h-4l-.007 .117a1 1 0 0 1 -1.993 -.117a2 2 0 0 1 1.85 -1.995l.15 -.005h4z" strokeWidth="0" fill="#303030" />
                                                            </svg>
                                                        </button>
                                                    </td>

                                                </tr>
                                            );
                                        }) :
                                        <tr key={0} className='flex justify-around mt-10 bg-red-400 rounded-md py-4 items-center'>
                                            <td>{classes.nombre}</td>
                                            <td>{classes.entrenador}</td>
                                            <td>{classes.fechaYhora}</td>
                                            <td>{classes.turno}</td>
                                            <td>{`$${classes.precio}`} </td>
                                            <td>{classes.activo ? "Sí" : "No"}</td>
                                            <td>{classes.cupo}</td>
                                            <td>
                                                <button onClick={() => modalInfoActive(classes)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-info-circle" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#303030" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                                                        <path d="M12 9h.01" />
                                                        <path d="M11 12h1v4h1" />
                                                    </svg>
                                                </button>
                                                <button onClick={() => modalMemberActive(classes)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-edit" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#303030" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
                                                        <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
                                                        <path d="M16 5l3 3" />
                                                    </svg>
                                                </button>
                                                <button onClick={() => showWarning(classes)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash-filled" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#303030" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path d="M20 6a1 1 0 0 1 .117 1.993l-.117 .007h-.081l-.919 11a3 3 0 0 1 -2.824 2.995l-.176 .005h-8c-1.598 0 -2.904 -1.249 -2.992 -2.75l-.005 -.167l-.923 -11.083h-.08a1 1 0 0 1 -.117 -1.993l.117 -.007h16z" strokeWidth="0" fill="#303030" />
                                                        <path d="M14 2a2 2 0 0 1 2 2a1 1 0 0 1 -1.993 .117l-.007 -.117h-4l-.007 .117a1 1 0 0 1 -1.993 -.117a2 2 0 0 1 1.85 -1.995l.15 -.005h4z" strokeWidth="0" fill="#303030" />
                                                    </svg>
                                                </button>
                                            </td>
                                        </tr>
                                }


                            </tbody>


                        </table>
                    </div>

                }
            </div>

            <div> {
                modalU ?
                    <MemberModal
                        onClose={setModalU.bind(null, false)}
                        addEntity={addEntity}
                        selected={userUpdate}


                    /> :
                    null
            }
            </div>
            <div>
                {
                    modalInfo ?
                        <InfoMember
                            onClose={setModalInfo.bind(null, false)}
                            selected={userUpdate}
                        /> :
                        null
                }
            </div>
            <div>
                {
                    modalR ?
                        <ClassModal
                            onClose={setModalR.bind(null, false)}
                            selected={classUpdate}
                        /> :
                        null
                }
            </div>
            <div>
                {
                    modalInfoC ?
                        <InfoClasses
                            onClose={setModalInfoC.bind(null, false)}
                            selected={classUpdate}
                        /> :
                        null
                }
            </div>
            <div>
                {
                    modalWarning ?
                        <WarningModal
                            onClose={setModalWarning.bind(null, false)}
                            onDelete={deleteEntity}
                            selected={userUpdate}
                        /> :
                        null
                }
            </div>




        </>
    )
}

export default List
