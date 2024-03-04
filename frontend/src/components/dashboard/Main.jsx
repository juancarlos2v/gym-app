import logo from "/logo.png"
import style from "@styles/dashboardmain.module.css"
import { useState, useEffect } from "react";

const Main = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const getMonthName = (month) => {
        const monthNames = [
            "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
            "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
        ];
        return monthNames[month];
    };

    // Formatear la fecha en "día de mes"
    const formattedDate = `${time.getDate()} de ${getMonthName(time.getMonth())}`;

    return (

        <div className={`${style.main}  d-flex flex-column justify-content-between`}>
            <div className={`${style.background}  mb-4 d-flex flex-column justify-content-center align-items-center`} >
                <img src={logo} alt="gymove" />
                <p className={style.title}>GYMOVE</p>
            </div>
            <div >
                <div className="d-flex flex-column justify-content-end">
                    <button className={`${style.buttons}`} >
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-military-award" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '15px' }}>
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 13m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                            <path d="M8.5 10.5l-1 -2.5h-5.5l2.48 5.788a2 2 0 0 0 1.84 1.212h2.18" />
                            <path d="M15.5 10.5l1 -2.5h5.5l-2.48 5.788a2 2 0 0 1 -1.84 1.212h-2.18" />
                        </svg>
                        Miembros
                    </button>
                </div>


                <div className={`${style.border} d-flex flex-column justify-content-end `}>
                    <button className={`${style.buttons}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-check" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '15px' }}>
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                            <path d="M9 12l2 2l4 -4" />
                        </svg>

                        Clases
                    </button>
                </div>
            </div>

            <div className={`${style.background} mb-4`}>
                <h2>{time.toLocaleTimeString()}</h2>
                <p>{formattedDate} </p>
            </div>
        </div>
    )
}

export default Main