import { useState } from 'react'
import './App.css'

function App() {

const [count, setCount] =useState (0)
  return (
  <>
  <h1>Contador de React</h1>
  <h1>{count}</h1>

  <button id="Incrementar" onClick={() => setCount((count) => count + 1)}>Incrementar</button>
  <button id="Decrementar" onClick={() => setCount((count) => count - 1)}>Decrementar</button>
    </>
  )
}


export default App
