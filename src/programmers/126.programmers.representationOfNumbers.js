// 문제: https://programmers.co.kr/learn/courses/30/lessons/12924

function representationOfNumbers (n) {
  let answer = 1;
  let stop = false
  for (let i = Math.ceil(n / 2); i > 0; i--) {
    if (stop) break;
    let temp = 0
    for (let j = i; j > 0; j--) {
      temp += j
      if (temp === n) {
        answer++
      } else if (temp > n) {
        break;
      } else if (j - 1 === 0) {
        stop = true
      }
    }
  }
  return answer
}

const items = [
  15 // =>	4

]

console.time("#1")
for (let item of items) {
  console.log(representationOfNumbers(item));
}
console.timeEnd("#1")
