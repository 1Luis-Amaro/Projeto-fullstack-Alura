import './App.css';
import Logo from './componentes/Logo/Logo';
import NavBar from './componentes/NAV/NavBar';
import perfil from './imagens/perfil.svg'
import sacola from './imagens/sacola.svg'

const icones = [perfil, sacola]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo/>
        <NavBar/>
      </header>
    </div>
  );
}

export default App;
