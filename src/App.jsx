import React from 'react';
import './App.css'; 
import Componente2 from './componente2'; 

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
      <div className="square-container">
        <Button onClick={handleClick}>play</Button>
      </div>
      <Componente2/> 
    </div>
  );
}

export default App;
