import styles from "@styles/patners.module.css"
import nocountry from "/nocountry.png"
import nb from "/nb.png"
import medicus from "/medicus.png"
import ba from "/ba.png"


const Patners = () => {
    return (
        <div className={`${styles.container}`}>
            <p>NUESTROS PATNERS</p>
            <div className={`${styles.images} d-flex justify-content-between align-items-center`} >
                <img className={`${styles.nc}`} src={nocountry} alt="NoCountry" />
                <img className={`${styles.nb}`} src={nb} alt="" />
                <img className={`${styles.med}`} src={medicus} alt="" />
                <img className={`${styles.ba}`} src={ba} alt="" />
            </div>
        </div>
    )
}

export default Patners
