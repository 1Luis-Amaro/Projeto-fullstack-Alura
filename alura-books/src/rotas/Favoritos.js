import { useState, useEffect } from "react";
import styled from "styled-components";
import { deleteFavorito, getFavoritos } from "../servicos/favorito";
import livros from "../imagens/livro.png";
import { FaRegTrashAlt } from "react-icons/fa";


//compoenentizando o css
const AppContainer = styled.div`
    min-width: 100vw;
    min-height: 100vh;
    padding-top: 60px;
    background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
     
    p {
      display: flex;
      align-items: center ;
      justify-content: center; 
      
      color: #fff;

    }

    h1 {
      padding-top: 70px;
      padding-bottom: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-size: 40px;
      color: #fff;
      width:100px
      height:10000px
    }  
    
`;
const Livros = styled.div`
  display: flex;
  justify-content: flex-start; /* <-- Alinha tudo ao início da linha */
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 50px;
  flex-wrap: wrap;
  width: 100%;
  

  
`;

const ContainerFav = styled.div`
  transition: all 0.3s ease;
    padding-top: 50px;

    &:hover {
    border: 2px solid #fff;
    border-radius: 10px;
    padding: 10px;
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
      <h1>Aqui estão seus livros favoritos</h1>
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
