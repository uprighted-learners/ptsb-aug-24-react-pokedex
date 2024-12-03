import { useState } from 'react'
import './App.css'
import Input from './components/Input'
import Pokedex from './components/Pokedex'

function App() {

  const [poke, setPoke] = useState("")

  return (
    <>
      <Input setPoke={setPoke} />
      {console.log(`Value of poke: ${poke}`)}
      <Pokedex poke={poke} />
    </>
  )
}

export default App
