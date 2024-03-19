import styles from "@styles/faq.module.css"
import ArrowDown from "@components/icons/ArrowDown"
const FAQ = () => {
    return (
        <div className={`${styles.container} d-flex  flex-lg-row flex-column `} >

            <div className={` col-lg-6 col-sm-12 `}>
                <h1 className={`${styles.yellow}`}>PREGUNTAS</h1>
                <h1>FRECUENTES</h1>
            </div>
            <div className={` col-lg-6 col-sm-12 `}>
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
