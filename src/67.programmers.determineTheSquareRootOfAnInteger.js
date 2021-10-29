//문제: https://programmers.co.kr/learn/courses/30/lessons/12934

function determineTheSquareRootOfAnInteger (n) {
  let answer = 1;
  let isTrue = false

  for (let i = 2; i <= parseInt(n / 2); i++) {
    if (i * i === n) {
      isTrue = true
      answer = i
      break;
    }
  }
  if (n === 1) {
    return 4
  }
  return isTrue && (answer + 1) * (answer + 1) || -1;
}

//using math module
// function determineTheSquareRootOfAnInteger (n) {
// let answer = Math.sqrt(n)
//     return answer % 1 === 0 ? Math.pow(parseInt(answer+1), 2) : -1
// }

const items = [
  121, // => 144
  3, // => -1
  1, // => 4

]
console.time("#1")
for (let item of items) {
  console.log(determineTheSquareRootOfAnInteger(item)
  );
}
console.timeEnd("#1")
