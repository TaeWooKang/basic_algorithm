// 문제: https://programmers.co.kr/learn/courses/30/lessons/12939

function maximumAndMinimum (s) {
  let sorted = s.split(" ").sort((a, b) => a - b)
  return `${sorted[0]} ${sorted[sorted.length - 1]}`
}

const items = [
  "1 2 3 4", //=>	"1 4"
  "-1 -2 -3 -4", //=>	"-4 -1"
  "-1 -1", //=>	"-1 -1"


]

console.time("#1")
for (let item of items) {
  console.log(maximumAndMinimum(item));
}
console.timeEnd("#1")
