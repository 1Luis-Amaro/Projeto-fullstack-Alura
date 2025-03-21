import React from 'react'
import Logo from '../Logo/Logo'
import NavBar from '../NAV/NavBar'
import styled from 'styled-components'

const HeaderContainer = styled.header`
    background-color: #fff;
    border-bottom:  solid 2px black;
    display: flex;
    justify-content: center;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3); /* Sombra preta esfumaçada */

`

export const Header = () => {
  return (
    <HeaderContainer>
        <Logo/>
        <NavBar/>
      </HeaderContainer>
  )
}
