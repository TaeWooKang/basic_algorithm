//문제: https://programmers.co.kr/learn/courses/30/lessons/12954

function nNumbersSpacedByX (x, n) {
  const answer = []
  for (let i = 0; i < n; i++) {
    answer.push(x * (i + 1))
  }
  return answer;
}


const items = [
  [2, 5], // => [2,4,6,8,10]
  [4, 3], // => [4,8,12]
  [-4, 2], // => [-4, -8]

]
console.time("#1")
for (let item of items) {
  console.log(nNumbersSpacedByX(item[0], item[1])
  );
}
console.timeEnd("#1")
