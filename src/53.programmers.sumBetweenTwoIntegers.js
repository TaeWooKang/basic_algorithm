//문제: https://programmers.co.kr/learn/courses/30/lessons/12912

function sumBetweenTwoIntegers (a, b) {
  let answer = 0
  let max = Number(Math.max(a, b))
  let min = Number(Math.min(a, b))
  for (let num = min; num <= max; num++) {
    answer += num
  }
  return answer
}


const items = [
  [3, 5], // =>	12
  [3, 3], // =>	3
  [5, 3], // =>	12

]
console.time("#1")
for (let item of items) {
  console.log(sumBetweenTwoIntegers(item[0], item[1])
  );
}
console.timeEnd("#1")
