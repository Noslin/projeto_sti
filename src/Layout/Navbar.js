import {Link} from 'react-router-dom'
import Container from './Container'
import styles from './Navbar.module.css'

function Navbar() {
    return (
    <nav className={styles.navbar}>
        <h1>Sti3 | </h1>
        <span>Desenvolvido por Nilson</span>
    <Container>
        <ul className={styles.list}>
            <li className={styles.item}>
            <Link to='/'>Home</Link>
            </li>
            <li  className={styles.item}>
            <Link to='/Pedidos'>Pedidos</Link>
            </li>
            <li  className={styles.item}>
            <Link to='/Produtos'>Produtos</Link>
            </li>
        </ul>
    </Container>
    </nav>
    )
}

export default Navbar