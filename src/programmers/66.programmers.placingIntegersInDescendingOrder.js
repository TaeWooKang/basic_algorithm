//문제: https://programmers.co.kr/learn/courses/30/lessons/12933

function placingIntegersInDescendingOrder (n) {
  return Number(`${n}`.split("").sort((a, b) => b - a).join(""))
}


const items = [
  118372, // =>	873211

]
console.time("#1")
for (let item of items) {
  console.log(placingIntegersInDescendingOrder(item)
  );
}
console.timeEnd("#1")
