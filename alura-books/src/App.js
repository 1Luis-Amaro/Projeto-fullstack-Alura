import './App.css';
import logo from './imagens/logo.svg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo">
          <img src={logo} alt="logo" />
          <p> <strong>27L</strong> Books</p>
        </div>
      </header>
    </div>
  );
}

export default App;
