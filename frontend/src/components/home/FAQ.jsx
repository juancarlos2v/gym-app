import styles from "@styles/faq.module.css"
import ArrowDown from "@components/icons/ArrowDown"
const FAQ = () => {
    return (
        <div className={`${styles.container} d-flex `} >

            <div className={` col-6`}>
                <h1 className={`${styles.yellow}`}>PREGUNTAS</h1>
                <h1>FRECUENTES</h1>
            </div>
            <div className={` col-6`}>
                <div className={` ${styles.question} d-flex justify-content-between`}>
                    <p>¿Necesito el apto médico para empezar a entrenar?</p>
                    <ArrowDown />
                </div>
                <div className={`${styles.question} d-flex justify-content-between`}>
                    <p>¿Cómo se abona la cuota?</p>
                    <ArrowDown />
                </div>
            </div>
        </div>
    )
}

export default FAQ
