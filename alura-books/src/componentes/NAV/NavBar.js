import React from 'react'
import styles from './NavBar.module.css'
import { BsBasket } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import styled from 'styled-components'

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
`

const LogoContainer = styled.div `
    padding: 35px;
`


const NavBar = () => {
    const textoOpcoes = ['CATEGORIAS', 'MINHA ESTANTE', 'FAVORITOS'] 

  return (
        <Container>
        <Nav>
            {textoOpcoes.map((texto) => (
                <Lista> 
                    <p>{texto} </p> 
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