//문제: https://programmers.co.kr/learn/courses/30/lessons/70128

function dotProductAddition (a, b) {
  return a.reduce((acc, cur, index) => acc + (cur * b[index]), 0);
}

const items = [
  [[1, 2, 3, 4], [-3, -1, 0, 2]], // => 3
  [[-1, 0, 1], [1, 0, -1]] // => -2
]
console.time("#1")
for (let item of items) {
  console.log(dotProductAddition(item[0], item[1])
  );
}
console.timeEnd("#1")
