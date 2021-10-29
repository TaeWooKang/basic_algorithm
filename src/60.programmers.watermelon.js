//문제: https://programmers.co.kr/learn/courses/30/lessons/12922

function watermelon (n) {
  return "수박".repeat(parseInt(n / 2) + n % 2).slice(0, n)
}


const items = [
  3, // =>	"수박수"
  4, // =>	"수박수박"

]
console.time("#1")
for (let item of items) {
  console.log(watermelon(item)
  );
}
console.timeEnd("#1")
