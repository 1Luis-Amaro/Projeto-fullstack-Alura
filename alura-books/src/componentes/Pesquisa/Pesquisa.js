import styled from "styled-components";
import Input from "../Input/Input";
import {useState} from 'react'

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
    const [textoDigitado, setTextoDigitado] = useState(" ")

  return (
    <PesquisaContainer>
      <Titulo> Já sabe por onde começar? </Titulo>
      <Subtitulo>Encontre seu livro em nossa estante</Subtitulo>
      <Input placeholder="Escreva sua próxima leitura"
             onChanged={e =>  setTextoDigitado(e.target.value)} 
       />
       <p> {textoDigitado} </p>
    </PesquisaContainer>
  );
};

export default Pesquisa;
