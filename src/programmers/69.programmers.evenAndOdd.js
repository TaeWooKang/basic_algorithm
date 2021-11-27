//문제: https://programmers.co.kr/learn/courses/30/lessons/12937?language=javascript

function evenAndOdd (num) {
  return num % 2 === 0 ? "Even" : "Odd"
}


const items = [
  3, // =>	"Odd"
  4, // => "Even"


]
console.time("#1")
for (let item of items) {
  console.log(evenAndOdd(item)
  );
}
console.timeEnd("#1")
