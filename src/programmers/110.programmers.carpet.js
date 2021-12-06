// 문제: https://programmers.co.kr/learn/courses/30/lessons/42842

function carpet (brown, yellow) {
  let answer = [];
  const max = brown + yellow
  for (let left = 1; left < max; left++) {
    const right = max / left
    if ((left - 2) * (right - 2) === yellow) {
      answer.push(right)
      answer.push(left)
      break;
    }
  }
  return answer;
}


const items = [
  [10, 2], // => [4, 3]
  [8, 1], // =>	[3, 3]
  [24, 24] // => [8, 6]

]

console.time("#1")
for (let item of items) {
  console.log(carpet(item[0], item[1])
  );
}
console.timeEnd("#1")
