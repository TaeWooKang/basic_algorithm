//문제: https://programmers.co.kr/learn/courses/30/lessons/12932

function flipNaturalNumbersToFormAnArray (n) {
  return `${n}`.split("").reduce((acc, cur) => acc + Number(cur), 0)
}


const items = [
  12345 //=> 	[5,4,3,2,1]

]
console.time("#1")
for (let item of items) {
  console.log(flipNaturalNumbersToFormAnArray(item)
  );
}
console.timeEnd("#1")
