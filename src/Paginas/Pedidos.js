import Container from "../Layout/Container"
import styles from './Pedidos.module.css'
import Lista from "./Lista"
import { useState, useEffect } from "react"
import Loading from "../Layout/Loading"


function Pedidos() {
    const [pedidos,setPedidos] = useState([])
    const [removeLoading, setRemoveLoading] = useState (false)
    
    useEffect(() => {
        setTimeout(
            () => {
                fetch('http://localhost:5000/Cadastros', {

            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(resp => resp.json())
            .then(data => {
                console.log(data)
                setPedidos(data)
                setRemoveLoading(true)
            })
            .catch((err) => console.log(err))
            },300)
        }, [])
   
   
   
   return (
    <div className={styles.project_container}>
        <div className={styles.title_container}>
        <h1>Lista de Pedidos</h1>
            <Container customClass="start">
                {pedidos.map((pedidos) => <Lista 
                status={pedidos.status}
                nome={pedidos.cliente.nome}
                subTotal={pedidos.subTotal}
                desconto={pedidos.desconto}
                frete={pedidos.frete}
                valorTotal={pedidos.valorTotal}
                key={pedidos.cliente}
                />)}
                {!removeLoading && <Loading />}
                
                
            </Container>
        </div>
    </div>
           
    )
}

export default Pedidos