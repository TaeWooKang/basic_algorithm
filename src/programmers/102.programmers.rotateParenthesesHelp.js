// 문제: https://programmers.co.kr/learn/courses/30/lessons/76502

function rotateParenthesesHelp (s) {
  let answer = 0
  let tryCount = 0
  s = s.split("")

  while (tryCount < s.length) {
    tryCount++

    s.push(s.shift())
    if (check(s)) {
      answer++
    }
  }

  return answer;
}

function check (s) {
  const stringObject = { "}": "{", "]": "[", ")": "(" }
  const stack = []
  let tryCount = 0
  while (tryCount < s.length) {
    tryCount++

    const char = s[tryCount - 1]
    if (!stringObject[char]) {
      stack.push(char)
      continue
    }

    if (stringObject[char] !== stack.pop()) {
      return false
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
