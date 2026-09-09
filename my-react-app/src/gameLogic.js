export function createEmptyBoard(rows, cols) {
  return Array.from({ length: rows }, () => 
    Array.from({ length: cols }, () => ({ 
      isOpen: false, 
      isMine: false,
      neighborMines: 0
    }))
  );
}

export function revealCell(board, row, col) {
  const newBoard = board.map(r => [...r]);
  
  const randNum = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
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

    if (leftMiddle[0] >= 0 && leftMiddle[1] >= 0 && board[leftMiddle[0]][leftMiddle[1]].isMine === true) {
      quantityNum++;
    }
    if (leftUp[0] >= 0 && leftUp[1] >= 0 && board[leftUp[0]][leftUp[1]].isMine === true) {
      quantityNum++;
    }
    if (leftdown[0] >= 0 && leftdown[1] >= 0 && board[leftdown[0]][leftdown[1]].isMine === true) {
      quantityNum++;
    }
    if (middleUp[0] >= 0 && middleUp[1] >= 0 && board[middleUp[0]][middleUp[1]].isMine === true) {
      quantityNum++;
    }
    if (middleDown[0] >= 0 && middleDown[1] >= 0 && board[middleDown[0]][middleDown[1]].isMine === true) {
      quantityNum++;
    }
    if (rightUp[0] >= 0 && rightUp[1] >= 0 && board[rightUp[0]][rightUp[1]].isMine === true) {
      quantityNum++;
    }
    if (rightMiddle[0] >= 0 && rightMiddle[1] >= 0 && board[rightMiddle[0]][rightMiddle[1]].isMine === true) {
      quantityNum++;
    }
    if (rightDown[0] >= 0 && rightDown[1] >= 0 && board[rightDown[0]][rightDown[1]].isMine === true) {
      quantityNum++;
    }

    return quantityNum
  }

  if (newBoard[row][col].isOpen == false) {
     if (randNum == 1) {
      newBoard[row][col] = { ...newBoard[row][col], isMine: true };
    } 
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

  console.log(output, newBoard[row][col].isMine, randNum, count)

  return newBoard;
}
