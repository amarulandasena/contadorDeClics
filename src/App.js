import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import logoAyD from './img/A&D_SOFT.jpg';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  };

  const reiniciarContador = () => {
    setNumClics(0);
  };

  return (
    <div className="App">
      
      <header className='contenedorLogo'>
        <img 
          className='logo'
          src={logoAyD}
          alt='Logo AyD soft' />
      </header>

      <section className='contenedorContador'>
        <Contador
          numClics = {numClics} />
        <Boton 
          textoBoton = 'Clic'
          esBotonDeClic = {true}
          manejarClic = {manejarClic} />
        <Boton
          textoBoton = 'Reiniciar'
          esBotonDeClic = {false}
          manejarClic = {reiniciarContador} />
      </section>
    </div>
  );
}

export default App;
