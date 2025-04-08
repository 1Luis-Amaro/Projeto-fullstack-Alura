import React from "react";
import styled from "styled-components";
import livros1 from "../componentes/DadosCategorias/dadosCategoriasAcao.js";
import livros2 from "../componentes/DadosCategorias/dadosCategoriasAventura.js";
import livros3 from "../componentes/DadosCategorias/dadosCategoriasTerror.js";
import livroImg from "../imagens/livro.png";

const AppContainer = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  padding-top: 60px;
  background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);

  h1 {
    display: flex;
    justify-content: center;
    color: #fff;
  }
`;

const Categoria = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
  padding-top: 40px;

  p {
    display: flex;
    justify-content: center;
    color: #fff;
    text-align: center;

    max-width: 200px; /* ou o valor que quiser */
    margin-top: 10px;
  }

  }
`;

const Livros = styled.div `
    transition: all 0.3s ease;
    padding-top: 50px;

    &:hover {
    border: 2px solid #fff;
    border-radius: 10px;
    padding: 10px;

}
`

const Categorias = () => {
  return (
    <AppContainer>
      <h1>Ação</h1>
      <Categoria>
        {livros1.map((livro) => (
          <Livros key={livro.id}>
            <img src={livroImg} alt="" />
            <p>{livro.nome}</p>
          </Livros>
        ))}
      </Categoria>

      <hr />

      <h1>Aventura</h1>
      <Categoria>
        {livros2.map((livro) => (
          <Livros key={livro.id}>
            <img src={livroImg} alt="" />
            <p>{livro.nome}</p>
          </Livros>
        ))}
      </Categoria>

      <hr />

      <h1>Terror</h1>
      <Categoria>
        {livros3.map((livro) => (
          <Livros key={livro.id}>
            <img src={livroImg} alt="" />
            <p>{livro.nome}</p>
          </Livros>
        ))}
      </Categoria>
    </AppContainer>
  );
};

export default Categorias;
