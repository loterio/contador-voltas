import React, { useState } from 'react';

const MostraVoltas = (props) =>{
  return (
    <p>
      {props.voltas}<br/>
      voltas
    </p>
  )
}

const MostraTempo = (props) => {
  return (
    <p>
      {props.tempo}<br/>
      Tempo médio por volta
    </p>
  )
}

const Btn = (props) => <button>{props.label}</button>

// function plus = () =>{

// }

function App() {
  return (
    <div className='App'>
      <MostraVoltas voltas='7' />
      <Btn label='+' />
      <Btn label='-' />
      <MostraTempo tempo='01:35' />
      
      <Btn label='Iniciar' />
      <Btn label='Reiniciar' />
    </div>
  );
}

export default App;
