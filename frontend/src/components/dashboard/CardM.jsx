import styles from "@styles/cards.module.css"

const CardM = () => {
  return (
    <>
      <div className={`${styles.card}`} >
        <div className={`${styles.cardusers} d-flex justify-content-between`} >
          <h2>100</h2>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-bolt" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
            <path d="M6 21v-2a4 4 0 0 1 4 -4h4c.267 0 .529 .026 .781 .076" />
            <path d="M19 16l-2 3h4l-2 3" />
          </svg>
        </div>
        <div className={`${styles.cardusersdark}`}>
          <p>Inscripciones</p>
        </div>
      </div>
    </>
  )
}

export default CardM
