import LinkButton from '../Layout/LinkButton'
import styles from './Home.module.css'




function Home() {
    return (
        <section className={styles.home_container}>
            <br></br>
            <h1>Listagem de pedidos</h1>
            <p>Aqui você poderá visualizar todos os pedidos emitidos.</p>
            <LinkButton to='/Pedidos' text='Consultar Pedidos'/>
        </section>
    )
    

}

export default Home