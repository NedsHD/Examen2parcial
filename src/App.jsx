import React from 'react';
import './App.css'; 
import Componente2 from './componente2'; 
import Componente3 from './componente3'; 

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
      <div className="content">
        <Componente3 /> 
        <div className="button-container">
          <Button onClick={handleClick}>play</Button>
        </div>
        <Componente2 /> 
      </div>
    </div>
  );
}

export default App;
