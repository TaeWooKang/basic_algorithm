//문제: https://im-developer.tistory.com/43?category=831367

function didIFinishMySudoku (numberList) {
  const length = numberList[0].length
  const tempHrizon = {}
  const tempVertical = {}

  for (let i = 0; i < length - 1; i++) {
    tempHrizon[i] = {}
    tempVertical[i] = {}
  }

  for (i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - 1; j++) {
      let tempNum = numberList[i][j]
      // 1. 가로
      if (tempHrizon[i][tempNum]) {
        return "Try Again"
      } else {
        tempHrizon[i][tempNum] = 1
      }
      // 2. 세로
      if (tempVertical[j][tempNum]) {
        return "Try Again"
      } else {
        tempVertical[j][tempNum] = 1
      }

      // 3. 중심 9칸
      if (i % 3 === 1 && j % 3 === 1) {
        const tempCenter = {}
        for (let k = -1; k < 2; k++) {
          for (let l = -1; l < 2; l++) {
            const tempSideNum = numberList[i + k][j + l]
            if (tempCenter[tempSideNum]) {
              return "Try Again"
            } else {
              tempCenter[tempSideNum] = 1
            }
          }
        }
      }
    }
  }
  return "Finished"
}

const items = [
  [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
  ], // => Finished
  [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 0, 3, 4, 9],
    [1, 0, 0, 3, 4, 2, 5, 6, 0],
    [8, 5, 9, 7, 6, 1, 0, 2, 0],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 0, 1, 5, 3, 7, 2, 1, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 0, 0, 4, 8, 1, 1, 7, 9]
  ], // => Try Again
]
console.time("#1")
for (let item of items) {
  console.log(didIFinishMySudoku(item)
  );
}
console.timeEnd("#1")
