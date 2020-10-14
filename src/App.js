import React, { useState, useEffect } from 'react';
import './style.css'

// Componentes
import MostraVoltas from './MostraVoltas'
import MostraTempo from './MostraTempo'
import Btn from './Btn'

function App() {
  const [numVoltas,setNumVoltas] = useState(0)
  const [status,setStatus] = useState(false)
  const [tempo,setTempo] = useState(0)


  useEffect(() => {
    let timer = null
    if (status) {
      timer = setInterval(()=>{
        setTempo(old => old + 1)
      }, 1000)  
    }
    return () => {
      if (timer) { // truthy - valor que é convertido para true
        clearInterval(timer)
      }
    }
  }, [status])

  const toggleStatus = () => {
    setStatus(!status)
  }

  const plus = () => setNumVoltas(numVoltas + 1)

  const less = () => {
    if(numVoltas > 0)
      setNumVoltas(numVoltas - 1)
  }
  const reset = () => {
    setNumVoltas(0)
    setTempo(0)
  }

  return (
    <div className='App'>
      <MostraVoltas voltas={numVoltas} />
      <Btn label='+' className='act' onClick={plus} />
      <Btn label='-' className='act' onClick={less} />
      {
        numVoltas > 0 &&
        <MostraTempo tempo={Math.round(tempo/numVoltas)} />
      }  
      <Btn onClick={toggleStatus} label={status ? 'Pausar' : 'Iniciar'} />
      <Btn onClick={reset} label='Reiniciar' />
    </div>
  );
}

export default App;
