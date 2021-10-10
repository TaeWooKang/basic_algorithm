//문제: https://programmers.co.kr/learn/courses/18/lessons/1879

function solution (board) {
  return calculrate(board)
}

function calculrate (board) {
  let sizeX = board[0].length
  let sizeY = board.length
  let tempBoard = board
  let max = 0
  if (sizeX < 2 || sizeY < 2) {
    for (let i = 0; i < sizeY; i++) {
      for (let j = 0; j < sizeX; j++) {
        if (tempBoard[i][j] === 1) {
          max = 1
        }
      }
    }
  } else {
    for (let i = 1; i < sizeY; i++) {
      for (let j = 1; j < sizeX; j++) {
        if (tempBoard[i][j] === 1) {
          tempBoard[i][j] = Math.min(tempBoard[i - 1][j], tempBoard[i][j - 1], tempBoard[i - 1][j - 1]) + 1;
          if (tempBoard[i][j] > max) {
            max = board[i][j];
          }
        }
      }
    }
  }
  return max * max
}

const items = [
  [[0, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [0, 0, 1, 0]], // =>	9
  [[0, 0, 1, 1], [1, 1, 1, 1]] // =>	4
]
console.time("#1")
for (let item of items) {
  console.log(solution(item)
  );
}
console.timeEnd("#1")
