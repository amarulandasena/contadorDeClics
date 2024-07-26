import React from 'react';
import '../css/Boton.css';

function Boton ({ textoBoton, esBotonClic, manejarClic }) {
    return (
        <button 
          className = { esBotonClic ? 'botonClic' : 'botonReiniciar' }
          onClick={manejarClic}>
          {textoBoton}
        </button>
    );
}

export default Boton;