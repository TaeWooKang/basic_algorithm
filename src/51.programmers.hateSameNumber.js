//문제: https://programmers.co.kr/learn/courses/30/lessons/12903

function hateSameNumber (arr) {
  return arr.filter((ar, index) => arr[index - 1] !== ar)
}

const items = [
  [1, 1, 3, 3, 0, 1, 1], // => [1, 3, 0, 1]
  [4, 4, 4, 3, 3] // => [4, 3]
]
console.time("#1")
for (let item of items) {
  console.log(hateSameNumber(item)
  );
}
console.timeEnd("#1")
