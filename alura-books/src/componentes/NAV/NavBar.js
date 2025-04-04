import React from 'react'
import styles from './NavBar.module.css'
import { BsBasket } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';

const Container = styled.div `
    display: flex;
    
`

const Nav = styled.ul `
    display: flex;
`

const Lista = styled.li`
    font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  min-width: 120px;

a {
    text-decoration: none;
    color: black;
    transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out; /* Transição suave */
  } 

  .ativo {
  border-radius: 10px;
  background-color: black;
  padding: 2px 15px;
  color: #fff;
  transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out; /* Transição mais lenta */

}
`

const LogoContainer = styled.div `
    padding: 35px;
`


const NavBar = () => {
    const textoOpcoes = ['CATEGORIAS', 'ESTANTE', 'FAVORITOS'] 

  return (
        <Container>
        <Nav>
            {textoOpcoes.map((texto) => (
                <Lista> 
                   <NavLink to={ `/${texto.toLowerCase()}` } className={({isActive}) => isActive ? "ativo" : "inativo"} >
                    <p>{texto} </p> 
                    
                    </NavLink> 
                </Lista>
        ))}
        </Nav>
        <LogoContainer >  
                <FaRegUserCircle className={styles.logo}  />
                <BsBasket className={styles.logo} />
        </LogoContainer>
        
        </Container>

    
        
    
  )
}

export default NavBar