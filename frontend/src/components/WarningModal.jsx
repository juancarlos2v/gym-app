import { useEffect, useState } from "react"
import styles from "@styles/modal.module.css"
import axios from "axios";

const WarningModal = ({ onClose, selected, type }) => {
    const [obj, setObj] = useState({});

    useEffect(() => {
        setObj(selected)
    }, [obj])
    const closeModal = () => {
        onClose();
    }

    // const baseURL = "http://localhost:8080";
    // const deleteObj = () => {
    //     if (type == 'm') {
    //         axios.delete(`${baseURL}/api/usuarios/eliminar/${obj.id}`).then((response) => {

    //         }).catch(e => {
    //             console.log(e)
    //         })

    //     } else {
    //         axios.delete(`${baseURL}/clase/eliminar/`).then((response) => {

    //         }).catch(e => {
    //             console.log(e)
    //         })
    //     }
    // }
    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-alert-triangle" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ff2825" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 9v4" />
                    <path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z" />
                    <path d="M12 16h.01" />
                </svg>
                <button onClick={() => deleteObj}>Eliminar</button>
                <button onClick={closeModal}>Volver</button>
            </div>
        </div>
    )
}

export default WarningModal
