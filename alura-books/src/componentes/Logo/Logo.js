import React from "react";
import logo from "../../imagens/logo.svg";
import styled from "styled-components";

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5em;

  a {
    text-decoration: none;
  }
`;

const LogoImg = styled.img`
  padding: 0px 0px 0px 10px;
  margin-right: 0.5em;
  width: 40px;
  height: 40px;
`;

const Logo = () => {
  return (
    <LogoContainer>
      <LogoImg src={logo} alt="logo" />
      <p>
        <strong>Alura</strong>Books
      </p>
    </LogoContainer>
  );
};

export default Logo;
