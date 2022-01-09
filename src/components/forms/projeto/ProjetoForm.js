import styles from './ProjetoForm.module.css'
import Input from '../Input'
import Select from '../Select'
import { useState, useEffect } from 'react'

import SubmitButton from '../SubmitButton'

export default function ProjetoForm({ handlerSubmit, btnText, projetoData }){

    const [categorias, setCategorias] = useState([])

    const [projeto, setProjeto] = useState(projetoData || {})

    useEffect(() => {
        fetch("http://localhost:5000/categorias",{
            method: "GET",
            headers: {
                'Content-type':'application/json'
            }
        })
        .then((resp) => resp.json())
        .then((data) =>{
            setCategorias(data)
        })
        .catch(error => console.log(error))
    },[])

    const submit = (e) => {
        e.preventDefault()
        handlerSubmit(projeto)
    }

    function handlerChange(e){
        setProjeto({ ...projeto, [e.target.name]: e.target.value })
        
    }

    function handlerCategoria(e){
        setProjeto({ ...projeto, 
            categoria: {
                id: e.target.value,
                nome: e.target.options[e.target.selectedIndex].text

        } })
        console.log(projeto)
    }
   

    return (
        <div>
            <form onSubmit={submit} className={styles.form}>
               <Input 
                    type="text" 
                    text="Nome do Projeto" 
                    name="nomeProjeto"
                    placeholder="Insira o nome do projeto" 
                    handleOnChange={handlerChange}
                    value={projeto.nomeProjeto ? projeto.nomeProjeto : ''}
                />
                <Input 
                    type="number" 
                    text="Orçamento do Projeto" 
                    name="valorProjeto"
                    placeholder="Insira o orçamento do projeto" 
                    handleOnChange={handlerChange}
                    value={projeto.valorProjeto ? projeto.valorProjeto : ''}
                />
                
            <Select 
                name="categororia_id" 
                text="Selecione a categoria" 
                options={categorias}
                handleOnChange={handlerCategoria}
                value={projeto.categoria ? projeto.categoria.id : ''}
            />
            <SubmitButton text={btnText}  />
            </form>
        </div>
    )
}