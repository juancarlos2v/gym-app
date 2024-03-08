import PropTypes from 'prop-types';
import styles from "@styles/modal.module.css"
import { useEffect, useState } from "react";
import axios from 'axios';

const MemberModal = ({ onClose, selected }) => {
    const [newUser, setNewUser] = useState({});
    useEffect(() => {
        if (Object.keys(selected).length !== 0) {
            setNewUser({
                id: selected.id,
                name: selected.nombre,
                lastName: selected.apellido,
                dni: selected.dni,
                birthday: selected.fechaDeNacimiento,
                email: selected.email,
                address: selected.direccion,
                phone: selected.telefono,
                phoneE: selected.telefonoAxiliar,
                apto: selected.aptoFisico,
                membershipType: selected.membresia,
                membershipExpiration: selected.fechaDeVencimiento,
                activo: selected.activo
            });
        } else {
            setNewUser({
                name: '',
                lastName: '',
                dni: '',
                birthday: '',
                email: '',
                address: '',
                phone: '',
                phoneE: '',
                apto: '',
                membershipType: '',
                membershipExpiration: '',
                activo: ''
            });
        }
    }, [selected])

    const inputs = [
        { id: 'name', name: 'name', label: 'Nombre' },
        { id: 'lastName', name: 'lastName', label: 'Apellido' },
        { id: 'email', name: 'email', label: 'E-mail' },
        { id: 'dni', name: 'dni', label: 'Documento de Identidad', type: 'number' },
        { id: 'birthday', name: 'birthday', label: 'Fecha de Nacimiento' },
        { id: 'phone', name: 'phone', label: 'Telefono', type: 'number' },
        { id: 'phoneE', name: 'phoneE', label: 'Telefono de Emergencia', type: 'number' },
        { id: 'membershipType', name: 'membershipType', label: 'Membresia' },
        { id: 'membershipExpiration', name: 'membershipExpiration', label: 'Vencimiento', },
        { id: 'address', name: 'address', label: 'Direccion' },
        { id: 'apto', name: 'apto', label: 'Apto' },
        { id: 'activo', name: 'activo', label: 'Estado' },

    ];

    const [error, setError] = useState('');
    const baseURL = "http://localhost:8080";
    const closeModal = () => {
        onClose();
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewUser(prevUsuario => ({
            ...prevUsuario,
            [name]: value
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(`${baseURL}/api/usuarios/${newUser}`)
            .then((response) => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error.data)
            })


        //validaciones
        if (!Object.values(newUser).every(value => value !== '')) {
            setError('Complete todos los campos');
            return;
        }
        setNewUser({
            name: '',
            lastName: '',
            dni: '',
            birthday: '',
            email: '',
            address: '',
            phone: '',
            phoneE: '',
            apto: '',
            membershipType: '',
            membershipExpiration: '',
        });
    };


    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <h2> {Object.keys(selected).length !== 0 ? <span className='d-flex justify-content-between'>Miembro <span> #{newUser.id}</span> </span> : <span>Nuevo miembro</span>} </h2>
                <form onSubmit={handleSubmit} className="d-flex flex-column">
                    <div className='d-flex flex-row justify-content-between'>
                        {inputs.slice(0, 2).map(input => (
                            <div key={input.id} className='d-flex flex-column' >
                                <label htmlFor={input.id}>{input.label}</label>
                                <input
                                    type={input.type || 'text'}
                                    id={input.id}
                                    name={input.name}
                                    value={newUser[input.name]}
                                    onChange={handleChange}
                                />
                            </div>

                        ))}
                    </div>
                    <div className='d-flex flex-row justify-content-between'>
                        {inputs.slice(2, 4).map(input => (
                            <div key={input.id}  >
                                <div className='d-flex flex-column'>
                                    <label htmlFor={input.id}>{input.label}</label>
                                    <input
                                        type={input.type || 'text'}
                                        id={input.id}
                                        name={input.name}
                                        value={newUser[input.name]}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                        ))}
                    </div>
                    <div className='d-flex flex-row justify-content-between'>
                        {inputs.slice(5, 7).map(input => (
                            <div key={input.id}  >
                                <div className='d-flex flex-column'>
                                    <label htmlFor={input.id}>{input.label}</label>
                                    <input
                                        type={input.type || 'text'}
                                        id={input.id}
                                        name={input.name}
                                        value={newUser[input.name]}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                        ))}
                    </div>
                    <div className='d-flex flex-row justify-content-between' >
                        {inputs.slice(7, 9).map(input => (
                            <div key={input.id}  >
                                <div className='d-flex flex-column'>
                                    <label htmlFor={input.id}>{input.label}</label>
                                    <input
                                        type={input.type || 'text'}
                                        id={input.id}
                                        name={input.name}
                                        value={newUser[input.name]}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                        ))}
                    </div>
                    <div className='d-flex flex-row justify-content-between' >
                        {inputs.slice(9, 12).map((input, index) => (
                            <div key={input.id} style={{ width: index === 0 ? '70%' : '15%' }} >
                                <div className='d-flex flex-column'>
                                    <label htmlFor={input.id}>{input.label}</label>
                                    {
                                        <input
                                            type={input.type || 'text'}
                                            id={input.id}
                                            name={input.name}
                                            value={newUser[input.name]}
                                            onChange={handleChange}
                                        />
                                    }
                                </div>
                            </div>

                        ))}
                    </div>

                    {error && <p>{error}</p>}
                    <div className={`${styles.button} d-flex `}>
                        <button type="submit" className={styles.btnRegister} >Registrar</button>
                        <button type="button" className={styles.btnBack} onClick={closeModal} >Volver</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

MemberModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    selected: PropTypes.func.isRequired
};

export default MemberModal
