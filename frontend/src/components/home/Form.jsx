import image from "/form-girl.jpg"
import styles from "@styles/form.module.css"

const Form = () => {
    return (
        <div className={`${styles.containerForm} d-flex justify-content-between`}>
            <div className={`${styles.form} col-6 d-flex flex-column align-items-center justify-content-center`}>
                <p>Completá el formulario y un asesor se pondrá en contacto para ayudarte a elegir tu plan y asociarte.</p>
                <form className={` d-flex flex-column w-100`}>
                    <input placeholder="Nombre" type="text" />
                    <input placeholder="Telefono" type="text" />
                    <input placeholder="Correo" type="text" />
                    <button type="submit">Enviar</button>
                </form>
            </div>
            <div className="d-flex align-items-end">
                <img className="w-100" src={image} alt="form" />
            </div>
        </div>
    )
}

export default Form
