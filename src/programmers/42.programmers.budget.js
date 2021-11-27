//문제: https://programmers.co.kr/learn/courses/30/lessons/12982

function budget (d, budget) {
  return d.sort((a, b) => a - b).reduce((acc, cur) => {
    if (budget >= cur) {
      budget -= cur
      acc++
    }
    return acc
  }, 0)
}

const items = [
  [[1, 3, 2, 5, 4], 9], // => 3
  [[2, 2, 3, 3], 10], // => 4
]
console.time("#1")
for (let item of items) {
  console.log(budget(item[0], item[1])
  );
}
console.timeEnd("#1")
