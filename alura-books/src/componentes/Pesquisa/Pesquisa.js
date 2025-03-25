import styled from "styled-components";
import Input from "../Input/Input";
import { useState } from "react";
import { livros } from "./DadosPesquisas";

const PesquisaContainer = styled.section`
  background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
  color: #fff;
  text-align: center;
  padding: 85px 0;
  height: 270px;
  width: 100%;
`;

const Titulo = styled.h2`
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;
`;

const Subtitulo = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`;

/* Flexbox para organizar os livros horizontalmente */
const ResultadoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;  /* Faz os itens quebrarem para a próxima linha */
  justify-content: center;
  gap: 20px; /* Espaçamento entre os itens */
  margin-top: 20px;
`;

const Livro = styled.div`
  display: flex;
  flex-direction: column; /* Mantém imagem e nome empilhados */
  align-items: center;
  width: 150px;
  text-align: center;
  cursor: pointer;

  img {
    width: 100px;
  }

  &:hover {
    border: 1px solid white;
  }
`;

const Pesquisa = () => {
  const [livrosPesquisados, setLivrosPesquisados] = useState([]);

  return (
    <PesquisaContainer>
      <Titulo> Já sabe por onde começar? </Titulo>
      <Subtitulo>Encontre seu livro em nossa estante</Subtitulo>
      <Input
        placeholder="Escreva sua próxima leitura"
        onChange={(e) => {
          const textoDigitado = e.target.value;
          if (textoDigitado === "" ) {
            setLivrosPesquisados([])
          }else {

              const resultadoPesquisa = livros.filter((livro) =>
                livro.nome.toLowerCase().includes(textoDigitado.toLowerCase())
              );
              setLivrosPesquisados(resultadoPesquisa);
            }
        }}
      />
      
      {/* Exibe os resultados somente se houver livros pesquisados */}
      {livrosPesquisados.length > 0 && (
        <ResultadoContainer>
          {livrosPesquisados.map((livro) => (
            <Livro key={livro.nome}>
              <img src={livro.src} alt={livro.nome} />
              <p>{livro.nome}</p>
            </Livro>
          ))}
        </ResultadoContainer>
      )}
    </PesquisaContainer>
  );
};

export default Pesquisa;
