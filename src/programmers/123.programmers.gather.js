// 문제: https://programmers.co.kr/learn/courses/30/lessons/84512

function gather (word) {
  let answer = 0;
  let numList = { "A": 0, "E": 1, "I": 2, "O": 3, "U": 4 }
  let startNum = [781, 156, 31, 6, 1]
  for (let i = 0; i < word.length; i++) {
    answer += startNum[i] * numList[word[i]] + 1
  }

  return answer;
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
