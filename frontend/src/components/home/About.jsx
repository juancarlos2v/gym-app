import image from "/exc.png"
import styles from "@styles/about.module.css"

const About = () => {
    return (

        <div className={` d-flex justify-content-between ${styles.container}`}>
            <img className={` col-6`} src={image} alt="patners" />
            <div className={` col-6 ${styles.text} d-flex flex-column justify-content-center align-items-center p-3`}>
                <h2>Uníte a nuestra comunidad fitness y alcanza tus metas juntos</h2>
                <p>La energía y el compromiso se combinan para crear un ambiente donde  todos pueden prosperar. Nuestra comunidad está impulsada por el deseo  compartido de alcanzar la mejor versión de nosotros mismos. Desde  entrenamientos personalizados hasta clases grupales emocionantes, aquí  encontrarás todo lo que necesitas para tu viaje hacia la salud y el  bienestar.</p>

            </div>
        </div>
    )
}

export default About
