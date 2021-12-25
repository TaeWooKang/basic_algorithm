// 문제: https://programmers.co.kr/learn/courses/30/lessons/84512

function gather (word) {
  return word.split("").reduce((acc, char, index) => acc + [781, 156, 31, 6, 1][index] * ("AEIOU".indexOf(char)) + 1, 0)
}

const items = [
  "AAAAE", // =>	6
  "AAAE", // => 10
  "I", // => 1563
  "EIO", // => 1189

]

console.time("#1")
for (let item of items) {
  console.log(gather(item));
}
console.timeEnd("#1")
