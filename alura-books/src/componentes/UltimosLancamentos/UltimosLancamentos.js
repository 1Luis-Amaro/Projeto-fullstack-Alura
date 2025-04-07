import React from "react";
import { livros } from "./DadosUltimosLancamentos";
import  livro2 from '../../imagens/download.png'
import { Titulo } from "../Titulo/Titulo";
import styled from "styled-components";
import CardRecomenda from "../CardRecomenda/CardRecomenda";

const Container = styled.section`
  background-color: rgb(230, 230, 230);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px; /* Espaço entre os livros */
  padding-bottom: 100px;
  margin-top: 20%
`;

const NovosLivros = styled.img`
    padding-top: 30px;
    width: 16vw;
    height: 100%;
    text-align: center;
    padding-bottom: 0px;
}
`;

const UltimosLancamentos = () => {
  return (
    <Container>
      <Titulo
        cor="rgb(223, 185, 136)"
        tamanhoFonte="35px"
      >
        ÚLTIMOS LANÇAMENTOS
      </Titulo>
      {livros.map((livro) => (
        <NovosLivros src={livro.src} />
      ))}
    <CardRecomenda 
        titulo="Talvez você se interesse por "
        subtitulo="Angular 11"
        descricao="Construindo uma aplicação com a plataforma Google"
        img={livro2 }
    />
    </Container>


  );
};

export default UltimosLancamentos;
