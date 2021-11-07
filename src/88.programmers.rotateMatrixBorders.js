// 문제: https://programmers.co.kr/learn/courses/30/lessons/77485

function rotateMatrixBorders (rows, columns, queries) {
  let tempArray = initArray(rows, columns)
  const answer = [];
  for (let query of queries) {
    const rotaionResult = rotation(tempArray, query)
    tempArray = rotaionResult.array
    answer.push(rotaionResult.result)
  }
  return answer;
}

function initArray (rows, columns) {
  const result = []
  let temp = 0
  for (let i = 0; i < rows; i++) {
    result[i] = []
    for (let j = 0; j < columns; j++) {
      temp++
      result[i].push(temp)
    }
  }
  return result
}

function rotation (array, query) {
  const result = []

  query = query.map((q) => q - 1)
  const target1Y = query[0]
  const target1X = query[1]
  const target2Y = query[2]
  const target2X = query[3]

  let tryCount = 0
  result.push(array[target1Y][target1X])

  // x 이동
  for (let x = target1X + 1; x <= target2X; x++) {
    tryCount++
    result.push(array[target1Y][x])
    array[target1Y][x] = result[tryCount - 1]
  }
  // y 이동
  for (let y = target1Y + 1; y <= target2Y; y++) {
    tryCount++
    result.push(array[y][target2X])
    array[y][target2X] = result[tryCount - 1]
  }
  // x 이동
  for (let x = target2X - 1; x >= target1X; x--) {
    tryCount++
    result.push(array[target2Y][x])
    array[target2Y][x] = result[tryCount - 1]
  }
  // y 이동
  for (let y = target2Y - 1; y >= target1Y; y--) {
    tryCount++
    result.push(array[y][target1X])
    array[y][target1X] = result[tryCount - 1]
  }
  return { array, result: result.sort((a, b) => a - b)[0] }
}

const items = [
  [6, 6, [[2, 2, 5, 4], [3, 3, 6, 6], [5, 1, 6, 3]]], // =>	[8, 10, 25]
  [3, 3, [[1, 1, 2, 2], [1, 2, 2, 3], [2, 1, 3, 2], [2, 2, 3, 3]]], // =>	[1, 1, 5, 3]
  [100, 97, [[1, 1, 100, 97]]] // => [1]

]
console.time("#1")
for (let item of items) {
  console.log(rotateMatrixBorders(item[0], item[1], item[2])
  );
}
console.timeEnd("#1")
