// 문제: https://programmers.co.kr/learn/courses/30/lessons/76502

function rotateParenthesesHelp (s) {
  let answer = 0
  s = s.split("")
  for (let i = 0; i < s.length; i++) {
    s = [...s.slice(1), s[0]]
    if (check(s)) {
      answer++
    }
  }
  return answer;
}

function check (s) {
  const stringObject = { "}": "{", "]": "[", ")": "(" }
  const stack = []
  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    if (!stringObject[char]) {
      stack.push(char)
    } else {
      if (stringObject[char] !== stack.pop()) {
        return false
      }
    }
  }
  return stack.length === 0
}

const items = [
  "[](){}", // => 3
  "}]()[{", // => 2
  "[)(]", // => 0
  "}}}", // => 0

]

console.time("#1")
for (let item of items) {
  console.log(rotateParenthesesHelp(item)
  );
}
console.timeEnd("#1")
