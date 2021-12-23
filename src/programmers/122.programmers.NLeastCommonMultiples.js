// 문제: https://programmers.co.kr/learn/courses/30/lessons/12953

function NLeastCommonMultiples (arr) {
  let answer = Math.max(...arr)

  for (const num of arr) {
    answer = answer * num / gcd(answer, num)
  }

  return answer
}

function gcd (a, b) {
  return a % b ? gcd(b, a % b) : b
}

const items = [
  [2, 6, 8, 14], // =>	168
  [1, 2, 3] // =>	6

]

console.time("#1")
for (let item of items) {
  console.log(NLeastCommonMultiples(item));
}
console.timeEnd("#1")
