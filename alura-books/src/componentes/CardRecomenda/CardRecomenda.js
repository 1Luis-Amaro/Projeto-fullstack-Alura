import React from "react";
import styled from "styled-components";

const CardRecomenda = ({ titulo, subtitulo, descricao, img }) => {
  const Card = styled.div`
    display: block;
    background-color: rgb(252, 244, 233);
    border-radius: 20px;
    padding: 30px 60px 10px 40px;
    height: 30vh;
    width: 45%;
    display: flex;
    padding-bottom: 50px;
    box-shadow: 2px 4px 5px 5px rgba(0, 0, 0, 0.2);
  `;

  const Textos = styled.div`
    padding: 30px;
    display: flex;
    flex-direction: column;

    h3 {
      margin: 0;
      padding-top: 0;
      padding-bottom: 30px;
      color: rgb(223, 185, 136);
    }
  `;

  const Imagem = styled.div `
    padding: 0px 0px 0px 70px;
    align-items: end;
    justify-content: end;

    img {
    width: 12vw;
}

    button {
    height: 5vh;
    width: 12vw;
    display: flex;
    font-size: 20px;
    color: #fff;
    background-color: #e79950;
    align-items: center;
    justify-content: center;
    border: 0;
    cursor: pointer;
    }
  `

  return (
    <Card>
      <Textos>
        <h3>{titulo}</h3>
        <h4>{subtitulo}</h4>
        <p>{descricao}</p>
      </Textos>
      <Imagem>
        <img src={img} alt="" />
        <button> Saiba mais</button>
      </Imagem>
    </Card>
  );
};

export default CardRecomenda;
