//문제: 

function fibonacciSequence (num, currentTotal = 0) {
  if (num <= 0) {
    return currentTotal
  } else {
    let tempCurrentTotal = num + currentTotal
    return fibonacciSequence(--num, tempCurrentTotal)
  }
}

const items = [
  1, // => 1
  2, // => 3
  3, // => 6
  4, // => 10
]
console.time("#1")
for (let item of items) {
  console.log(fibonacciSequence(item)
  );
}
console.timeEnd("#1")
