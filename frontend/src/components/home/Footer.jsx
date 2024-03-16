import styles from "@styles/footer.module.css"
import IconGithub from "@components/icons/IconGithub"
import IconInstagram from "@components/icons/IconInstagram"
import IconLinkedIn from "@components/icons/IconLinkedIn"

const Footer = () => {
    return (
        <div className={`${styles.container} `}>
            <div className={` d-flex justify-content-between`} >
                <div className={` d-flex flex-column`}>
                    <p>GYMOVE</p>
                    <div className="d-flex align-items-center">
                        <IconGithub />
                        <IconInstagram />
                        <IconLinkedIn />
                    </div>
                </div>
                <div className={` d-flex flex-column`}>
                    <p>SOCIOS</p>
                    <a href="">Atencion al socio</a>
                    <a href=""> Solicitud de baja</a>
                </div>
                <div className={` d-flex flex-column`}>
                    <p>LEGAL</p>
                    <a href="">Pautas de convivencia</a>
                    <a href="">Terminos y condiciones</a>
                    <a href="">Política y privacidad</a>
                    <a href="">Defensa al Consumidor</a>
                </div>
            </div>
            <div className={`${styles.text}`}>
                <p>
                    En GyMove cuidamos tu salud, por eso te recordamos que tu apto médico  es indispensable al momento de iniciar una actividad física (leyes nº  139 y 12329). Copyright (c) 2024 GYMOVE. Todos los derechos reservados.
                </p>
            </div>
        </div>
    )
}

export default Footer
