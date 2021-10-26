//문제: https://programmers.co.kr/learn/courses/30/lessons/86491

function EightWeeksMinimumRectangle (sizes) {
  const minimumSize = sizes.reduce((acc, cur) => {
    if (cur[0] > cur[1]) {
      cur.reverse()
    }
    acc[0] = Math.max(acc[0], cur[0])
    acc[1] = Math.max(acc[1], cur[1])
    return acc
  }, [0, 0])
  return minimumSize[0] * minimumSize[1]
}

const items = [
  [[60, 50], [30, 70], [60, 30], [80, 40]], // => 4000
  [[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]], // => 120
  [[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]], // => 133
]
console.time("#1")
for (let item of items) {
  console.log(EightWeeksMinimumRectangle(item)
  );
}
console.timeEnd("#1")
