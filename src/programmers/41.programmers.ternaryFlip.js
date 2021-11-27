//문제: https://programmers.co.kr/learn/courses/30/lessons/68935

function ternaryFlip (n) {
  return n.toString(3).split("").reverse().reduce((acc, cur, index, array) => {
    acc += (Number(cur) * Math.max(Math.pow(3, array.length - index - 1), 1))
    return acc
  }, 0)
}

const items = [
  45, // => 	7
  125 // => 	229

]
console.time("#1")
for (let item of items) {
  console.log(ternaryFlip(item)
  );
}
console.timeEnd("#1")
