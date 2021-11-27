//문제: https://programmers.co.kr/learn/courses/18/lessons/1876

function solution (n) {
  return `${n}`.split("").reduce((acc, cur) => acc + Number(cur), 0)
}

const items = [
  0, // => 0
  123, // => 6
  345, // => 12
  6789 // => 30
]
console.time("#1")
for (let item of items) {
  console.log(solution(item)
  );
}
console.timeEnd("#1")
