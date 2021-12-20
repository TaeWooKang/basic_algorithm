// 문제: https://programmers.co.kr/learn/courses/30/lessons/12905

function largestSquare (board) {
  let yLength = board.length
  let xLength = board[0].length
  let max = 0
  for (let i = 0; i < Math.min(yLength, 2); i++) {
    for (let j = 0; j < Math.min(xLength, 2); j++) {
      max = Math.max(max, board[i][j])
    }
  }
  for (let i = 1; i < yLength; i++) {
    for (let j = 1; j < xLength; j++) {
      const current = board[i][j]
      let temp = current
      let NE = board[i - 1][j - 1]
      let E = board[i][j - 1]
      let N = board[i - 1][j]
      if (temp && NE && E && N) {
        temp = Math.min(NE, E, N) + 1
      }
      board[i][j] = temp
      max = Math.max(max, temp)
    }
  }

  return max ** 2;
}

const items = [
  [[0, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [0, 0, 1, 0]], // =>	9
  [[0, 0, 1, 1], [1, 1, 1, 1]], // =>	4


]

console.time("#1")
for (let item of items) {
  console.log(largestSquare(item));
}
console.timeEnd("#1")
