import image from "/exc.png"
import styles from "@styles/about.module.css"

const About = () => {
    return (

        <div className={` d-flex justify-content-between align-items-center ${styles.container}`}>
            <div className={`d-none d-lg-block d-sm-none col-lg-6 `}>
                <img className={`img-fluid`} src={image} alt="patners" />
            </div>
            <div className={` col-sm-12 col-md-12  col-lg-6 ${styles.text} d-flex flex-column justify-content-center align-items-center p-lg-3`}>
                <h2>Uníte a nuestra comunidad fitness y alcanza tus metas juntos</h2>
                <p>La energía y el compromiso se combinan para crear un ambiente donde  todos pueden prosperar. Nuestra comunidad está impulsada por el deseo  compartido de alcanzar la mejor versión de nosotros mismos. Desde  entrenamientos personalizados hasta clases grupales emocionantes, aquí  encontrarás todo lo que necesitas para tu viaje hacia la salud y el  bienestar.</p>

            </div>
        </div>
    )
}

export default About
