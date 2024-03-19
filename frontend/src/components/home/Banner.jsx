//import banner from "/banner.png"
import styles from "@styles/banner.module.css"

const Banner = () => {
    return (
        <>
            <div className={`d-flex justify-content-between ${styles.container}`}>
                <div className={`d-flex flex-column justify-content-center align-items-center col-6 ${styles.text} d-lg-block d-md-none d-sm-none d-none `}>
                    <p>TODAS LAS</p>
                    <p className={`${styles.yellow}`}>ACTIVIDADES</p>
                    <p>QUE BUSCÁS</p>
                </div>
                <div className={`${styles.boxImage} col-lg-6 col-md-12 col-sm-12 container-fluid`}  >
                    <div className={`${styles.overlay}`}>
                        {/* <img className={` w-100`} src={banner} alt="banner" /> */}
                        <div className={`${styles.text} d-lg-none d-md-block d-flex flex-column justify-content-center align-items-center `} >
                            <p>TODAS LAS</p>
                            <p className={`${styles.yellow}`}>ACTIVIDADES</p>
                            <p>QUE BUSCÁS</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner
