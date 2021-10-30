//문제: https://programmers.co.kr/learn/courses/30/lessons/12947

function hashadNumber (x) {
  return x % `${x}`.split("").reduce((acc, cur) => Number(acc) + Number(cur), 0) === 0;
}


const items = [
  10, // => true
  12, // => true
  11, // => false
  13, // => false

]
console.time("#1")
for (let item of items) {
  console.log(hashadNumber(item)
  );
}
console.timeEnd("#1")
