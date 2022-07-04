//import styles from './Lista.module.css'
import { TbAdjustments } from "react-icons/tb"
import {Link} from 'react-router-dom'





function Lista ({cliente, status, nome, subTotal, desconto, frete, valorTotal}) {
    return (
        <div>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Status</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Valor</th>
                    <th scope="col">Desconto</th>
                    <th scope="col">Frete</th>
                    <th scope="col">Total</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                        <th scope="row">{status}</th>
                        <td>{nome}</td>
                        <td>{subTotal}</td>
                        <td>{desconto}</td>
                        <td>{frete}</td>
                        <td>{valorTotal}</td>
                        <Link to={'/AlterarCadastro/cliente'}>{cliente}<TbAdjustments/></Link>    
                        
            </tbody>
        </table>
    </div>
)
}

export default Lista