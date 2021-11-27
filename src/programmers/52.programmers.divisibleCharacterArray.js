//문제: https://programmers.co.kr/learn/courses/30/lessons/12906

function divisibleCharacterArray (arr, divisor) {
  const answer = arr.sort((a, b) => a - b).filter((val) => (val % divisor) === 0)
  return answer[0] && answer || [-1];
}

const items = [
  [[5, 9, 7, 10], 5], // =>	[5, 10]
  [[2, 36, 1, 3], 1], // =>	[1, 2, 3, 36]
  [[3, 2, 6], 10], // =>	[-1]

]
console.time("#1")
for (let item of items) {
  console.log(divisibleCharacterArray(item[0], item[1])
  );
}
console.timeEnd("#1")
