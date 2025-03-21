import React from 'react'
import Logo from '../Logo/Logo'
import NavBar from '../NAV/NavBar'
import styled from 'styled-components'

const HeaderContainer = styled.header`
    background-color: #fff;
    display: flex;
    justify-content: center;


`

export const Header = () => {
  return (
    <HeaderContainer>
        <Logo/>
        <NavBar/>
      </HeaderContainer>
  )
}
