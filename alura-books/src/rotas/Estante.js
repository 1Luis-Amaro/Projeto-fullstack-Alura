import React from "react";
import livros from "../componentes/DadosEstante/dadosEstanteAventura";
import livros2 from "../componentes/DadosEstante/dadosEstanteAcao";
import livros3 from "../componentes/DadosEstante/dadosEstanteTerror";
import livroImg from "../imagens/livro.png"

const Estante = () => {
  return (
    <div>
      <h2>Aqui estão todos os livros comprados:</h2>
      {livros.map((livro) => (
          <div>
              <img src={livroImg} alt="" />   
              <p key={livro.id}>{livro.nome}</p>
          </div>
          
      ))}
    </div>
  );
};

export default Estante;
