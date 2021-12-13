// 문제: https://programmers.co.kr/learn/courses/30/lessons/12909

function correctParenthesis (s) {
  const stack = []

  if (s[0] !== "(" || s[s.length - 1] !== ")") {
    return false
  }

  for (const char of s) {
    if (char === "(") {
      stack.push(char)
    } else if (!stack.pop()) {
      return false
    }
  }

  return stack.length === 0;
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
