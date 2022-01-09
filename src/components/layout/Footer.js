import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa'
import styles from './Footer.module.css'

export default function Footer(){
    return (
        <>
            <footer className={styles.footer}>
                    <ul className={styles.social_list}>
                        <li>
                            <FaLinkedin /> 
                        </li>
                        <li>
                            <FaInstagram /> 
                        </li>
                        <li>
                            <FaFacebook /> 
                        </li>
                    </ul>
                    <p className={styles.copy_right}>
                        <span>Costs</span> &copy; 2021 
                    </p>
            </footer>
        </>
    )
}