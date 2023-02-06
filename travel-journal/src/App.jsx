import './App.css'
import Card from "./components/Card"
import Heading from './components/Heading'
import data from '../public/data.js'

function App() {

  const cards = data.map((card)=>{
    return (
      <Card item={card}/>
    )
  })

  return (
      <div>
        <Heading />
        {cards}
    </div>
  )
}

export default App
