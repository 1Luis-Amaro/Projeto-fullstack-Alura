import React from "react";
import { livros } from "./DadosUltimosLancamentos";
import  livro2 from '../../imagens/livro2.png'
import { Titulo } from "../Titulo/Titulo";
import styled from "styled-components";
import CardRecomenda from "../CardRecomenda/CardRecomenda";

const Container = styled.section`
  background-color: rgb(230, 230, 230);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px; /* Espaço entre os livros */
  padding-bottom: 30px;
  margin-top: 10%
`;

const NovosLivros = styled.img`
    padding-top: 30px;
    width: 230px;
    height: auto;
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
