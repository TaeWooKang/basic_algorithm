//문제: https://programmers.co.kr/learn/courses/30/lessons/12917

function placingStringsInDescendingOrder (s) {
  return s.split("").sort().reverse().join("");
}


const items = [
  "Zbcdefg", // =>	"gfedcbZ"
]
console.time("#1")
for (let item of items) {
  console.log(placingStringsInDescendingOrder(item)
  );
}
console.timeEnd("#1")
