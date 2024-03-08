import PropTypes from 'prop-types';
import styles from "@styles/modal.module.css"

const WarningModal = ({ onClose, selected, onDelete }) => {

    const handleClick = () => {
        onDelete(selected);
    };


    const closeModal = () => {
        onClose();
    }



    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-alert-triangle" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ff2825" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 9v4" />
                    <path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z" />
                    <path d="M12 16h.01" />
                </svg>
                <button type="button" onClick={handleClick}>Eliminar</button>
                <button type="button" onClick={closeModal}>Volver</button>
            </div>
        </div>
    )
}
WarningModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    selected: PropTypes.func.isRequired
};

export default WarningModal
