import React from "react";
import { livros } from "./DadosUltimosLancamentos";
import styles from "./UltimosLancamentos.module.css";
import { Titulo } from "../Titulo/Titulo";
import styled from "styled-components";

const Container = styled.section`
  background-color: rgb(230, 230, 230);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: 10px;
  gap: 10px; /* Espaço entre os livros */
`;

const NovosLivros = styled.img`
    padding-top: 30px;
    width: 200px;
    height: auto;
    text-align: center;
    padding-bottom: 80px;
}
`;

const UltimosLancamentos = () => {
  return (
    <Container className={styles.container}>
      <Titulo
        cor="rgb(223, 185, 136)"
        tamanhoFonte="35px"
      >
        ÚLTIMOS LANÇAMENTOS
      </Titulo>
      {livros.map((livro) => (
        <NovosLivros src={livro.src} />
      ))}
    </Container>
  );
};

export default UltimosLancamentos;
