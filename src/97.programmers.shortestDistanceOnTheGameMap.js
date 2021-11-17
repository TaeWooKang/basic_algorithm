// 문제: https://programmers.co.kr/learn/courses/30/lessons/42860
// 해답: https://1coding.tistory.com/171

function shortestDistanceOnTheGameMap (maps) {
  // 동, 서, 남, 북
  const dy = [1, 0, -1, 0]
  const dx = [0, 1, 0, -1]
  const maxRow = maps.length
  const maxCol = maps[0].length

  const visitCount = [...maps].map((row) => row.map((col) => 1))

  const queue = [[0, 0]] // 시작지점

  while (queue.length) {
    const [currentY, currentX] = queue.shift()

    for (let i = 0; i < dy.length; i++) {
      const tempY = currentY + dy[i]
      const tempX = currentX + dx[i]

      if (tempY >= 0 && tempX >= 0 && tempY < maxRow && tempX < maxCol) {
        if (maps[tempY][tempX] === 1 && visitCount[tempY][tempX] === 1) {
          visitCount[tempY][tempX] = visitCount[currentY][currentX] + 1
          queue.push([tempY, tempX])
        }
      }
    }
  }

  return visitCount[maxRow - 1][maxCol - 1] === 1 && -1 || visitCount[maxRow - 1][maxCol - 1]
}

const items = [
  [[1, 0, 1, 1, 1], [1, 0, 1, 0, 1], [1, 0, 1, 1, 1], [1, 1, 1, 0, 1], [0, 0, 0, 0, 1]], // =>	11
  [[1, 0, 1, 1, 1], [1, 0, 1, 0, 1], [1, 0, 1, 1, 1], [1, 1, 1, 0, 0], [0, 0, 0, 0, 1]], // =>	-1
  [[1, 0, 1, 1, 1], [1, 1, 1, 0, 1]], // =>	8

]
console.time("#1")
for (let item of items) {
  console.log(shortestDistanceOnTheGameMap(item)
  );
}
console.timeEnd("#1")
