import styles from './ProjetoCard.module.css'
import {Link} from 'react-router-dom'

import { BsPencil, BsFillTrashFill }  from "react-icons/bs";

export default function ProjetoCard({id,nomeProjeto, valorProjeto, categoria, handlerRemove}){

    const remove = (e) => {
        e.preventDefault()
        handlerRemove(id)
    }
    return (
        <>
            <div className={styles.projeto_card}>
                <h4> {nomeProjeto}</h4>
                <p>
                    <span>Orçamento:</span> R${valorProjeto}
                </p>
                <p className={styles.categoria_text}><span className={`${styles[categoria.nome]}`}></span>{categoria.nome}</p>
              
                <div className={styles.projeto_card_actions}>
                    <Link to={`/projeto/${id}`}>
                        <BsPencil /> Editar
                    </Link>
                    <button onClick={remove}>
                        <BsFillTrashFill /> Excluir
                    </button>
                    
                </div>
            </div>
      
        </>
    )
}