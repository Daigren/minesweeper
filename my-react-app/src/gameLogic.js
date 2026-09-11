export function createEmptyBoard(rows, cols) {
  return Array.from({ length: rows }, () => 
    Array.from({ length: cols }, () => ({ 
      isOpen: false, 
      isMine: false,
      neighborMines: 0,
      isFlagged: false
    }))
  );
}

export function toggleFlag(board, row, col) {
  const newBoard = board.map(r => [...r]);
  const cell = newBoard[row][col];

  if (!cell.isOpen) {
    newBoard[row][col] = {
      ...cell,
      isFlagged: !cell.isFlagged
    };
  }

  return newBoard;
}

export function generateBomb(board) {
  const bombBoard = board.map(r => [...r]);

  let testMine = 0

  let bombRow = 0
  let bombCol = 0

  for (let bombNum = 0; bombNum < 200; bombNum++) {
    const randNum = Math.floor(Math.random() * (6 - 1 + 1)) + 1;

    if (randNum == 1) {
      bombBoard[bombRow][bombCol] = { ...bombBoard[bombRow][bombCol], isMine: true };
      
    }
    
    if (bombBoard[bombRow][bombCol].isMine == true) {
      testMine++
    }

    bombCol++
    
    if (bombCol == 20) {
      bombRow++
      bombCol = 0
    } 
  }

  console.log(testMine)

  return bombBoard;
}

export function revealCell(board, row, col) {
  const newBoard = board.map(r => [...r]);
  
  const output = `${row}-${col}`;

  function quantity() {
    let quantityNum = 0
    
    const leftUp = [row + 1, col - 1]
    const leftMiddle = [row, col - 1] 
    const leftdown = [row - 1, col - 1]
    const middleUp = [row + 1, col]
    const middleDown = [row - 1, col]
    const rightUp = [row + 1, col + 1]
    const rightMiddle = [row, col + 1]
    const rightDown = [row - 1, col + 1]

    if (leftMiddle[0] <= 9 && leftMiddle[1] <= 19 && leftMiddle[0] >= 0 && leftMiddle[1] >= 0 && board[leftMiddle[0]][leftMiddle[1]].isMine === true) {
      quantityNum++;
    }
    if (leftUp[0] <= 9 && leftUp[1] <= 19 && leftUp[0] >= 0 && leftUp[1] >= 0 && board[leftUp[0]][leftUp[1]].isMine === true) {
      quantityNum++;
    }
    if (leftdown[0] <= 9 && leftdown[1] <= 19 && leftdown[0] >= 0 && leftdown[1] >= 0 && board[leftdown[0]][leftdown[1]].isMine === true) {
      quantityNum++;
    }
    if (middleUp[0] <= 9 && middleUp[1] <= 19 && middleUp[0] >= 0 && middleUp[1] >= 0 && board[middleUp[0]][middleUp[1]].isMine === true) {
      quantityNum++;
    }
    if (middleDown[0] <= 9 && middleDown[1] <= 19 && middleDown[0] >= 0 && middleDown[1] >= 0 && board[middleDown[0]][middleDown[1]].isMine === true) {
      quantityNum++;
    }
    if (rightUp[0] <= 9 && rightUp[1] <= 19 && rightUp[0] >= 0 && rightUp[1] >= 0 && board[rightUp[0]][rightUp[1]].isMine === true) {
      quantityNum++;
    }
    if (rightMiddle[0] <= 9 && rightMiddle[1] <= 19 && rightMiddle[0] >= 0 && rightMiddle[1] >= 0 && board[rightMiddle[0]][rightMiddle[1]].isMine === true) {
      quantityNum++;
    }
    if (rightDown[0] <= 9 && rightDown[1] <= 19 && rightDown[0] >= 0 && rightDown[1] >= 0 && board[rightDown[0]][rightDown[1]].isMine === true) {
      quantityNum++;
    }

    return quantityNum
  }

  let count = 0

  if (newBoard[row][col].isMine == false) {
    count = quantity()
  } else {
    console.log('the mine')
  }
 
  newBoard[row][col] = { 
    ...newBoard[row][col], 
    isOpen: true,
    neighborMines: count 
  };

  console.log(output, newBoard[row][col].isMine, count)

  return newBoard;
}
