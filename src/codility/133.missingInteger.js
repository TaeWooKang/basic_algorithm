// 문제: https://app.codility.com/c/run/trainingFUVJWJ-P2F/

function missingInteger (A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let result = 1
  A = [...new Set(A)]
  A = A.filter((el) => el > 0)
  A = A.sort((a, b) => a - b)
  if (A.length > 0) {
    while (result <= A.length + 1) {
      if (result !== A[result - 1]) {
        break;
      }
      result++
    }
  }
  return result
}

const items = [
  [1, 3, 6, 4, 1, 2], // => 5
  [1, 2, 3], // => 4
  [-1, -3] // => 1

]


console.time("#1")
for (let item of items) {
  console.log(missingInteger(item));
}
console.timeEnd("#1")