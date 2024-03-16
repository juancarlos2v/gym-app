import logo from "/logo.png"
import styles from "@styles/nav.module.css"

const Nav = () => {
  return (
    <>
      <nav className={`d-flex flex-lg-row flex-sm-row flex-xs-row justify-content-between 
      justify-content-sm-between flex-md-column  align-items-center  ${styles.nav}`}>
        <div className='col-lg-2 col-md-3 col-sm-2  p-md-0 d-md-flex align-items-center pb-md-2'>
          <h1 className="d-none d-md-block d-lg-none">GYMOVE</h1>
          <img className="img-fluid" src={logo} alt="gymove" />
        </div>
        <div className={`d-none d-lg-block d-md-block d-sm-none col-lg-6 col-md-10 col-sm-12  d-lg-flex  d-md-flex justify-content-between  ${styles.link}`}  >
          <a href="">NOSOTROS</a>
          <a href="">CLASES</a>
          <a href=""> SEDES</a>
          <a className={`${styles.button}`} href="">ASOCIATE</a>
        </div>
        <div className=" d-lg-none d-md-none d-sm-block  d-flex justify-content-end">
          <p>menu</p>
        </div>
      </nav>
    </>
  )
}

export default Nav
