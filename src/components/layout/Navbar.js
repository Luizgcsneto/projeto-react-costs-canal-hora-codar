import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'
import Container from './Container'
import logo from '../../img/costs_logo.png'

export default function NavBar(){
    return(
        <>
        <nav className={styles.navbar}>
         <Container >
             <Link to="/">
                <img src={logo} alt="Costs" />
             </Link>
             <ul className={styles.list}>
                 <li  className={styles.item}>
                    <Link to='/'>Home</Link>
                </li>
                <li className={styles.item}>
                <Link to='/projetos'>Projetos</Link>
                </li>
                <li className={styles.item}>
                    <Link to='/empresa'>Empresa</Link>
                </li>
                {/* <li className={styles.item}>
                    <Link to='/novoprojeto'>Novo Projeto</Link>
                </li> */}
                <li className={styles.item}>
                    <Link to='/contato'>Contato</Link>
                </li>
            </ul>
        </Container>
        </nav>
        </>
    )
}