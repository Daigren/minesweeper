import { useState } from 'react'
import './style.css'

function App() {
  const [count, setCount] = useState(0)

  const rows = 10
  const cols = 20

  const xCoo
  const yCoo

  function drop(rowIndex, colIndex) {
    xCoo = rowIndex
    yCoo = colIndex
    console.log(xCoo, yCoo)
  }

  

  return (
    <div id='main'>
      <div id='plain' style={{ gridTemplateColumns: `repeat(${cols}, 48px)` }}>

        {Array.from({ length: rows }).map((_, rowIndex) => (
          Array.from({ length: cols }).map((_, colIndex) => (
            <div 
              key={`${rowIndex}-${colIndex}`} 
              className="plainButton"
              onClick={() => drop(rowIndex, colIndex)}
            />
          ))
        ))}
      </div>
    </div>
  )
}

export default App
