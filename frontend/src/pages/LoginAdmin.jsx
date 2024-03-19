import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import logo from "/logo.png"
import styles from '@styles/loginpage.module.css'

const baseURL = "http://localhost:8080";

const Index = () => {
    const navigate = useNavigate();
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

        fetch(baseURL, {
            'method': 'POST'
        })
            .then((response) => {
                return response.json;
            })
            .then(() => {
                navigate('/dashboard')
            })
            .catch((e) => {
                setPassword(e);
            })

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
                        <button
                            type="submit"
                            className={`${styles.btnRegister}`} >
                            Ingresar
                        </button>
                    </form>
                </div>
            </div>
            <div className={`${styles.background} col-8`}>

            </div>

        </div>
    )
}

export default Index
