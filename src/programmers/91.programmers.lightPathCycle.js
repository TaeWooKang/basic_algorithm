// 문제: https://programmers.co.kr/learn/courses/30/lessons/86052
// 해답: https://velog.io/@seungdeng17/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EB%B9%9B%EC%9D%98-%EA%B2%BD%EB%A1%9C-%EC%82%AC%EC%9D%B4%ED%81%B4-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8

function lightPathCycle (grid) {
  const answer = [];

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  const ch = Array.from({ length: grid.length }, () => []).map((c) => {
    for (let i = 0; i < grid[0].length; i++) c.push([0, 0, 0, 0]);
    return c;
  });

  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[0].length; y++) {
      for (let d = 0; d < dx.length; d++) {
        if (ch[x][y][d]) continue;
        const cnt = checker(x, y, d);
        if (cnt) answer.push(cnt);
      }
    }
  }

  function checker (x, y, d) {
    let cnt = 0;
    while (true) {
      if (ch[x][y][d]) break;
      ch[x][y][d] = 1;
      cnt++;

      x = x + dx[d];
      y = y + dy[d];
      if (x < 0) x = grid.length - 1;
      if (x >= grid.length) x = 0;
      if (y < 0) y = grid[0].length - 1;
      if (y >= grid[0].length) y = 0;
      d = getNextDir(grid[x][y], d);
    }
    return cnt;
  }

  return answer.sort((a, b) => a - b);
}

function getNextDir (block, dir) {
  if (block === "S") return dir;
  if (block === "L") return [2, 3, 1, 0][dir];
  if (block === "R") return [3, 2, 0, 1][dir];
}

const items = [
  ["SL", "LR"], // =>	[16]
  ["S"], // =>	[1,1,1,1]
  ["R", "R"], // =>	[4,4]

]
console.time("#1")
for (let item of items) {
  console.log(lightPathCycle(item)
  );
}
console.timeEnd("#1")
