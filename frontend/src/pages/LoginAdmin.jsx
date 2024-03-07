import { useState } from "react";
import logo from "/logo.png"
import styles from '@styles/loginpage.module.css'

const Index = () => {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const handleUser = (event) => {
        setUser(event.target.value);
    };

    const handlePassword = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        //axios.post()

    };

    return (
        <div className="d-flex">
            <div className="d-flex flex-column col-4 justify-content-center align-items-center">
                <div className="d-flex align-items-center justify-content-center">
                    <img src={logo} alt="GYMOVE" style={{ width: '25%' }} />
                    <h1>GYMOVE</h1>
                </div>
                <div>
                    <form onSubmit={handleSubmit} className="d-flex flex-column mt-3 ">
                        <label htmlFor="user">Usuario</label>
                        <input
                            type="text"
                            id="user"
                            value={user}
                            onChange={handleUser}
                        />
                        <label htmlFor="password">Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={handlePassword}
                        />
                    </form>
                </div>
            </div>
            <div className={`${styles.background} col-8`}>

            </div>

        </div>
    )
}

export default Index
