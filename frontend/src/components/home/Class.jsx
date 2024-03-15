import styles from "@styles/classes.module.css"
import class1 from "/class-1.png"
import class2 from "/class-2.png"
import class3 from "/class-3.png"

const Class = () => {
    return (
        <div className={`${styles.container}`}>
            <h1>CONOCÉ NUESTRAS CLASES</h1>
            <div className={`${styles.images} d-flex justify-content-between`}>
                <img src={class1} alt="" />
                <img src={class2} alt="" />
                <img src={class3} alt="" />
            </div>
        </div>
    )
}

export default Class
