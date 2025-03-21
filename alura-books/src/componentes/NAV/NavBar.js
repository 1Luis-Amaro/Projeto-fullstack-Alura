import React from 'react'
import styles from './NavBar.module.css'
import { BsBasket } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";



const NavBar = (textoOpcoes) => {

     textoOpcoes = ['CATEGORIAS', 'MINHA ESTANTE', 'FAVORITOS']
    
  return (
        <div className={styles.container} >
        <ul className={styles.opcoes} >
            {textoOpcoes.map((texto) => (
                <li className={styles.lista}> 
                    <p>{texto} </p> 
                </li>
        ))}
        </ul>
        <div className={styles.logoContainer} >  
                <FaRegUserCircle className={styles.logo}  />
                <BsBasket className={styles.logo} />
        </div>
        
        </div>

    
        
    
  )
}

export default NavBar