// 문제: https://programmers.co.kr/learn/courses/30/lessons/12909

function correctParenthesis (s) {
  let answer = 0

  for (const char of s) {
    answer += char === "(" ? 1 : -1
    if (answer === -1) {
      return false
    }
  }

  return answer === 0;
}

const items = [
  "()()", // =>	true
  "(())()", // =>	true
  ")()(", // =>	false
  "(()(", // =>	false

]

console.time("#1")
for (let item of items) {
  console.log(correctParenthesis(item));
}
console.timeEnd("#1")
