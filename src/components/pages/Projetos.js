import styles from './Projetos.module.css'
import { useLocation } from 'react-router-dom'
import Container from '../layout/Container'
import Loading from '../layout/Loading'
import Message from '../layout/Message'
import LinkButton from '../layout/LinkButton'
import ProjetoCard from '../forms/projeto/ProjetoCard'
import { useState, useEffect } from 'react'

export default function Projetos(){

    const location = useLocation()
    let message = ''
    const [projetos, setProjetos] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)

    if(location.state){
        message = location.state.message
    }

    useEffect(() => {
        setTimeout(() => {
        fetch('http://localhost:5000/projetos',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                setProjetos(data)
                setRemoveLoading(true)
            })
            .catch(error => console.log(error))
        },500)
    }, [])

    return(
        <div className={styles.projeto_container}>
            <div className={styles.title_container}>
                <h1>Projetos</h1>
                <LinkButton to="/novoprojeto" text="Criar Projeto" />
            </div>
            {message && <Message msg={message} type="sucess" />}
            <Container customClass='start'>
                {projetos.length > 0 &&
                    projetos.map((projeto) => (
                        <ProjetoCard 
                            id={projeto.id}
                            nomeProjeto={projeto.nomeProjeto}
                            valorProjeto={projeto.valorProjeto}
                            categoria={projeto.categoria ? projeto.categoria : ''}
                            key={projeto.id}
                            />
                    ))}
                    {!removeLoading && <Loading/>}
                    {removeLoading && projetos.length === 0 && (
                        <p>Não há projetos cadastrados</p>
                    )}
            </Container>
        </div>
    )
}