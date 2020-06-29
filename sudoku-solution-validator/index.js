const isLineValid = (array) => {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let element of array) {
    numbers = numbers.filter(nb => nb !== element);
  }
  return numbers.length === 0;
}

const checkSquares = (lineA, lineB, lineC) => {
  let squares = [];
  let startIndex = 0;
  for (let k = 0; k < 3; k++) {
    let square = [];
    for (let i = startIndex; i <= startIndex + 2; i++) {
      square.push(lineA[i]);
      square.push(lineB[i]);
      square.push(lineC[i]);
    }
    squares.push(square)
    startIndex += 3
  }
  const areSquaresValid = isLineValid(squares[0]) && isLineValid(squares[1]) && isLineValid(squares[2]);

  return areSquaresValid;
}

const areColumnsValid = (board) => {
  for (let i = 0; i < board.length; i++) {
    let column = []
    for (let j = 0; j < board.length; j++) {
      column.push(board[j][i])
    }
    if (!isLineValid(column)) return false;
  }
  return true
}

const validSolution = (board) => {
  if (board.length !== 9) return false;
  for (let element of board) {
    const isValid = isLineValid(element);
    if (element.length !== 9 || !isValid) return false;
  }
  if (!areColumnsValid(board)) return false;
  const areSquaresValid = checkSquares(board[0], board[1], board[2]) && checkSquares(board[3], board[4], board[5]) && checkSquares(board[6], board[7], board[8]);

  return areSquaresValid;
}

module.exports = { validSolution };