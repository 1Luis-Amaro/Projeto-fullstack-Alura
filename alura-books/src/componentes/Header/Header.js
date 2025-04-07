import React from 'react'
import Logo from '../Logo/Logo'
import NavBar from '../NAV/NavBar'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HeaderContainer = styled.header`
    
    border-bottom:  solid 2px black;
    display: flex;
    justify-content: center;
    text-decoration: none;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3); /* Sombra preta esfumaçada */
    
    a{
      text-decoration: none;
      color: black
}
`


export const Header = () => {
  return (
    <HeaderContainer>
      <Link  to="/" >
        <Logo/>
      </Link>
        <NavBar/>
      </HeaderContainer>
  )
}