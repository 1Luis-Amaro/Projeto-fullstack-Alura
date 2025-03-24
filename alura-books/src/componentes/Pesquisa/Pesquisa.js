import styled from "styled-components";
import Input from "../Input/Input";
import {useState} from 'react'
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

const Pesquisa = () => {
    const [livrosPesquisados, setLivrosPesquisados] = useState([])

    console.log(livrosPesquisados)

  return (
    <PesquisaContainer>
      <Titulo> Já sabe por onde começar? </Titulo>
      <Subtitulo>Encontre seu livro em nossa estante</Subtitulo>
      <Input placeholder="Escreva sua próxima leitura"
             onChange={e =>  {
                const textoDigitado = e.target.value
                const resultadoPesquisa = livros.filter(livro => livro.nome.includes(textoDigitado))
                setLivrosPesquisados(resultadoPesquisa)
             }} 
       />
      
    </PesquisaContainer>
  );
};

export default Pesquisa;
