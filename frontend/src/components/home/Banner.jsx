//import banner from "/banner.png"
import styles from "@styles/banner.module.css"

const Banner = () => {
    return (
        <>
            <div className={`d-flex justify-content-between ${styles.container}`}>
                <div className={`d-flex flex-column justify-content-center align-items-center col-6 ${styles.text}`}>
                    <p>TODAS LAS</p>
                    <p className={`${styles.yellow}`}>ACTIVIDADES</p>
                    <p>QUE BUSCÁS</p>
                </div>
                <div className={`${styles.boxImage} col-6`}  >
                    {/* <img className={` w-100`} src={banner} alt="banner" /> */}
                </div>
            </div>
        </>
    )
}

export default Banner
