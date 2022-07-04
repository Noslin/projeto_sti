//import { useLocation } from 'react-router-dom'
//import styles from './AlterarCadastro.module.css'
//import Message from '../Layout/Message'
import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'



function AlterarCadastro() {
    const {cliente} = useParams ()
    
    const [alterarCadastro, setAlterarCadastro] = useState ([])

    useEffect(() => {

        fetch('http://localhost/5000/Cadastros/cliente',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(resp => resp.json())
            .then((data) => {
                setAlterarCadastro(data)
            })
        .catch(err => console.log)

    }, [cliente])
    return (
        <div>
            <p>{alterarCadastro.cliente}</p>
            
           
        </div>
    )
    

}

export default AlterarCadastro