import styles from '../styles/Menu.module.css'

function Menu() {
    return <div className={styles.menu}>
        <a href="/" style={{width: `${40}px`, backgroundColor: 'black'}}>
            <img src="/icon.svg" style={{maxHeight: `${100}%`, width: `${31}px`}} />
        </a>
        <a href="/download">Download</a>
        <a href="/blog">Blog</a>
        <a href="/docs">Documentation</a>
        <a href="https://github.com/xstoreapp" target="_blank">GitHub</a>
    </div>
}

export default Menu