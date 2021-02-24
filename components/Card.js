import styles from '../styles/Card.module.css'

function Card({ name, src, onClick }) {
    return <div onClick={onClick} className={styles.card}>
        <img src={src} />
        <h2>{ name }</h2>
    </div>
}

export default Card