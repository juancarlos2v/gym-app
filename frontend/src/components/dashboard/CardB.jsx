import styles from "@styles/cards.module.css"

const CardB = () => {
    return (
        <>
            <div className={`${styles.card}`} >
                <div className={`${styles.cardbalance} d-flex justify-content-between`} >
                    <h2>+10</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-rotate-clockwise" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4.05 11a8 8 0 1 1 .5 4m-.5 5v-5h5" />
                    </svg>
                </div>
                <div className={`${styles.cardbalancedark}`}>
                    <p>Balance</p>
                </div>
            </div>
        </>
    )
}

export default CardB
