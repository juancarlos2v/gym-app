import styles from "@styles/footer.module.css"
import IconGithub from "@components/icons/IconGithub"
import IconInstagram from "@components/icons/IconInstagram"
import IconLinkedIn from "@components/icons/IconLinkedIn"
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <div className={`${styles.container} `}>
            <div className={` d-flex justify-content-between flex-lg-row flex-md-row flex-column align-items-center align-items-lg-start`} >
                <div className={` d-flex flex-column  align-items-center align-items-lg-start mb-4`}>
                    <p>GYMOVE</p>
                    <div className="d-flex align-items-center">
                        <Link to="https://github.com/juancarlos2v" target="_blank"> <IconGithub /></Link>
                        <Link to="https://instagram.com" target="_blank"><IconInstagram /></Link>
                        <Link to="https://www.linkedin.com/in/juancarlos-vilcherrez/" target="_blank"> <IconLinkedIn /></Link>
                    </div>
                </div>
                <div className={` d-flex flex-column  align-items-center align-items-lg-start mb-4`}>
                    <p>SOCIOS</p>
                    <a href="/#">Atencion al socio</a>
                    <a href="/#"> Solicitud de baja</a>
                </div>
                <div className={` d-flex flex-column  align-items-center align-items-lg-start `}>
                    <p>LEGAL</p>
                    <a href="/#">Pautas de convivencia</a>
                    <a href="/#">Terminos y condiciones</a>
                    <a href="/#">Política y privacidad</a>
                    <a href="/#">Defensa al Consumidor</a>
                </div>
            </div>
            <div className={`${styles.text} text-center text-lg-start`}>
                <p>
                    En GyMove cuidamos tu salud, por eso te recordamos que tu apto médico  es indispensable al momento de iniciar una actividad física (leyes nº  139 y 12329). Copyright (c) 2024 GYMOVE. Todos los derechos reservados.
                </p>
            </div>
        </div>
    )
}

export default Footer
