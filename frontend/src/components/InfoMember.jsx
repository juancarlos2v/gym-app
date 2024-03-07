import PropTypes from 'prop-types';
import styles from "@styles/modal.module.css"
import { useEffect, useState } from 'react';

const InfoMember = ({ onClose, selected }) => {
    const [userInfo, setUserinfo] = useState({});

    useEffect(() => {
        setUserinfo(selected);
    }, [selected])

    const closeModal = () => {
        onClose();
    }
    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <p>Nombre y Apellido</p>
                <p>{`${userInfo.nombre} ${userInfo.apellido}`} </p>
                <p>DNI</p>
                <p>{`${userInfo.dni}`} </p>
                <p>Fecha de Nacimiento</p>
                <p>{`${userInfo.fechaDeNacimiento}`} </p>
                <p>E-mail</p>
                <p>{`${userInfo.direccion}`} </p>
                <p>Telefono</p>
                <p>{`${userInfo.telefono}`} </p>
                <p>Telefono Auxiliar</p>
                <p>{`${userInfo.telefonoAuxiliar}`} </p>
                <p>Apto Fisico</p>
                <p>{`${userInfo.aptoFisico}`} </p>
                <p>Membresia</p>
                <p>{`${userInfo.membresia}`} </p>
                <p>Vencimiento</p>
                <p>{`${userInfo.expiracion}`} </p>
                <p>Estado</p>
                <p>{`${userInfo.estado}`} </p>
                <button type="button" className={styles.btnBack} onClick={closeModal} >Volver</button>
            </div>
        </div>
    )
}
InfoMember.propTypes = {
    onClose: PropTypes.func.isRequired,
    selected: PropTypes.func.isRequired
};

export default InfoMember
