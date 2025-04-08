import styled from "styled-components";
import Input from "../Input/Input";
import { useState, useEffect } from "react";
import { livros } from "./DadosPesquisas";
import { getLivros } from "../../servicos/livro";
import { postFavorito } from "../../servicos/favorito";
import livru from "../../imagens/livro.png";
import { MdAddToPhotos } from "react-icons/md";


const PesquisaContainer = styled.section`
  background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
  color: #fff;
  text-align: center;
  padding: 20px 0;
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
  flex-wrap: wrap; /* Faz os itens quebrarem para a próxima linha */
  justify-content: center;
  gap: 20px; /* Espaçamento entre os itens */
  margin-top: 20px;
`;

const Livro = styled.div`
  display: flex;
  flex-direction: column; /* Mantém imagem e nome empilhados */
  align-items: center;
  justify-content: space-between; /* Distribui igualmente a imagem, nome e ícone */
  height: 220px; /* Fixamos a altura do card */
  padding: 10px;
  width: 150px;
  text-align: center;
  cursor: pointer;
  border-radius: 10px;

  img {
    width: 100px;
  }

  &:hover {
    border: 1px solid white;
  }

   p {
    margin: 10px 0;
    color: white;
    font-size: 14px;
  }
`;

const Add = styled(MdAddToPhotos)`
  display: flex;
  font-size: 24px;
  transition: color 0.3s;

    &:hover {
    color: rgb(107, 216, 180);
  }
`


const Pesquisa = () => {
  const [livrosPesquisados, setLivrosPesquisados] = useState([]);
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    fetchLivros();
  }, []);

  const fetchLivros = async () => {
    const livrosDaApi = await getLivros();
    setLivros(livrosDaApi);
  };

  const insertFavorito = async (id) => {
    try {
      await postFavorito(id);
      alert("Livro adicionado aos favoritos!");
    } catch (error) {
      if (error.response && error.response.status === 422) {
        alert("Este livro já está nos favoritos!");
      } else {
        console.error("Erro ao adicionar favorito:", error);
        alert("Ocorreu um erro ao adicionar o livro aos favoritos.");
      }
    }
  };

  return (
    <PesquisaContainer>
      <Titulo> Já sabe por onde começar? </Titulo>
      <Subtitulo>Encontre seu livro, e caso goste de algum adicione aos seus favoritos!!</Subtitulo>
      <Input
        placeholder="Pesquise um Livro"
        onChange={(e) => {
          const textoDigitado = e.target.value;
          if (textoDigitado === "") {
            setLivrosPesquisados([]);
          } else {
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
            <Livro key={livro.id}>
              <img src={livru} alt={livro.nome} />
              {console.log(livrosPesquisados)}
              <p>{livro.nome}</p>
              <Add onClick={() => insertFavorito(livro.id)} />
            </Livro>
          ))}
        </ResultadoContainer>
      )}
    </PesquisaContainer>
  );
};

export default Pesquisa;
