//문제: https://programmers.co.kr/learn/courses/18/lessons/1878

function solution (v) {
  return v.reduce((acc, cur) => [acc[0] ^ cur[0], acc[1] ^ cur[1]])
}

const items = [
  [[1, 4], [3, 4], [3, 10]], // =>	[1, 10]
  [[1, 1], [2, 2], [1, 2]] // => [2, 1]
]
console.time("#1")
for (let item of items) {
  console.log(solution(item)
  );
}
console.timeEnd("#1")
