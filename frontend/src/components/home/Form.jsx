import image from "/form-girl.jpg"

const Form = () => {
    return (
        <div>
            <div>
                <p>Completá el formulario y un asesor se pondrá en contacto para ayudarte a elegir tu plan y asociarte.</p>
                <div>
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <button type="button">Enviar</button>
                </div>
            </div>
            <img src={image} alt="form" />
        </div>
    )
}

export default Form
