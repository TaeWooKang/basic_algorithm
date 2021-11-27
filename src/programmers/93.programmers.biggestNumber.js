// 문제: https://programmers.co.kr/learn/courses/30/lessons/42746#

function biggestNumber (numbers) {
  const answer = numbers.map(number => String(number))
    .sort((a, b) => `${b}${a}` - `${a}${b}`)
    .join("")
  return answer[0] === "0" && "0" || answer
}

const items = [
  [6, 10, 2], // => "6210"
  [3, 30, 34, 5, 9], // => "9534330"
  [0, 0, 0, 0] // => "0"

]
console.time("#1")
for (let item of items) {
  console.log(biggestNumber(item)
  );
}
console.timeEnd("#1")
