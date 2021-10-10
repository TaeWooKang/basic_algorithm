//문제: https://programmers.co.kr/learn/courses/18/lessons/1876

function solution (n) {
  if (n < 10) {
    return n
  }
  return (n + "").split("").reduce((acc, cur) => +acc + +cur)
}

const items = [
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
