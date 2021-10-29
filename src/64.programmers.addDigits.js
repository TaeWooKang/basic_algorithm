//문제: https://programmers.co.kr/learn/courses/30/lessons/12931

function addDigits (n) {
  return `${n}`.split("").reduce((acc, cur) => acc + Number(cur), 0)
}


const items = [
  123, // =>	6
  987, // =>	24

]
console.time("#1")
for (let item of items) {
  console.log(addDigits(item)
  );
}
console.timeEnd("#1")
