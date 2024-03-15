import logo from "/logo.png"
import styles from "@styles/nav.module.css"

const Nav = () => {
  return (
    <>
      <nav className={`d-flex justify-content-between ${styles.nav}`}>
        <div className='col-2 p-4'>
          <img src={logo} alt="gymove" />
        </div>
        <div className={`d-flex justify-content-between col-8 ${styles.link}`}  >
          <a href="">NOSOTROS</a>
          <a href="">CLASES</a>
          <a href=""> SEDES</a>
          <a className={`${styles.button}`} href="">ASOCIATE</a>
        </div>
      </nav>
    </>
  )
}

export default Nav
