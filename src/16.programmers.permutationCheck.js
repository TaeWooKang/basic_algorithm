//문제: https://programmers.co.kr/learn/courses/18/lessons/1877
function solution (arr) {
  let answer = true

  arr.sort((a, b) => a - b)
  for (let i = 0; i < arr.length; i++) {
    if ((i + 1) !== arr[i]) {
      answer = false
      break
    }
  }

  return answer
}

const items = [
  [4, 1, 3, 2], // =>	true
  [4, 1, 3] // =>	false
]
console.time("#1")
for (let item of items) {
  console.log(solution(item)
  );
}
console.timeEnd("#1")
