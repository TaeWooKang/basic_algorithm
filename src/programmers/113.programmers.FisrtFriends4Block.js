// 문제: https://programmers.co.kr/learn/courses/30/lessons/17679
// 해답: https://velog.io/@sso/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-JavaScript-%ED%94%84%EB%A0%8C%EC%A6%884%EB%B8%94%EB%A1%9D

function FisrtFriends4Block (m, n, board) {
  const newBoard = []
  board = board.map(el => el.split(""));
  return removeBlock(m, n, board)
}

function removeBlock (m, n, board) {
  while (true) {
    let removeTarget = [];

    // 찾기
    for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
        if (board[i][j]
          && board[i][j] === board[i][j - 1]
          && board[i][j] === board[i - 1][j - 1]
          && board[i][j] === board[i - 1][j]) {
          removeTarget.push([i, j]);
        }
      }
    }

    if (!removeTarget.length) return [].concat(...board).filter(v => !v).length;

    // 부수기
    removeTarget.forEach(el => {
      board[el[0]][el[1]] = 0;
      board[el[0]][el[1] - 1] = 0;
      board[el[0] - 1][el[1] - 1] = 0;
      board[el[0] - 1][el[1]] = 0;
    });

    for (let i = m - 1; i > 0; i--) {
      if (!board[i].some(v => !v)) continue;

      for (let j = 0; j < n; j++) {
        for (let k = i - 1; k >= 0 && !board[i][j]; k--) {
          if (board[k][j]) {
            board[i][j] = board[k][j];
            board[k][j] = 0;
            break;
          }
        }
      }
    }
  }
}


const items = [
  [6, 6, ["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"]] // => 14

]

console.time("#1")
for (let item of items) {
  console.log(FisrtFriends4Block(item[0], item[1], item[2]));
}
console.timeEnd("#1")
