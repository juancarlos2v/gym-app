import PropTypes from 'prop-types';
import styles from "@styles/modal.module.css"
import { useEffect, useState } from 'react';
import axios from 'axios';

const ClassModal = ({ onClose, selected }) => {
    const [newClass, setNewClass] = useState({});
    useEffect(() => {
        if (Object.keys(selected).length !== 0) {
            setNewClass({
                id: selected.id,
                name: selected.nombre,
                trainner: selected.entrenador,
                date: selected.fechaYhora,
                turn: selected.turno,
                price: selected.precio,
                activo: selected.activo,
                cupo: selected.cupo,
            });
        } else {
            setNewClass({
                name: '',
                trainner: '',
                date: '',
                turn: '',
                price: '',
                activo: '',
                cupo: '',
            });
        }
    }, [selected])

    const inputs = [
        { id: 'name', name: 'name', label: 'Nombre' },
        { id: 'trainner', name: 'trainner', label: 'Entrenador' },
        { id: 'date', name: 'date', label: 'Fecha', type: 'date' },
        { id: 'turn', name: 'turn', label: 'turno', type: 'number' },
        { id: 'price', name: 'price', label: 'Precio' },
        { id: 'activo', name: 'activo', label: 'Activo' },
        { id: 'cupo', name: 'cupo', label: 'Cupo', type: 'number' },
    ];
    const [error, setError] = useState('');
    const baseURL = "http://localhost:8080";
    const closeModal = () => {
        onClose();
    }


    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewClass(prevUsuario => ({
            ...prevUsuario,
            [name]: value
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(`${baseURL}/api/usuarios/${newClass}`)
            .then((response) => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error.data)
            })


        //validaciones
        if (!Object.values(newClass).every(value => value !== '')) {
            setError('Complete todos los campos');
            return;
        }
        setNewClass({
            name: '',
            trainner: '',
            date: '',
            turn: '',
            price: '',
            activo: '',
            cupo: '',
        });
    };
    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <h2> {Object.keys(selected).length !== 0 ? <span className='d-flex justify-content-between'>Clase <span> #{newClass.id}</span> </span> : <span>Nuevo Clase</span>} </h2>
                <form onSubmit={handleSubmit} className="d-flex flex-column">
                    <div className='d-flex flex-column justify-content-between'>
                        {inputs.map(input => (
                            <div key={input.id} className='d-flex flex-column' >
                                <label htmlFor={input.id}>{input.label}</label>
                                <input
                                    type={input.type || 'text'}
                                    id={input.id}
                                    name={input.name}
                                    value={newClass[input.name]}
                                    onChange={handleChange}
                                />
                            </div>

                        ))}
                    </div>
                    {error && <p>{error}</p>}
                    <div className={`${styles.button} d-flex justify-content-between`}>
                        <button type="submit" className={styles.btnRegister} >Registrar</button>
                        <button type="button" className={styles.btnBack} onClick={closeModal} >Volver</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
ClassModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    selected: PropTypes.func.isRequired
};
export default ClassModal;
