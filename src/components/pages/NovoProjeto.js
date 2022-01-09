import styles from './NovoProjeto.module.css'
import ProjetoForm from '../forms/projeto/ProjetoForm'
import  { useNavigate  } from 'react-router-dom'

export default function NovoProjeto() {

    //const history = history()
    let navigate = useNavigate();

    function createPost(projeto) {
        projeto.cost = 0
        projeto.services = []

        fetch("http://localhost:5000/projetos", {
            method: 'POST',
            headers: {
                "Content-type":"application/json"
            },
            body: JSON.stringify(projeto),
        })
            .then((resp) => resp.json())
            .then(data => {
                console.log(data)
                navigate('/projetos',{state:{message: 'Projeto criado com sucesso'}});
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <div className={styles.novoprojeto_container}>
                <h1>Criar Projeto</h1>
                <p>Crie seu projeto para depois add os serviços</p>
                <ProjetoForm handlerSubmit={createPost} btnText="Criar Projeto" />
            </div>
        </>
    )
}