// 문제: https://programmers.co.kr/learn/courses/30/lessons/12985

function expectedDraw (n, a, b) {
  let answer = 0;
  while (a !== b) {
    answer++
    a = Math.ceil(a / 2)
    b = Math.ceil(b / 2)
  }
  return answer;
}

const items = [
  [8, 4, 7] // =>	3

]
console.time("#1")
for (let item of items) {
  console.log(expectedDraw(item[0], item[1], item[2])
  );
}
console.timeEnd("#1")
