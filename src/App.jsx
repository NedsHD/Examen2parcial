// App.jsx

import React from 'react';
import './App.css'; // Asegúrate de que la ruta sea correcta según la ubicación del archivo CSS

function Button(props) {
  return (
    <button className="button" onClick={props.onClick}>
      {props.children}
    </button>
  );
}

function App() {
  const handleClick = () => {
    console.log('Botón clickeado');
  };

  return (
    <div className="container">
      <Button onClick={handleClick}>Play</Button>
    </div>
  );
}

export default App;
