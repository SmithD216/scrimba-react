import { useState } from 'react'
import './App.css'
import Heading from './components/Heading'
import Meme from './components/Meme'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Heading />
      <Meme />
    </div>
  )
}

export default App
