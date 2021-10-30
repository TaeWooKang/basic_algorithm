//문제: https://programmers.co.kr/learn/courses/30/lessons/12944

function average (arr) {
  return arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
}


const items = [
  [1, 2, 3, 4], // =>	2.5
  [5, 5], // =>	5

]
console.time("#1")
for (let item of items) {
  console.log(average(item)
  );
}
console.timeEnd("#1")
