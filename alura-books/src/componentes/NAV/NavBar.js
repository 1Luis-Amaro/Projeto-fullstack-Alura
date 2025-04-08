import React from 'react';
import { BsBasket } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';
import styles from './NavBar.module.css';

const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  z-index: 1000;
  box-shadow: 5px 3px 5px black;

`;

const Nav = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`;

const Lista = styled.li`
  font-size: 16px;

  a {
    text-decoration: none;
    color: black;
    padding: 8px 15px;
    border-radius: 8px;
    transition: all 0.3s ease-in-out;
  }

  a.ativo {
    background-color: black;
    color: white;
  }
`;

const Icones = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  svg {
    font-size: 24px;
    cursor: pointer;
    color: #002f52;
  }
`;

const NavBar = () => {
  const textoOpcoes = ['CATEGORIAS', 'ESTANTE', 'FAVORITOS'];

  return (
    <Container>
      <Link to={``}  >  
      <Logo />
      </Link> 
      <Nav>
        {textoOpcoes.map((texto, index) => (
          <Lista key={index}>
            <NavLink
              to={`/${texto.toLowerCase()}`}
              className={({ isActive }) => (isActive ? 'ativo' : '')}
            >
              {texto}
            </NavLink>
          </Lista>
        ))}
      </Nav>

      <Icones>
        <FaRegUserCircle className={styles.logo} />
        <BsBasket className={styles.logo} />
      </Icones>
    </Container>
  );
};

export default NavBar;
