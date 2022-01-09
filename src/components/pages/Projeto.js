import styles from './Projeto.module.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';

import Loading from '../layout/Loading';
import Container from '../layout/Container';

export default function Projeto(){

    const { id } = useParams();
    const [projeto, setProjeto] = useState([])
    const [showProjetoForm, setShowProjetoForm] = useState(false)

 useEffect(() => {
     setTimeout(() => {
    fetch(`http://localhost:5000/projetos/${id}`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(resp => resp.json())
    .then((data) => {
        setProjeto(data)
    })
    .catch(error => console.log(error))
},500)
 },[id])

 function toggleProjetoForm(){
    setShowProjetoForm(!showProjetoForm)
 }

    return (
        <>
            {projeto.nomeProjeto ? (
                <div className={styles.projeto_detalhes}>
                    <Container customClass='column'>
                        <div className={styles.detalhes_container}>
                            <h1>Projeto: {projeto.nomeProjeto}</h1>
                            <button onClick={toggleProjetoForm} className={styles.btn}>
                                {!showProjetoForm ?'Editar Projeto': 'Fechar'}
                            </button>
                            {!showProjetoForm ? (
                                <div className={styles.projeto_info}>
                                    <p>
                                        <span>Categoria: </span> {projeto.categoria.nome}
                                    </p>
                                    <p>
                                        <span>Total de orçamento:</span> R${projeto.valorProjeto}
                                    </p>
                                    <p>
                                        <span>Total de utilizado:</span> R${projeto.cost}
                                    </p>
                                </div>
                            ) : (
                                <div className={styles.projeto_info}>
                                    <p>Detalhes do Projeto</p>
                                </div>
                            )}
                        </div>
                    </Container>
                </div>
            ) : (
                <Loading />
            )}
        </>
    )
}