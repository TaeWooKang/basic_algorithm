// 문제: https://programmers.co.kr/learn/courses/30/lessons/12913

function eatTheGround (land) {
  for (let i = 0; i < land.length - 1; i++) {
    for (let j = 0; j < 4; j++) {
      let tempMax = land[i].reduce((acc, cur, index) => {
        if (index !== j) {
          acc = acc > cur ? acc : cur
        }
        return acc
      }, 0)
      land[i + 1][j] += tempMax
    }
  }
  return Math.max(...land[land.length - 1])
}

const items = [
  [[1, 2, 3, 5], [5, 6, 7, 8], [4, 3, 2, 1]] // =>	16


]

console.time("#1")
for (let item of items) {
  console.log(eatTheGround(item));
}
console.timeEnd("#1")
