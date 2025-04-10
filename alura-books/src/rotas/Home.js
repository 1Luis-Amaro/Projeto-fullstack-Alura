
import { Header } from '../componentes/Header/Header';
import styled from 'styled-components'
import Pesquisa from '../componentes/Pesquisa/Pesquisa';
import UltimosLancamentos from '../componentes/UltimosLancamentos/UltimosLancamentos';

//compoenentizando o css
const AppContainer = styled.div`
    min-width: 100vw;
    min-height: 100vh;
    background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
    overflow: auto;
    padding-top: 60px;
    
`

function Home() {
  return (
    <AppContainer>
      <Pesquisa/>
      <UltimosLancamentos/>
    </AppContainer>
  );
}

export default Home;
