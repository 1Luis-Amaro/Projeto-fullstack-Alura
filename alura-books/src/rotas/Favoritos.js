import { useState, useEffect } from "react";
import styled from "styled-components";
import { deleteFavorito, getFavoritos } from "../servicos/favorito";
import livros from "../imagens/livro.png";
import { FaRegTrashAlt } from "react-icons/fa";


//compoenentizando o css
const AppContainer = styled.div`
    min-width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
    overflow: auto;
    flex-wrap: wrap; /* Permite que os itens quebrem linha caso não caibam */
    justify-content: center;
    align-items: center;
    
    
    
    p {
      display: flex;
      align-items: center ;
      justify-content: center; 
      
      color: #fff;

    }

    h1 {
      padding-top: 50px;
      padding-bottom: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      color: #fff;
      width:100px
      height:10000px
    }  
    
`;
const Livros = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 50px; /* Espaçamento entre os itens */
`;

const ContainerFav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 5px; /* Espaçamento entre imagem e nome */
  padding: 10px; /* Adiciona um espaçamento interno */

  /* Aplica a borda ao passar o mouse no bloco inteiro */
  &:hover {
    border: 3px solid #fff;
    border-radius: 10px;
    transition: border 0.3s ease-in-out;
  }
  img {
    width: 10vw;
    height: auto;
    border-radius: 5px;
  }
`;

const  TrashIcon = styled(FaRegTrashAlt) `
  color: #fff;
  cursor: pointer;
  font-size: 24px;
  

  &:hover {
    color: red;
  }
`

function Favoritos() {
  const [favoritos, setFavoritos] = useState();

  const fetchfavoritos = async () => {
    const favoritosDaAPI = await getFavoritos();
    setFavoritos(favoritosDaAPI);
  };

  const deletarFavorito = async (id) => {
    await deleteFavorito(id)
    await fetchfavoritos()
    alert(`Livro de id: ${id} deletado!`)
  }

  useEffect(() => {
    fetchfavoritos();
  }, []);

  return (
    <AppContainer>
      <h1>Aqui estão seus livros favoritos:</h1>
      <Livros>
        {favoritos &&
          favoritos.map((favorito) => (
            <ContainerFav key={favorito.id} >
              <img src={livros} alt="" />
              <p>{favorito.nome}</p>
              <TrashIcon onClick={() => deletarFavorito(favorito.id)} />
            </ContainerFav>
          ))}
      </Livros>
    </AppContainer>
  );
}

export default Favoritos;
