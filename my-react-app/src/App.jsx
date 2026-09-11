import { useState } from 'react'
import { createEmptyBoard, generateBomb, revealCell, toggleFlag } from './gameLogic.js';
import './style.css'

function App() {
  const [count, setCount] = useState(0)

  const rows = 10
  const cols = 20

  const [board, setBoard] = useState(() => {
    const emptyBoard = createEmptyBoard(rows, cols);
    return generateBomb(emptyBoard);
  });

  const rightClick = (e, row, col) => {
    e.preventDefault();

    const updatedBoard = toggleFlag(board, row, col);
    setBoard(updatedBoard);
  }

  const handleCellClick = (row, col) => {
    if (board[row][col].isFlagged) return;

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
                onContextMenu={(e) => rightClick(e, rowIndex, colIndex)}
                >
                  {cell.isOpen ? (
                    cell.isMine ? '❌' : (cell.neighborMines > 0 ? cell.neighborMines : '')) : (cell.isFlagged ? '🚩' : '')
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
