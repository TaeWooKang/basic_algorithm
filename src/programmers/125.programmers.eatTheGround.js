// 문제: https://programmers.co.kr/learn/courses/30/lessons/12913

function eatTheGround (land) {
  return Math.max(
    ...land.reduce((acc, cur) => {
      return [
        cur[0] += Math.max(acc[1], acc[2], acc[3]),
        cur[1] += Math.max(acc[0], acc[2], acc[3]),
        cur[2] += Math.max(acc[0], acc[1], acc[3]),
        cur[3] += Math.max(acc[0], acc[1], acc[2]),
      ]
    }, [0, 0, 0, 0])
  )
}

const items = [
  [[1, 2, 3, 5], [5, 6, 7, 8], [4, 3, 2, 1]] // =>	16


]

console.time("#1")
for (let item of items) {
  console.log(eatTheGround(item));
}
console.timeEnd("#1")
