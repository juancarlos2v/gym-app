import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import styles from "@styles/modal.module.css"
const InfoClasses = ({ onClose, selected }) => {
    const [classInfo, setClassInfo] = useState({});

    useEffect(() => {
        setClassInfo(selected);
    }, [selected])

    const closeModal = () => {
        onClose();
    }
    return (
        <div className={styles.overlay}>
            <div className={`${styles.modal} d-flex justify-content-between`} >
                <div>
                    <p>Nombre:{`  ${classInfo.nombre}`} </p>
                    <p>Entrenador:{`  ${classInfo.entrenador}`} </p>
                    <p>Fecha:{`  ${classInfo.fechaYhora}`} </p>
                    <p>Turno:{`  ${classInfo.turno}`} </p>
                    <p>Precio:{`  ${classInfo.precio}`} </p>
                    <p>Activo:{`  ${classInfo.activo}`} </p>
                    <p>Cupo: {`  ${classInfo.cupo}`} </p>
                </div>
                <button
                    onClick={closeModal}
                    className='d-flex align-items-start p-0'
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-x" width="25" height="25" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                        <path d="M10 10l4 4m0 -4l-4 4" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

InfoClasses.propTypes = {
    onClose: PropTypes.func.isRequired,
    selected: PropTypes.func.isRequired
};

export default InfoClasses
