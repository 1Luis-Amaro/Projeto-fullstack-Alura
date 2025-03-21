import React from "react";
import logo from "../../imagens/logo.svg";

//CSS
import styled from "styled-components";

const LogoContainer = styled.div`
  display: flex;
  font-size: 2em;
`;

const LogoImg = styled.img`
  margin-right: 0.5em;
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
