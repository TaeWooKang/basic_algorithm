//문제: https://programmers.co.kr/learn/courses/30/lessons/12954

function rectangularStar (a, b) {
  for (let i = 0; i < b; i++) {
    console.log("*".repeat(a))
  }
}


const items = [
  [5, 3]
  // =>
  // *****
  // *****
  // *****
]
console.time("#1")
for (let item of items) {
  console.log(rectangularStar(item[0], item[1])
  );
}
console.timeEnd("#1")
