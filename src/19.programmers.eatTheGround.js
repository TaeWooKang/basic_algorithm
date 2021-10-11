// 문제: https://programmers.co.kr/learn/courses/18/lessons/1880

function solution (land) {
  for (let i = 1; i < land.length; i++) {
    for (let j = 0; j < 4; j++) {
      const tempMax = land[i - 1].reduce((acc, cur, curIndex) =>
        j !== curIndex ? Math.max(acc, cur) : acc, 0)
      land[i][j] = tempMax + land[i][j]
    }
  }
  return Math.max(...land[land.length - 1])
}

const items = [
  [[1, 2, 3, 5], [5, 6, 7, 8], [4, 3, 2, 1]] // => 16
]
console.time("#1")
for (let item of items) {
  console.log(solution(item)
  );
}
console.timeEnd("#1")
