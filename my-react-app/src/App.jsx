import { useState } from 'react'
import { createEmptyBoard, revealCell } from './gameLogic.js';
import './style.css'

function App() {
  const [count, setCount] = useState(0)

  const rows = 10
  const cols = 20

  const [board, setBoard] = useState(() => createEmptyBoard(rows, cols));
  

  const handleCellClick = (row, col) => {
    const updatedBoard = revealCell(board, row, col);
    setBoard(updatedBoard);
  };
  
  return (
    <div id='main'>
      <div id='plain' style={{ gridTemplateColumns: `repeat(${cols}, 48px)` }}>

        {Array.from({ length: rows }).map((_, rowIndex) => (
          Array.from({ length: cols }).map((_, colIndex) => {
            
            const cell = board[rowIndex][colIndex];

            return (
              <div 
                key={`${rowIndex}-${colIndex}`} 
                className="plainButton"
                id={`${rowIndex}-${colIndex}`}
                onClick={() => handleCellClick(rowIndex, colIndex)}
                >
                  {cell.isOpen ? (
                    cell.isMine ? '❌' : (cell.neighborMines > 0 ? cell.neighborMines : '')) : ('')
                  }
              </div>
            );
          })
        ))}
      </div>
    </div>
  )
}

export default App
