import React from "react";
import livros from "../componentes/DadosEstante/dadosEstanteAventura";
import livroImg from "../imagens/livro.png"
import styled from "styled-components";

const AppContainer = styled.div`
    min-width: 100vw;
    min-height: 100vh;
    padding-top: 60px;
    background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);

    h2 {
        font-size: 40px;
        display: flex;
        justify-content: center;
        padding: 20px;
        width: 100vw;
        color: #fff;
    }
`;

const ContainerLivro = styled.div`
    display: flex;
    gap: 70px;
    color: #fff;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding: 10px 0px 0px 70px;
    justify-content: center;
`

const Livros = styled.div `
    transition: all 0.3s ease;
    padding-top: 50px;

    p{
        display: flex;
        justify-content: space-between;
        justify-content: center;
        flex-wrap: wrap;
    }

    &:hover {
    border: 2px solid #fff;
    border-radius: 10px;
    padding: 10px;

}
`
const Estante = () => {
  return (
    <AppContainer>
      <h2>Aqui estão todos os nossos livros</h2>
      <ContainerLivro>
      {livros.map((livro) => (
          <Livros key={livro.id}>
              <img src={livroImg} alt="" />   
              <p>{livro.nome}</p>
          </Livros>
          
      ))}

      </ContainerLivro>
    </AppContainer>
  );
};

export default Estante;
