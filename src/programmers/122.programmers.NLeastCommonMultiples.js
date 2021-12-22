// 문제: https://programmers.co.kr/learn/courses/30/lessons/12953

function NLeastCommonMultiples (arr) {
  let answer = Math.max(...arr);

  for (const num of arr) {
    if (answer % num !== 0) {
      for (let i = 1; i <= num; i++) {
        if (answer * i % num === 0) {
          answer = answer * i
          break;
        }
      }
    }
  }
  return answer;
}

const items = [
  [2, 6, 8, 14], // =>	168
  [1, 2, 3] // =>	6

]

console.time("#1")
for (let item of items) {
  console.log(NLeastCommonMultiples(item));
}
console.timeEnd("#1")
